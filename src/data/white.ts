import type { MoveEntry, MoveSpec, Repertoire } from './types';

/** 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6, explained from White's side. Shared by all White repertoires. */
export const whiteTrunk: MoveSpec[] = [
  {
    san: 'e4',
    why: 'Claim the centre and open lines for the queen and the f1 bishop.',
    arrows: ['e4d5', 'e4f5', 'd1h5:b', 'f1b5:b'],
  },
  {
    san: 'e5',
    why: 'Black stakes an equal claim to the centre.',
    arrows: ['e5d4', 'e5f4'],
  },
  {
    san: 'Nf3',
    why: 'Develop with a threat: the knight attacks e5.',
    arrows: ['f3e5:r'],
    detail: 'Every developing move you make with a threat forces Black to spend a move answering it.',
  },
  {
    san: 'Nc6',
    why: 'Black defends e5 and develops a piece at the same time.',
    arrows: ['c6e5'],
  },
  {
    san: 'Nc3',
    why: 'The Four Knights move: develop and guard e4 before doing anything else.',
    arrows: ['c3e4', 'c3d5'],
    detail:
      '3.Bb5 (the Ruy Lopez) is more direct. 3.Nc3 is the solid choice: e4 is protected, so Black\'s …Nxe4 tricks mostly stop working, and your plans stay flexible.',
  },
  {
    san: 'Nf6',
    why: 'Black copies: all four knights are out. This is the Four Knights Game.',
    arrows: ['f6e4:r'],
  },
];

/**
 * The Old Steinitz structure (…d6 against Bb5 + d4) arises from both 4.Bb5 d6 5.d4 and 4.d4 d6 5.Bb5.
 * These tails start from that position with Black to move.
 */
export const steinitzExd4: MoveEntry[] = [
  {
    san: 'exd4',
    why: 'Black gives up the centre to free the position.',
  },
  {
    san: 'Nxd4',
    why: 'Recapture with the knight, so it sits in the centre and hits c6 again.',
    arrows: ['d4c6:r', 'b5c6:r'],
  },
  {
    san: 'Bd7',
    why: 'Black unpins the c6 knight.',
  },
  {
    san: 'O-O',
    why: 'Castle. Black is cramped and has no active plan.',
  },
];
export const steinitzExd4Plan =
  'You have more space. Nxc6 and Bxc6+ can leave Black with doubled c-pawns, or keep the pieces and build with Re1, Bf1 and f3. Black is cramped, so look for Nd5 and f4–e5 breaks. Stockfish about +0.7.';

export const steinitzBd7: MoveEntry[] = [
  {
    san: 'Bd7',
    why: 'Black breaks the pin so the c6 knight is properly defended.',
    arrows: ['d7c6'],
  },
  {
    san: 'Bxc6',
    why: 'Take at once, before Black can free the position with …exd4.',
    detail: 'Stockfish prefers this to castling first (+1.0 against +0.6). Without the c6 knight, e5 is only held by the d6 pawn.',
    avoid: [
      {
        san: 'O-O',
        why: 'Natural, but it lets Black keep the centre with …Be7 and …exd4. Taking on c6 first is stronger.',
      },
    ],
  },
  {
    san: 'Bxc6',
    why: 'Black recaptures with the bishop.',
  },
  {
    san: 'Qd3',
    why: 'Back up d4 and e4 and get ready for dxe5 or queenside castling.',
    arrows: ['d3e4', 'd4e5:r'],
  },
];
export const steinitzBd7Plan =
  'Black can\'t hold the tension: dxe5 is coming, and after …dxe5 Qxd8+ or Nxe5 you win a pawn or get a much better ending. Bg5, O-O-O and Rhe1 keep up the pressure. Stockfish about +1.0.';

export const steinitzA6: MoveEntry[] = [
  {
    san: 'a6',
    why: 'Black asks the bishop to decide, but this loses time at a bad moment.',
  },
  {
    san: 'Bxc6+',
    why: 'Take with check so Black has to recapture with the b-pawn.',
  },
  {
    san: 'bxc6',
    why: 'Black recaptures.',
  },
  {
    san: 'dxe5',
    why: 'Double attack: the pawn hits the f6 knight, and d6 falls if Black moves it.',
    arrows: ['e5f6:r', 'e5d6:r'],
  },
];
export const steinitzA6Plan =
  'Black\'s best is …Ng4, and after Bf4 and exd6 you are a clean pawn up with a better structure. Stockfish rates White about +3. Keep developing and trade pieces.';

export const spanishRepertoire: Repertoire = {
  id: 'white-spanish-four-knights',
  name: 'White: Spanish 4.Bb5',
  side: 'white',
  tagline: 'The Spanish Four Knights — 4.Bb5',
  intro:
    'You develop all your pieces toward the centre, castle quickly, and put pressure on e5 with Bb5. ' +
    'Nothing here needs memorising move-by-move if you remember the reasons: every move either develops, ' +
    'guards the centre, or pressures e5.',
  principles: [
    {
      title: 'Knights first, then bishops',
      body: 'Nf3 and Nc3 go out before the bishops because their best squares are obvious. Bishops wait until you know which diagonal matters.',
    },
    {
      title: 'e4 must always be guarded',
      body: 'Nc3 guards it early; d3 or Re1 guard it later. Many of Black\'s tricks (…Nxe4, the fork trick) only work when e4 is loose.',
    },
    {
      title: 'Pressure e5 through c6',
      body: 'The knight on c6 is e5\'s only defender. Bb5 attacks that defender, so Bxc6 followed by Nxe5 is a threat that keeps returning.',
    },
    {
      title: 'Castle early, then Re1',
      body: 'O-O comes before any fighting. The rook on e1 then backs up e4 and gets ready for the e-file to open.',
    },
    {
      title: 'Doubled c-pawns are fine',
      body: 'If Black plays …Bxc3, recapture bxc3. You get the bishop pair, an open b-file and a c3 pawn that supports d4.',
    },
    {
      title: 'Pin f6 with Bg5',
      body: 'Once d3 opens the c1 bishop, Bg5 pins Black\'s best kingside defender. Bxf6 …gxf6 wrecks Black\'s king cover.',
    },
  ],
  lines: [
    // ─────────────────────────────── 4...Bb4 Symmetrical
    {
      id: 'w-sym-metger',
      name: 'Symmetrical: Metger Unpin',
      group: '4…Bb4 — Symmetrical',
      story:
        'Black copies you. You castle, play d3 and pin with Bg5. Black gives up the bishop for your c3 knight and unpins with …Qe7 and …Nd8–e6. You open the centre with d4 and keep both bishops.',
      moves: [
        ...whiteTrunk,
        {
          san: 'Bb5',
          why: 'The Spanish Four Knights: attack the c6 knight, which is e5\'s only defender.',
          arrows: ['b5c6', 'c6e5:y'],
          detail:
            'Bxc6 followed by Nxe5 isn\'t a real threat yet, because Black can win the pawn back with …Nxe4 or …Qd4 tricks. Still, the pressure on e5 stays for the whole game, and Bb5 clears f1 so you can castle.',
        },
        {
          san: 'Bb4',
          why: 'Black mirrors you, eyeing your c3 knight, which is e4\'s defender.',
          arrows: ['b4c3', 'c3e4:y'],
        },
        {
          san: 'O-O',
          why: 'King safety first. e4 is only indirectly defended, but that\'s fine: grabbing it opens the e-file toward Black\'s own king.',
          detail:
            'If 5…Bxc3, recapture 6.bxc3. Then if …Nxe4, Bxc6 and Qe2 win the e5 pawn back with the better game (Stockfish about +0.9). So don\'t panic about e4 here.',
          arrows: ['f1e1:b'],
        },
        {
          san: 'O-O',
          why: 'Black castles too, keeping the symmetry.',
        },
        {
          san: 'd3',
          why: 'Guard e4 with a pawn for good and open the c1 bishop\'s path to g5.',
          arrows: ['d3e4', 'c1g5:b'],
        },
        {
          san: 'd6',
          why: 'Black does the same: guards e5 and frees the c8 bishop.',
          arrows: ['d6e5', 'c8g4:b'],
        },
        {
          san: 'Bg5',
          why: 'Pin the f6 knight to the queen. This is the key move of the Symmetrical line.',
          arrows: ['g5f6:r', 'f6d8:r', 'c3d5:b'],
          detail:
            'The f6 knight is Black\'s best kingside defender. Now Nd5 hits it a second time, and Bxf6 …gxf6 would leave Black\'s king exposed.',
        },
        {
          san: 'Bxc3',
          why: 'Black gives up the bishop to stop Nd5 and double your pawns.',
        },
        {
          san: 'bxc3',
          why: 'Capture toward the centre: you get the bishop pair and an open b-file, and c3 backs up a later d4.',
          arrows: ['c3d4', 'b1b8:b'],
          detail: 'The doubled c-pawns look ugly, but they control d4 and b4. With both bishops, you want the position to open up.',
        },
        {
          san: 'Qe7',
          why: 'The Metger Unpin: the queen steps off the pin so …Nd8–e6 can kick your bishop.',
          arrows: ['c6d8:b', 'd8e6:b', 'e6g5:r'],
        },
        {
          san: 'Re1',
          why: 'Back up e4 and get ready for d4. You want the centre open for your bishops.',
          arrows: ['e1e4', 'd3d4:b'],
        },
        {
          san: 'Nd8',
          why: 'The knight heads for e6 to challenge your g5 bishop.',
          arrows: ['d8e6'],
        },
        {
          san: 'd4',
          why: 'Strike in the centre now. The bishop pair loves open lines and d4 gains space.',
          arrows: ['d4e5:r'],
        },
        {
          san: 'Ne6',
          why: 'Black attacks your g5 bishop.',
          arrows: ['e6g5:r'],
        },
        {
          san: 'Bc1',
          why: 'Retreat and keep the bishop pair. Don\'t trade a bishop for a knight you don\'t need to.',
          detail: 'From c1 the bishop can come back to a3 (after dxe5/d6 opens things) or support a later d5. The bishop pair is your long-term trump.',
          arrows: ['c1a3:b'],
        },
      ],
      plan:
        'Your trumps are the bishop pair and the c3–d4–e4 centre. Tuck the light bishop back with Bf1, then either gain queenside space (a4–a5) or open the centre with dxe5 at a good moment. Black wants …c5 and knight play on f4/g4. Keep pieces on the board: bishops get stronger as the position opens.',
    },
    {
      id: 'w-sym-ne7',
      name: 'Symmetrical: 7…Ne7',
      group: '4…Bb4 — Symmetrical',
      story:
        'Same start, but Black keeps the bishop and reroutes the c6 knight with …Ne7. You take on f6, wrecking Black\'s kingside pawns, and jump to f5 with the knight.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Bb4', 'O-O', 'O-O', 'd3', 'd6', 'Bg5',
        {
          san: 'Ne7',
          why: 'Black reroutes the knight toward g6 to help defend the kingside, but it leaves f6 without support.',
          arrows: ['e7g6:b'],
        },
        {
          san: 'Bxf6',
          why: 'Take now, while the only recapture is …gxf6, which ruins Black\'s king cover.',
          arrows: ['f6:r', 'e7:y'],
          detail: 'The knight on e7 now blocks the queen\'s path to f6, so Black has to recapture with the g-pawn.',
        },
        {
          san: 'gxf6',
          why: 'Forced. Black\'s king now has doubled f-pawns and an open g-file.',
        },
        {
          san: 'Nh4',
          why: 'Head for f5, the hole in front of Black\'s king.',
          arrows: ['h4f5', 'f5h6:r', 'f5e7:r'],
          detail: 'A knight on f5 can\'t be driven away by a pawn (the g-pawn is gone from g6 and the e-pawn from e6). From f5 it eyes h6, e7, d6 and g7.',
        },
      ],
      plan:
        'Aim at the king: knight to f5, then Qf3 or Qg4 and f4 to open the f-file. Black\'s doubled f-pawns give the king poor cover, but Black has the bishop pair, so Stockfish calls it level (0.00). The plan is easy to play; just don\'t overpress.',
    },

    {
      id: 'w-sym-d6',
      name: '4…Bb4 5.O-O d6? 6.Nd5!',
      group: '4…Bb4 — Symmetrical',
      story: 'Black plays …d6 before castling. Nd5 hits the b4 bishop, and after …Nxd5 exd5 both the c6 knight and b4 bishop are loose.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Bb4', 'O-O',
        {
          san: 'd6',
          why: 'Black guards e5 but leaves the b4 bishop without support.',
          arrows: ['b4:y'],
        },
        {
          san: 'Nd5',
          why: 'Jump in, attacking the undefended b4 bishop and the f6 knight.',
          arrows: ['d5b4:r', 'd5f6:r'],
        },
        {
          san: 'Nxd5',
          why: 'Black swaps off your knight.',
        },
        {
          san: 'exd5',
          why: 'Recapture, and now the pawn hits the c6 knight while the b4 bishop is still loose.',
          arrows: ['d5c6:r', 'b4:y'],
        },
      ],
      plan: 'Black can\'t save everything: …a6 Ba4 b5 dxc6 bxa4 is the best try, and you come out on top (Stockfish about +2). Most other moves lose a piece. Collect the material and castle into a safe middlegame.',
    },
    {
      id: 'w-sym-bxc3',
      name: '4…Bb4 5.O-O Bxc3',
      group: '4…Bb4 — Symmetrical',
      story: 'Black takes on c3 straight away. Recapture with the b-pawn, then play Re1 and d4 exactly as in the Metger line.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Bb4', 'O-O',
        {
          san: 'Bxc3',
          why: 'Black gives up the bishop at once to double your pawns.',
        },
        {
          san: 'bxc3',
          why: 'Capture toward the centre: bishop pair, open b-file, and c3 supports d4.',
          arrows: ['c3d4', 'b1b8:b'],
        },
      ],
      plan: 'Re1 and d4 next, the same plan as the Metger Unpin. If Black grabs e4 with …Nxe4, Bxc6 dxc6 and Qe2 wins the pawn back with the better game (Stockfish about +0.9).',
    },

    // ─────────────────────────────── 4...Nd4 Rubinstein
    {
      id: 'w-rub-exchange',
      name: 'Rubinstein: Exchange line',
      group: '4…Nd4 — Rubinstein',
      story:
        'Black sacrifices a tempo to hit your bishop. You swap knights, counterattack with e5, and after a burst of captures you trade queens into a level, safe ending with your king on e2.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5',
        {
          san: 'Nd4',
          why: 'The Rubinstein: the knight jumps forward, attacking your b5 bishop and f3 knight.',
          arrows: ['d4b5:r', 'd4f3:r'],
          detail: 'Black offers the e5 pawn in return for activity. This is Black\'s most testing reply to 4.Bb5.',
        },
        {
          san: 'Nxd4',
          why: 'Swap off the annoying knight. It leads to a simple, forcing line with little theory to learn.',
          avoid: [
            {
              san: 'Nxe5',
              why: 'Greedy. 5.Nxe5? Qe7! hits the knight and e4. After 6.f4 Nxb5 7.Nxb5 d6 8.Nf3 Qxe4+ your king is stuck in the centre and Black is clearly better (Stockfish about −0.5).',
            },
          ],
        },
        {
          san: 'exd4',
          why: 'Recapture. Now the d4 pawn attacks your c3 knight.',
          arrows: ['d4c3:r'],
        },
        {
          san: 'e5',
          why: 'Don\'t move the knight. Counterattack the f6 knight instead (an in-between move).',
          arrows: ['e5f6:r'],
          detail: 'Both sides now have a knight under attack. Material stays level after the captures.',
        },
        {
          san: 'dxc3',
          why: 'Black takes the knight, so both sides have a piece hanging.',
        },
        {
          san: 'exf6',
          why: 'Take back the piece. Material is level again.',
        },
        {
          san: 'Qxf6',
          why: 'Black recaptures, bringing the queen out and eyeing f2.',
          arrows: ['f6f2:r'],
        },
        {
          san: 'dxc3',
          why: 'Recapture with the d-pawn, which opens lines for your c1 bishop and queen.',
          arrows: ['c1g5:b', 'd1d8:b'],
        },
        {
          san: 'Qe5+',
          why: 'Check, asking how you want to block.',
        },
        {
          san: 'Qe2',
          why: 'Block with the queen and offer a trade. The ending is level but completely safe for you.',
          detail: 'Club players often block with 9.Be2 instead, which is also fine. Stockfish rates the ending 0.00: this line is about safety, not winning chances.',
        },
        {
          san: 'Qxe2+',
          why: 'Black trades queens.',
        },
        {
          san: 'Kxe2',
          why: 'Recapture with the king. With no queens around, the king is safe and useful in the centre.',
        },
      ],
      plan:
        'This is a queenless middlegame. Develop with Be3 or Bf4, Rhe1 and Rad1, and put your rooks on the open d- and e-files. Black\'s queenside is still undeveloped. Stockfish calls it dead level, so this is a safe, low-theory weapon, not a winning try.',
    },

    {
      id: 'w-rub-cxd2',
      name: 'Rubinstein: 7…cxd2+',
      group: '4…Nd4 — Rubinstein',
      story: 'Instead of recapturing on f6, Black grabs d2 with check. Take back with the bishop (not the queen!), and you have a big lead in development.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Nd4', 'Nxd4', 'exd4', 'e5', 'dxc3', 'exf6',
        {
          san: 'cxd2+',
          why: 'Black takes another pawn with check.',
        },
        {
          san: 'Bxd2',
          why: 'Recapture with the bishop, developing it toward c3 and Black\'s king.',
          arrows: ['d2c3:b', 'c3g7:b'],
          avoid: [
            {
              san: 'Qxd2',
              why: 'After Qxd2 Qxf6 the queen is misplaced and Black is better (Stockfish −0.8). Bxd2 is +2.0.',
            },
          ],
        },
      ],
      plan: 'After …Qxf6, castle, then Bc3 and Re1 hit the long diagonal and the e-file while Black\'s king is stuck in the centre. Stockfish rates White about +2.8.',
    },
    {
      id: 'w-rub-bc5',
      name: 'Rubinstein: 8…Bc5',
      group: '4…Nd4 — Rubinstein',
      story: 'Black skips the queen check and develops the bishop. Check on e2 first, covering f2 and offering a queen trade.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Nd4', 'Nxd4', 'exd4', 'e5', 'dxc3', 'exf6', 'Qxf6', 'dxc3',
        {
          san: 'Bc5',
          why: 'Black develops and eyes f2 instead of checking.',
          arrows: ['c5f2:r', 'f6f2:r'],
        },
        {
          san: 'Qe2+',
          why: 'Check first. It covers f2 and offers a queen trade.',
          arrows: ['e2f2'],
        },
      ],
      plan: 'After …Qe6 O-O, or a queen trade, the position is level and easy: castle, Be3 to trade Black\'s bishop, Rad1 on the open file.',
    },
    {
      id: 'w-rub-c6',
      name: 'Rubinstein: 8…c6',
      group: '4…Nd4 — Rubinstein',
      story: 'Black kicks your bishop with …c6. Drop it back to d3 and castle.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Nd4', 'Nxd4', 'exd4', 'e5', 'dxc3', 'exf6', 'Qxf6', 'dxc3',
        {
          san: 'c6',
          why: 'Black kicks the b5 bishop and prepares …d5.',
          arrows: ['c6b5:r'],
        },
        {
          san: 'Bd3',
          why: 'Retreat to a good diagonal and get ready to castle.',
          arrows: ['d3h7:b'],
        },
      ],
      plan: 'Castle, then Re1 and Be3. The position is level (Stockfish +0.2); your pieces come out a little faster.',
    },

    // ─────────────────────────────── 4...Bc5 Classical
    {
      id: 'w-classical-fork',
      name: 'Classical: the fork trick',
      group: '4…Bc5 — Classical',
      story:
        'Black puts the bishop on c5 and castles. You take e5 with the knight because d4 forks bishop and knight, then chase Black\'s pieces with f4, e5 and d5 to grab space.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5',
        {
          san: 'Bc5',
          why: 'Black develops the bishop to its most active square, eyeing f2.',
          arrows: ['c5f2:r'],
        },
        {
          san: 'O-O',
          why: 'Castle first, so your king is safe before the fork trick opens up the centre.',
          arrows: ['c5f2:y'],
        },
        {
          san: 'O-O',
          why: 'Black castles.',
        },
        {
          san: 'Nxe5',
          why: 'The fork trick: take e5 because d4 will fork the c5 bishop and e5 knight.',
          arrows: ['f3e5', 'd2d4:b'],
          detail: 'If …Nxe5, then d4 hits both pieces and you win the material back with a big centre. Remember the pattern: "knight takes, pawn forks".',
        },
        {
          san: 'Nxe5',
          why: 'Black takes the knight, walking into the fork.',
        },
        {
          san: 'd4',
          why: 'The fork: the pawn attacks both the c5 bishop and the e5 knight.',
          arrows: ['d4c5:r', 'd4e5:r'],
        },
        {
          san: 'Bd6',
          why: 'Black saves the bishop and defends e5 with it.',
          arrows: ['d6e5'],
        },
        {
          san: 'f4',
          why: 'Attack the e5 knight a second time and gain space. The pawns roll forward.',
          arrows: ['f4e5:r', 'd4e5:r'],
        },
        {
          san: 'Nc6',
          why: 'The knight retreats.',
        },
        {
          san: 'e5',
          why: 'Another fork: the pawn hits the d6 bishop and the f6 knight.',
          arrows: ['e5d6:r', 'e5f6:r'],
        },
        {
          san: 'Be7',
          why: 'Black saves the bishop, leaving the f6 knight to fend for itself.',
        },
        {
          san: 'd5',
          why: 'Kick the c6 knight before taking on f6, gaining even more space.',
          arrows: ['d5c6:r'],
        },
        {
          san: 'Nb4',
          why: 'The knight hops away.',
        },
        {
          san: 'exf6',
          why: 'Now collect the f6 knight. Material is level, and your pawns control the centre.',
        },
        {
          san: 'Bxf6',
          why: 'Black recaptures.',
        },
      ],
      plan:
        'You have more space and a d5 pawn that cramps Black. Play a3 to kick the b4 knight, then Ne4 to swap Black\'s good bishop and target the kingside. Black will try …Re8 and …c6 to undermine d5.',
    },

    {
      id: 'w-classical-d6',
      name: 'Classical: 5…d6',
      group: '4…Bc5 — Classical',
      story: 'Black guards e5 with …d6 instead of castling. The fork trick is off, so hit the centre with d4.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Bc5', 'O-O',
        {
          san: 'd6',
          why: 'Black guards e5 with a pawn, so there\'s no fork trick now.',
        },
        {
          san: 'd4',
          why: 'Hit the centre, gaining time on the c5 bishop.',
          arrows: ['d4c5:r', 'd4e5:r'],
        },
      ],
      plan: 'After …exd4 Nxd4, Nf5 and Bg5 put pressure on Black\'s kingside, much like the Old Steinitz. If …Bb6, keep the tension with Bg5 or take on e5. Stockfish about +0.7.',
    },
    {
      id: 'w-classical-bxd4',
      name: 'Classical: 7…Bxd4',
      group: '4…Bc5 — Classical',
      story: 'After the fork, Black takes the d4 pawn with the bishop. Take back with the queen, and you win the knight on e5 back too.',
      moves: [
        ...whiteTrunk, 'Bb5', 'Bc5', 'O-O', 'O-O', 'Nxe5', 'Nxe5', 'd4',
        {
          san: 'Bxd4',
          why: 'Black gives the bishop for your d-pawn instead of retreating.',
        },
        {
          san: 'Qxd4',
          why: 'Recapture, and the queen now attacks the e5 knight too.',
          arrows: ['d4e5:r'],
        },
      ],
      plan: 'The knight must retreat (…Nc6), and you have the bishop pair with a strong centre. Qd1 or Qd3, Bd3 and f4 follow. Stockfish about +1.1.',
    },

    // ─────────────────────────────── 4...a6
    {
      id: 'w-a6',
      name: '4…a6: the exchange',
      group: 'Sidelines at move 4',
      story:
        'Black kicks your bishop. You take on c6 and grab e5. Black wins the pawn back with a queen fork, but you castle, play Re1 and have a big lead in development against Black\'s uncastled king.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5',
        {
          san: 'a6',
          why: 'Black asks the bishop to decide straight away.',
          arrows: ['a6b5:r'],
        },
        {
          san: 'Bxc6',
          why: 'Remove the defender of e5 right away.',
          arrows: ['c6e5:y'],
          detail: '5.Ba4 is also fine (it becomes a Ruy Lopez), but the exchange gives you a clear, easy plan.',
        },
        {
          san: 'dxc6',
          why: 'Black recaptures toward the open d-file, freeing the c8 bishop.',
        },
        {
          san: 'Nxe5',
          why: 'Grab the pawn: the defender of e5 is gone.',
        },
        {
          san: 'Nxe4',
          why: 'Black grabs e4 back.',
        },
        {
          san: 'Nxe4',
          why: 'Take the knight.',
        },
        {
          san: 'Qd4',
          why: 'A queen fork: it hits both your knights on e4 and e5.',
          arrows: ['d4e4:r', 'd4e5:r'],
        },
        {
          san: 'O-O',
          why: 'Castle, letting the e5 knight go and getting your rook to e1 fast.',
          detail: 'You can\'t save both knights, so develop. The rook is about to line up against Black\'s queen and king on the e-file.',
        },
        {
          san: 'Qxe5',
          why: 'Black wins the knight back. Material is level.',
        },
        {
          san: 'Re1',
          why: 'Line up on the e-file. If the e4 knight moves, the rook attacks the queen.',
          arrows: ['e1e5:r', 'd2d4:b'],
          detail: 'The threat is d4 to kick the queen, followed by knight jumps with discovered attacks on the e-file. Black\'s king is still in the centre.',
        },
      ],
      plan:
        'Play d4 with tempo on the queen, then Bf4 or Bg5, and Qe2/Qf3. Black\'s king is still in the centre, and every knight move from e4 becomes a discovered attack. Black\'s trump is the bishop pair, so strike before Black untangles.',
    },

    {
      id: 'w-a6-qd4',
      name: '4…a6: 6…Qd4',
      group: 'Sidelines at move 4',
      story: 'Black forks early with …Qd4. Retreat the knight to f3 and you simply keep the extra pawn: e4 is defended by your c3 knight.',
      moves: [
        ...whiteTrunk, 'Bb5', 'a6', 'Bxc6', 'dxc6', 'Nxe5',
        {
          san: 'Qd4',
          why: 'Black attacks the e5 knight right away.',
          arrows: ['d4e5:r'],
        },
        {
          san: 'Nf3',
          why: 'Retreat with tempo on the queen. The e4 pawn is guarded by the c3 knight, so you stay a pawn up.',
          arrows: ['f3d4:r', 'c3e4'],
        },
      ],
      plan: 'Castle and play d3 and Qe1 or Re1. You are a clean pawn up (Stockfish about +2). Black\'s bishop pair gives some play, so keep your position solid.',
    },
    {
      id: 'w-a6-bxc6',
      name: '4…a6: 5…bxc6',
      group: 'Sidelines at move 4',
      story: 'Black recaptures toward the centre with the b-pawn. The d-file stays closed, so there\'s no …Qd4 fork: just take e5.',
      moves: [
        ...whiteTrunk, 'Bb5', 'a6', 'Bxc6',
        {
          san: 'bxc6',
          why: 'Black recaptures toward the centre, but the queen\'s d-file stays closed.',
        },
        {
          san: 'Nxe5',
          why: 'Grab the pawn: without the d-file open, Black has no quick way to win it back.',
        },
      ],
      plan: 'Castle, d4 and Re1. You are a pawn up (Stockfish about +1.3). Black will try …Bb4 and …Re8 against e4, so keep it well guarded.',
    },

    // ─────────────────────────────── 4...d6
    {
      id: 'w-d6',
      name: '4…d6 5.d4 exd4',
      group: '4…d6 — Old Steinitz',
      story:
        'Black plays passively with …d6. You hit the centre with d4, and when Black takes, your knight recaptures in the centre. Castle, and Black is cramped.',
      moves: [
        ...whiteTrunk,
        'Bb5',
        {
          san: 'd6',
          why: 'A solid but passive move: Black guards e5 with a pawn.',
          arrows: ['d6e5'],
        },
        {
          san: 'd4',
          why: 'Hit the centre at once. The pinned c6 knight can\'t hold e5 comfortably.',
          arrows: ['d4e5:r', 'b5c6:y'],
        },
        ...steinitzExd4,
      ],
      plan: steinitzExd4Plan,
    },
    {
      id: 'w-d6-bd7',
      name: '4…d6 5.d4 Bd7',
      group: '4…d6 — Old Steinitz',
      story: 'Black unpins with …Bd7. Take on c6 straight away and bring the queen to d3: e5 is under fire and Black is stuck.',
      moves: [...whiteTrunk, 'Bb5', 'd6', 'd4', ...steinitzBd7],
      plan: steinitzBd7Plan,
    },
    {
      id: 'w-d6-a6',
      name: '4…d6 5.d4 a6?',
      group: '4…d6 — Old Steinitz',
      story: 'Black kicks the bishop, but it\'s a mistake: take on c6 with check, then dxe5 hits the f6 knight and d6 at once.',
      moves: [...whiteTrunk, 'Bb5', 'd6', 'd4', ...steinitzA6],
      plan: steinitzA6Plan,
    },

    // ─────────────────────────────── 3...Bc5
    {
      id: 'w-3bc5',
      name: '3…Bc5: the fork trick',
      group: 'Black avoids the Four Knights',
      story:
        'Black skips …Nf6 and plays …Bc5 straight away. The same fork trick works: Nxe5, then d4 forks. You get the bishop pair and a big centre.',
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3',
        {
          san: 'Bc5',
          why: 'Black develops the bishop before the knight, avoiding the Four Knights.',
          arrows: ['c5f2:r'],
        },
        {
          san: 'Nxe5',
          why: 'The fork trick again: take e5, then d4 hits bishop and knight.',
          arrows: ['f3e5', 'd2d4:b'],
        },
        {
          san: 'Nxe5',
          why: 'Black takes back.',
        },
        {
          san: 'd4',
          why: 'Fork! The pawn attacks the bishop on c5 and the knight on e5.',
          arrows: ['d4c5:r', 'd4e5:r'],
        },
        {
          san: 'Bd6',
          why: 'Black saves the bishop and protects the knight.',
        },
        {
          san: 'dxe5',
          why: 'Take the knight. Material is level again.',
        },
        {
          san: 'Bxe5',
          why: 'Black recaptures the pawn.',
        },
        {
          san: 'Bd3',
          why: 'Develop and prepare f4 to chase the e5 bishop. You have the bishop pair and a central pawn majority.',
          arrows: ['f2f4:b', 'f4e5:r'],
        },
      ],
      plan:
        'Castle, then f4 to drive the bishop away, and push your central pawns. The bishop pair plus the e- and f-pawns give you a lasting edge.',
    },

    // ─────────────────────────────── 2...Nf6 Petroff → transposes
    {
      id: 'w-petroff-transpose',
      name: '2…Nf6: back to the Four Knights',
      group: 'Black avoids the Four Knights',
      story:
        'Black plays the Petroff with 2…Nf6. You calmly play Nc3, and after …Nc6 you are back in the Four Knights: play Bb5 as normal.',
      moves: [
        'e4', 'e5', 'Nf3',
        {
          san: 'Nf6',
          why: 'The Petroff: Black counterattacks e4 instead of defending e5.',
          arrows: ['f6e4:r'],
        },
        {
          san: 'Nc3',
          why: 'Guard e4 and invite Black back into a Four Knights.',
          arrows: ['c3e4'],
          detail: 'You don\'t have to learn Petroff theory. Nc3 keeps you in familiar territory. 3.Nxe5 is the main Petroff and a little stronger (Stockfish +0.3), so this is a practical choice, not the best move.',
        },
        {
          san: 'Nc6',
          why: 'Black defends e5. Now it\'s the Four Knights by transposition.',
        },
        'Bb5',
      ],
      plan:
        'This is the normal Four Knights position with 4.Bb5 played. Carry on with your Spanish Four Knights lines: castle, d3, and Bg5 against …Bb4, the exchange against …Nd4, and so on.',
    },
  ],
};
