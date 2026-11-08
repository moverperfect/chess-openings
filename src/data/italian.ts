import type { Repertoire } from './types';
import { whiteTrunk } from './white';

export const italianRepertoire: Repertoire = {
  id: 'white-italian-four-knights',
  name: 'White: Italian 4.Bc4',
  side: 'white',
  tagline: 'The Italian Four Knights — 4.Bc4',
  intro:
    'Your bishop aims at f7 and you build a quiet Italian setup: d3, O-O, h3 and a3/a4. It\'s a slow, manoeuvring game. ' +
    'The one thing to know by heart is Black\'s fork trick, 4…Nxe4, and how to meet it.',
  principles: [
    {
      title: 'Know the fork trick',
      body: 'With your bishop on c4, e4 is only guarded by the c3 knight. 4…Nxe4 5.Nxe4 d5 forks bishop and knight. Answer with 6.Bd3, and never 6.Bxd5?.',
    },
    {
      title: 'The quiet Italian setup',
      body: 'Against …Bc5, …Bb4 or …Be7, play d3, O-O and h3, then a3 or a4. Solid pawns, safe king, and no targets for Black.',
    },
    {
      title: 'h3 stops …Bg4 and …Ng4',
      body: 'Once you castle, a pin on your f3 knight is Black\'s most annoying idea. h3 takes away g4 from both the bishop and the knight.',
    },
    {
      title: 'Give the bishop a home on a2',
      body: 'Black often tries …Na5 to trade off your c4 bishop. a3 or a4 lets it drop back to a2 and keep aiming at f7.',
    },
    {
      title: 'Punish …d6 with Ng5',
      body: 'If Black shuts in the f8 bishop with …d6, f7 has only the king to defend it. Ng5 attacks it twice at once.',
    },
  ],
  lines: [
    // ─────────────────────────────── 4...Bc5
    {
      id: 'wi-bc5',
      name: '4…Bc5: quiet Italian',
      group: '4…Bc5 — the Italian',
      story: 'Black puts the bishop on c5 too. You play the quiet setup: d3, castle, and h3 to take away g4.',
      moves: [
        ...whiteTrunk,
        {
          san: 'Bc4',
          why: 'The Italian Four Knights: the bishop aims at f7, the weakest point in Black\'s camp.',
          arrows: ['c4f7:r'],
          detail: 'The one drawback is that e4 is no longer defended by the bishop, which lets Black try the fork trick 4…Nxe4.',
        },
        {
          san: 'Bc5',
          why: 'Black mirrors you, aiming at f2.',
          arrows: ['c5f2:r'],
        },
        {
          san: 'd3',
          why: 'Guard e4 with a pawn and open the c1 bishop.',
          arrows: ['d3e4', 'c1g5:b'],
          detail: 'Played in about half of club games and most master games. Stockfish rates it as good as anything.',
        },
        {
          san: 'd6',
          why: 'Black does the same: guards e5 and frees the c8 bishop.',
        },
        {
          san: 'O-O',
          why: 'Castle before any fighting starts.',
        },
        {
          san: 'O-O',
          why: 'Black castles too.',
        },
        {
          san: 'h3',
          why: 'Stop …Bg4 and …Ng4 before they become annoying.',
          arrows: ['c8g4:r', 'f6g4:r'],
        },
      ],
      plan:
        'Play a3 (so …Na5 can be met with Ba2), Re1, and Be3 to trade off Black\'s strong c5 bishop. Later, Ne2–g3 or Nd5 gets your knights going. This is a slow game: improve every piece before opening the position with d4.',
    },
    {
      id: 'wi-bc5-oo',
      name: '4…Bc5 5.d3 O-O',
      group: '4…Bc5 — the Italian',
      story: 'Black castles before …d6. Castle too, and after …d6 you play h3, reaching the same position as the main line.',
      moves: [
        ...whiteTrunk,
        'Bc4', 'Bc5', 'd3',
        {
          san: 'O-O',
          why: 'Black castles before …d6.',
        },
        {
          san: 'O-O',
          why: 'Castle too.',
        },
        {
          san: 'd6',
          why: 'Black guards e5. This is the main-line position.',
        },
        'h3',
      ],
      plan: 'This is the same position as the 4…Bc5 main line: a3, Re1, Be3, then manoeuvre.',
    },
    {
      id: 'wi-bc5-h6',
      name: '4…Bc5 5.d3 h6',
      group: '4…Bc5 — the Italian',
      story: 'Black stops Bg5 and Ng5 with …h6. Castle and keep the same setup.',
      moves: [
        ...whiteTrunk,
        'Bc4', 'Bc5', 'd3',
        {
          san: 'h6',
          why: 'Black takes g5 away from your bishop and knight.',
        },
        {
          san: 'O-O',
          why: 'Castle. Black has spent a move on a pawn, so you are a little ahead in development.',
        },
      ],
      plan: 'The same setup: h3 or a3, Re1 and Be3. Since …h6 slightly weakens Black\'s kingside, keep Nh4–f5 in mind.',
    },

    {
      id: 'wi-bc5-bg4',
      name: '4…Bc5: 6…Bg4 pin',
      group: '4…Bc5 — the Italian',
      story: 'Black pins your f3 knight before you can play h3. Ask the bishop straight away, and if it takes, your queen recaptures and eyes f7.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Bc5', 'd3', 'd6', 'O-O',
        {
          san: 'Bg4',
          why: 'Black pins your f3 knight to the queen.',
          arrows: ['g4f3:r', 'f3d1:y'],
        },
        {
          san: 'h3',
          why: 'Ask the bishop at once: take or retreat.',
          arrows: ['h3g4:r'],
        },
        {
          san: 'Bxf3',
          why: 'Black trades bishop for knight, which gives you the bishop pair.',
        },
        {
          san: 'Qxf3',
          why: 'Recapture with the queen, which now eyes f7 with your bishop.',
          arrows: ['f3f7:r', 'c4f7:r'],
        },
      ],
      plan: 'You have the bishop pair. Meet …Nd4 with Qd1 (then c3 kicks it), and play Na4 or Be3 to trade the c5 bishop. Stockfish about +0.4, with an easy position.',
    },
    {
      id: 'wi-bc5-bh5',
      name: '4…Bc5: 6…Bg4 7.h3 Bh5',
      group: '4…Bc5 — the Italian',
      story: 'Black keeps the pin with …Bh5. Jump into d5 and trade off the f6 knight, the piece that makes the pin annoying.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Bc5', 'd3', 'd6', 'O-O', 'Bg4', 'h3',
        {
          san: 'Bh5',
          why: 'Black keeps the pin on your f3 knight.',
          arrows: ['h5f3:r', 'f3d1:y'],
        },
        {
          san: 'Nd5',
          why: 'Jump into the centre and challenge the f6 knight. After …Nxd5 Bxd5 your bishop is superb.',
          arrows: ['d5f6:r', 'c4d5:b'],
          avoid: [{ san: 'g4', why: 'Playable, but it invites the …Nxg4 hxg4 Bxg4 piece sacrifice (Stockfish: equal) and loosens your king for good. Nd5 is simpler.' }],
        },
      ],
      plan: 'After …Nxd5 Bxd5, play c3, Be3 and Qb3 or a4. If Black ever takes on f3, recapture with the queen. Stockfish about +0.1: level, but your pieces are the more comfortable ones.',
    },
    {
      id: 'wi-bc5-d6-h6',
      name: '4…Bc5: 6…h6',
      group: '4…Bc5 — the Italian',
      story: 'Black spends a move on …h6. Use it to trade off the strong c5 bishop with Na4.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Bc5', 'd3', 'd6', 'O-O',
        {
          san: 'h6',
          why: 'Black stops Bg5 and Ng5.',
        },
        {
          san: 'Na4',
          why: 'Chase the c5 bishop: it is Black\'s best piece.',
          arrows: ['a4c5:r', 'a4b6:y'],
        },
      ],
      plan: 'After …Bb6 play c3 and Nxb6, getting the bishop pair, then Bb3, Re1 and d4 later. Stockfish about +0.1: a slow, pleasant game.',
    },
    {
      id: 'wi-bc5-oo-h6',
      name: '4…Bc5 5.d3 O-O 6.O-O h6',
      group: '4…Bc5 — the Italian',
      story: 'Black castles and then plays …h6. Answer with h3 of your own and keep the quiet setup.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Bc5', 'd3', 'O-O', 'O-O',
        {
          san: 'h6',
          why: 'Black takes g5 away from your pieces.',
        },
        {
          san: 'h3',
          why: 'Take g4 away from Black\'s pieces too.',
          arrows: ['h3g4'],
        },
      ],
      plan: 'a4, Re1 and Be3 or Nd5. Both sides are solid; you are slightly more active. Stockfish about +0.15.',
    },
    {
      id: 'wi-h6',
      name: '4…h6',
      group: 'Other 4th moves',
      story: 'Black plays …h6 before developing. That\'s slow, so open the centre with d4 and take back with the knight.',
      moves: [
        ...whiteTrunk, 'Bc4',
        {
          san: 'h6',
          why: 'A cautious move to stop Ng5, but it loses time.',
        },
        {
          san: 'd4',
          why: 'Black is slow, so open the centre now.',
          arrows: ['d4e5:r'],
        },
        {
          san: 'exd4',
          why: 'Black takes.',
        },
        {
          san: 'Nxd4',
          why: 'Recapture with the knight in the centre, as in the Scotch.',
        },
      ],
      plan: 'This is a Scotch-style position where Black has spent a move on …h6. Answer …Bb4 with Nxc6 and O-O, and use your lead in development. Stockfish about +0.6.',
    },

    // ─────────────────────────────── 4...Nxe4 fork trick
    {
      id: 'wi-nxe4',
      name: '4…Nxe4: the fork trick',
      group: '4…Nxe4 — the fork trick',
      story: 'Black takes on e4, and …d5 forks your bishop and knight. You drop the bishop back to d3 (never take on d5), the pieces come off, and material ends up level in an equal game.',
      moves: [
        ...whiteTrunk,
        'Bc4',
        {
          san: 'Nxe4',
          why: 'The fork trick: Black takes e4, planning …d5 to fork your bishop and knight.',
          arrows: ['d7d5:r', 'd5c4:y', 'd5e4:y'],
        },
        {
          san: 'Nxe4',
          why: 'Take the knight. You\'re a piece up for the moment.',
        },
        {
          san: 'd5',
          why: 'The fork: the pawn hits your c4 bishop and e4 knight.',
          arrows: ['d5c4:r', 'd5e4:r'],
        },
        {
          san: 'Bd3',
          why: 'Save the bishop and keep defending the e4 knight. Material stays level.',
          arrows: ['d3e4'],
          avoid: [
            {
              san: 'Bxd5',
              why: 'Half of club players play this, and it\'s bad. After 6.Bxd5? Qxd5 Black has the bishop pair and a big centre, and your e4 knight is attacked again (Stockfish: about −1.5).',
            },
          ],
        },
        {
          san: 'dxe4',
          why: 'Black takes the knight.',
        },
        {
          san: 'Bxe4',
          why: 'Recapture. Material is level again.',
        },
        {
          san: 'Bd6',
          why: 'Black guards e5 and gets ready to castle.',
        },
        {
          san: 'O-O',
          why: 'Castle and get your king safe.',
        },
        {
          san: 'O-O',
          why: 'Black castles too.',
        },
        {
          san: 'Re1',
          why: 'Put the rook on the open e-file behind your bishop, pressing on e5.',
          arrows: ['e1e5:r'],
        },
      ],
      plan: 'The position is level. Play d4 or c3–d4 to trade off Black\'s e5 pawn, and put your bishop on b1 or d3 to aim at Black\'s king. Watch for …f5, which hits your e4 bishop.',
    },

    {
      id: 'wi-nxe4-bc5',
      name: '4…Nxe4: 7…Bc5',
      group: '4…Nxe4 — the fork trick',
      story: 'After the fork trick, Black puts the bishop on c5 instead of d6. Castle and play d3: your position is a little better.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Nxe4', 'Nxe4', 'd5', 'Bd3', 'dxe4', 'Bxe4',
        {
          san: 'Bc5',
          why: 'Black develops actively, aiming at f2, but leaves e5 less protected.',
          arrows: ['c5f2:r'],
        },
        {
          san: 'O-O',
          why: 'Castle and get your king safe before opening the centre.',
        },
      ],
      plan: 'd3, c3 and b4 gain space and push Black\'s bishop around. Re1 hits e5. Stockfish about +0.2.',
    },

    // ─────────────────────────────── 4...Bb4
    {
      id: 'wi-bb4-bxc3',
      name: '4…Bb4 5.d3 Bxc3+',
      group: '4…Bb4',
      story: 'Black pins your knight and trades it off. You recapture toward the centre, castle, and play a Spanish-style game with the bishop pair.',
      moves: [
        ...whiteTrunk,
        'Bc4',
        {
          san: 'Bb4',
          why: 'Black pins your c3 knight, which guards e4.',
          arrows: ['b4c3:r', 'c3e4:y'],
        },
        {
          san: 'd3',
          why: 'Guard e4 with a pawn, so the pin doesn\'t matter.',
          arrows: ['d3e4'],
        },
        {
          san: 'Bxc3+',
          why: 'Black gives up the bishop to double your pawns.',
        },
        {
          san: 'bxc3',
          why: 'Recapture toward the centre. You get the bishop pair and an open b-file.',
          arrows: ['c3d4', 'b1b8:b'],
        },
        {
          san: 'd6',
          why: 'Black guards e5.',
        },
        {
          san: 'O-O',
          why: 'Castle. Your king is safe and the rook can come to e1 or b1.',
        },
      ],
      plan: 'Play Re1 and h3, then Bg5 to pin the f6 knight, or prepare d4. Your c3 pawn supports d4, and the bishop pair gets better as the centre opens.',
    },
    {
      id: 'wi-bb4-oo',
      name: '4…Bb4 5.d3 O-O',
      group: '4…Bb4',
      story: 'Black castles and keeps the pin. Castle too. If Black takes on c3 later, recapture with the b-pawn.',
      moves: [
        ...whiteTrunk,
        'Bc4', 'Bb4', 'd3',
        {
          san: 'O-O',
          why: 'Black castles and keeps the pin for now.',
        },
        {
          san: 'O-O',
          why: 'Castle. The c3 knight was only pinned to your king, so now it is free.',
        },
      ],
      plan: 'Next come Bg5, Ne2–g3 or a3 to ask the bishop a question. After …Bxc3 bxc3 you have the bishop pair, just as in the …Bxc3+ line.',
    },

    {
      id: 'wi-bb4-d6',
      name: '4…Bb4 5.d3 d6',
      group: '4…Bb4',
      story: 'Black keeps the pin and guards e5. Just castle; if …Na5 comes, drop the bishop back to b3.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Bb4', 'd3',
        {
          san: 'd6',
          why: 'Black guards e5 and keeps the pin.',
        },
        {
          san: 'O-O',
          why: 'Castle: that ends the pin on c3.',
        },
      ],
      plan: 'Meet …Na5 with Bb3, and play Ne2–g3 or a3 to question the b4 bishop. Stockfish about +0.15.',
    },

    // ─────────────────────────────── 4...Be7
    {
      id: 'wi-be7',
      name: '4…Be7: Hungarian-style',
      group: 'Other 4th moves',
      story: 'Black plays solidly with …Be7. You play d3, castle, and a4 so the bishop can drop to a2 if Black tries …Na5.',
      moves: [
        ...whiteTrunk,
        'Bc4',
        {
          san: 'Be7',
          why: 'Black plays solidly, getting ready to castle.',
        },
        {
          san: 'd3',
          why: 'Guard e4 with a pawn: the quiet setup.',
        },
        {
          san: 'O-O',
          why: 'Black castles.',
        },
        {
          san: 'O-O',
          why: 'Castle too.',
        },
        {
          san: 'd6',
          why: 'Black guards e5.',
        },
        {
          san: 'a4',
          why: 'Gain queenside space and give your bishop the a2 square against …Na5.',
          arrows: ['c4a2:b', 'c6a5:y'],
        },
      ],
      plan: 'Play h3, Re1 and Be3, keeping the bishop on the a2–g8 diagonal. It\'s a quiet game where you are slightly better thanks to more active pieces.',
    },

    {
      id: 'wi-be7-d6',
      name: '4…Be7 5.d3 d6',
      group: 'Other 4th moves',
      story: 'Black plays …d6 before castling. Play a4 first and then castle: it\'s the same position as the other …Be7 line.',
      moves: [
        ...whiteTrunk, 'Bc4', 'Be7', 'd3',
        {
          san: 'd6',
          why: 'Black guards e5 before castling.',
        },
        {
          san: 'a4',
          why: 'Space on the queenside and a2 for your bishop, as in the other …Be7 line.',
          arrows: ['c4a2:b'],
        },
        {
          san: 'O-O',
          why: 'Black castles.',
        },
        {
          san: 'O-O',
          why: 'Castle too. This is the same position as 5…O-O 6.O-O d6 7.a4.',
        },
      ],
      plan: 'The same plan: h3, Re1 and Be3. If …Bg4, h3 asks the bishop right away. Stockfish about +0.2.',
    },

    // ─────────────────────────────── 4...d6
    {
      id: 'wi-d6-be6',
      name: '4…d6?! 5.Ng5 Be6',
      group: 'Other 4th moves',
      story: 'Black blocks in the f8 bishop with …d6. Ng5 hits f7 twice, and after …Be6 you take it off and grab the e6 pawn.',
      moves: [
        ...whiteTrunk,
        'Bc4',
        {
          san: 'd6',
          why: 'Black guards e5 but blocks the f8 bishop, so f7 is only guarded by the king.',
          arrows: ['c4f7:r'],
        },
        {
          san: 'Ng5',
          why: 'Attack f7 twice, with the knight and the bishop.',
          arrows: ['g5f7:r', 'c4f7:r'],
        },
        {
          san: 'Be6',
          why: 'Black blocks the bishop\'s line to f7.',
        },
        {
          san: 'Nxe6',
          why: 'Take the bishop, the defender of f7.',
        },
        {
          san: 'fxe6',
          why: 'Black recaptures.',
        },
        {
          san: 'Bxe6',
          why: 'Win a pawn, and now you have the bishop pair too.',
        },
      ],
      plan: 'You\'re a clean pawn up with both bishops (Stockfish about +3). Retreat the bishop to b3 or h3 when it is attacked, castle, and play d3. Simplify toward an ending.',
    },
    {
      id: 'wi-d6-d5',
      name: '4…d6?! 5.Ng5 d5',
      group: 'Other 4th moves',
      story: 'Black blocks with …d5. You take, and after …Na5 check on b5, take on c6 and retreat to e2. You keep an extra pawn.',
      moves: [
        ...whiteTrunk,
        'Bc4', 'd6', 'Ng5',
        {
          san: 'd5',
          why: 'Black blocks the bishop\'s line to f7 with a pawn.',
        },
        {
          san: 'exd5',
          why: 'Take the pawn. If Black recaptures with …Nxd5, your pieces pile up on f7, so Black usually plays …Na5 instead.',
        },
        {
          san: 'Na5',
          why: 'Black attacks your c4 bishop.',
          arrows: ['a5c4:r'],
        },
        {
          san: 'Bb5+',
          why: 'Move the bishop with check.',
        },
        {
          san: 'c6',
          why: 'Black blocks.',
        },
        {
          san: 'dxc6',
          why: 'Take the pawn.',
        },
        {
          san: 'bxc6',
          why: 'Black recaptures, hitting the bishop.',
        },
        {
          san: 'Be2',
          why: 'Retreat to safety. You\'re a pawn up.',
        },
      ],
      plan: 'Black has some activity for the pawn, as in the Two Knights Defence. Play d3, Nf3/Nge4 and castle, and don\'t be afraid to give the pawn back to finish development. Stockfish gives White about +1.5.',
    },
  ],
};
