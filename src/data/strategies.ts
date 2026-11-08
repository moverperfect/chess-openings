/**
 * The strategy behind each named opening, keyed by its Lichess name. A variation without its own
 * entry falls back to its parent ("Four Knights Game: Spanish Variation" → "Four Knights Game").
 */
import { STRATEGIES_E4E5 } from './strategies/e4e5';
import { STRATEGIES_E4OTHER } from './strategies/e4other';
import { STRATEGIES_D4FLANK } from './strategies/d4flank';

export interface Strategy {
  /** One or two sentences: what the opening is about. */
  idea: string;
  /** White's plan. */
  white: string;
  /** Black's plan. */
  black: string;
}

export const STRATEGIES: Record<string, Strategy> = { ...STRATEGIES_E4E5, ...STRATEGIES_E4OTHER, ...STRATEGIES_D4FLANK };
