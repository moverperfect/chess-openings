/**
 * Builds src/data/explorer.json: what club players play from each common position, and the opening
 * name of every position (from lichess-org/chess-openings, CC0, downloaded on first run).
 *
 *   npm run build-explorer               # needs LICHESS_TOKEN in .env.local
 *   MIN_REACH=0.005 npm run build-explorer
 *
 * A position is expanded when at least MIN_REACH of club games reach it (default 1%), or when
 * it's in one of the repertoires. Lichess answers are cached in scripts/.cache.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Chess } from 'chess.js';
import { ALL_REPERTOIRES } from '../src/data';
import { buildRepertoire, positionKey } from '../src/lib/repertoire';
import { explore, total, type ExplorerResult } from './explorer';

const MIN_REACH = Number(process.env.MIN_REACH ?? 0.01);
/** Moves played less often than this are left out, unless a repertoire plays them. */
const MIN_SHARE = 0.02;
const MAX_MOVES = 8;
const MAX_PLY = 20;
const OUT = 'src/data/explorer.json';

for (const line of existsSync('.env.local') ? readFileSync('.env.local', 'utf8').split('\n') : []) {
  const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
}
const TOKEN = process.env.LICHESS_TOKEN;
if (!TOKEN) throw new Error('Put LICHESS_TOKEN in .env.local');

// ───────── cache (shares the verify cache's Lichess answers)
const CACHE_DIR = 'scripts/.cache';
const CACHE_FILE = join(CACHE_DIR, 'explorer-tree.json');
const VERIFY_CACHE = join(CACHE_DIR, 'verify.json');
const cache: Record<string, ExplorerResult> = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : {};
const verifyCache: Record<string, ExplorerResult> = existsSync(VERIFY_CACHE)
  ? JSON.parse(readFileSync(VERIFY_CACHE, 'utf8')).explorer
  : {};
let calls = 0;
async function club(fen: string): Promise<ExplorerResult> {
  const k = `lichess|${positionKey(fen)}`;
  const hit = cache[k] ?? verifyCache[k];
  if (hit) return hit;
  cache[k] = await explore('lichess', fen, TOKEN!);
  calls++;
  if (calls % 10 === 0) {
    mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify(cache));
    console.log(`  ${calls} Lichess calls so far`);
  }
  await new Promise((r) => setTimeout(r, 600));
  return cache[k];
}

// ───────── opening names
const names = new Map<string, { eco: string; name: string }>();
for (const f of ['a', 'b', 'c', 'd', 'e']) {
  const file = join(CACHE_DIR, 'openings', `${f}.tsv`);
  if (!existsSync(file)) {
    const res = await fetch(`https://raw.githubusercontent.com/lichess-org/chess-openings/master/${f}.tsv`);
    if (!res.ok) throw new Error(`Couldn't download ${f}.tsv from lichess-org/chess-openings: ${res.status}`);
    mkdirSync(join(CACHE_DIR, 'openings'), { recursive: true });
    writeFileSync(file, await res.text());
  }
  for (const row of readFileSync(file, 'utf8').split('\n').slice(1)) {
    const [eco, name, pgn] = row.split('\t');
    if (!pgn) continue;
    const chess = new Chess();
    for (const tok of pgn.split(/\s+/)) if (!/^\d+\.$/.test(tok)) chess.move(tok);
    // The longest (most specific) PGN for a position wins, as in the Lichess UI.
    const key = positionKey(chess.fen());
    if (!names.has(key)) names.set(key, { eco, name });
  }
}

// ───────── repertoire moves that must be shown
const repMoves = new Map<string, Set<string>>();
for (const rep of ALL_REPERTOIRES.map(buildRepertoire)) {
  for (const [key, edges] of rep.edgesByKey) {
    const set = repMoves.get(key) ?? new Set();
    for (const e of edges) set.add(e.san);
    repMoves.set(key, set);
  }
}

// ───────── walk
export interface TreeMove {
  san: string;
  uci: string;
  /** Share of club games from this position that played it (0–1). */
  share: number;
  white: number;
  draws: number;
  black: number;
}
interface TreeNode {
  games: number;
  moves: TreeMove[];
}
const nodes: Record<string, TreeNode> = {};
const reached = new Set<string>();

async function visit(fen: string, reach: number, ply: number) {
  const key = positionKey(fen);
  const mustExpand = repMoves.has(key);
  if (nodes[key] || (!mustExpand && (reach < MIN_REACH || ply >= MAX_PLY))) return;
  const r = await club(fen);
  const games = total(r);
  const must = repMoves.get(key) ?? new Set();
  const moves: TreeMove[] = r.moves
    .map((m) => ({ san: m.san, uci: m.uci, share: games ? total(m) / games : 0, white: m.white, draws: m.draws, black: m.black }))
    .filter((m, i) => must.has(m.san) || (m.share >= MIN_SHARE && i < MAX_MOVES));
  for (const san of must) {
    if (!moves.some((m) => m.san === san)) {
      const mv = new Chess(fen).move(san);
      moves.push({ san, uci: mv.from + mv.to + (mv.promotion ?? ''), share: 0, white: 0, draws: 0, black: 0 });
    }
  }
  nodes[key] = { games, moves };
  for (const m of moves) {
    const chess = new Chess(fen);
    chess.move(m.san);
    reached.add(positionKey(chess.fen()));
    await visit(chess.fen(), reach * m.share, ply + 1);
  }
}

await visit(new Chess().fen(), 1, 0);
mkdirSync(CACHE_DIR, { recursive: true });
writeFileSync(CACHE_FILE, JSON.stringify(cache));

const namesOut: Record<string, { eco: string; name: string }> = {};
for (const key of new Set([...Object.keys(nodes), ...reached])) {
  const n = names.get(key);
  if (n) namesOut[key] = n;
}
writeFileSync(OUT, JSON.stringify({ minReach: MIN_REACH, nodes, names: namesOut }));
console.log(
  `${Object.keys(nodes).length} positions, ${Object.keys(namesOut).length} named, ${calls} new Lichess calls → ${OUT}`,
);
