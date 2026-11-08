import { describe, expect, it } from 'vitest';
import { Chess } from 'chess.js';
import { ALL_REPERTOIRES } from '../data';
import { buildRepertoire, findElsewhere, followEdge, movesAfter, positionKey, shortName } from './repertoire';
import { grade, pickNext, statusOf } from './srs';

const SQUARE = /^[a-h][1-8]$/;

describe.each(ALL_REPERTOIRES)('$name', (spec) => {
  const rep = buildRepertoire(spec);

  it('has legal moves, an explanation for every move, and one repertoire move per position', () => {
    expect(rep.problems).toEqual([]);
  });

  it('only uses valid squares in arrows', () => {
    for (const edges of rep.edgesByKey.values()) {
      for (const e of edges) {
        for (const a of e.arrows) {
          const [squares, colour] = a.split(':');
          expect(colour === undefined || ['g', 'r', 'b', 'y'].includes(colour), a).toBe(true);
          expect(squares.length === 2 || squares.length === 4, a).toBe(true);
          expect(squares.slice(0, 2)).toMatch(SQUARE);
          if (squares.length === 4) expect(squares.slice(2)).toMatch(SQUARE);
        }
      }
    }
  });

  it('lists "avoid" moves that are legal and different from the book move', () => {
    for (const edges of rep.edgesByKey.values()) {
      for (const e of edges) {
        for (const a of e.avoid) {
          const chess = new Chess(e.fenBefore);
          const move = chess.move(a.san);
          expect(move.san).not.toBe(e.san);
        }
      }
    }
  });

  it('ends every line after at least one of your moves', () => {
    for (const line of rep.lines) {
      expect(line.plies.some((p) => p.mover === spec.side), line.spec.id).toBe(true);
    }
  });
});

describe('srs', () => {
  it('promotes clean runs and resets on mistakes', () => {
    const now = 1_000_000;
    const a = grade(undefined, 0, now);
    expect(a.box).toBe(1);
    const b = grade(a, 0, now);
    expect(b.box).toBe(2);
    const c = grade(b, 2, now);
    expect(c.box).toBe(0);
    expect(statusOf(c, now)).toBe('due');
  });

  it('prefers overdue lines, then new ones', () => {
    const now = 10_000;
    const progress = { a: grade(undefined, 0, 0), b: { ...grade(undefined, 1, 0), due: 5_000 } };
    expect(pickNext(['a', 'b', 'c'], progress, undefined, now)).toBe('b');
    expect(pickNext(['a', 'c'], progress, undefined, now)).toBe('c');
  });
});

describe.each(ALL_REPERTOIRES)('explorer: $name', (spec) => {
  const rep = buildRepertoire(spec);

  it('follows every branch from every position on every line into a line that plays it', () => {
    for (const line of rep.lines) {
      for (let ply = 0; ply <= line.plies.length; ply++) {
        const prefix = line.plies.slice(0, ply);
        for (const edge of movesAfter(rep, prefix)) {
          const { lineId, path } = followEdge(rep, prefix, edge, line.spec.id);
          expect(path.slice(0, ply)).toEqual(prefix);
          expect(path[ply]).toBe(edge);
          expect(rep.lineById.get(lineId)!.plies).toContain(edge);
          // Consecutive moves chain position to position.
          for (let i = 1; i < path.length; i++) {
            expect(positionKey(path[i].fenBefore)).toBe(positionKey(path[i - 1].fenAfter));
          }
        }
      }
    }
  });

  it('stays on the preferred line when it plays the move', () => {
    const line = rep.lines[rep.lines.length - 1];
    const { lineId, path } = followEdge(rep, [], line.plies[0], line.spec.id);
    expect(lineId).toBe(line.spec.id);
    expect(path).toEqual(line.plies);
  });
});

describe('findElsewhere', () => {
  const reps = ALL_REPERTOIRES.map(buildRepertoire);
  const [spanish] = reps;
  const prefix = spanish.lines[0].plies.slice(0, 6); // 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6

  it('finds a move from another repertoire, keeping the move order', () => {
    const hits = findElsewhere(reps, spanish, prefix, 'd4');
    expect(hits.map((h) => [shortName(h.rep), h.ownMove])).toEqual([
      ['Scotch 4.d4', true],
      ['As Black', false],
    ]);
    const [hit] = hits;
    expect(hit.ply).toBe(7);
    expect(hit.path.slice(0, 7).map((e) => e.san)).toEqual(['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'd4']);
    expect(hit.rep.lineById.get(hit.lineId)!.plies).toContain(hit.path[6]);
  });

  it('finds nothing for a move no repertoire plays', () => {
    expect(findElsewhere(reps, spanish, prefix, 'a3')).toEqual([]);
  });
});
