import { Chess } from 'chess.js';
import type { ArrowSpec, LineSpec, Repertoire, Side } from '../data/types';

/** One move in the repertoire. Moves reached by different lines through the same position share an edge. */
export interface Edge {
  san: string;
  from: string;
  to: string;
  /** Position key before the move. */
  key: string;
  fenBefore: string;
  fenAfter: string;
  mover: Side;
  /** Full-move number, for display ("7." / "7…"). */
  moveNumber: number;
  why: string;
  detail?: string;
  arrows: ArrowSpec[];
  avoid: { san: string; why: string }[];
  lineIds: string[];
}

export interface BuiltLine {
  spec: LineSpec;
  plies: Edge[];
}

export interface BuiltRepertoire {
  spec: Repertoire;
  side: Side;
  lines: BuiltLine[];
  lineById: Map<string, BuiltLine>;
  /** Position key → moves played from that position. */
  edgesByKey: Map<string, Edge[]>;
  /** Every move made by the repertoire's side (the ones you are quizzed on). */
  yourEdges: Edge[];
  problems: string[];
}

/** Position identity ignoring move counters, so transpositions merge. */
export function positionKey(fen: string): string {
  return fen.split(' ').slice(0, 4).join(' ');
}

export function formatMove(edge: Pick<Edge, 'san' | 'mover' | 'moveNumber'>, alwaysNumber = true): string {
  if (edge.mover === 'white') return `${edge.moveNumber}.${edge.san}`;
  return alwaysNumber ? `${edge.moveNumber}…${edge.san}` : edge.san;
}

export function buildRepertoire(spec: Repertoire): BuiltRepertoire {
  const edgesByKey = new Map<string, Edge[]>();
  const lines: BuiltLine[] = [];
  const problems: string[] = [];
  const seenIds = new Set<string>();

  for (const line of spec.lines) {
    if (seenIds.has(line.id)) problems.push(`Duplicate line id "${line.id}"`);
    seenIds.add(line.id);

    const chess = new Chess();
    const plies: Edge[] = [];
    for (const [i, entry] of line.moves.entries()) {
      const m = typeof entry === 'string' ? { san: entry } : entry;
      const fenBefore = chess.fen();
      const key = positionKey(fenBefore);
      const moveNumber = chess.moveNumber();
      let move;
      try {
        move = chess.move(m.san);
      } catch {
        problems.push(`${line.id}: illegal move "${m.san}" at ply ${i + 1}`);
        break;
      }
      const siblings = edgesByKey.get(key) ?? [];
      let edge = siblings.find((e) => e.san === move.san);
      if (!edge) {
        edge = {
          san: move.san,
          from: move.from,
          to: move.to,
          key,
          fenBefore,
          fenAfter: chess.fen(),
          mover: move.color === 'w' ? 'white' : 'black',
          moveNumber,
          why: '',
          arrows: [],
          avoid: [],
          lineIds: [],
        };
        siblings.push(edge);
        edgesByKey.set(key, siblings);
      }
      if ('why' in m && m.why) {
        if (edge.why && edge.why !== m.why) {
          problems.push(`${line.id}: conflicting explanation for ${move.san} (already set by ${edge.lineIds[0]})`);
        }
        edge.why = m.why;
      }
      if ('detail' in m && m.detail) edge.detail = m.detail;
      if ('arrows' in m && m.arrows) edge.arrows = m.arrows;
      if ('avoid' in m && m.avoid) edge.avoid = m.avoid;
      if (!edge.lineIds.includes(line.id)) edge.lineIds.push(line.id);
      plies.push(edge);
    }
    lines.push({ spec: line, plies });
  }

  for (const edges of edgesByKey.values()) {
    for (const e of edges) {
      if (!e.why) problems.push(`No explanation for ${formatMove(e)} (lines: ${e.lineIds.join(', ')})`);
    }
    const yours = edges.filter((e) => e.mover === spec.side);
    if (yours.length > 1) {
      problems.push(`Two repertoire moves in one position: ${yours.map((e) => formatMove(e)).join(' / ')}`);
    }
  }

  const yourEdges = [...edgesByKey.values()].flat().filter((e) => e.mover === spec.side);

  return {
    spec,
    side: spec.side,
    lines,
    lineById: new Map(lines.map((l) => [l.spec.id, l])),
    edgesByKey,
    yourEdges,
    problems,
  };
}

/** Group lines by their `group` label, preserving authoring order. */
export function groupLines(rep: BuiltRepertoire): { group: string; lines: BuiltLine[] }[] {
  const groups: { group: string; lines: BuiltLine[] }[] = [];
  for (const line of rep.lines) {
    let g = groups.find((x) => x.group === line.spec.group);
    if (!g) groups.push((g = { group: line.spec.group, lines: [] }));
    g.lines.push(line);
  }
  return groups;
}

/** The correct reason for `edge` shuffled among other reasons from your repertoire. */
export function quizOptions(rep: BuiltRepertoire, edge: Edge, count = 4): string[] {
  // Prefer reasons from a similar stage of the game so the wrong answers are plausible.
  const byWhy = new Map<string, number>();
  for (const e of rep.yourEdges) {
    if (e.why === edge.why) continue;
    const distance = Math.abs(e.moveNumber - edge.moveNumber) + Math.random() * 3;
    byWhy.set(e.why, Math.min(byWhy.get(e.why) ?? Infinity, distance));
  }
  const nearest = [...byWhy.entries()].sort((a, b) => a[1] - b[1]).slice(0, 7).map(([w]) => w);
  const options = [edge.why, ...shuffle(nearest).slice(0, count - 1)];
  return shuffle(options);
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Repertoire moves from the position after `path` (an empty path means the starting position). */
export function movesAfter(rep: BuiltRepertoire, path: Edge[]): Edge[] {
  const fen = path.length ? path[path.length - 1].fenAfter : new Chess().fen();
  return rep.edgesByKey.get(positionKey(fen)) ?? [];
}

/**
 * Play `edge` after `prefix` and follow a line onward from there, so the explorer always has a
 * full path to step through. Prefers `preferLineId`, then a line with the same move order as
 * `prefix`, then any line that reaches the position by transposition.
 */
export function followEdge(
  rep: BuiltRepertoire,
  prefix: Edge[],
  edge: Edge,
  preferLineId?: string,
): { lineId: string; path: Edge[] } {
  let best: { lineId: string; index: number; score: number } | undefined;
  for (const lineId of edge.lineIds) {
    const plies = rep.lineById.get(lineId)!.plies;
    const index = plies.indexOf(edge);
    if (index < 0) continue;
    const sameOrder = index === prefix.length && prefix.every((e, i) => plies[i] === e);
    const score = (sameOrder ? 2 : 0) + (lineId === preferLineId ? 1 : 0);
    if (!best || score > best.score) best = { lineId, index, score };
  }
  if (!best) throw new Error(`No line plays ${formatMove(edge)}`);
  const plies = rep.lineById.get(best.lineId)!.plies;
  return { lineId: best.lineId, path: [...prefix, ...plies.slice(best.index)] };
}

/** Short label for buttons and messages, e.g. "Scotch 4.d4" or "As Black". */
export function shortName(rep: BuiltRepertoire): string {
  return rep.side === 'white' ? rep.spec.name.replace(/^White: /, '') : 'As Black';
}

export interface Elsewhere {
  rep: BuiltRepertoire;
  lineId: string;
  /** The moves to show in that repertoire, with `san` played at index `ply - 1`. */
  path: Edge[];
  ply: number;
  /** True when `san` is that repertoire's own move, false when it's the opponent's move there. */
  ownMove: boolean;
}

/**
 * Other repertoires that cover `san` in the position after `played`, own-move ones first. Keeps the same move order
 * when that repertoire has it, otherwise uses a line that reaches the position by transposition.
 */
export function findElsewhere(
  reps: BuiltRepertoire[],
  current: BuiltRepertoire,
  played: Edge[],
  san: string,
): Elsewhere[] {
  const found: Elsewhere[] = [];
  for (const rep of reps) {
    if (rep === current) continue;
    const edge = movesAfter(rep, played).find((e) => e.san === san);
    if (!edge) continue;
    const mapped = played.map((p) => rep.edgesByKey.get(p.key)?.find((e) => e.san === p.san));
    let prefix: Edge[];
    if (mapped.every((e): e is Edge => e !== undefined)) {
      prefix = mapped;
    } else {
      const plies = rep.lineById.get(edge.lineIds[0])!.plies;
      prefix = plies.slice(0, plies.indexOf(edge));
    }
    const { lineId, path } = followEdge(rep, prefix, edge);
    found.push({ rep, lineId, path, ply: prefix.length + 1, ownMove: edge.mover === rep.side });
  }
  // Repertoires where it's your own move first.
  return found.sort((a, b) => Number(b.ownMove) - Number(a.ownMove));
}
