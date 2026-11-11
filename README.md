# Opening Coach

A small web app for learning chess openings, **with the reason behind every move**. It covers the Four Knights Game (1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6) from both sides. As White there are three systems (Spanish 4.Bb5, Scotch 4.d4, Italian 4.Bc4), and as Black an answer to every common 4th move.

```bash
npm install
npm run dev      # http://0.0.0.0:5173 (reachable on the LAN)
npm test         # checks every line is legal and fully explained
npm run build
```

## Modes

- **Learn** is an opening explorer that covers every repertoire at once, so there's nothing to pick first. Play moves for either side on the board, or click a row. For the side to move, a table lists what club players choose (1600–2200 on Lichess), how often, the opening each move leads to, and club results. Hover a row to see that opening's idea. The strategy card explains the current opening: the idea, White's plan and Black's plan. Your repertoires show as badges: ★ is your move in that repertoire, ✓ is an opponent move you've prepared for. After a move from your repertoire you see its *why*, the longer explanation and any "don't play this" warnings, and where a line's book runs out you get its middlegame *plan* and a button to practise it.
- **Practise** has you play your moves from memory while the app plays the opponent. After each correct move you're asked **why** you played it (multiple choice). Lines are scheduled with spaced repetition: a clean run pushes a line further out (1 → 3 → 7 → 16 → 35 days), and any slip brings it back straight away. Progress is saved in `localStorage`.
- **Map & Ideas** shows the big principles, a clickable tree of the whole repertoire, and a cheat sheet with every line in one sentence.

Keyboard shortcuts: in Learn, ← → Home End step through the moves, 1–9 plays a row of the table and F flips the board. In Practise, 1–4 answers the quiz and Enter continues.

## Adding content

Repertoires live in `src/data/` (`white.ts`, `black.ts`). A line is a list of SAN moves. A move can be a plain string if another line already explains it, or an object:

```ts
{
  san: 'Bg5',
  why: 'Pin the f6 knight to the queen.',   // quizzed in Practise
  detail: 'Longer explanation…',
  arrows: ['g5f6:r', 'c3d5:b'],             // g/r/b/y colours; "f7:r" draws a circle
  avoid: [{ san: 'Nd5', why: '…' }],        // tempting moves to warn about
}
```

Positions are matched by FEN, so transpositions (e.g. 2…Nf6 3.Nc3 Nc6) join up with existing lines automatically. To add a new opening, create another `Repertoire` file and add it to `ALL_REPERTOIRES` in `src/data/index.ts`. `npm test` will flag illegal moves, missing explanations, bad arrow squares, and positions where your side has two different book moves.

## Opening names, strategies and club moves

- `src/data/explorer.json` is a snapshot of what club players play from every position reached in at least 1% of games, plus every position in your repertoires, with the [Lichess opening names](https://github.com/lichess-org/chess-openings) (CC0). Rebuild it with `npm run build-explorer` (needs `LICHESS_TOKEN`, see below; `MIN_REACH=0.005` goes deeper). Lichess answers are cached in `scripts/.cache`.
- `src/data/strategies/` holds the strategy notes, keyed by the exact Lichess name. A variation without its own note uses its parent's ("Four Knights Game: Spanish Variation" → "Four Knights Game"). `npm test` checks every name in the snapshot has a strategy and every key is a real name.

## Checking the theory

`npm run verify` checks every move against **Stockfish** and the **Lichess opening explorer**, and writes [`docs/verification-report.md`](docs/verification-report.md):

- **Your moves** are flagged if they are more than 0.30 pawns worse than Stockfish's top choice.
- **Gaps** are opponent replies that club players (Lichess, rated 1600–2200) play often but the repertoire doesn't cover. They're ranked by how many of every 100 Four Knights games would reach them.
- **Final positions** get an evaluation, so the claims in each line's plan can be checked.

Setup:

1. Stockfish: the script expects the official Linux build at `~/.local/share/stockfish/stockfish/stockfish-linux-x86-64-universal`, or set `STOCKFISH_PATH`.
2. Lichess: create a token (no scopes needed) at https://lichess.org/account/oauth/token/create and put `LICHESS_TOKEN=...` in `.env.local`. This file is git-ignored.

Results are cached in `scripts/.cache`, so re-runs only analyse new positions. There are two quick tools for authoring:

```bash
npm run probe -- "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5" 22   # Stockfish top 4 lines at depth 22
npm run club -- "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5"       # what club players and masters play here
```

## Deploying

The app is static files served by a Cloudflare Worker ([`wrangler.jsonc`](wrangler.jsonc)) at https://chess.moverperfect.com.

```bash
npm run deploy   # builds, then wrangler deploy (needs `wrangler login`)
```

Forking? Change or delete the `routes` entry in `wrangler.jsonc` to use your own domain or `<name>.<account>.workers.dev`.

## Credits

- Board: [chessground](https://github.com/lichess-org/chessground) (GPL-3.0-or-later). Move rules: [chess.js](https://github.com/jhlywa/chess.js) (BSD-2-Clause).
- Opening names: [lichess-org/chess-openings](https://github.com/lichess-org/chess-openings) (CC0).
- Club move statistics: the [Lichess opening explorer](https://lichess.org/analysis#explorer), built from the Lichess game database (CC0).

## Licence

[GPL-3.0-or-later](LICENSE), matching chessground, which is bundled into the app.
