/** Lichess opening explorer client (https://lichess.org/api#tag/Opening-Explorer). Needs a personal API token. */

export interface ExplorerMove {
  uci: string;
  san: string;
  white: number;
  draws: number;
  black: number;
}

export interface ExplorerResult {
  white: number;
  draws: number;
  black: number;
  moves: ExplorerMove[];
}

export type ExplorerDb = 'masters' | 'lichess';

const BASE = 'https://explorer.lichess.ovh';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function explore(db: ExplorerDb, fen: string, token: string): Promise<ExplorerResult> {
  const params = new URLSearchParams({ fen, moves: '15', topGames: '0' });
  if (db === 'lichess') {
    params.set('variant', 'standard');
    // Club-level games: roughly the level of opponents you'll actually meet.
    params.set('speeds', 'blitz,rapid,classical');
    params.set('ratings', '1600,1800,2000,2200');
    params.set('recentGames', '0');
  }
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(`${BASE}/${db}?${params}`, { headers: { Authorization: `Bearer ${token}` } });
    if (res.status === 429) {
      // Lichess asks clients to wait a full minute after a 429.
      console.log('  rate limited by Lichess, waiting 60s…');
      await sleep(60_000);
      continue;
    }
    if (!res.ok) throw new Error(`Lichess explorer ${db} returned ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return (await res.json()) as ExplorerResult;
  }
  throw new Error('Lichess explorer kept rate limiting us');
}

export function total(r: { white: number; draws: number; black: number }) {
  return r.white + r.draws + r.black;
}
