import type { Edge, BuiltRepertoire } from '../lib/repertoire';
import { formatMove, groupLines } from '../lib/repertoire';
import { describeDue, MAX_BOX, statusOf, type Progress } from '../lib/srs';

export function StatusPill({ progress }: { progress: Progress[string] | undefined }) {
  const status = statusOf(progress);
  const label = status === 'learning' ? describeDue(progress) : status;
  return <span className={`pill pill-${status}`}>{label}</span>;
}

export function MasteryDots({ box }: { box: number }) {
  return (
    <span className="dots" title={`Memory strength ${box}/${MAX_BOX}`}>
      {Array.from({ length: MAX_BOX }, (_, i) => (
        <span key={i} className={i < box ? 'dot on' : 'dot'} />
      ))}
    </span>
  );
}

export function LineList({
  rep,
  progress,
  selected,
  onSelect,
  onPath,
}: {
  rep: BuiltRepertoire;
  progress: Progress;
  selected?: string;
  onSelect: (id: string) => void;
  /** Lines that pass through the position on the board. */
  onPath?: Set<string>;
}) {
  return (
    <div className="line-list">
      {groupLines(rep).map((g) => (
        <section key={g.group}>
          <h4>{g.group}</h4>
          {g.lines.map((l) => (
            <button
              key={l.spec.id}
              className={`line-item ${selected === l.spec.id ? 'selected' : ''} ${onPath?.has(l.spec.id) ? 'on-path' : ''}`}
              onClick={() => onSelect(l.spec.id)}
            >
              <span className="line-name">{l.spec.name}</span>
              <span className="line-meta">
                <MasteryDots box={progress[l.spec.id]?.box ?? 0} />
                <StatusPill progress={progress[l.spec.id]} />
              </span>
            </button>
          ))}
        </section>
      ))}
    </div>
  );
}

/** Numbered move list, e.g. "1. e4 e5 2. Nf3 Nc6". */
export function MoveList({
  plies,
  side,
  ply,
  onJump,
  revealUpTo,
  isBranch,
  blurAhead,
}: {
  plies: Edge[];
  side: string;
  /** Number of plies played; the ply-th move is highlighted as current. */
  ply: number;
  onJump?: (ply: number) => void;
  /** Hide moves beyond this many plies (for practice). */
  revealUpTo?: number;
  /** Marks moves that had alternatives in the repertoire. */
  isBranch?: (edge: Edge) => boolean;
  /** Blur moves after `ply` (revealed on hover) so the next move isn't given away. */
  blurAhead?: boolean;
}) {
  const shown = revealUpTo === undefined ? plies : plies.slice(0, revealUpTo);
  return (
    <div className={`move-list ${blurAhead ? 'blur-ahead' : ''}`}>
      {shown.map((e, i) => {
        const showNumber = e.mover === 'white' || i === 0;
        return (
          <span key={i} className={`move-cell ${i >= ply ? 'ahead' : ''}`}>
            {showNumber && <span className="move-no">{e.moveNumber}{e.mover === 'white' ? '.' : '…'}</span>}
            <button
              className={`move ${i + 1 === ply ? 'current' : ''} ${e.mover === side ? 'yours' : 'theirs'} ${isBranch?.(e) ? 'branch' : ''}`}
              title={isBranch?.(e) ? 'Other moves are covered here' : undefined}
              onClick={() => onJump?.(i + 1)}
              disabled={!onJump}
            >
              {e.san}
            </button>
          </span>
        );
      })}
    </div>
  );
}

export function Explanation({ edge, side }: { edge: Edge; side: string }) {
  const yours = edge.mover === side;
  return (
    <div className={`explain ${yours ? 'explain-yours' : 'explain-theirs'}`}>
      <div className="explain-head">
        <span className="explain-move">{formatMove(edge)}</span>
        <span className={`who ${yours ? 'who-you' : 'who-them'}`}>{yours ? 'Your move' : 'Their move'}</span>
      </div>
      <p className="why">{edge.why}</p>
      {edge.detail && <p className="detail">{edge.detail}</p>}
      {edge.avoid.length > 0 && (
        <div className="avoid">
          {edge.avoid.map((a) => (
            <p key={a.san}>
              <strong>Don't play {a.san}:</strong> {a.why}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
