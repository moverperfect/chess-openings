/** What do club players (1600–2200) and masters play here? npx tsx scripts/club.ts "e4 e5 Nf3" */
import { readFileSync } from 'node:fs';
import { Chess } from 'chess.js';
import { explore, total } from './explorer';

const token = readFileSync('.env.local', 'utf8').match(/LICHESS_TOKEN\s*=\s*['"]?([^'"\s]+)/)![1];
const chess = new Chess();
for (const san of (process.argv[2] ?? '').split(/\s+/).filter(Boolean)) chess.move(san);
for (const db of ['lichess', 'masters'] as const) {
  const r = await explore(db, chess.fen(), token);
  const all = total(r);
  const top = r.moves.slice(0, 6).map((m) => `${m.san} ${Math.round((100 * total(m)) / all)}%`);
  console.log(`${db === 'lichess' ? 'club   ' : 'masters'} (${all}): ${top.join(', ')}`);
}
