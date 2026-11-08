import type { ReactNode } from 'react';
import type { BuiltRepertoire, Edge } from '../lib/repertoire';
import { groupLines, positionKey } from '../lib/repertoire';
import type { LineStatus, Progress } from '../lib/srs';
import { MasteryDots, StatusPill } from './common';

const START_KEY = positionKey('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

export function MapView({
  rep,
  progress,
  counts,
  onOpen,
}: {
  rep: BuiltRepertoire;
  progress: Progress;
  counts: Record<LineStatus, number>;
  onOpen: (lineId: string, ply: number) => void;
}) {
  const open = (edge: Edge) => {
    const lineId = edge.lineIds[0];
    const line = rep.lineById.get(lineId)!;
    onOpen(lineId, line.plies.indexOf(edge) + 1);
  };

  return (
    <div className="map">
      <section className="map-hero">
        <div>
          <h2>{rep.spec.name}</h2>
          <p className="lead">{rep.spec.intro}</p>
        </div>
        <div className="stats">
          <Stat n={counts.new} label="new" />
          <Stat n={counts.due} label="due" />
          <Stat n={counts.learning} label="learning" />
          <Stat n={counts.mastered} label="mastered" />
        </div>
      </section>

      <section>
        <h3 className="section-title">The big ideas</h3>
        <div className="principles">
          {rep.spec.principles.map((p, i) => (
            <div key={p.title} className="principle">
              <div className="principle-no">{i + 1}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="section-title">Repertoire map</h3>
        <p className="muted small">
          Gold moves are yours, grey moves are your opponent's choices. Click any move to study it.
        </p>
        <div className="tree">
          <Tree rep={rep} onOpen={open} />
        </div>
      </section>

      <section>
        <h3 className="section-title">Cheat sheet: every line in one sentence</h3>
        <div className="cheats">
          {groupLines(rep).map((g) => (
            <div key={g.group} className="cheat-group">
              <h4>{g.group}</h4>
              {g.lines.map((l) => (
                <button key={l.spec.id} className="cheat" onClick={() => onOpen(l.spec.id, 0)}>
                  <div className="cheat-head">
                    <strong>{l.spec.name}</strong>
                    <span>
                      <MasteryDots box={progress[l.spec.id]?.box ?? 0} /> <StatusPill progress={progress[l.spec.id]} />
                    </span>
                  </div>
                  <p>{l.spec.story}</p>
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className={`stat stat-${label}`}>
      <div className="stat-n">{n}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/** Render the move graph as an indented tree. Straight runs of moves share a row, and branches indent. */
function Tree({ rep, onOpen }: { rep: BuiltRepertoire; onOpen: (e: Edge) => void }) {
  const visited = new Set<string>();

  const moveButton = (e: Edge, forceNumber: boolean) => (
    <button key={e.key + e.san} className={`tmove ${e.mover === rep.side ? 'yours' : 'theirs'}`} onClick={() => onOpen(e)} title={e.why}>
      {e.mover === 'white' ? `${e.moveNumber}.` : forceNumber ? `${e.moveNumber}…` : ''}
      {e.san}
    </button>
  );

  const renderFrom = (edge: Edge, depth: number): ReactNode => {
    const row: ReactNode[] = [moveButton(edge, true)];
    let current = edge;
    for (;;) {
      const key = positionKey(current.fenAfter);
      if (visited.has(key)) {
        row.push(<span key="tr" className="transpose">↪ transposes</span>);
        return <div className="trow">{row}</div>;
      }
      visited.add(key);
      const children = rep.edgesByKey.get(key) ?? [];
      if (children.length === 1) {
        current = children[0];
        row.push(moveButton(current, false));
        continue;
      }
      return (
        <div className="tnode">
          <div className="trow">{row}</div>
          {children.length > 1 && (
            <div className="tchildren">
              {children.map((c) => (
                <div key={c.san} className="tbranch">
                  {renderFrom(c, depth + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  const roots = rep.edgesByKey.get(START_KEY) ?? [];
  return <>{roots.map((r) => <div key={r.san}>{renderFrom(r, 0)}</div>)}</>;
}
