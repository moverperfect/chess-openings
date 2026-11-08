import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Chess } from 'chess.js';
import type { BuiltRepertoire, Edge, Elsewhere } from '../lib/repertoire';
import { findElsewhere, followEdge, formatMove, movesAfter, shortName } from '../lib/repertoire';
import type { Progress } from '../lib/srs';
import { Board } from './Board';
import { Explanation, LineList, MoveList } from './common';

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

/** Shown after a move on the board that the repertoire doesn't play. */
type Miss = {
  label: string;
  yours: boolean;
  reason?: string;
  expected?: Edge;
  covered: Edge[];
  /** Other repertoires that cover the move. */
  elsewhere: Elsewhere[];
};

/** Where to open Learn: a line, how far in, and optionally the exact moves to show. */
export type LearnTarget = { lineId: string; ply: number; path?: Edge[] };

export function Learn({
  rep,
  progress,
  target,
  allReps,
  onPractise,
  onOpenElsewhere,
}: {
  rep: BuiltRepertoire;
  progress: Progress;
  target: LearnTarget | null;
  /** Every repertoire, to say which one a stray move belongs to. */
  allReps: BuiltRepertoire[];
  onPractise: (lineId: string) => void;
  onOpenElsewhere: (hit: Elsewhere) => void;
}) {
  const initial = rep.lineById.get(target?.lineId ?? '') ?? rep.lines[0];
  const [lineId, setLineId] = useState(initial.spec.id);
  /** The moves being explored: the moves played so far, then the rest of the line being followed. */
  const [path, setPath] = useState<Edge[]>(target?.path ?? initial.plies);
  const [ply, setPly] = useState(target?.ply ?? 0);
  const [miss, setMiss] = useState<Miss | null>(null);
  const [resetToken, setResetToken] = useState(0);

  const openLine = (id: string, at = 0, through?: Edge[]) => {
    const l = rep.lineById.get(id);
    if (!l) return;
    setLineId(id);
    setPath(through ?? l.plies);
    setPly(at);
    setMiss(null);
  };

  useEffect(() => {
    if (target) openLine(target.lineId, target.ply, target.path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const line = rep.lineById.get(lineId) ?? rep.lines[0];
  const total = path.length;
  const played = useMemo(() => path.slice(0, ply), [path, ply]);
  const edge = ply > 0 ? path[ply - 1] : undefined;
  const fen = edge ? edge.fenAfter : START_FEN;
  const options = useMemo(() => movesAfter(rep, played), [rep, played]);
  const yourTurn = (new Chess(fen).turn() === 'w' ? 'white' : 'black') === rep.side;
  const yourMove = yourTurn ? options[0] : undefined;
  const theirOptions = yourTurn ? [] : options;
  const atEnd = ply === total;

  const goTo = (p: number) => {
    setPly(Math.max(0, Math.min(p, total)));
    setMiss(null);
  };

  /** Play a repertoire move: stay on the current path if it's the next move, else branch. */
  const play = (next: Edge) => {
    setMiss(null);
    if (path[ply] === next) {
      setPly(ply + 1);
      return;
    }
    const branch = followEdge(rep, played, next, lineId);
    setLineId(branch.lineId);
    setPath(branch.path);
    setPly(ply + 1);
  };

  const handleMove = (from: string, to: string) => {
    let san: string;
    try {
      san = new Chess(fen).move({ from, to, promotion: 'q' }).san;
    } catch {
      setResetToken((t) => t + 1);
      return;
    }
    const match = options.find((o) => o.san === san);
    if (match) {
      play(match);
      return;
    }
    const mover = yourTurn ? rep.side : rep.side === 'white' ? 'black' : 'white';
    const moveNumber = new Chess(fen).moveNumber();
    setMiss({
      label: formatMove({ san, mover, moveNumber }),
      yours: yourTurn,
      reason: yourMove?.avoid.find((a) => a.san === san)?.why,
      expected: yourMove,
      covered: theirOptions,
      elsewhere: findElsewhere(allReps, rep, played, san),
    });
    setResetToken((t) => t + 1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
      if (e.key === 'ArrowRight') goTo(ply + 1);
      else if (e.key === 'ArrowLeft') goTo(ply - 1);
      else if (e.key === 'Home') goTo(0);
      else if (e.key === 'End') goTo(total);
      else if (/^[1-9]$/.test(e.key) && theirOptions[Number(e.key) - 1]) play(theirOptions[Number(e.key) - 1]);
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const onPath = useMemo(() => new Set([lineId, ...options.flatMap((o) => o.lineIds)]), [lineId, options]);
  const isBranch = (e: Edge) => (rep.edgesByKey.get(e.key)?.length ?? 0) > 1;

  return (
    <div className="layout-3">
      <aside className="sidebar">
        <div className="rep-intro">
          <h2>{rep.spec.name}</h2>
          <p className="muted">{rep.spec.tagline}</p>
        </div>
        <LineList rep={rep} progress={progress} selected={line.spec.id} onPath={onPath} onSelect={(id) => openLine(id)} />
      </aside>

      <section className="board-col">
        <Board
          fen={fen}
          orientation={rep.side}
          lastMove={edge ? [edge.from, edge.to] : undefined}
          arrows={edge?.arrows}
          onMove={handleMove}
          resetToken={resetToken}
        />
        <div className="controls">
          <button onClick={() => goTo(0)} disabled={ply === 0} title="Start (Home)">⏮</button>
          <button onClick={() => goTo(ply - 1)} disabled={ply === 0} title="Back (←)">◀</button>
          <span className="ply-count">
            {ply} / {total}
          </span>
          <button className="primary" onClick={() => goTo(ply + 1)} disabled={atEnd} title="Next along this line (→)">▶</button>
          <button onClick={() => goTo(total)} disabled={atEnd} title="End (End)">⏭</button>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div className="eyebrow">{line.spec.group}</div>
          <h2>{line.spec.name}</h2>
        </div>

        <MoveList plies={path} side={rep.side} ply={ply} onJump={goTo} isBranch={isBranch} blurAhead />

        {ply === 0 && (
          <div className="card story">
            <div className="card-label">The story of this line</div>
            <p>{line.spec.story}</p>
            <p className="muted small">
              Play the moves on the board, for both sides. When they have a choice, pick one and you'll follow that
              variation. ▶ or the → key steps along the line instead. Your moves are gold; theirs are grey.
            </p>
          </div>
        )}

        {edge && <Explanation edge={edge} side={rep.side} />}

        {miss && <MissCard miss={miss} onShow={play} onOpenElsewhere={onOpenElsewhere} />}

        {!miss && yourMove && (
          <div className="think">
            <span>🤔 Your move. Play it on the board, and say why before you do.</span>
            <button className="think-show" onClick={() => play(yourMove)}>Show me</button>
          </div>
        )}

        {theirOptions.length > 0 && (
          <div className="card choices">
            <div className="card-label">
              {theirOptions.length > 1 ? `Their choices here (${theirOptions.length})` : 'Their reply'}
            </div>
            {theirOptions.length > 1 && (
              <p className="muted small">Play one on the board, or pick one to follow that variation.</p>
            )}
            <div className="choice-list">
              {theirOptions.map((o, i) => (
                <button
                  key={o.san}
                  className={`choice ${path[ply] === o ? 'on-line' : ''}`}
                  onClick={() => play(o)}
                  title={theirOptions.length > 1 ? `Key ${i + 1}` : undefined}
                >
                  <span className="choice-move">{formatMove(o)}</span>
                  <span className="choice-why">{o.why}</span>
                  <span className="choice-meta">
                    {o.lineIds.length} line{o.lineIds.length === 1 ? '' : 's'}
                    {path[ply] === o && ' · this line'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {atEnd && (
          <div className="card plan">
            <div className="card-label">When the book runs out: the plan</div>
            <p>{line.spec.plan}</p>
            <button className="primary wide" onClick={() => onPractise(line.spec.id)}>
              Practise this line from memory →
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function MissCard({
  miss,
  onShow,
  onOpenElsewhere,
}: {
  miss: Miss;
  onShow: (e: Edge) => void;
  onOpenElsewhere: (hit: Elsewhere) => void;
}) {
  const own = miss.elsewhere.filter((h) => h.ownMove);
  let title: string;
  let body: ReactNode;
  if (miss.yours) {
    title = own.length ? `${miss.label} belongs to another repertoire` : `${miss.label} isn't the repertoire move`;
    body = miss.reason ? (
      <p>{miss.reason}</p>
    ) : (
      !own.length && <p className="muted">Try again: think about what the position needs.</p>
    );
  } else if (miss.covered.length === 0) {
    title = miss.elsewhere.length ? `${miss.label} goes beyond this repertoire` : 'The book ends here';
    body = <p className="muted">From here you play on the plan below rather than memorised moves.</p>;
  } else {
    title = `${miss.label} isn't covered in this repertoire`;
    body = (
      <p className="muted">
        It covers{' '}
        {miss.covered.map((e, i) => (
          <span key={e.san}>
            {i > 0 && (i === miss.covered.length - 1 ? ' and ' : ', ')}
            <strong>{e.san}</strong>
          </span>
        ))}{' '}
        here.{!miss.elsewhere.length && " Other moves aren't in any of your repertoires yet."}
      </p>
    );
  }

  return (
    <div className="card miss">
      <div className="card-label">{title}</div>
      {body}
      {miss.elsewhere.map((hit) => (
        <div key={hit.rep.spec.id} className="elsewhere">
          <p>
            {hit.ownMove ? (
              <>
                It's your move in the <strong>{shortName(hit.rep)}</strong> repertoire.
              </>
            ) : (
              <>
                Your <strong>{shortName(hit.rep)}</strong> repertoire covers it as{' '}
                {hit.rep.side === 'white' ? "Black's" : "White's"} move.
              </>
            )}
          </p>
          <button onClick={() => onOpenElsewhere(hit)}>Continue in {shortName(hit.rep)} →</button>
        </div>
      ))}
      {miss.yours && miss.expected && (
        <button className="miss-show" onClick={() => onShow(miss.expected!)}>
          Show me this repertoire's move
        </button>
      )}
    </div>
  );
}
