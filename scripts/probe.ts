/** Quick Stockfish look at a position: npx tsx scripts/probe.ts "e4 e5 Nf3 Nc6" [depth] */
import { homedir } from 'node:os';
import { join } from 'node:path';
import { Chess } from 'chess.js';
import { Engine } from './engine';

const [moves = '', depth = '20'] = process.argv.slice(2);
const sf = process.env.STOCKFISH_PATH ?? join(homedir(), '.local/share/stockfish/stockfish/stockfish-linux-x86-64-universal');
const engine = new Engine(sf, { Threads: 4, Hash: 256 });
const chess = new Chess();
for (const san of moves.split(/\s+/).filter(Boolean)) chess.move(san);
const fen = chess.fen();
const lines = await engine.analyse(fen, { depth: Number(depth), multipv: 4 });
const sign = chess.turn() === 'w' ? 1 : -1;
for (const l of lines) {
  const c = new Chess(fen);
  const pv = l.pv.slice(0, 8).map((u) => { try { return c.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }).san; } catch { return '?'; } });
  const ev = l.mate !== undefined ? `#${sign * l.mate}` : ((sign * l.cp) / 100).toFixed(2);
  console.log(`${ev.padStart(6)}  ${pv.join(' ')}`);
}
engine.quit();
