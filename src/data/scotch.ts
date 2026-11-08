import type { Repertoire } from './types';
import { steinitzA6, steinitzA6Plan, steinitzBd7, steinitzBd7Plan, steinitzExd4, steinitzExd4Plan, whiteTrunk } from './white';

export const scotchRepertoire: Repertoire = {
  id: 'white-scotch-four-knights',
  name: 'White: Scotch 4.d4',
  side: 'white',
  tagline: 'The Scotch Four Knights — 4.d4',
  intro:
    'You open the centre straight away with 4.d4. After …exd4 Nxd4 you usually swap on c6, then Bd3, O-O and Bg5. ' +
    'The position is open and your pieces come out fast. Several natural-looking Black moves lose material to Qg4 or dxe5 tricks.',
  principles: [
    {
      title: 'Open the centre at once',
      body: '4.d4 challenges e5 before Black is ready. Almost every Black reply gives up the centre with …exd4, and your knight takes back on d4.',
    },
    {
      title: 'Nxc6, then Bd3, O-O, Bg5',
      body: 'Against …Bb4 you trade on c6, guard e4 with Bd3, castle and pin with Bg5. The same four moves work against …Bc5 too.',
    },
    {
      title: 'Qg4 hits g7 and loose knights',
      body: 'Whenever Black\'s king\'s knight leaves f6 (…Nxe4, or kicked by e5), g7 is undefended. Qg4 attacks g7 and often a knight at the same time.',
    },
    {
      title: 'Punish …Nxd4 by centralising',
      body: 'If Black swaps knights on d4, recapture with the queen. It can\'t easily be kicked, and you castle queenside with a big lead in development.',
    },
    {
      title: 'After Qxd4, e5! against anything slow',
      body: 'Once the queen is on d4, Black must play …d6. Against …b6, …Be7 or similar, e5 kicks the f6 knight and it has no good square. That\'s worth +4 or more.',
    },
    {
      title: 'The bishop pair after …Bxc3',
      body: 'When Black gives up the b4 bishop for your knight, you have two bishops. Keep the position open and trade queens if that helps; bishops shine in endings.',
    },
  ],
  lines: [
    // ─────────────────────────────── 4...exd4 5.Nxd4 Bb4: main line
    {
      id: 'ws-main',
      name: 'Main line: 5…Bb4',
      group: '4…exd4 5.Nxd4 Bb4',
      story:
        'Black pins your c3 knight. You swap on c6, guard e4 with Bd3, and after …d5 exd5 cxd5 you castle and pin with Bg5, then bring the queen to f3.',
      moves: [
        ...whiteTrunk,
        {
          san: 'd4',
          why: 'The Scotch Four Knights: open the centre before Black is ready.',
          arrows: ['d4e5:r'],
          detail: 'If Black ignores it, dxe5 kicks the f6 knight. Nearly everyone takes: 4…exd4.',
        },
        {
          san: 'exd4',
          why: 'Black takes, giving up the centre pawn.',
        },
        {
          san: 'Nxd4',
          why: 'Recapture with the knight, so it sits in the centre.',
          arrows: ['d4c6', 'd4f5'],
        },
        {
          san: 'Bb4',
          why: 'Black pins your c3 knight and threatens …Nxe4.',
          arrows: ['b4c3:r', 'c3e4:y', 'f6e4:r'],
        },
        {
          san: 'Nxc6',
          why: 'Swap knights first, so Black can\'t use …Nxd4 or …Nxe4 tricks.',
          detail: 'Black usually recaptures toward the centre with …bxc6, which gives Black a …d5 break but leaves the c-pawns a little weak.',
        },
        {
          san: 'bxc6',
          why: 'Black recaptures toward the centre, supporting …d5.',
          arrows: ['c6d5'],
        },
        {
          san: 'Bd3',
          why: 'Guard e4 again, so the pin on c3 doesn\'t cost a pawn.',
          arrows: ['d3e4'],
        },
        {
          san: 'd5',
          why: 'Black claims the centre and opens the c8 bishop.',
          arrows: ['d5e4:r'],
        },
        {
          san: 'exd5',
          why: 'Take, so Black can\'t push …d4 or …dxe4 with tempo.',
        },
        {
          san: 'cxd5',
          why: 'Black recaptures with a pawn and gets a solid d5 pawn.',
        },
        {
          san: 'O-O',
          why: 'Castle before doing anything else. The c3 knight is pinned only to the king, so castling ends the pin.',
        },
        {
          san: 'O-O',
          why: 'Black castles too.',
        },
        {
          san: 'Bg5',
          why: 'Pin the f6 knight, the defender of d5 and of Black\'s king.',
          arrows: ['g5f6:r', 'f6d5:y'],
        },
        {
          san: 'c6',
          why: 'Black reinforces d5.',
        },
        {
          san: 'Qf3',
          why: 'Add pressure on f6 and d5, and connect your rooks.',
          arrows: ['f3f6:r', 'a1e1:b'],
          detail: 'Stockfish\'s top choice. If Black plays …h6, Bxf6 Qxf6 Qxf6 gxf6 leaves Black with broken kingside pawns in an ending.',
        },
      ],
      plan:
        'Bring a rook to e1, then Ne2–d4 or Na4–c5 to hit the c6/d5 pawns. Black\'s pieces are active, so this is an equal, strategic game. Your targets are the c6 pawn and the dark squares around Black\'s king.',
    },
    {
      id: 'ws-7oo',
      name: 'Main line: 7…O-O',
      group: '4…exd4 5.Nxd4 Bb4',
      story: 'Black castles before …d5. You castle too, and after …d5 exd5 cxd5 you are back in the main line: Bg5 and Qf3.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Bb4', 'Nxc6', 'bxc6', 'Bd3',
        {
          san: 'O-O',
          why: 'Black castles first and keeps …d5 in reserve.',
        },
        {
          san: 'O-O',
          why: 'Castle too. That breaks the pin on your c3 knight.',
        },
        {
          san: 'd5',
          why: 'Black strikes in the centre.',
        },
        {
          san: 'exd5',
          why: 'Take, the same as in the main line.',
        },
        {
          san: 'cxd5',
          why: 'Black recaptures. This is the main-line position again.',
        },
        'Bg5', 'c6', 'Qf3',
      ],
      plan: 'This is the same position as the main line: rook to e1, then target c6 and d5 with your knight and queen.',
    },
    {
      id: 'ws-7oo-re8',
      name: 'Main line: 7…O-O 8.O-O Re8',
      group: '4…exd4 5.Nxd4 Bb4',
      story: 'Black castles and puts a rook on e8 against e4. Pin the f6 knight with Bg5: it is the e4 attacker.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Bb4', 'Nxc6', 'bxc6', 'Bd3', 'O-O', 'O-O',
        {
          san: 'Re8',
          why: 'Black lines up a rook against e4.',
          arrows: ['e8e4:r'],
        },
        {
          san: 'Bg5',
          why: 'Pin the f6 knight, one of the pieces attacking e4.',
          arrows: ['g5f6:r', 'f6e4:y'],
        },
      ],
      plan: 'Follow up with Re1 or Qf3, and meet …h6 with Bh4. e4 is well guarded by the d3 bishop and c3 knight. Stockfish about +0.4.',
    },
    {
      id: 'ws-8oo',
      name: 'Main line: 8…O-O',
      group: '4…exd4 5.Nxd4 Bb4',
      story: 'After exd5, Black castles instead of recapturing. You castle too, and after …cxd5 it is the main line again.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Bb4', 'Nxc6', 'bxc6', 'Bd3', 'd5', 'exd5',
        {
          san: 'O-O',
          why: 'Black castles first and takes on d5 later.',
        },
        {
          san: 'O-O',
          why: 'Castle too. Don\'t grab with dxc6: it opens the e-file toward your king.',
          avoid: [{ san: 'dxc6', why: 'Greedy. After …Re8+ your king is stuck in the centre, and Stockfish rates it equal at best.' }],
        },
        'cxd5', 'Bg5', 'c6', 'Qf3',
      ],
      plan: 'The same as the main line: rook to e1, then target c6 and d5.',
    },
    {
      id: 'ws-dxc6',
      name: '6…dxc6: early queen trade',
      group: '4…exd4 5.Nxd4 Bb4',
      story: 'Black recaptures with the d-pawn. You trade queens with check, unpin with Bd2, and castle queenside with the d-file open.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Bb4', 'Nxc6',
        {
          san: 'dxc6',
          why: 'Black recaptures away from the centre, opening the d-file for the queen.',
          arrows: ['d8d1:r'],
        },
        {
          san: 'Qxd8+',
          why: 'Trade queens with check, so Black\'s king loses the right to castle.',
        },
        {
          san: 'Kxd8',
          why: 'Black takes back with the king.',
        },
        {
          san: 'Bd2',
          why: 'Break the pin on c3 and prepare O-O-O, lining up on the d-file against the king.',
          arrows: ['e1c1:b', 'd1d8:y'],
        },
      ],
      plan: 'Castle queenside, put the rook on d1 facing Black\'s king, and play f3 to hold e4. You have the better pawn structure (4 v 3 on the kingside), so endgames favour you.',
    },
    {
      id: 'ws-bxc3',
      name: '6…Bxc3+: bishop pair',
      group: '4…exd4 5.Nxd4 Bb4',
      story: 'Black trades bishop for knight before recapturing. You take back towards the centre and get the bishop pair.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Bb4', 'Nxc6',
        {
          san: 'Bxc3+',
          why: 'Black inserts a check, giving up the bishop to double your pawns.',
        },
        {
          san: 'bxc3',
          why: 'Recapture. Your c6 knight is still attacked, but so is Black\'s.',
        },
        {
          san: 'bxc6',
          why: 'Black takes back the knight.',
        },
        {
          san: 'Bd3',
          why: 'Guard e4 and castle next. You have both bishops.',
          arrows: ['d3e4', 'c1a3:b'],
        },
      ],
      plan: 'Castle, then Bg5 or Ba3 and push f4–e5 to use your bishops. Open the position: two bishops beat bishop and knight in open play.',
    },

    // ─────────────────────────────── 5...Bc5
    {
      id: 'ws-bc5',
      name: '5…Bc5',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'Black puts the bishop on c5 instead. You play the same way: swap on c6, then Bd3 and castle.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4',
        {
          san: 'Bc5',
          why: 'Black develops the bishop to c5, hitting your d4 knight and aiming at f2.',
          arrows: ['c5d4:r', 'c5f2:y'],
        },
        {
          san: 'Nxc6',
          why: 'Swap the attacked knight for Black\'s, so the c5 bishop hits nothing.',
        },
        {
          san: 'bxc6',
          why: 'Black recaptures toward the centre.',
        },
        {
          san: 'Bd3',
          why: 'Guard e4 and get ready to castle.',
          arrows: ['d3e4', 'e1g1:b'],
        },
      ],
      plan: 'Castle, then Bg5, Qf3 or Na4 to trade off the c5 bishop. It\'s the same setup as against 5…Bb4, and Stockfish gives you a small edge.',
    },
    {
      id: 'ws-bc5-dxc6',
      name: '5…Bc5 6.Nxc6 dxc6',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'Black recaptures with the d-pawn, opening the d-file. Trade queens with check and enjoy the better pawns.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Bc5', 'Nxc6',
        {
          san: 'dxc6',
          why: 'Black recaptures away from the centre and opens the d-file for the queen.',
        },
        {
          san: 'Qxd8+',
          why: 'Trade queens with check, so Black\'s king can\'t castle.',
        },
        {
          san: 'Kxd8',
          why: 'Black takes back with the king.',
        },
      ],
      plan: 'Play f3 to hold e4, Bf4 or Be3 to trade Black\'s bishop, and O-O-O. Your kingside majority can create a passed pawn in the ending. Stockfish about +0.6.',
    },
    {
      id: 'ws-nxd4',
      name: '5…Nxd4: centralised queen',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'Black swaps knights on d4. Your queen recaptures in the centre, you develop with Bf4, castle queenside and have a clear edge.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4',
        {
          san: 'Nxd4',
          why: 'Black swaps knights, but this brings your queen to the centre with tempo-free development.',
        },
        {
          san: 'Qxd4',
          why: 'Recapture with the queen. Black has no knight on c6 to kick it.',
          arrows: ['d4g7:y', 'd4a7:y'],
          detail: 'Normally an early queen is a target. Here Black has no easy way to hit d4: …c5 weakens d5 and …Nc6 is gone. Stockfish rates it about +1.3 for White.',
        },
        {
          san: 'd6',
          why: 'Black guards e5 and opens the c8 bishop.',
        },
        {
          san: 'Bf4',
          why: 'Develop the bishop with a view of d6, then castle queenside.',
          arrows: ['f4d6:r', 'e1c1:b'],
        },
        {
          san: 'Be7',
          why: 'Black develops, getting ready to castle.',
        },
        {
          san: 'O-O-O',
          why: 'Castle queenside: the rook lands on the d-file against d6 at once.',
          arrows: ['d1d6:r'],
        },
      ],
      plan: 'Your king is safe on the queenside, so push g4–g5 to kick the f6 knight and attack Black\'s king. f3 holds e4 first. Black\'s d6 pawn is a long-term target on the open d-file.',
    },

    {
      id: 'ws-d6',
      name: '5…d6: into the Spanish',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'Black plays …d6 after the swap on d4. Pin the c6 knight with Bb5 and you are in the Spanish Old Steinitz line.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4',
        {
          san: 'd6',
          why: 'Black guards e5\'s old square and opens the c8 bishop.',
        },
        {
          san: 'Bb5',
          why: 'Pin the c6 knight. This reaches the Spanish 4.Bb5 d6 5.d4 exd4 6.Nxd4 position.',
          arrows: ['b5c6:r', 'd4c6:r'],
        },
        'Bd7', 'O-O',
      ],
      plan: steinitzExd4Plan,
    },

    {
      id: 'ws-nxd4-b6',
      name: '5…Nxd4 6.Qxd4 b6? 7.e5!',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'After Qxd4, Black plays a slow move. e5 kicks the f6 knight, which has no good square.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Nxd4', 'Qxd4',
        {
          san: 'b6',
          why: 'Black prepares …Bb7, but it\'s too slow.',
        },
        {
          san: 'e5',
          why: 'Kick the f6 knight. It has no safe square, and Nd5 is coming.',
          arrows: ['e5f6:r', 'c3d5:b'],
        },
      ],
      plan: 'After …Ng8, develop fast with Bc4, O-O and Nd5 or Bf4. Black\'s pieces are all back home. Stockfish about +4.',
    },
    {
      id: 'ws-nxd4-be7',
      name: '5…Nxd4 6.Qxd4 Be7? 7.e5!',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'Same idea: Black develops the bishop, and e5 hits the f6 knight. It has nowhere good to go.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Nxd4', 'Qxd4',
        {
          san: 'Be7',
          why: 'Natural development, but it doesn\'t stop e5.',
        },
        {
          san: 'e5',
          why: 'Kick the f6 knight: …Ng8 is its only retreat, and …Ng4 or …Nh5 drop to your queen or g4.',
          arrows: ['e5f6:r'],
        },
      ],
      plan: 'After …Ng8, Bf4, O-O-O and Nd5 or Bc4. Black is hopelessly behind in development. Stockfish about +5.',
    },
    {
      id: 'ws-nxd4-c5',
      name: '5…Nxd4 6.Qxd4 c5',
      group: '4…exd4 5.Nxd4: other moves',
      story: 'Black kicks your queen with …c5. Drop back to d3: the d5 square is now a permanent hole for your knight.',
      moves: [
        ...whiteTrunk,
        'd4', 'exd4', 'Nxd4', 'Nxd4', 'Qxd4',
        {
          san: 'c5',
          why: 'Black kicks the queen, but leaves a hole on d5.',
          arrows: ['c5d4:r', 'd5:y'],
        },
        {
          san: 'Qd3',
          why: 'Retreat, guarding e4 and eyeing the d5 hole and b5.',
          arrows: ['d3d5:b', 'c3d5:b', 'c3b5:b'],
        },
      ],
      plan: 'Nb5 and Nd5 ideas, Bf4 or Bg5, and castle. Black\'s d-pawn is backward and d5 belongs to you. Stockfish about +3.',
    },

    // ─────────────────────────────── 4...Bb4
    {
      id: 'ws-bb4-qe7',
      name: '4…Bb4 5.Nxe5 Qe7',
      group: '4…Bb4 — counterattack',
      story: 'Black pins instead of taking on d4. You grab e5, defend with Qd3, and after …Bxc3 you recapture with the queen and bring it to e3.',
      moves: [
        ...whiteTrunk,
        'd4',
        {
          san: 'Bb4',
          why: 'Black pins your c3 knight instead of taking on d4.',
          arrows: ['b4c3:r', 'f6e4:r'],
        },
        {
          san: 'Nxe5',
          why: 'Take the free pawn: Black left e5 behind.',
          arrows: ['e5c6:y', 'e5f7:y'],
          detail: 'Stockfish\'s top move (+0.4). Black\'s trickiest replies are …Nxe4 and …Nxe5, and both run into Qg4 tactics.',
        },
        {
          san: 'Qe7',
          why: 'Black hits your e5 knight and e4 along the e-file.',
          arrows: ['e7e5:r'],
        },
        {
          san: 'Qd3',
          why: 'Defend e4 and back up the e5 knight, keeping the extra pawn.',
          arrows: ['d3e4'],
        },
        {
          san: 'Bxc3+',
          why: 'Black trades bishop for knight with check.',
        },
        {
          san: 'Qxc3',
          why: 'Recapture with the queen to keep your pawns healthy.',
        },
        {
          san: 'Nxe4',
          why: 'Black grabs the e4 pawn with tempo on your queen.',
        },
        {
          san: 'Qe3',
          why: 'Step aside and pin the e4 knight against Black\'s queen.',
          arrows: ['e3e4:r', 'e4e7:y'],
        },
      ],
      plan: 'You have the bishop pair and a lead in development. Play Bd3, O-O and Re1 to keep pressure on the e-file. Stockfish rates White slightly better (+0.3).',
    },
    {
      id: 'ws-bb4-nxe4',
      name: '4…Bb4 5.Nxe5 Nxe4? 6.Qg4!',
      group: '4…Bb4 — counterattack',
      story: 'Black grabs e4 with the knight. Qg4 attacks g7 and the e4 knight at once. You win the g7 pawn and Black\'s pieces are left loose.',
      moves: [
        ...whiteTrunk,
        'd4', 'Bb4', 'Nxe5',
        {
          san: 'Nxe4',
          why: 'Black grabs e4, but the knight leaves g7 undefended.',
        },
        {
          san: 'Qg4',
          why: 'Double attack: the queen hits g7 and the e4 knight.',
          arrows: ['g4g7:r', 'g4e4:r'],
          detail: 'The f6 knight used to guard g7. Now it has gone to e4, so g7 falls.',
        },
        {
          san: 'Nxc3',
          why: 'Black saves the knight by taking on c3.',
        },
        {
          san: 'Qxg7',
          why: 'Take g7 and hit the h8 rook.',
          arrows: ['g7h8:r'],
        },
        {
          san: 'Rf8',
          why: 'Black saves the rook.',
        },
        {
          san: 'a3',
          why: 'Attack the b4 bishop, which is the only thing guarding the c3 knight.',
          arrows: ['a3b4:r', 'b4c3:y'],
          detail: 'If the bishop moves away, bxc3 wins the knight back. Black is still in the centre with a broken kingside.',
        },
      ],
      plan: 'Win back the piece with bxc3, and then use the open g-file and Black\'s stuck king. Stockfish gives White about +1. Keep checking for …Qe7+ and knight forks while you untangle.',
    },
    {
      id: 'ws-bb4-nxe5',
      name: '4…Bb4 5.Nxe5 Nxe5? 6.dxe5',
      group: '4…Bb4 — counterattack',
      story: 'Black takes your knight on e5. You recapture with the pawn, which hits the f6 knight. When it jumps to e4, Qg4 wins material.',
      moves: [
        ...whiteTrunk,
        'd4', 'Bb4', 'Nxe5',
        {
          san: 'Nxe5',
          why: 'Black takes the knight, but this opens the d-pawn\'s path.',
        },
        {
          san: 'dxe5',
          why: 'Recapture with a pawn that now attacks the f6 knight.',
          arrows: ['e5f6:r'],
        },
        {
          san: 'Nxe4',
          why: 'The knight jumps to e4, the most active square.',
        },
        {
          san: 'Qg4',
          why: 'Hit g7 and the e4 knight again, the same trick as before.',
          arrows: ['g4g7:r', 'g4e4:r'],
        },
      ],
      plan: 'Next comes Qxg7 or winning the e4 knight. Stockfish gives White about +3, which is close to winning. After …Ng8 instead of …Nxe4, just develop with Bd2 and O-O-O: Black\'s pieces are all back home.',
    },
    {
      id: 'ws-bb4-bxc3',
      name: '4…Bb4 5.Nxe5 Bxc3+',
      group: '4…Bb4 — counterattack',
      story: 'Black gives up the bishop at once. You recapture, hold e4 with f3, and after the trades on e5 you offer a queen swap with the bishop pair in hand.',
      moves: [
        ...whiteTrunk,
        'd4', 'Bb4', 'Nxe5',
        {
          san: 'Bxc3+',
          why: 'Black trades bishop for knight before playing …Qe7.',
        },
        {
          san: 'bxc3',
          why: 'Recapture. You get the bishop pair.',
        },
        {
          san: 'Qe7',
          why: 'Black hits e5 and e4 along the e-file.',
          arrows: ['e7e5:r'],
        },
        {
          san: 'f3',
          why: 'Hold e4 with a pawn. The knight on e5 is guarded by the d4 pawn.',
          arrows: ['f3e4'],
        },
        {
          san: 'Nxe5',
          why: 'Black trades knights.',
        },
        {
          san: 'dxe5',
          why: 'Recapture.',
        },
        {
          san: 'Qxe5',
          why: 'Black wins back the pawn.',
        },
        {
          san: 'Qd4',
          why: 'Offer a queen trade. Without queens, your bishop pair counts for more than your pawn weaknesses.',
          arrows: ['d4e5:r'],
        },
      ],
      plan: 'Trade queens if Black allows, then Bd3, Kf2, and Ba3 or Bf4. Your bishops cover the whole board. Stockfish rates White better (+0.6).',
    },

    // ─────────────────────────────── 4...d6
    {
      id: 'ws-d6-exd4',
      name: '4…d6 5.Bb5 exd4',
      group: '4…d6 — into the Spanish',
      story: 'Black defends e5 with a pawn. Pin the c6 knight with Bb5, and when Black takes on d4 you are in the Spanish Old Steinitz line.',
      moves: [
        ...whiteTrunk,
        'd4',
        {
          san: 'd6',
          why: 'Black holds e5 with a pawn. Solid but passive.',
        },
        {
          san: 'Bb5',
          why: 'Pin the c6 knight, e5\'s defender. Now e5 is under real pressure.',
          arrows: ['b5c6:r', 'c6e5:y'],
          detail: 'This reaches the same position as the Spanish 4.Bb5 d6 5.d4, so if you know that line you already know this one.',
        },
        ...steinitzExd4,
      ],
      plan: steinitzExd4Plan,
    },
    {
      id: 'ws-d6-bd7',
      name: '4…d6 5.Bb5 Bd7',
      group: '4…d6 — into the Spanish',
      story: 'Black unpins with …Bd7. Take on c6 and bring the queen to d3, exactly as in the Spanish.',
      moves: [...whiteTrunk, 'd4', 'd6', 'Bb5', ...steinitzBd7],
      plan: steinitzBd7Plan,
    },
    {
      id: 'ws-d6-a6',
      name: '4…d6 5.Bb5 a6?',
      group: '4…d6 — into the Spanish',
      story: 'Black kicks the bishop. Take with check, then dxe5 forks the f6 knight and d6.',
      moves: [...whiteTrunk, 'd4', 'd6', 'Bb5', ...steinitzA6],
      plan: steinitzA6Plan,
    },
  ],
};
