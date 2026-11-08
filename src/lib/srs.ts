/**
 * A small Leitner-style spaced-repetition scheduler, one card per line.
 * A clean run moves the line up a box (longer gap before the next review).
 * Any mistake sends it back to box 0, which is due again straight away.
 */

export interface LineProgress {
  box: number;
  due: number;
  attempts: number;
  cleanRuns: number;
  lastPlayed: number;
  lastMistakes: number;
}

export type Progress = Record<string, LineProgress>;

export const MAX_BOX = 5;
const DAY = 24 * 60 * 60 * 1000;
/** Gap (in days) before the next review after landing in each box. */
const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35];

export type LineStatus = 'new' | 'due' | 'learning' | 'mastered';

export function statusOf(p: LineProgress | undefined, now = Date.now()): LineStatus {
  if (!p) return 'new';
  if (p.due <= now) return 'due';
  return p.box >= MAX_BOX ? 'mastered' : 'learning';
}

export function grade(prev: LineProgress | undefined, mistakes: number, now = Date.now()): LineProgress {
  const box = mistakes === 0 ? Math.min((prev?.box ?? 0) + 1, MAX_BOX) : 0;
  return {
    box,
    due: now + INTERVAL_DAYS[box] * DAY,
    attempts: (prev?.attempts ?? 0) + 1,
    cleanRuns: (prev?.cleanRuns ?? 0) + (mistakes === 0 ? 1 : 0),
    lastPlayed: now,
    lastMistakes: mistakes,
  };
}

/**
 * Choose what to practise next: overdue lines first (most overdue first),
 * then new lines in authoring order, then whatever is due soonest.
 */
export function pickNext(lineIds: string[], progress: Progress, exclude?: string, now = Date.now()): string {
  const candidates = lineIds.length > 1 && exclude ? lineIds.filter((id) => id !== exclude) : lineIds;
  const due = candidates
    .filter((id) => progress[id] && progress[id].due <= now)
    .sort((a, b) => progress[a].due - progress[b].due);
  if (due.length) return due[0];
  const fresh = candidates.find((id) => !progress[id]);
  if (fresh) return fresh;
  return [...candidates].sort((a, b) => progress[a].due - progress[b].due)[0];
}

export function describeDue(p: LineProgress | undefined, now = Date.now()): string {
  if (!p) return 'new';
  const diff = p.due - now;
  if (diff <= 0) return 'due now';
  const days = Math.round(diff / DAY);
  if (days < 1) return 'due today';
  return days === 1 ? 'due tomorrow' : `due in ${days} days`;
}

const STORAGE_PREFIX = 'opening-coach:v1:progress:';

export function loadProgress(repId: string): Progress {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PREFIX + repId) ?? '{}') as Progress;
  } catch {
    return {};
  }
}

export function saveProgress(repId: string, progress: Progress): void {
  localStorage.setItem(STORAGE_PREFIX + repId, JSON.stringify(progress));
}
