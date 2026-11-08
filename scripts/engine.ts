import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process';
import { createInterface } from 'node:readline';

export interface EngineLine {
  uci: string;
  /** Centipawns from the side to move's point of view. Mates are mapped to ±100000 minus the distance. */
  cp: number;
  mate?: number;
  pv: string[];
}

/** Minimal UCI client: one search at a time. */
export class Engine {
  private proc: ChildProcessWithoutNullStreams;
  private listeners: ((line: string) => void)[] = [];

  constructor(path: string, options: Record<string, string | number> = {}) {
    this.proc = spawn(path, [], { stdio: 'pipe' });
    createInterface({ input: this.proc.stdout }).on('line', (line) => this.listeners.forEach((l) => l(line)));
    this.send('uci');
    for (const [name, value] of Object.entries(options)) this.send(`setoption name ${name} value ${value}`);
  }

  private send(cmd: string) {
    this.proc.stdin.write(cmd + '\n');
  }

  private waitFor(prefix: string, onLine?: (line: string) => void): Promise<string> {
    return new Promise((resolve) => {
      const listener = (line: string) => {
        onLine?.(line);
        if (line.startsWith(prefix)) {
          this.listeners = this.listeners.filter((l) => l !== listener);
          resolve(line);
        }
      };
      this.listeners.push(listener);
    });
  }

  async ready() {
    const done = this.waitFor('readyok');
    this.send('isready');
    await done;
  }

  async analyse(fen: string, opts: { depth: number; multipv?: number; searchmoves?: string[] }): Promise<EngineLine[]> {
    await this.ready();
    this.send(`setoption name MultiPV value ${opts.multipv ?? 1}`);
    this.send(`position fen ${fen}`);
    const lines = new Map<number, EngineLine>();
    const done = this.waitFor('bestmove', (line) => {
      if (!line.startsWith('info') || !line.includes(' pv ')) return;
      const t = line.split(' ');
      const at = (k: string) => t[t.indexOf(k) + 1];
      if (line.includes('lowerbound') || line.includes('upperbound')) return;
      const multipv = t.includes('multipv') ? Number(at('multipv')) : 1;
      const pv = t.slice(t.indexOf('pv') + 1);
      const kind = at('score');
      const value = Number(t[t.indexOf('score') + 2]);
      const mate = kind === 'mate' ? value : undefined;
      const cp = mate === undefined ? value : Math.sign(mate) * (100000 - Math.abs(mate));
      lines.set(multipv, { uci: pv[0], cp, mate, pv });
    });
    this.send(`go depth ${opts.depth}${opts.searchmoves ? ' searchmoves ' + opts.searchmoves.join(' ') : ''}`);
    await done;
    return [...lines.entries()].sort((a, b) => a[0] - b[0]).map(([, l]) => l);
  }

  quit() {
    this.send('quit');
  }
}
