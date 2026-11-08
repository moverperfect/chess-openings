import type { Repertoire } from './types';

export const blackRepertoire: Repertoire = {
  id: 'black-four-knights',
  name: 'Four Knights as Black',
  side: 'black',
  tagline: 'Meeting every 4th move after 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6',
  intro:
    'As Black you reach the Four Knights whenever White plays 3.Nc3. White then chooses a 4th move, and each one has a clear, principled answer. ' +
    'The theme throughout: hit back in the centre, often with …d5, and punish any loose e4 pawn.',
  principles: [
    {
      title: 'Hit back in the centre',
      body: 'Your freeing move is …d5. Whenever White is slow (4.g3, 4.Bc4, 4.a3), …d5 or a fork trick on e4 equalises straight away.',
    },
    {
      title: 'The fork trick',
      body: '…Nxe4 followed by …d5 forks a bishop on c4 and a knight on e4. Look for it every time the bishop sits on c4 and e4 is only defended by a knight.',
    },
    {
      title: 'Counterattack instead of defending',
      body: 'Against 4.Bb5 you don\'t defend e5, you jump into d4. Active pieces beat material in the opening.',
    },
    {
      title: 'Punish greed',
      body: 'If White grabs e5 with the knight too early, the e-file opens toward White\'s own uncastled king. …Qe7 is the key response.',
    },
    {
      title: 'Doubled pawns can be strength',
      body: 'After …bxc6 in the Scotch Four Knights you get a c6–d5 centre and a half-open b-file. Your pawns cover important central squares.',
    },
  ],
  lines: [
    // ─────────────────────────────── 4.Bb5 Nd4 (Rubinstein)
    {
      id: 'b-rub-exchange',
      name: 'Rubinstein vs 5.Nxd4',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story:
        'White swaps on d4 and pushes e5. After a flurry of captures you trade queens and play …c6 and …d5 in a level ending.',
      moves: [
        {
          san: 'e4',
          why: 'White grabs the centre.',
          arrows: ['e4d5', 'e4f5'],
        },
        {
          san: 'e5',
          why: 'Meet the centre pawn with your own and open lines for your queen and f8 bishop.',
          arrows: ['e5d4', 'e5f4', 'f8c5:b'],
        },
        {
          san: 'Nf3',
          why: 'White develops and attacks e5.',
          arrows: ['f3e5:r'],
        },
        {
          san: 'Nc6',
          why: 'Defend e5 by developing a piece.',
          arrows: ['c6e5'],
        },
        {
          san: 'Nc3',
          why: 'White protects e4. We\'re heading for the Four Knights.',
          arrows: ['c3e4'],
        },
        {
          san: 'Nf6',
          why: 'Develop the last knight and hit e4. Now it\'s the Four Knights.',
          arrows: ['f6e4:r'],
        },
        {
          san: 'Bb5',
          why: 'The Spanish Four Knights: White pressures c6, the defender of e5.',
          arrows: ['b5c6:r', 'c6e5:y'],
        },
        {
          san: 'Nd4',
          why: 'Counterattack instead of defending: the knight hits the b5 bishop and f3 knight.',
          arrows: ['d4b5:r', 'd4f3:r'],
          detail:
            'This is the Rubinstein Defence. You offer the e5 pawn, but if White takes it with the knight, …Qe7 punishes them. The knight on d4 is annoying and very hard to ignore.',
          avoid: [
            {
              san: 'Nxe4',
              why: 'The fork trick doesn\'t work here. After 4…Nxe4? 5.Nxe4 d5 6.Ng3 the bishop is on b5, not c4, so …d5 forks nothing and you are a piece for a pawn down.',
            },
          ],
        },
        {
          san: 'Nxd4',
          why: 'White swaps off the strong knight.',
        },
        {
          san: 'exd4',
          why: 'Recapture, and the d4 pawn now attacks the c3 knight.',
          arrows: ['d4c3:r'],
        },
        {
          san: 'e5',
          why: 'White counterattacks your f6 knight instead of moving the c3 knight.',
          arrows: ['e5f6:r'],
        },
        {
          san: 'dxc3',
          why: 'Take the knight. Both sides now have a piece hanging.',
          detail: 'Don\'t move your knight: taking first keeps the material balance.',
        },
        {
          san: 'exf6',
          why: 'White takes back the piece.',
        },
        {
          san: 'Qxf6',
          why: 'Recapture with the queen, developing it with an eye on f2 and b2.',
          arrows: ['f6f2:r'],
        },
        {
          san: 'dxc3',
          why: 'White recaptures the pawn.',
        },
        {
          san: 'Qe5+',
          why: 'Check, forcing White to decide how to block. You\'re happy to trade queens.',
          arrows: ['e5e1:r'],
        },
        {
          san: 'Qe2',
          why: 'White blocks and offers the trade.',
        },
        {
          san: 'Qxe2+',
          why: 'Take the trade. The endgame is perfectly level for you.',
        },
        {
          san: 'Kxe2',
          why: 'White recaptures with the king.',
        },
        {
          san: 'c6',
          why: 'Kick the b5 bishop and prepare …d5 to claim the centre.',
          arrows: ['c6b5:r', 'd7d5:b'],
        },
      ],
      plan:
        'Play …d5 and …Bd6, castle, and bring rooks to e8 and d8. You have a healthy pawn structure and White\'s small lead in development fades once your bishops are out. A drawish but comfortable ending for you.',
    },
    {
      id: 'b-rub-ba4',
      name: 'Rubinstein vs 5.Ba4',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story:
        'White keeps the bishop with Ba4. You develop with …Bc5 and castle, letting White take on e5. Your pieces become very active in return for the pawn.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4',
        {
          san: 'Ba4',
          why: 'White keeps the bishop on the a4–e8 diagonal, ready to pin a piece on d7.',
          arrows: ['a4e8:r'],
        },
        {
          san: 'Bc5',
          why: 'Develop fast and aim at f2. You\'re happy to give e5 for activity.',
          arrows: ['c5f2:r'],
        },
        {
          san: 'Nxe5',
          why: 'White takes the pawn.',
        },
        {
          san: 'O-O',
          why: 'Castle and bring the rook to e8. White\'s king is still in the centre.',
          arrows: ['f8e8:b'],
        },
        {
          san: 'Nd3',
          why: 'White attacks your c5 bishop.',
          arrows: ['d3c5:r'],
        },
        {
          san: 'Bb6',
          why: 'Keep the bishop on the a7–g1 diagonal, where it still eyes f2.',
          arrows: ['b6f2:r'],
        },
        {
          san: 'e5',
          why: 'White kicks the f6 knight.',
          arrows: ['e5f6:r'],
        },
        {
          san: 'Ne8',
          why: 'Retreat, keeping f7 covered and ready to strike back with …d6.',
          arrows: ['d7d6:b'],
        },
      ],
      plan:
        'Next comes …d6 to open lines, and often …Qg5 or …Qh4 attacking. White usually plays 9.Nd5 d6 10.Ne3. Your pieces are lined up against White\'s kingside and the pawn doesn\'t matter much. Play actively: every tempo counts.',
    },
    {
      id: 'b-rub-nxe5',
      name: 'Rubinstein: punishing 5.Nxe5?',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story:
        'White grabs e5. You hit the knight and e4 with …Qe7, take the b5 bishop, and after f4 you win e4 back with check. White\'s king is stuck and you are clearly better.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4',
        {
          san: 'Nxe5',
          why: 'White greedily grabs e5. This is a mistake.',
        },
        {
          san: 'Qe7',
          why: 'Attack the e5 knight, and line up on e4 and the e-file toward White\'s king.',
          arrows: ['e7e5:r', 'e5e1:y'],
          detail: 'The knight must keep defending while your queen and knights hit e4. White\'s king has no time to castle.',
        },
        {
          san: 'f4',
          why: 'White defends the knight with a pawn, which weakens the king.',
        },
        {
          san: 'Nxb5',
          why: 'Grab the bishop first. Now nothing can come back to block the e-file.',
        },
        {
          san: 'Nxb5',
          why: 'White recaptures.',
        },
        {
          san: 'd6',
          why: 'Kick the e5 knight away from the centre.',
          arrows: ['d6e5:r'],
        },
        {
          san: 'Nf3',
          why: 'The knight retreats.',
        },
        {
          san: 'Qxe4+',
          why: 'Grab e4 with check. The e-file is open and White\'s king has to walk.',
          arrows: ['e4e1:r'],
        },
        {
          san: 'Kf2',
          why: 'The king steps up. (Most club players block with 9.Qe2 instead: see the next line.)',
        },
        {
          san: 'Ng4+',
          why: 'Keep checking and bring another piece into the attack.',
          arrows: ['g4f2:r'],
        },
      ],
      plan:
        'After 10.Kg1 White\'s king is safe-ish but the h1 rook is buried. Bring everything in with …Qc6, …Be7, …O-O and …Re8. The old books say Black is winning; Stockfish says clearly better (about −0.5), which is still a great result from the opening.',
    },
    {
      id: 'b-rub-nxe5-qe2',
      name: 'Rubinstein: 5.Nxe5? … 9.Qe2',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story: 'Same trap, but White blocks the check with the queen. Trade queens and guard c7 with your king: you have the bishop pair in a better ending.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4', 'Nxe5', 'Qe7', 'f4', 'Nxb5', 'Nxb5', 'd6', 'Nf3', 'Qxe4+',
        {
          san: 'Qe2',
          why: 'White blocks with the queen, the most common club move.',
        },
        {
          san: 'Qxe2+',
          why: 'Trade queens: the ending is better for you.',
        },
        {
          san: 'Kxe2',
          why: 'White recaptures.',
        },
        {
          san: 'Kd7',
          why: 'Guard c7 against the b5 knight. With queens off, the king is safe in the centre.',
          arrows: ['b5c7:r', 'd7c7'],
        },
      ],
      plan: 'Play …a6 to kick the knight, …Re8+ and …b6/…Bb7. You have the bishop pair and White\'s f4 pawn is a weakness. Stockfish about −0.5.',
    },
    {
      id: 'b-rub-nxe5-nf3',
      name: 'Rubinstein: 5.Nxe5? Qe7 6.Nf3',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story: 'White retreats the knight instead of f4. Take the bishop, grab e4 with check, trade queens and jump to d5: you have the bishop pair.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4', 'Nxe5', 'Qe7',
        {
          san: 'Nf3',
          why: 'White retreats the knight.',
        },
        {
          san: 'Nxb5',
          why: 'Take the bishop first.',
        },
        {
          san: 'Nxb5',
          why: 'White recaptures.',
        },
        {
          san: 'Qxe4+',
          why: 'Win back the pawn with check.',
          arrows: ['e4e1:r'],
        },
        {
          san: 'Qe2',
          why: 'White blocks and offers a trade.',
        },
        {
          san: 'Qxe2+',
          why: 'Trade queens.',
        },
        {
          san: 'Kxe2',
          why: 'White recaptures.',
        },
        {
          san: 'Nd5',
          why: 'Centralise the knight and cover c7 and b4 against the b5 knight.',
          arrows: ['d5c7', 'd5b4'],
        },
      ],
      plan: 'Play …a6, …Be7 and …O-O or …Kd8. The bishop pair gives you a small, lasting edge (Stockfish about −0.2).',
    },
    {
      id: 'b-rub-ne2',
      name: 'Rubinstein vs 5.Nxd4 exd4 6.Ne2',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story: 'White retreats the knight to e2 instead of pushing e5. Kick the bishop with …c6 and take the centre with …d5.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4', 'Nxd4', 'exd4',
        {
          san: 'Ne2',
          why: 'The most common club move: White retreats the knight to attack d4 again.',
          arrows: ['e2d4:r'],
        },
        {
          san: 'c6',
          why: 'Kick the bishop and prepare …d5.',
          arrows: ['c6b5:r', 'd7d5:b'],
        },
        {
          san: 'Bd3',
          why: 'The bishop retreats, still guarding e4.',
        },
        {
          san: 'd5',
          why: 'Take the centre. Your d4 pawn cramps White.',
          arrows: ['d5e4:r'],
        },
      ],
      plan: 'After e5 Nd7, win back the d4 pawn if White takes it, and play …Nxe5 or …Nc5. You are already slightly better (Stockfish about −0.5).',
    },
    {
      id: 'b-rub-o-o',
      name: 'Rubinstein vs 5.O-O',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story:
        'White ignores the knight and castles. You take the b5 bishop to get the bishop pair, kick the knight with …c6, and build with …d6 and …Qc7.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4',
        {
          san: 'O-O',
          why: 'White calmly castles and leaves the bishop en prise.',
        },
        {
          san: 'Nxb5',
          why: 'Take the bishop to get the bishop pair.',
        },
        {
          san: 'Nxb5',
          why: 'White recaptures.',
        },
        {
          san: 'c6',
          why: 'Kick the knight off b5 with tempo.',
          arrows: ['c6b5:r'],
        },
        {
          san: 'Nc3',
          why: 'The knight returns.',
        },
        {
          san: 'd6',
          why: 'Guard e5 with a pawn and open the c8 bishop.',
          arrows: ['d6e5'],
        },
        {
          san: 'd4',
          why: 'White strikes in the centre.',
          arrows: ['d4e5:r'],
        },
        {
          san: 'Qc7',
          why: 'Defend e5 again so you can keep the centre and your bishops.',
          arrows: ['c7e5'],
        },
      ],
      plan:
        'Your long-term trump is the bishop pair. Play …Be7, …O-O and …Re8, and keep the centre closed until your pieces are ready, then open it with …d5 or …exd4. Don\'t rush.',
    },
    {
      id: 'b-rub-bc4',
      name: 'Rubinstein vs 5.Bc4',
      group: '4.Bb5 — Rubinstein (4…Nd4)',
      story:
        'The bishop retreats to c4. You mirror with …Bc5, and if White grabs e5 you hit with …Qe7 and …d5 to open lines.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Nd4',
        {
          san: 'Bc4',
          why: 'White retreats the bishop to aim at f7.',
          arrows: ['c4f7:r'],
        },
        {
          san: 'Bc5',
          why: 'Develop with the same idea, aiming at f2.',
          arrows: ['c5f2:r'],
        },
        {
          san: 'Nxe5',
          why: 'White grabs the pawn.',
        },
        {
          san: 'Qe7',
          why: 'Hit the knight at once. It has no comfortable square.',
          arrows: ['e7e5:r'],
        },
        {
          san: 'Nf3',
          why: 'White retreats the knight.',
        },
        {
          san: 'd5',
          why: 'Blow open the centre while White\'s king is still uncastled.',
          arrows: ['d5c4:r', 'd5e4:r'],
        },
      ],
      plan:
        'All your pieces come into play with tempo: …Bg4 pins the f3 knight and the e-file is opening toward White\'s king. Expect sharp play where your development lead matters more than the pawn.',
    },

    // ─────────────────────────────── 4.d4 Scotch Four Knights
    {
      id: 'b-scotch-main',
      name: 'Scotch Four Knights',
      group: '4.d4 — Scotch Four Knights',
      story:
        'You take on d4 and pin with …Bb4. After Nxc6 you recapture with the b-pawn and strike with …d5, getting a solid c6–d5 centre and easy development.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6',
        {
          san: 'd4',
          why: 'The Scotch Four Knights: White opens the centre.',
          arrows: ['d4e5:r'],
        },
        {
          san: 'exd4',
          why: 'Take the pawn. Keeping the tension would cost you e5.',
        },
        {
          san: 'Nxd4',
          why: 'White recaptures with the knight.',
        },
        {
          san: 'Bb4',
          why: 'Pin the c3 knight, the defender of e4.',
          arrows: ['b4c3:r', 'c3e4:y', 'f6e4:r'],
        },
        {
          san: 'Nxc6',
          why: 'White swaps knights before …Nxd4 or …Nxe4 tricks appear.',
        },
        {
          san: 'bxc6',
          why: 'Capture toward the centre. The b-pawn supports …d5.',
          arrows: ['c6d5'],
        },
        {
          san: 'Bd3',
          why: 'White defends e4.',
          arrows: ['d3e4'],
        },
        {
          san: 'd5',
          why: 'The freeing move: claim the centre and open your c8 bishop.',
          arrows: ['d5e4:r'],
        },
        {
          san: 'exd5',
          why: 'White trades.',
        },
        {
          san: 'cxd5',
          why: 'Recapture with the c-pawn: now you have a full pawn in the centre.',
        },
        {
          san: 'O-O',
          why: 'White castles.',
        },
        {
          san: 'O-O',
          why: 'Castle too. Your pieces are all ready to develop.',
        },
        {
          san: 'Bg5',
          why: 'White pins your f6 knight.',
          arrows: ['g5f6:r'],
        },
        {
          san: 'c6',
          why: 'Reinforce d5 so the pin can\'t become an attack on it.',
          arrows: ['c6d5'],
        },
      ],
      plan:
        'The position is balanced. Your pawns on c6 and d5 give you a solid centre. Develop with …Bd6, …h6 to question the pin, …Rb8 on the half-open b-file, and …Re8. Watch out for Nxd5-type tactics if d5 ever gets loose.',
    },
    {
      id: 'b-belgrade',
      name: 'Belgrade Gambit',
      group: '4.d4 — Scotch Four Knights',
      story:
        'After d4 exd4, White plays Nd5, gambitting the pawn. Stay calm: …Be7 and castle, keeping the extra pawn without walking into tricks.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'd4', 'exd4',
        {
          san: 'Nd5',
          why: 'The Belgrade Gambit: White sacrifices the pawn for fast, tricky play.',
          arrows: ['d5f6:r'],
        },
        {
          san: 'Be7',
          why: 'Stay solid: develop and get ready to castle. No need to grab more.',
          detail: '5…Nxe4 is playable but leads into wild tactics. …Be7 is the calm, safe choice.',
        },
      ],
      plan:
        'Castle, then …d6 and …Nxd5 at a good moment. If White regains the d4 pawn, you have easy equality. If not, you\'re a pawn up. Don\'t chase tactics; develop.',
    },

    // ─────────────────────────────── 4.Bc4 Italian Four Knights
    {
      id: 'b-italian-fork',
      name: 'Italian: the fork trick',
      group: '4.Bc4 — Italian Four Knights',
      story:
        'White plays Bc4 and leaves e4 guarded only by the knight. You take …Nxe4, and …d5 forks bishop and knight. You get your piece back with full equality.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6',
        {
          san: 'Bc4',
          why: 'The Italian Four Knights: White aims at f7, but e4 is now loose.',
          arrows: ['c4f7:r'],
        },
        {
          san: 'Nxe4',
          why: 'The fork trick: take e4, because …d5 will fork bishop and knight.',
          arrows: ['f6e4', 'd7d5:b'],
          detail: 'Learn the pattern: bishop on c4 + knight on c3 guarding e4 = …Nxe4 and …d5 fork.',
        },
        {
          san: 'Nxe4',
          why: 'White takes the knight.',
        },
        {
          san: 'd5',
          why: 'Fork! The pawn hits the c4 bishop and the e4 knight.',
          arrows: ['d5c4:r', 'd5e4:r'],
        },
        {
          san: 'Bd3',
          why: 'White saves the bishop and defends the knight.',
        },
        {
          san: 'dxe4',
          why: 'Take the knight. Material is level again.',
        },
        {
          san: 'Bxe4',
          why: 'White recaptures.',
        },
        {
          san: 'Bd6',
          why: 'Guard e5 and develop, getting ready to castle.',
          arrows: ['d6e5'],
        },
      ],
      plan:
        'Castle, play …Nf6 or …Qe7, and …Re8. The position is equal and easy: you have no weaknesses and your bishops are free.',
    },
    {
      id: 'b-italian-bxd5',
      name: 'Italian: 6.Bxd5?',
      group: '4.Bc4 — Italian Four Knights',
      story: 'Half of club players take on d5 with the bishop. Take it with the queen and move it when the knight hits it: you have the bishop pair and the centre.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bc4', 'Nxe4', 'Nxe4', 'd5',
        {
          san: 'Bxd5',
          why: 'White takes the pawn with the bishop. It\'s a common mistake.',
        },
        {
          san: 'Qxd5',
          why: 'Take the bishop. Now you have the bishop pair and White still has a knight on e4 to look after.',
          arrows: ['d5e4:r'],
        },
        {
          san: 'Nc3',
          why: 'White saves the knight and attacks your queen.',
          arrows: ['c3d5:r'],
        },
        {
          san: 'Qd6',
          why: 'Step back, still guarding e5 and keeping an eye on d3.',
          arrows: ['d6e5'],
        },
      ],
      plan: 'Develop with …Be6, …O-O-O and …f6 if needed. The bishop pair and your e5 pawn give you a clear edge (Stockfish about −1.4).',
    },
    {
      id: 'b-italian-bxd5-d3',
      name: 'Italian: 6.Bxd5? Qxd5 7.d3',
      group: '4.Bc4 — Italian Four Knights',
      story: 'After 6.Bxd5? Qxd5, White defends the e4 knight with d3 instead of moving it. Pin the f3 knight with …Bg4.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bc4', 'Nxe4', 'Nxe4', 'd5', 'Bxd5', 'Qxd5',
        {
          san: 'd3',
          why: 'White guards the e4 knight with a pawn.',
        },
        {
          san: 'Bg4',
          why: 'Pin the f3 knight, which guards e5 and d4, and develop with tempo.',
          arrows: ['g4f3:r', 'f3d1:y'],
        },
      ],
      plan: 'Castle queenside, and play …f5 or …Qd7 to hit the e4 knight again. You have the bishop pair and a big lead in activity (Stockfish about −1.6).',
    },
    {
      id: 'b-italian-bb5',
      name: 'Italian: 6.Bb5?',
      group: '4.Bc4 — Italian Four Knights',
      story: 'White pins with Bb5 instead of saving the knight. Take the knight, and if White grabs e5, …Qg5 forks e5 and g2.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bc4', 'Nxe4', 'Nxe4', 'd5',
        {
          san: 'Bb5',
          why: 'White pins your c6 knight but leaves the e4 knight hanging.',
        },
        {
          san: 'dxe4',
          why: 'Take the free knight.',
        },
        {
          san: 'Nxe5',
          why: 'White grabs e5, hoping for Nxc6.',
        },
        {
          san: 'Qg5',
          why: 'Double attack: the queen hits the e5 knight and g2.',
          arrows: ['g5e5:r', 'g5g2:r'],
        },
      ],
      plan: 'You are a piece for a pawn up (Stockfish about −3.5). After d4 Qxg2 Rf1, develop with …Bd6 and …Bh3, and keep the pin in mind: …Bd7 unpins the c6 knight.',
    },
    {
      id: 'b-italian-bxf7',
      name: 'Italian: 5.Bxf7+',
      group: '4.Bc4 — Italian Four Knights',
      story:
        'After …Nxe4, White gives the bishop on f7. Take it with the king, then …d5 builds a big centre, and you have the bishop pair.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bc4', 'Nxe4',
        {
          san: 'Bxf7+',
          why: 'White sacrifices the bishop to displace your king.',
        },
        {
          san: 'Kxf7',
          why: 'Take it: your king is quite safe and you get the bishop pair.',
        },
        {
          san: 'Nxe4',
          why: 'White recaptures the knight.',
        },
        {
          san: 'd5',
          why: 'Kick the knight. Your d5 and e5 pawns now form a big centre.',
          arrows: ['d5e4:r'],
        },
      ],
      plan:
        'Your king tucks away with …Kg8 (after …h6), and the rooks connect. You have two bishops and a strong pawn centre. White has nothing for it.',
    },
    {
      id: 'b-italian-oo',
      name: 'Italian: 5.O-O',
      group: '4.Bc4 — Italian Four Knights',
      story:
        'After …Nxe4, White castles instead. Swap on c3, then hold e5 with …f6. You\'ve won a pawn and your position is solid.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bc4', 'Nxe4',
        {
          san: 'O-O',
          why: 'White castles and hopes for piece play.',
        },
        {
          san: 'Nxc3',
          why: 'Trade off a White attacker before it can recapture on e4.',
        },
        {
          san: 'dxc3',
          why: 'White recaptures toward the centre, opening the d-file.',
        },
        {
          san: 'f6',
          why: 'Hold e5 firmly. The a2–g8 diagonal is a little weak but the pawn is worth it.',
          arrows: ['f6e5'],
        },
      ],
      plan:
        'Play …Qe7, …d6, …Be6 and …Qd7 to consolidate and castle queenside or kingside. You are a pawn up, so aim to neutralise White\'s bishop on c4 (…Be6 trades it off).',
    },

    // ─────────────────────────────── 4.d3
    {
      id: 'b-d3',
      name: 'Quiet 4.d3',
      group: 'Other 4th moves',
      story: 'White plays the timid 4.d3. As against every slow move, hit the centre with …d5.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6',
        {
          san: 'd3',
          why: 'White guards e4 with a pawn, but it\'s passive.',
        },
        {
          san: 'd5',
          why: 'White is slow, so take the centre at once.',
          arrows: ['d5e4:r'],
        },
        {
          san: 'exd5',
          why: 'White trades.',
        },
        {
          san: 'Nxd5',
          why: 'Recapture with the knight in the centre.',
        },
      ],
      plan: 'Develop with …Bb4 or …Be7, castle, and …f6 if you need to hold e5. You are already slightly better (Stockfish about −0.2): White\'s d3 pawn blocks the f1 bishop.',
    },

    // ─────────────────────────────── 4.Nxe5 Halloween Gambit
    {
      id: 'b-halloween',
      name: 'Halloween Gambit',
      group: 'Other 4th moves',
      story:
        'White sacrifices a knight on e5 for a pawn storm. You retreat to g6 and g8. It looks ugly, but you\'re a whole piece up. Now develop fast and give back a pawn if you need to.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6',
        {
          san: 'Nxe5',
          why: 'The Halloween Gambit: White gives a knight for a pawn and a pawn storm.',
        },
        {
          san: 'Nxe5',
          why: 'Take the knight. You\'re a piece up.',
        },
        {
          san: 'd4',
          why: 'White chases your knight with pawns.',
          arrows: ['d4e5:r'],
        },
        {
          san: 'Ng6',
          why: 'Retreat to g6, out of the pawns\' way.',
        },
        {
          san: 'e5',
          why: 'White kicks your f6 knight too.',
          arrows: ['e5f6:r'],
        },
        {
          san: 'Ng8',
          why: 'Back home. It looks ugly, but you\'re a piece up and nothing is under attack.',
        },
      ],
      plan:
        'Get your pieces out fast. …d6 (or …d5) opens the c8 bishop, then …Be7, …Nh6 or …Ne7, and castle. Give back a pawn or two if you need to. A piece for two pawns is still winning once your pieces are out. The danger is only in the next few moves, so don\'t get greedy.',
    },

    // ─────────────────────────────── 4.g3 Glek
    {
      id: 'b-glek',
      name: 'Glek System (4.g3)',
      group: 'Other 4th moves',
      story:
        'White fianchettoes slowly with g3. You strike at once with …d5, trade on c3, and put your bishop on d6 to guard e5.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6',
        {
          san: 'g3',
          why: 'The Glek System: a slow kingside fianchetto.',
        },
        {
          san: 'd5',
          why: 'White is slow, so hit the centre right away.',
          arrows: ['d5e4:r'],
        },
        {
          san: 'exd5',
          why: 'White trades.',
        },
        {
          san: 'Nxd5',
          why: 'Recapture with the knight, centralising.',
        },
        {
          san: 'Bg2',
          why: 'White fianchettoes, pressuring d5 and the long diagonal.',
          arrows: ['g2d5:r'],
        },
        {
          san: 'Nxc3',
          why: 'Trade before Nxd5 or pressure on the long diagonal becomes a problem.',
        },
        {
          san: 'bxc3',
          why: 'White recaptures.',
        },
        {
          san: 'Bd6',
          why: 'Guard e5 with the bishop and prepare to castle.',
          arrows: ['d6e5'],
        },
      ],
      plan:
        'Castle and play …Re8 or …Qe7 to hold e5. White\'s c3 pawns are a little weak. The position is equal and comfortable for you.',
    },
  ],
};
