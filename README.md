# Opening Coach

A small web app for learning chess openings, **with the reason behind every move**. It covers the Four Knights Game (1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6) from both sides. As White there are three systems (Spanish 4.Bb5, Scotch 4.d4, Italian 4.Bc4), and as Black an answer to every common 4th move.

```bash
npm install
npm run dev      # http://0.0.0.0:5173 (reachable on the LAN)
npm test         # checks every line is legal and fully explained
npm run build
```

## Modes

- **Learn** is an explorer. Play the moves on the board for both sides; where the opponent has more than one covered reply, pick one (on the board, or from the list) and the app follows that variation. ▶ steps along the current line instead. If you play a move from one of your other repertoires (say 4.d4 while learning the Spanish), it tells you which one and offers to continue there. Each move shows a one-line *why*, a longer explanation, arrows, and "don't play this" warnings. Every line opens with a one-sentence *story* and ends with a *plan* for the middlegame.
- **Practise** has you play your moves from memory while the app plays the opponent. After each correct move you're asked **why** you played it (multiple choice). Lines are scheduled with spaced repetition: a clean run pushes a line further out (1 → 3 → 7 → 16 → 35 days), and any slip brings it back straight away. Progress is saved in `localStorage`.
- **Map & Ideas** shows the big principles, a clickable tree of the whole repertoire, and a cheat sheet with every line in one sentence.

Keyboard shortcuts: ← → Home End in Learn, and 1–9 to pick one of the opponent's replies. In Practise, 1–4 answers the quiz and Enter continues.

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
