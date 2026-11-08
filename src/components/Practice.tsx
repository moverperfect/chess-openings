import { useEffect, useMemo, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import type { BuiltRepertoire, Edge } from '../lib/repertoire';
import { findElsewhere, formatMove, groupLines, quizOptions, shortName } from '../lib/repertoire';
import { describeDue, pickNext, type Progress } from '../lib/srs';
import { Board } from './Board';
import { MasteryDots } from './common';

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const OPPONENT_DELAY = 650;

type Phase = 'opponent' | 'yours' | 'quiz' | 'review' | 'done';

type FeedItem =
  | { kind: 'opponent'; edge: Edge }
  | { kind: 'you'; edge: Edge; quiz?: 'pending' | 'right' | 'wrong' }
  | { kind: 'wrong'; label: string; reason?: string; elsewhere?: string };

interface Run {
  lineId: string;
  /** Number of plies played so far. */
  ply: number;
  phase: Phase;
  mistakes: number;
  triesThisMove: number;
  hint: 0 | 1 | 2;
  feed: FeedItem[];
  quiz?: { options: string[]; picked?: string };
}

function freshRun(lineId: string): Run {
  return { lineId, ply: 0, phase: 'opponent', mistakes: 0, triesThisMove: 0, hint: 0, feed: [] };
}

function useQuizSetting() {
  const [on, setOn] = useState(() => localStorage.getItem('opening-coach:quiz') !== 'off');
  useEffect(() => {
    localStorage.setItem('opening-coach:quiz', on ? 'on' : 'off');
  }, [on]);
  return [on, setOn] as const;
}

export function Practice({
  rep,
  progress,
  initialLineId,
  allReps,
  onResult,
  onStudy,
}: {
  rep: BuiltRepertoire;
  /** Every repertoire, to say which one a stray move belongs to. */
  allReps: BuiltRepertoire[];
  progress: Progress;
  initialLineId: string | null;
  onResult: (lineId: string, mistakes: number) => void;
  onStudy: (lineId: string) => void;
}) {
  const lineIds = useMemo(() => rep.lines.map((l) => l.spec.id), [rep]);
  const [mode, setMode] = useState<'auto' | string>(initialLineId ?? 'auto');
  const [run, setRun] = useState<Run>(() => freshRun(initialLineId ?? pickNext(lineIds, progress)));
  const [quizOn, setQuizOn] = useQuizSetting();
  const [resetToken, setResetToken] = useState(0);
  const recorded = useRef(false);

  const line = rep.lineById.get(run.lineId)!;
  const plies = line.plies;
  const lastEdge = run.ply > 0 ? plies[run.ply - 1] : undefined;
  const expected = plies[run.ply] as Edge | undefined;
  const fen = lastEdge ? lastEdge.fenAfter : START_FEN;

  /** Decide the phase for the position after `ply` plies. */
  const phaseAt = (ply: number): Phase =>
    ply >= plies.length ? 'done' : plies[ply].mover === rep.side ? 'yours' : 'opponent';

  // Opponent auto-play.
  useEffect(() => {
    if (run.phase !== 'opponent') return;
    if (phaseAt(run.ply) !== 'opponent') {
      setRun((r) => ({ ...r, phase: phaseAt(r.ply) }));
      return;
    }
    const t = setTimeout(() => {
      setRun((r) => {
        const edge = plies[r.ply];
        return { ...r, ply: r.ply + 1, phase: phaseAt(r.ply + 1), feed: [...r.feed, { kind: 'opponent', edge }] };
      });
    }, OPPONENT_DELAY);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run.phase, run.ply, run.lineId]);

  // Record the result once the line is finished.
  useEffect(() => {
    if (run.phase === 'done' && !recorded.current) {
      recorded.current = true;
      onResult(run.lineId, run.mistakes);
    }
  }, [run.phase, run.lineId, run.mistakes, onResult]);

  const start = (lineId: string) => {
    recorded.current = false;
    setRun(freshRun(lineId));
    setResetToken((t) => t + 1);
  };

  const nextLine = () => start(mode === 'auto' ? pickNext(lineIds, progress, run.lineId) : mode);

  const handleMove = (from: string, to: string) => {
    if (run.phase !== 'yours' || !expected) return;
    const chess = new Chess(expected.fenBefore);
    let san: string;
    try {
      san = chess.move({ from, to, promotion: 'q' }).san;
    } catch {
      setResetToken((t) => t + 1);
      return;
    }
    if (san === expected.san) {
      const quiz = quizOn ? { options: quizOptions(rep, expected) } : undefined;
      setRun((r) => ({
        ...r,
        ply: r.ply + 1,
        phase: quiz ? 'quiz' : 'review',
        triesThisMove: 0,
        hint: 0,
        quiz,
        feed: [...r.feed, { kind: 'you', edge: expected, quiz: quiz ? 'pending' : undefined }],
      }));
    } else {
      const avoid = expected.avoid.find((a) => a.san === san);
      const other = findElsewhere(allReps, rep, plies.slice(0, run.ply), san).find((h) => h.ownMove);
      const elsewhere = other && `That's your ${shortName(other.rep)} move, but this is the ${shortName(rep)}.`;
      setRun((r) => {
        const tries = r.triesThisMove + 1;
        return {
          ...r,
          mistakes: r.mistakes + 1,
          triesThisMove: tries,
          hint: tries >= 2 ? (Math.max(r.hint, 1) as 1 | 2) : r.hint,
          feed: [...r.feed, { kind: 'wrong', label: formatMove({ ...expected, san }), reason: avoid?.why, elsewhere }],
        };
      });
      setResetToken((t) => t + 1);
    }
  };

  const answerQuiz = (option: string) => {
    if (run.phase !== 'quiz' || !lastEdge) return;
    const right = option === lastEdge.why;
    setRun((r) => {
      const feed = [...r.feed];
      const last = feed[feed.length - 1];
      if (last?.kind === 'you') feed[feed.length - 1] = { ...last, quiz: right ? 'right' : 'wrong' };
      return {
        ...r,
        phase: 'review',
        mistakes: r.mistakes + (right ? 0 : 1),
        quiz: r.quiz && { ...r.quiz, picked: option },
        feed,
      };
    });
  };

  const continueRun = () => setRun((r) => ({ ...r, phase: phaseAt(r.ply), quiz: undefined }));

  const showHint = () =>
    setRun((r) => ({ ...r, hint: (r.hint === 0 ? 1 : 2) as 1 | 2, mistakes: r.hint === 1 ? r.mistakes + 1 : r.mistakes }));

  // Keyboard: Enter/Space continues, 1–4 answers the quiz.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLSelectElement) return;
      if (run.phase === 'review' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        continueRun();
      } else if (run.phase === 'quiz' && run.quiz && /^[1-4]$/.test(e.key)) {
        const option = run.quiz.options[Number(e.key) - 1];
        if (option) answerQuiz(option);
      } else if (run.phase === 'done' && e.key === 'Enter') {
        nextLine();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Keep the newest feed item in view.
  const feedEnd = useRef<HTMLDivElement>(null);
  useEffect(() => {
    feedEnd.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [run.feed.length, run.phase]);

  // What to draw on the board.
  let arrows: string[] | undefined;
  if (run.phase === 'yours') {
    if (run.hint === 1 && expected) arrows = [`${expected.from}:g`];
    else if (run.hint === 2 && expected) arrows = [`${expected.from}${expected.to}:g`];
    else arrows = lastEdge?.arrows;
  } else if (run.phase === 'review' || run.phase === 'done' || run.phase === 'opponent') {
    arrows = lastEdge?.arrows;
  }

  const lineProgress = progress[run.lineId];

  return (
    <div className="layout-2">
      <section className="board-col">
        <Board
          fen={fen}
          orientation={rep.side}
          lastMove={lastEdge ? [lastEdge.from, lastEdge.to] : undefined}
          arrows={arrows}
          onMove={run.phase === 'yours' ? handleMove : undefined}
          resetToken={resetToken}
        />
        <div className="status-bar">
          {run.phase === 'yours' && <span className="turn-cue">Your move{expected ? ` (${expected.mover})` : ''}</span>}
          {run.phase === 'opponent' && <span className="muted">Opponent is thinking…</span>}
          {run.phase === 'quiz' && <span className="turn-cue">Correct! Now: why?</span>}
          {run.phase === 'review' && <span className="muted">Press Enter to continue</span>}
          {run.phase === 'done' && <span className="turn-cue">Line complete</span>}
          <span className="spacer" />
          {run.mistakes > 0 && run.phase !== 'done' && (
            <span className="mistakes">{run.mistakes} slip{run.mistakes === 1 ? '' : 's'}</span>
          )}
        </div>
      </section>

      <section className="panel practice-panel">
        <div className="practice-toolbar">
          <select
            value={mode}
            onChange={(e) => {
              const v = e.target.value;
              setMode(v);
              start(v === 'auto' ? pickNext(lineIds, progress) : v);
            }}
          >
            <option value="auto">Smart review: due lines first</option>
            {groupLines(rep).map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.lines.map((l) => (
                  <option key={l.spec.id} value={l.spec.id}>
                    {l.spec.name} · {describeDue(progress[l.spec.id])}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <label className="toggle">
            <input type="checkbox" checked={quizOn} onChange={(e) => setQuizOn(e.target.checked)} />
            Ask me why
          </label>
        </div>

        <div className="feed">
          {run.feed.length === 0 && (
            <div className="feed-intro">
              <p>
                Play your repertoire moves from memory. The opponent follows one of your lines, and it keeps the name hidden so it feels like a real
                game.
              </p>
              <p className="muted small">
                After each of your moves you'll be asked <em>why</em> you played it. Getting the reason right counts as much as the move.
              </p>
            </div>
          )}
          {run.feed.map((item, i) => (
            <FeedRow key={i} item={item} />
          ))}
          <div ref={feedEnd} />
        </div>

        {run.phase === 'yours' && (
          <div className="action-bar">
            <button onClick={showHint} disabled={run.hint === 2}>
              {run.hint === 0 ? 'Hint: which piece?' : 'Show me the move'}
            </button>
          </div>
        )}

        {(run.phase === 'quiz' || (run.phase === 'review' && run.quiz)) && lastEdge && run.quiz && (
          <div className="card quiz">
            <div className="card-label">Why {formatMove(lastEdge)}?</div>
            <div className="options">
              {run.quiz.options.map((o, i) => {
                const picked = run.quiz!.picked;
                let cls = 'option';
                if (picked) {
                  if (o === lastEdge.why) cls += ' correct';
                  else if (o === picked) cls += ' incorrect';
                  else cls += ' faded';
                }
                return (
                  <button key={o} className={cls} onClick={() => answerQuiz(o)} disabled={Boolean(picked)}>
                    <span className="option-key">{i + 1}</span>
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {run.phase === 'review' && lastEdge &&
          (run.quiz && !lastEdge.detail ? (
            <button className="primary wide" onClick={continueRun}>
              Continue ↵
            </button>
          ) : (
            <div className="card review">
              {!run.quiz && <p className="why">{lastEdge.why}</p>}
              {lastEdge.detail && <p className="detail">{lastEdge.detail}</p>}
              <button className="primary wide" onClick={continueRun}>
                Continue ↵
              </button>
            </div>
          ))}

        {run.phase === 'done' && (
          <div className="card done">
            <div className="done-head">
              <div>
                <div className="eyebrow">{line.spec.group}</div>
                <h3>{line.spec.name}</h3>
              </div>
              <div className={`score ${run.mistakes === 0 ? 'clean' : ''}`}>
                {run.mistakes === 0 ? 'Clean run ✓' : `${run.mistakes} slip${run.mistakes === 1 ? '' : 's'}`}
              </div>
            </div>
            <p className="muted small">
              <MasteryDots box={lineProgress?.box ?? 0} /> Next review: {describeDue(lineProgress)}
            </p>
            <div className="card-label">The story</div>
            <p>{line.spec.story}</p>
            <div className="card-label">The plan from here</div>
            <p>{line.spec.plan}</p>
            <div className="button-row">
              <button className="primary" onClick={nextLine}>
                Next line ↵
              </button>
              <button onClick={() => start(run.lineId)}>Again</button>
              <button onClick={() => onStudy(run.lineId)}>Study it</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function FeedRow({ item }: { item: FeedItem }) {
  if (item.kind === 'wrong') {
    return (
      <div className="feed-row wrong">
        <span className="feed-move">✗ {item.label}</span>
        <span>
          {item.elsewhere && <>{item.elsewhere} </>}
          {item.reason ?? (item.elsewhere ? 'Try again.' : 'Not your repertoire move. Try again.')}
        </span>
      </div>
    );
  }
  const { edge } = item;
  return (
    <div className={`feed-row ${item.kind}`}>
      <span className="feed-move">
        {item.kind === 'you' ? '✓ ' : ''}
        {formatMove(edge)}
        {item.kind === 'you' && item.quiz === 'right' && <span className="quiz-mark right"> · reason ✓</span>}
        {item.kind === 'you' && item.quiz === 'wrong' && <span className="quiz-mark wrong"> · reason ✗</span>}
      </span>
      <span>{item.kind === 'you' && item.quiz === 'pending' ? '…' : edge.why}</span>
    </div>
  );
}
