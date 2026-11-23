/**
 * Concrete chess claims made in the strategy notes, so `npm run verify` can check each one
 * against Stockfish. The app never imports this file.
 *
 * Each claim quotes the note word for word (a test checks the quote is still there), so rewriting
 * a note means revisiting its claims.
 */
import { CLAIMS_E4E5 } from './e4e5.claims';
import { CLAIMS_E4OTHER } from './e4other.claims';
import { CLAIMS_D4FLANK } from './d4flank.claims';

export type Band = 'level' | 'slight' | 'clear' | 'winning';

/**
 * How big an advantage each band means, in pawns: [from, up to). Each edge gets BAND_SLACK either
 * way, for engine noise. "Clearly better" from 0.60 matches the repertoire's verified wording
 * ("clearly better, about −0.5" sits inside the slack).
 */
export const BANDS: Record<Band, { from: number; to: number; words: string }> = {
  level: { from: 0, to: 0.3, words: 'level' },
  slight: { from: 0.3, to: 0.6, words: 'slightly better' },
  clear: { from: 0.6, to: 1.5, words: 'clearly better' },
  winning: { from: 1.5, to: Infinity, words: 'winning' },
};
export const BAND_SLACK = 0.15;

export type MoveKind = 'good' | 'playable' | 'dubious' | 'mistake' | 'blunder';

/**
 * How a claimed move compares with Stockfish's best, in pawns lost: at most `maxLoss`, or more
 * than `minLoss`. A loss of exactly 0.30 is "good", never "dubious".
 */
export const MOVE_KINDS: Record<MoveKind, { words: string; maxLoss?: number; minLoss?: number }> = {
  /** "Play X", "the main move", "X is fine". */
  good: { words: 'sound', maxLoss: 0.3 },
  /** "X or Y", "X is also possible", "playable". */
  playable: { words: 'playable', maxLoss: 0.6 },
  /** "?!", "avoid", "dubious". */
  dubious: { words: 'dubious', minLoss: 0.3 },
  /** "?", "a mistake". */
  mistake: { words: 'a mistake', minLoss: 0.7 },
  /** "??", "loses a piece", "allows mate". */
  blunder: { words: 'a blunder', minLoss: 2 },
};

export type ClaimCheck =
  /** The position after `moves` is level. */
  | { kind: 'eval'; band: 'level' }
  /** The position after `moves` is this much better for `side`. */
  | { kind: 'eval'; band: Exclude<Band, 'level'>; side: 'white' | 'black' }
  /** `san`, played in the position after `moves`, compares with Stockfish's best as MOVE_KINDS says. */
  | { kind: MoveKind; san: string };

/** Does an evaluation (White's view, in pawns) fit the claimed band? */
export function evalHolds(check: Extract<ClaimCheck, { kind: 'eval' }>, whitePawns: number): boolean {
  const v = check.band === 'level' ? Math.abs(whitePawns) : check.side === 'white' ? whitePawns : -whitePawns;
  const { from, to } = BANDS[check.band];
  return v >= from - BAND_SLACK && v < to + BAND_SLACK;
}

/** Does a move that loses `loss` pawns against Stockfish's best fit the claimed kind? */
export function moveHolds(kind: MoveKind, loss: number): boolean {
  const { maxLoss, minLoss } = MOVE_KINDS[kind];
  return maxLoss !== undefined ? loss <= maxLoss : loss > minLoss!;
}

/** "White clearly better", "Nf3 is sound". */
export function describeCheck(check: ClaimCheck): string {
  if (check.kind === 'eval') {
    return check.band === 'level' ? 'level' : `${check.side === 'white' ? 'White' : 'Black'} ${BANDS[check.band].words}`;
  }
  return `${check.san} is ${MOVE_KINDS[check.kind].words}`;
}

export interface Claim {
  /** The strategy note's key, e.g. "Four Knights Game: Spanish Variation". */
  opening: string;
  field: 'idea' | 'white' | 'black';
  /** The words in the note that make the claim, copied exactly. */
  quote: string;
  /** Moves from the starting position, e.g. "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4". */
  moves: string;
  check: ClaimCheck;
}

export const CLAIMS: Claim[] = [...CLAIMS_E4E5, ...CLAIMS_E4OTHER, ...CLAIMS_D4FLANK];
