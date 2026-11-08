export type Side = 'white' | 'black';

/**
 * Arrow/circle notation used in the content files:
 *   "g5f6"    green arrow from g5 to f6
 *   "g5f6:r"  red arrow   (r = red, b = blue, y = yellow, g = green)
 *   "f7:r"    red circle on f7
 */
export type ArrowSpec = string;

export interface MoveSpec {
  san: string;
  /** One-sentence reason. This is what the "why?" quiz asks you to recall. */
  why?: string;
  /** Longer explanation shown after the move. */
  detail?: string;
  arrows?: ArrowSpec[];
  /** Tempting moves you should NOT play here, with the reason. */
  avoid?: { san: string; why: string }[];
}

/** A plain string is a move whose explanation is given by another line that shares the position. */
export type MoveEntry = string | MoveSpec;

export interface LineSpec {
  id: string;
  name: string;
  /** Group heading in the line list, e.g. "4...Bb4 — Symmetrical". */
  group: string;
  /** A one-sentence story of the line — the thing to remember. */
  story: string;
  moves: MoveEntry[];
  /** What to do once the book runs out. */
  plan: string;
}

export interface Repertoire {
  id: string;
  name: string;
  side: Side;
  tagline: string;
  intro: string;
  /** Big ideas that apply across every line. */
  principles: { title: string; body: string }[];
  lines: LineSpec[];
}
