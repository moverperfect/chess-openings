import { describe, expect, it } from 'vitest';
import { Chess } from 'chess.js';
import { ALL_REPERTOIRES } from '../data';
import { STRATEGIES } from '../data/strategies';
import {
  candidatesAt,
  groupHits,
  linesEndingAt,
  nameAndParents,
  repertoireHits,
  strategyFor,
  toOpening,
  treeNames,
  treeNodes,
  walk,
} from './explorer';
import { buildRepertoire, positionKey } from './repertoire';

const reps = ALL_REPERTOIRES.map(buildRepertoire);
const fenOf = (key: string) => `${key} 0 1`;

describe('club move snapshot', () => {
  it('only holds legal moves', () => {
    for (const [key, node] of Object.entries(treeNodes())) {
      for (const m of node.moves) expect(() => new Chess(fenOf(key)).move(m.san), `${m.san} in ${key}`).not.toThrow();
    }
  });

  it('offers every repertoire move in every repertoire position', () => {
    for (const rep of reps) {
      for (const [key, edges] of rep.edgesByKey) {
        const sans = candidatesAt(reps, fenOf(key), undefined).map((c) => c.san);
        for (const e of edges) expect(sans, `${rep.spec.name}: ${e.san} in ${key}`).toContain(e.san);
      }
    }
  });
});

describe('strategy notes', () => {
  const names = new Set(Object.values(treeNames()).map((n) => n.name));
  const families = new Set([...names].map((n) => toOpening({ eco: '', name: n }).family));

  it('cover every opening name in the snapshot, directly or through a parent', () => {
    for (const name of names) expect(strategyFor(name), name).toBeDefined();
  });

  it('are keyed by real opening names (no typos)', () => {
    for (const key of Object.keys(STRATEGIES)) expect(names.has(key) || families.has(key), key).toBe(true);
  });

  it('fill in every field', () => {
    for (const [key, s] of Object.entries(STRATEGIES)) {
      for (const field of [s.idea, s.white, s.black]) expect(field.trim().length, key).toBeGreaterThan(20);
    }
  });

  it('fall back from a variation to its parents', () => {
    expect(nameAndParents('A: B, C')).toEqual(['A: B, C', 'A: B', 'A']);
    expect(strategyFor('Four Knights Game: Made-up Variation')?.from).toBe('Four Knights Game');
  });
});

describe('walk', () => {
  it('names the position and keeps the name through unnamed moves', () => {
    const steps = walk(reps, ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4']);
    expect(steps[5].opening?.name).toBe('Four Knights Game');
    expect(steps[5].renamed).toBe(true);
    expect(steps[7].opening?.short).toBe('Rubinstein Variation');
    expect(steps[7].hits.find((h) => h.rep.side === 'black')?.own).toBe(true);
  });

  it('stops at an illegal move', () => {
    expect(walk(reps, ['e4', 'e4', 'Nf3'])).toHaveLength(1);
  });
});

describe('repertoire hits', () => {
  it('group the three White repertoires when they share an explanation', () => {
    const key = positionKey(new Chess().fen());
    const groups = groupHits(repertoireHits(reps, key, 'e4'));
    const own = groups.filter((g) => g.own);
    expect(own.flatMap((g) => g.reps).filter((r) => r.side === 'white')).toHaveLength(3);
  });

  it('find where each line hands over to its plan, unless it transposes into another line', () => {
    for (const rep of reps) {
      for (const line of rep.lines) {
        const end = line.plies[line.plies.length - 1].fenAfter;
        const transposes = rep.edgesByKey.has(positionKey(end));
        expect(linesEndingAt(reps, end).some((x) => x.line === line), line.spec.id).toBe(!transposes);
      }
    }
  });
});
