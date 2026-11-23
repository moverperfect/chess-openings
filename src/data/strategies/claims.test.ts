import { describe, expect, it } from 'vitest';
import { Chess } from 'chess.js';
import { STRATEGIES } from '../strategies';
import { CLAIMS, evalHolds, moveHolds } from './claims';

/** The position after a claim's moves, or the first illegal move. */
function play(moves: string): Chess {
  const chess = new Chess();
  for (const san of moves.split(/\s+/).filter(Boolean)) chess.move(san);
  return chess;
}

describe('strategy claims (checked against Stockfish by npm run verify)', () => {
  it('quote their note word for word, so a rewrite has to revisit them', () => {
    for (const c of CLAIMS) {
      const where = `${c.opening} (${c.field})`;
      expect(STRATEGIES[c.opening], where).toBeDefined();
      // Quotes often name the move in words ("take on d4", "castle first"), so only an empty one is meaningless.
      expect(c.quote.trim(), `${where}: empty quote`).not.toBe('');
      expect(STRATEGIES[c.opening][c.field], where).toContain(c.quote);
    }
  });

  it('play legal moves, written exactly as chess.js writes them, into a position that is still going', () => {
    for (const c of CLAIMS) {
      const where = `${c.opening}: ${c.moves}`;
      let chess!: Chess;
      expect(() => (chess = play(c.moves)), where).not.toThrow();
      expect(chess.isGameOver(), `${where}: no moves left to analyse`).toBe(false);
      if (c.check.kind !== 'eval') {
        const { san } = c.check;
        let played = '';
        expect(() => (played = chess.move(san).san), `${where} ${san}`).not.toThrow();
        expect(played, `${where}: write ${san} as chess.js does`).toBe(san);
      }
    }
  });
});

describe('claim thresholds', () => {
  it('count a loss of exactly 0.30 as good, not dubious', () => {
    expect(moveHolds('good', 0.3)).toBe(true);
    expect(moveHolds('dubious', 0.3)).toBe(false);
    expect(moveHolds('dubious', 0.31)).toBe(true);
    expect(moveHolds('playable', 0.6)).toBe(true);
    expect(moveHolds('mistake', 0.7)).toBe(false);
    expect(moveHolds('blunder', 2.01)).toBe(true);
  });

  it('give each band 0.15 of slack, from the right side', () => {
    expect(evalHolds({ kind: 'eval', band: 'level' }, -0.44)).toBe(true);
    expect(evalHolds({ kind: 'eval', band: 'level' }, 0.45)).toBe(false);
    expect(evalHolds({ kind: 'eval', band: 'clear', side: 'black' }, -0.45)).toBe(true);
    expect(evalHolds({ kind: 'eval', band: 'clear', side: 'white' }, -0.8)).toBe(false);
    expect(evalHolds({ kind: 'eval', band: 'winning', side: 'white' }, 100)).toBe(true);
  });
});
