import { useEffect, useMemo, useState } from 'react';
import { Chess } from 'chess.js';
import type { Side } from '../data/types';
import {
  START_FEN,
  candidatesAt,
  groupHits,
  inSnapshot,
  linesEndingAt,
  moveLabel,
  pct,
  repLabel,
  strategyFor,
  walk,
  type Candidate,
  type RepHit,
  type Step,
} from '../lib/explorer';
import type { BuiltRepertoire } from '../lib/repertoire';
import { Board } from './Board';

/** Where the explorer is: the moves on the board (and any ahead of the cursor), and which way up. */
export interface ExplorerPosition {
  sans: string[];
  cursor: number;
  orientation: Side;
}

export function Explorer({
  reps,
  position,
  onPosition,
  onPractise,
}: {
  reps: BuiltRepertoire[];
  position: ExplorerPosition;
  onPosition: (p: ExplorerPosition) => void;
  onPractise: (repId: string, lineId: string) => void;
}) {
  const steps = useMemo(() => walk(reps, position.sans), [reps, position.sans]);
  const cursor = Math.min(position.cursor, steps.length);
  const last = cursor > 0 ? steps[cursor - 1] : undefined;
  const fen = last ? last.fenAfter : START_FEN;
  const opening = last?.opening;
  const toMove: Side = fen.split(' ')[1] === 'w' ? 'white' : 'black';
  const candidates = useMemo(() => candidatesAt(reps, fen, opening), [reps, fen, opening]);
  const endings = useMemo(() => linesEndingAt(reps, fen), [reps, fen]);
  const [hover, setHover] = useState<Candidate | null>(null);
  useEffect(() => setHover(null), [fen]);

  const goTo = (n: number) => onPosition({ ...position, cursor: Math.max(0, Math.min(n, steps.length)) });
  const play = (san: string) => {
    if (steps[cursor]?.san === san) return goTo(cursor + 1);
    onPosition({ ...position, sans: [...steps.slice(0, cursor).map((s) => s.san), san], cursor: cursor + 1 });
  };
  const playFromTo = (from: string, to: string) => {
    try {
      play(new Chess(fen).move({ from, to, promotion: 'q' }).san);
    } catch {
      // Illegal moves never reach here: the board only allows legal ones.
    }
  };
  const flip = () => onPosition({ ...position, orientation: position.orientation === 'white' ? 'black' : 'white' });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.metaKey || e.ctrlKey) return;
      if (e.key === 'ArrowLeft') goTo(cursor - 1);
      else if (e.key === 'ArrowRight') goTo(cursor + 1);
      else if (e.key === 'Home') goTo(0);
      else if (e.key === 'End') goTo(steps.length);
      else if (e.key === 'f') flip();
      else if (/^[1-9]$/.test(e.key) && candidates[Number(e.key) - 1]) play(candidates[Number(e.key) - 1].san);
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Hovering a reply shows it; otherwise the last move's teaching arrows, or the main replies.
  const teaching = last?.hits.find((h) => h.edge.arrows.length)?.edge.arrows;
  const arrows = hover
    ? [`${hover.from}${hover.to}:g`]
    : (teaching ?? candidates.slice(0, 4).map((c) => `${c.from}${c.to}:${c.hits.some((h) => h.own) ? 'y' : 'b'}`));

  const strat = strategyFor(opening?.name);

  return (
    <div className="explorer">
      <section className="explorer-board">
        <Board fen={fen} orientation={position.orientation} lastMove={last && [last.from, last.to]} arrows={arrows} onMove={playFromTo} />
        <div className="controls">
          <button onClick={() => goTo(0)} disabled={cursor === 0} title="Start (Home)">⏮</button>
          <button onClick={() => goTo(cursor - 1)} disabled={cursor === 0} title="Back (←)">◀</button>
          <button onClick={() => goTo(cursor + 1)} disabled={cursor === steps.length} title="Forward (→)">▶</button>
          <button onClick={() => goTo(steps.length)} disabled={cursor === steps.length} title="End (End)">⏭</button>
          <button onClick={flip} title="Flip the board (F)">⇅</button>
        </div>
      </section>

      <section className="explorer-panel">
        <header className="explorer-head">
          <div className="eyebrow">{opening ? opening.eco : 'Starting position'}</div>
          <h2>{opening?.family ?? 'Pick a first move'}</h2>
          {opening?.variation && <div className="explorer-variation">{opening.variation}</div>}
        </header>

        {steps.length > 0 && (
          <div className="explorer-path">
            {steps.map((s, i) => (
              <button
                key={i}
                className={`path-move ${i + 1 === cursor ? 'current' : ''} ${i >= cursor ? 'ahead' : ''} ${s.renamed ? 'renamed' : ''}`}
                onClick={() => goTo(i + 1)}
                title={s.renamed ? s.opening?.name : undefined}
              >
                {s.mover === 'white' || i === 0 ? moveLabel(s) : s.san}
              </button>
            ))}
          </div>
        )}

        {last && last.hits.length > 0 && <WhyCard step={last} />}

        <table className="replies">
          <thead>
            <tr>
              <th>{toMove === 'white' ? 'White' : 'Black'} plays</th>
              <th>Played</th>
              <th>Leads to</th>
              <th className="replies-results">Club results</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c, i) => (
              <tr
                key={c.san}
                className={c.hits.some((h) => h.own) ? 'own' : ''}
                onClick={() => play(c.san)}
                onMouseEnter={() => setHover(c)}
                onMouseLeave={() => setHover(null)}
                title={i < 9 ? `Play ${c.san} (key ${i + 1})` : undefined}
              >
                <td className="replies-san">{c.san}</td>
                <td className="replies-share">
                  <div className="share-bar">
                    <span style={{ width: `${Math.max(c.share * 100, 2)}%` }} />
                  </div>
                  {c.share > 0 ? pct(c.share) : 'rare'}
                </td>
                <td>
                  {c.renamed ? <span className="replies-name">{c.opening?.short}</span> : <span className="muted">same opening</span>}
                  <RepBadges hits={c.hits} />
                </td>
                <td className="replies-results">{c.share > 0 && <ResultBar result={c.result} />}</td>
              </tr>
            ))}
            {candidates.length === 0 && (
              <tr className="replies-empty">
                <td colSpan={4}>
                  {inSnapshot(fen)
                    ? 'No common moves from here.'
                    : 'Club players rarely reach this position, so there are no stats here. Keep playing freely, or step back.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {hover?.renamed && hover.opening && (
          <div className="card preview">
            <div className="card-label">
              {hover.san} leads to the {hover.opening.short}
            </div>
            <p>{strategyFor(hover.opening.name)?.strategy.idea}</p>
          </div>
        )}

        {endings.map(({ rep, line }) => (
          <div key={`${rep.spec.id}:${line.spec.id}`} className="card plan">
            <div className="card-label">
              The book ends here ({repLabel([rep])}: {line.spec.name}). The plan:
            </div>
            <p>{line.spec.plan}</p>
            <button className="primary" onClick={() => onPractise(rep.spec.id, line.spec.id)}>
              Practise this line from memory →
            </button>
          </div>
        ))}

        <div className="card strategy">
          <div className="card-label">
            The strategy{strat && opening && strat.from !== opening.name ? `: ${strat.from}` : ''}
          </div>
          {strat ? (
            <>
              <p>{strat.strategy.idea}</p>
              <p>
                <b className="side-w">White:</b> {strat.strategy.white}
              </p>
              <p>
                <b className="side-b">Black:</b> {strat.strategy.black}
              </p>
            </>
          ) : (
            <p className="muted">
              {opening
                ? 'No strategy notes for this opening yet.'
                : 'Pick a first move from the table, or play one on the board. Each row shows the opening that move leads to.'}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

/** Why the last move was played, from your repertoires, once per distinct explanation. */
function WhyCard({ step }: { step: Step }) {
  return (
    <div className="card why-card">
      {groupHits(step.hits).map((g) => (
        <div key={g.edge.why} className="why-group">
          <p>
            <span className={`tag ${g.own ? 'tag-own' : 'tag-prep'}`}>{g.own ? '★' : '✓'} {repLabel(g.reps)}</span>{' '}
            <b>{moveLabel(step)}</b> {g.edge.why}
          </p>
          {g.own && g.edge.detail && <p className="detail">{g.edge.detail}</p>}
          {g.own &&
            g.edge.avoid.map((a) => (
              <p key={a.san} className="avoid-line">
                <strong>Don't play {a.san}:</strong> {a.why}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
}

function RepBadges({ hits }: { hits: RepHit[] }) {
  const own = hits.filter((h) => h.own).map((h) => h.rep);
  const prep = hits.filter((h) => !h.own).map((h) => h.rep);
  return (
    <>
      {own.length > 0 && (
        <span className="tag tag-own" title="Your move in these repertoires">
          ★ {repLabel(own)}
        </span>
      )}
      {prep.length > 0 && (
        <span className="tag tag-prep" title="You have an answer prepared in these repertoires">
          ✓ {repLabel(prep)}
        </span>
      )}
    </>
  );
}

function ResultBar({ result }: { result: { white: number; draws: number; black: number } }) {
  const seg = (x: number) => (x > 0.18 ? pct(x) : '');
  return (
    <div className="result-bar" title={`White wins ${pct(result.white)} · draws ${pct(result.draws)} · Black wins ${pct(result.black)}`}>
      <span className="rw" style={{ width: `${result.white * 100}%` }}>{seg(result.white)}</span>
      <span className="rd" style={{ width: `${result.draws * 100}%` }}>{seg(result.draws)}</span>
      <span className="rb" style={{ width: `${result.black * 100}%` }}>{seg(result.black)}</span>
    </div>
  );
}
