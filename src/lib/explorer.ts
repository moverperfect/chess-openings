/**
 * The opening explorer's data: what club players play from each position (src/data/explorer.json,
 * built by scripts/build-explorer.ts), the opening names, the strategy notes, and where your
 * repertoires come in.
 */
import { Chess } from 'chess.js';
import tree from '../data/explorer.json';
import { STRATEGIES, type Strategy } from '../data/strategies';
import type { Side } from '../data/types';
import { positionKey, shortName, type BuiltLine, type BuiltRepertoire, type Edge } from './repertoire';

export const START_FEN = new Chess().fen();

export interface TreeMove {
  san: string;
  uci: string;
  /** Share of club games from this position that played it (0–1). */
  share: number;
  white: number;
  draws: number;
  black: number;
}

const NODES = tree.nodes as Record<string, { games: number; moves: TreeMove[] }>;
const NAMES = tree.names as Record<string, { eco: string; name: string }>;

/** Every position in the snapshot, by position key. */
export const treeNodes = (): Readonly<typeof NODES> => NODES;
/** Every named position in the snapshot, by position key. */
export const treeNames = (): Readonly<typeof NAMES> => NAMES;

export interface Opening {
  eco: string;
  /** Full Lichess name, e.g. "Four Knights Game: Spanish Variation, Rubinstein Variation". */
  name: string;
  /** "Four Knights Game". */
  family: string;
  /** "Spanish Variation, Rubinstein Variation", if any. */
  variation?: string;
  /** The most specific part: "Rubinstein Variation" (or the family when there's no variation). */
  short: string;
}

export function toOpening(n: { eco: string; name: string }): Opening {
  const [family, variation] = n.name.split(': ');
  const parts = variation ? variation.split(', ') : [];
  return { eco: n.eco, name: n.name, family, variation, short: parts.length ? parts[parts.length - 1] : family };
}

/** The opening named at exactly this position, if it has a name of its own. */
export function namedAt(key: string): Opening | undefined {
  const n = NAMES[key];
  return n && toOpening(n);
}

/** The opening name and its parents, most specific first: "A: B, C", "A: B", "A". */
export function nameAndParents(name: string): string[] {
  const [family, variation] = name.split(': ');
  const parts = variation ? variation.split(', ') : [];
  const out: string[] = [];
  for (let i = parts.length; i > 0; i--) out.push(`${family}: ${parts.slice(0, i).join(', ')}`);
  out.push(family);
  return out;
}

/** The strategy for an opening: its own note, or the nearest parent's. `from` says which name it came from. */
export function strategyFor(name: string | undefined): { strategy: Strategy; from: string } | undefined {
  if (!name) return undefined;
  for (const n of nameAndParents(name)) if (STRATEGIES[n]) return { strategy: STRATEGIES[n], from: n };
  return undefined;
}

export interface RepHit {
  rep: BuiltRepertoire;
  edge: Edge;
  /** True when it's your move in that repertoire; false when it's an opponent's move you've prepared for. */
  own: boolean;
}

export function repertoireHits(reps: BuiltRepertoire[], key: string, san: string): RepHit[] {
  const hits: RepHit[] = [];
  for (const rep of reps) {
    const edge = rep.edgesByKey.get(key)?.find((e) => e.san === san);
    if (edge) hits.push({ rep, edge, own: edge.mover === rep.side });
  }
  return hits;
}

export interface HitGroup {
  own: boolean;
  edge: Edge;
  reps: BuiltRepertoire[];
}

/** Merge hits that say the same thing, so three White repertoires sharing a move show once. */
export function groupHits(hits: RepHit[]): HitGroup[] {
  const out: HitGroup[] = [];
  for (const h of hits) {
    const g = out.find((x) => x.own === h.own && x.edge.why === h.edge.why);
    if (g) g.reps.push(h.rep);
    else out.push({ own: h.own, edge: h.edge, reps: [h.rep] });
  }
  return out;
}

/** "Spanish · Scotch · Italian", "As Black". */
export function repLabel(reps: BuiltRepertoire[]): string {
  return reps.map((r) => (r.side === 'black' ? shortName(r) : shortName(r).split(' ')[0])).join(' · ');
}

export interface Step {
  san: string;
  from: string;
  to: string;
  fenBefore: string;
  fenAfter: string;
  mover: Side;
  moveNumber: number;
  /** The opening after this move (inherited from earlier moves when this position has no name). */
  opening?: Opening;
  /** True when this move changes the opening's name. */
  renamed: boolean;
  hits: RepHit[];
}

/** Replay moves from the start. Stops at the first illegal move, so stale saved positions are safe. */
export function walk(reps: BuiltRepertoire[], sans: string[]): Step[] {
  const chess = new Chess();
  const steps: Step[] = [];
  let opening: Opening | undefined;
  for (const san of sans) {
    const fenBefore = chess.fen();
    const mover: Side = chess.turn() === 'w' ? 'white' : 'black';
    const moveNumber = chess.moveNumber();
    let mv;
    try {
      mv = chess.move(san);
    } catch {
      break;
    }
    const named = namedAt(positionKey(chess.fen()));
    const renamed = Boolean(named) && named!.name !== opening?.name;
    if (named) opening = named;
    steps.push({
      san: mv.san,
      from: mv.from,
      to: mv.to,
      fenBefore,
      fenAfter: chess.fen(),
      mover,
      moveNumber,
      opening,
      renamed,
      hits: repertoireHits(reps, positionKey(fenBefore), mv.san),
    });
  }
  return steps;
}

export interface Candidate {
  san: string;
  from: string;
  to: string;
  share: number;
  /** Club results after this move, as shares of white wins / draws / black wins. */
  result: { white: number; draws: number; black: number };
  /** The opening this move leads to (the current one when it doesn't change the name). */
  opening?: Opening;
  renamed: boolean;
  hits: RepHit[];
}

/** What club players play from `fen`, most popular first, with any repertoire moves included. */
export function candidatesAt(reps: BuiltRepertoire[], fen: string, current: Opening | undefined): Candidate[] {
  const key = positionKey(fen);
  const node = NODES[key];
  if (!node) return [];
  return node.moves.map((m) => {
    const chess = new Chess(fen);
    const mv = chess.move(m.san);
    const named = namedAt(positionKey(chess.fen()));
    const games = m.white + m.draws + m.black;
    return {
      san: m.san,
      from: mv.from,
      to: mv.to,
      share: m.share,
      result: games ? { white: m.white / games, draws: m.draws / games, black: m.black / games } : { white: 0, draws: 0, black: 0 },
      opening: named ?? current,
      renamed: Boolean(named) && named!.name !== current?.name,
      hits: repertoireHits(reps, key, m.san),
    };
  });
}

/** True when the snapshot has club data for this position. */
export const inSnapshot = (fen: string) => Boolean(NODES[positionKey(fen)]);

/**
 * Repertoire lines whose book runs out at this position, so the plan takes over. A line that ends by
 * transposing into another line (the repertoire still has a move here) doesn't count.
 */
export function linesEndingAt(reps: BuiltRepertoire[], fen: string): { rep: BuiltRepertoire; line: BuiltLine }[] {
  const key = positionKey(fen);
  return reps.flatMap((rep) =>
    rep.edgesByKey.has(key)
      ? []
      : rep.lines.filter((l) => l.plies.length && positionKey(l.plies[l.plies.length - 1].fenAfter) === key).map((line) => ({ rep, line })),
  );
}

export const pct = (x: number) => (x >= 0.995 ? '100%' : x > 0 && x < 0.01 ? '<1%' : `${Math.round(x * 100)}%`);

export const moveLabel = (s: { san: string; mover: Side; moveNumber: number }) =>
  s.mover === 'white' ? `${s.moveNumber}.${s.san}` : `${s.moveNumber}…${s.san}`;
