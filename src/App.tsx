import { useCallback, useEffect, useMemo, useState } from 'react';
import { ALL_REPERTOIRES } from './data';
import { buildRepertoire, shortName } from './lib/repertoire';
import { grade, loadProgress, saveProgress, statusOf, type Progress } from './lib/srs';
import { Explorer, type ExplorerPosition } from './components/Explorer';
import { Practice } from './components/Practice';
import { MapView } from './components/MapView';

const REPERTOIRES = ALL_REPERTOIRES.map(buildRepertoire);

for (const rep of REPERTOIRES) {
  if (rep.problems.length) console.warn(`Problems in ${rep.spec.name}:`, rep.problems);
}

type Tab = 'learn' | 'practice' | 'map';

function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? initial : (JSON.parse(raw) as T);
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as const;
}

export function App() {
  const [repId, setRepId] = usePersistentState('opening-coach:rep-id', REPERTOIRES[0].spec.id);
  const [tab, setTab] = usePersistentState<Tab>('opening-coach:tab', 'learn');
  const rep = REPERTOIRES.find((r) => r.spec.id === repId) ?? REPERTOIRES[0];

  const [progress, setProgress] = useState<Progress>(() => loadProgress(rep.spec.id));
  useEffect(() => {
    setProgress(loadProgress(rep.spec.id));
  }, [rep.spec.id]);

  const recordResult = useCallback(
    (lineId: string, mistakes: number) => {
      setProgress((prev) => {
        const next = { ...prev, [lineId]: grade(prev[lineId], mistakes) };
        saveProgress(rep.spec.id, next);
        return next;
      });
    },
    [rep.spec.id],
  );

  const [position, setPosition] = usePersistentState<ExplorerPosition>('opening-coach:explorer', {
    sans: [],
    cursor: 0,
    orientation: 'white',
  });
  const [practiceTarget, setPracticeTarget] = useState<string | null>(null);

  /** Open a repertoire line in the explorer, `ply` moves in, with the rest of the line ahead. */
  const openLearn = (lineId: string, ply = 0) => {
    const line = rep.lineById.get(lineId);
    if (line) setPosition({ sans: line.plies.map((e) => e.san), cursor: ply, orientation: rep.side });
    setTab('learn');
    window.scrollTo(0, 0);
  };
  const openPractice = (lineId: string | null, repertoireId = rep.spec.id) => {
    setRepId(repertoireId);
    setPracticeTarget(lineId);
    setTab('practice');
    window.scrollTo(0, 0);
  };

  const counts = useMemo(() => {
    const c = { new: 0, due: 0, learning: 0, mastered: 0 };
    for (const l of rep.lines) c[statusOf(progress[l.spec.id])]++;
    return c;
  }, [rep, progress]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">♞</span>
          <div>
            <div className="brand-name">Opening Coach</div>
            <div className="brand-sub">Know the move. Know the reason.</div>
          </div>
        </div>

        {/* The explorer covers every repertoire at once; Practise and Map work on one. */}
        {tab !== 'learn' && (
        <div className="side-switch" role="tablist" aria-label="Repertoire">
          {REPERTOIRES.map((r) => (
            <button
              key={r.spec.id}
              role="tab"
              aria-selected={r === rep}
              className={r === rep ? 'active' : ''}
              onClick={() => {
                setRepId(r.spec.id);
                setPracticeTarget(null);
              }}
            >
              <span className={`side-dot side-dot-${r.side}`} />
              {shortName(r)}
            </button>
          ))}
        </div>
        )}

        <nav className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'learn'} className={tab === 'learn' ? 'active' : ''} onClick={() => setTab('learn')}>
            Learn
          </button>
          <button role="tab" aria-selected={tab === 'practice'} className={tab === 'practice' ? 'active' : ''} onClick={() => openPractice(null)}>
            Practise
            {counts.due + counts.new > 0 && <span className="badge">{counts.due + counts.new}</span>}
          </button>
          <button role="tab" aria-selected={tab === 'map'} className={tab === 'map' ? 'active' : ''} onClick={() => setTab('map')}>
            Map &amp; Ideas
          </button>
        </nav>
      </header>

      <main>
        {tab === 'learn' && (
          <Explorer
            reps={REPERTOIRES}
            position={position}
            onPosition={setPosition}
            onPractise={(repertoireId, lineId) => openPractice(lineId, repertoireId)}
          />
        )}
        {tab === 'practice' && (
          <Practice
            key={rep.spec.id}
            rep={rep}
            progress={progress}
            initialLineId={practiceTarget}
            allReps={REPERTOIRES}
            onResult={recordResult}
            onStudy={(id) => openLearn(id)}
          />
        )}
        {tab === 'map' && <MapView rep={rep} progress={progress} counts={counts} onOpen={openLearn} />}
      </main>
    </div>
  );
}
