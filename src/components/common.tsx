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
