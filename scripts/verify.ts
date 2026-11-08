/**
 * Checks every move in the repertoires against Stockfish and the Lichess opening explorer,
 * and writes docs/verification-report.md.
 *
 *   npm run verify                 # Stockfish + Lichess (needs LICHESS_TOKEN in .env.local)
 *   npm run verify -- --depth 26   # deeper search
 *
 * Results are cached in scripts/.cache so re-runs only analyse new or changed positions.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { Chess } from 'chess.js';
import { ALL_REPERTOIRES } from '../src/data';
import { buildRepertoire, formatMove, positionKey, type BuiltRepertoire, type Edge } from '../src/lib/repertoire';
import { Engine, type EngineLine } from './engine';
import { explore, total, type ExplorerDb, type ExplorerResult } from './explorer';

// ───────── config
const args = process.argv.slice(2);
const argValue = (name: string) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const DEPTH = Number(argValue('--depth') ?? 22);
const MULTIPV = 3;
const STOCKFISH =
  process.env.STOCKFISH_PATH ?? join(homedir(), '.local/share/stockfish/stockfish/stockfish-linux-x86-64-universal');

/** Centipawn loss thresholds for your own moves. */
const WARN_CP = 30;
const BAD_CP = 80;
/** An opponent reply this common (share of club games) that isn't in the repertoire is a gap. */
const GAP_SHARE = 0.08;

function loadEnv() {
  if (!existsSync('.env.local')) return;
  for (const line of readFileSync('.env.local', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
}
loadEnv();
const TOKEN = process.env.LICHESS_TOKEN;

// ───────── cache
const CACHE_DIR = 'scripts/.cache';
const CACHE_FILE = join(CACHE_DIR, 'verify.json');
type Cache = { engine: Record<string, EngineLine[]>; explorer: Record<string, ExplorerResult> };
const cache: Cache = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : { engine: {}, explorer: {} };
const saveCache = () => {
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(CACHE_FILE, JSON.stringify(cache));
};

const engine = new Engine(STOCKFISH, { Threads: 8, Hash: 512 });

async function analyse(fen: string, searchmoves?: string[]): Promise<EngineLine[]> {
  const k = `${positionKey(fen)}|d${DEPTH}|${searchmoves?.join(',') ?? `m${MULTIPV}`}`;
  if (!cache.engine[k]) {
    cache.engine[k] = await engine.analyse(fen, { depth: DEPTH, multipv: searchmoves ? 1 : MULTIPV, searchmoves });
    saveCache();
  }
  return cache.engine[k];
}

async function explorer(db: ExplorerDb, fen: string): Promise<ExplorerResult | undefined> {
  if (!TOKEN) return undefined;
  const k = `${db}|${positionKey(fen)}`;
  if (!cache.explorer[k]) {
    cache.explorer[k] = await explore(db, fen, TOKEN);
    saveCache();
    await new Promise((r) => setTimeout(r, 600)); // be polite to Lichess
  }
  return cache.explorer[k];
}

// ───────── helpers
const uciOf = (e: Pick<Edge, 'from' | 'to'>) => e.from + e.to;
const whiteToMove = (fen: string) => fen.split(' ')[1] === 'w';

/** Format a side-to-move score as a White-POV evaluation like "+0.34" or "#-3". */
function evalText(line: EngineLine, fen: string): string {
  const sign = whiteToMove(fen) ? 1 : -1;
  if (line.mate !== undefined) return `#${sign * line.mate}`;
  const v = (sign * line.cp) / 100;
  return (v >= 0 ? '+' : '') + v.toFixed(2);
}

function sanOf(fen: string, uci: string): string {
  try {
    return new Chess(fen).move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] ?? 'q' }).san;
  } catch {
    return uci;
  }
}

function pvSan(fen: string, pv: string[], n = 6): string {
  const chess = new Chess(fen);
  const out: string[] = [];
  for (const uci of pv.slice(0, n)) {
    try {
      const m = chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] ?? 'q' });
      out.push(m.san);
    } catch {
      break;
    }
  }
  return out.join(' ');
}

const pct = (x: number) => `${Math.round(x * 100)}%`;

interface MoveCheck {
  edge: Edge;
  bookEval: string;
  best: { san: string; eval: string; pv: string };
  loss: number;
  masters?: { games: number; share: number; score: number };
  club?: { games: number; share: number; score: number };
  flags: string[];
}

function moveStats(r: ExplorerResult | undefined, uci: string, mover: 'white' | 'black') {
  if (!r) return undefined;
  const all = total(r);
  const m = r.moves.find((x) => sanMatchesCastle(x.uci, uci));
  if (!m) return { games: 0, share: 0, score: 0 };
  const games = total(m);
  const wins = mover === 'white' ? m.white : m.black;
  return { games, share: all ? games / all : 0, score: games ? (wins + m.draws / 2) / games : 0 };
}

/** Lichess reports castling as king-takes-rook (e1h1); chess.js uses e1g1. */
function sanMatchesCastle(a: string, b: string) {
  const alias: Record<string, string> = { e1h1: 'e1g1', e1a1: 'e1c1', e8h8: 'e8g8', e8a8: 'e8c8' };
  return (alias[a] ?? a) === (alias[b] ?? b);
}

async function checkEdge(rep: BuiltRepertoire, edge: Edge): Promise<MoveCheck> {
  const top = await analyse(edge.fenBefore);
  const bookLine = top.find((l) => sanMatchesCastle(l.uci, uciOf(edge))) ?? (await analyse(edge.fenBefore, [uciOf(edge)]))[0];
  const best = top[0];
  const loss = Math.max(0, best.cp - bookLine.cp);
  const [m, c] = [await explorer('masters', edge.fenBefore), await explorer('lichess', edge.fenBefore)];
  const masters = moveStats(m, uciOf(edge), edge.mover);
  const club = moveStats(c, uciOf(edge), edge.mover);
  const flags: string[] = [];
  const yours = edge.mover === rep.side;
  if (yours) {
    if (loss >= BAD_CP) flags.push(`❌ loses ${(loss / 100).toFixed(2)} vs ${sanOf(edge.fenBefore, best.uci)}`);
    else if (loss >= WARN_CP) flags.push(`⚠️ ${(loss / 100).toFixed(2)} worse than ${sanOf(edge.fenBefore, best.uci)}`);
    if (masters && masters.games < 10 && club && club.share < 0.05) flags.push('⚠️ rarely played');
  } else {
    if (club && club.share < 0.02 && (!masters || masters.share < 0.02)) flags.push('ℹ️ rare at club level');
  }
  return {
    edge,
    bookEval: evalText(bookLine, edge.fenBefore),
    best: { san: sanOf(edge.fenBefore, best.uci), eval: evalText(best, edge.fenBefore), pv: pvSan(edge.fenBefore, best.pv) },
    loss,
    masters,
    club,
    flags,
  };
}

const FOUR_KNIGHTS_KEY = positionKey('r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4');
/** Only report in-scope gaps you'd meet at least this often (fraction of your Four Knights games). */
const MIN_GAP_FREQUENCY = 0.01;

interface Gap {
  after: string;
  san: string;
  /** Share of club games in that position. */
  share: number;
  /** How often you reach this gap, as a fraction of your Four Knights games. */
  frequency: number;
}

/**
 * Walk the repertoire from the start, tracking how often each position is reached
 * (the product of the club shares of the opponent's moves along the way).
 * Opponent replies that aren't covered become gaps, weighted by how often you'd face them.
 * Anything before 3…Nf6 is a different opening and is reported separately.
 */
async function findGaps(rep: BuiltRepertoire) {
  const inScope: Gap[] = [];
  const otherOpenings: Gap[] = [];
  const visited = new Set<string>();

  const walk = async (fen: string, path: string[], reach: number, inFourKnights: boolean): Promise<void> => {
    const key = positionKey(fen);
    if (visited.has(key)) return;
    visited.add(key);
    if (key === FOUR_KNIGHTS_KEY) {
      inFourKnights = true;
      reach = 1;
    }
    const edges = rep.edgesByKey.get(key) ?? [];
    if (!edges.length) return; // the line ends here on purpose
    const label = (e: Edge) => (e.mover === 'white' || path.length === 0 ? formatMove(e) : e.san);
    if (edges[0].mover === rep.side) {
      for (const e of edges) await walk(e.fenAfter, [...path, label(e)], reach, inFourKnights);
      return;
    }
    const r = await explorer('lichess', fen);
    const all = r ? total(r) : 0;
    const shareOf = (uci: string) => {
      const m = r?.moves.find((x) => sanMatchesCastle(x.uci, uci));
      return m && all ? total(m) / all : 0;
    };
    for (const m of r?.moves ?? []) {
      const share = total(m) / all;
      if (edges.some((e) => sanMatchesCastle(m.uci, uciOf(e))) || total(m) < 50 || share < 0.05) continue;
      const gap = { after: path.join(' '), san: m.san, share, frequency: reach * share };
      if (inFourKnights) {
        if (gap.frequency >= MIN_GAP_FREQUENCY) inScope.push(gap);
      } else if (share >= GAP_SHARE) {
        otherOpenings.push(gap);
      }
    }
    for (const e of edges) await walk(e.fenAfter, [...path, label(e)], reach * shareOf(uciOf(e)), inFourKnights);
  };

  await walk(new Chess().fen(), [], 1, false);
  inScope.sort((a, b) => b.frequency - a.frequency);
  return { inScope, otherOpenings };
}

function pathLabel(plies: Edge[], upTo: Edge) {
  const out: string[] = [];
  for (const e of plies) {
    out.push(e.mover === 'white' || out.length === 0 ? formatMove(e) : e.san);
    if (e === upTo) break;
  }
  return out.join(' ');
}

// ───────── report
async function main() {
  const reps = ALL_REPERTOIRES.map(buildRepertoire);
  const out: string[] = [];
  const summary: string[] = [];
  const today = new Date().toISOString().slice(0, 10);

  out.push('# Repertoire verification report', '');
  out.push(
    `Generated ${today} by \`npm run verify\`. Stockfish 19 at depth ${DEPTH}` +
      (TOKEN
        ? '; Lichess masters database; Lichess games rated 1600–2200 (blitz, rapid, classical), shown as "club".'
        : '. **Lichess data skipped** (no `LICHESS_TOKEN` in `.env.local`).'),
    '',
    'Evaluations are from White\'s point of view (+ is good for White). "Loss" is how much worse the book move is than Stockfish\'s top choice, in pawns. Under 0.30 is normal opening noise.',
    '',
  );

  for (const rep of reps) {
    console.log(`\n${rep.spec.name}`);
    const seen = new Set<Edge>();
    const checks = new Map<Edge, MoveCheck>();
    const repOut: string[] = [`## ${rep.spec.name}`, ''];

    for (const line of rep.lines) {
      const fresh = line.plies.filter((e) => !seen.has(e));
      fresh.forEach((e) => seen.add(e));
      const rows: string[] = [];
      for (const e of fresh) {
        process.stdout.write(`  ${line.spec.id} ${formatMove(e)}        \r`);
        const c = await checkEdge(rep, e);
        checks.set(e, c);
        const yours = e.mover === rep.side;
        rows.push(
          `| ${yours ? '**' + formatMove(e) + '**' : formatMove(e)} | ${c.bookEval} | ${c.best.san} ${c.best.eval} | ${yours ? (c.loss / 100).toFixed(2) : ''} | ${
            c.masters ? `${c.masters.games} (${pct(c.masters.share)})` : '–'
          } | ${c.club ? `${c.club.games} (${pct(c.club.share)}, scores ${pct(c.club.score)})` : '–'} | ${c.flags.join('<br>')} |`,
        );
        for (const f of c.flags) {
          if (!f.startsWith('ℹ️')) summary.push(`- ${f} — ${rep.spec.name}, *${line.spec.name}*, ${formatMove(e)}`);
        }
      }
      const last = line.plies[line.plies.length - 1];
      const endEval = (await analyse(last.fenAfter))[0];
      repOut.push(`### ${line.spec.name}`, '');
      repOut.push(`\`${pathLabel(line.plies, last)}\``, '');
      repOut.push(
        `**Final position:** ${evalText(endEval, last.fenAfter)} (Stockfish continues ${pvSan(last.fenAfter, endEval.pv)})`,
        '',
      );
      if (rows.length) {
        repOut.push('| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |');
        repOut.push('|---|---|---|---|---|---|---|');
        repOut.push(...rows, '');
      }
    }

    if (TOKEN) {
      const { inScope, otherOpenings } = await findGaps(rep);
      repOut.push('### Gaps: common club replies not covered', '');
      repOut.push('"Frequency" is roughly how many of every 100 Four Knights games (with you playing this repertoire) reach that reply.', '');
      if (!inScope.length) repOut.push('None found.', '');
      for (const g of inScope) {
        const freq = (100 * g.frequency).toFixed(1);
        repOut.push(`- **${freq} in 100** — after \`${g.after}\`: **${g.san}** (${pct(g.share)} of club games in that position)`);
        if (g.frequency >= 0.02) summary.push(`- 🕳️ ${freq} in 100 games — ${rep.spec.name}, after ${g.after}: ${g.san}`);
      }
      repOut.push('', '### Before the Four Knights (other openings)', '');
      for (const g of otherOpenings) repOut.push(`- After \`${g.after || 'the start'}\`: ${g.san} (${pct(g.share)} of club games)`);
      repOut.push('');
    }
    out.push(...repOut);
  }

  const report = [
    ...out.slice(0, 6),
    '## Summary',
    '',
    ...(summary.length ? summary : ['Nothing flagged.']),
    '',
    ...out.slice(6),
  ].join('\n');
  mkdirSync('docs', { recursive: true });
  writeFileSync('docs/verification-report.md', report);
  console.log(`\n\nWrote docs/verification-report.md (${summary.length} flags)`);
  engine.quit();
}

main().catch((err) => {
  console.error(err);
  engine.quit();
  process.exit(1);
});
