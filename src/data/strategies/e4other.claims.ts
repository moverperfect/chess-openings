import type { Claim } from './claims';

export const CLAIMS_E4OTHER: Claim[] = [
  // ─── Sicilian ────────────────────────────────────────────────────────────
  { opening: 'Sicilian Defense', field: 'white', quote: 'Either open up with Nf3 and d4', moves: 'e4 c5', check: { kind: 'good', san: 'Nf3' } },
  { opening: 'Sicilian Defense', field: 'white', quote: 'an anti-Sicilian such as 2.c3', moves: 'e4 c5', check: { kind: 'good', san: 'c3' } },
  { opening: 'Sicilian Defense', field: 'white', quote: '2.Nc3', moves: 'e4 c5', check: { kind: 'good', san: 'Nc3' } },
  // "3.Bb5" read as the Rossolimo (2.Nf3 Nc6 3.Bb5); it could also mean 2…d6 3.Bb5+.
  { opening: 'Sicilian Defense', field: 'white', quote: 'or 3.Bb5', moves: 'e4 c5 Nf3 Nc6', check: { kind: 'good', san: 'Bb5' } },

  { opening: 'Sicilian Defense: Accelerated Dragon', field: 'white', quote: 'The critical try is c4 (the Maróczy Bind)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6', check: { kind: 'good', san: 'c4' } },
  // "Nc3, Be3 and Bc4 … then Black gets …d5 in one go": read as 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4 0-0 8.Bb3 d5.
  { opening: 'Sicilian Defense: Accelerated Dragon', field: 'white', quote: 'Otherwise Nc3, Be3 and Bc4, but then Black gets …d5 in one go.', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3', check: { kind: 'good', san: 'd5' } },
  // Maróczy Bind main line: 5.c4 Nf6 6.Nc3 d6 7.Be2 Nxd4.
  { opening: 'Sicilian Defense: Accelerated Dragon', field: 'black', quote: 'Against the Maróczy Bind, play …d6', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3', check: { kind: 'good', san: 'd6' } },
  { opening: 'Sicilian Defense: Accelerated Dragon', field: 'black', quote: 'swap knights with …Nxd4', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3 d6 Be2', check: { kind: 'good', san: 'Nxd4' } },

  // Black's second move isn't given; 2…e6 3.d4 cxd4 chosen.
  { opening: 'Sicilian Defense: Alapin Variation', field: 'white', quote: 'Play d4 and meet …cxd4 with cxd4', moves: 'e4 c5 c3 e6 d4 cxd4', check: { kind: 'good', san: 'cxd4' } },
  { opening: 'Sicilian Defense: Alapin Variation', field: 'black', quote: '2…d5 (recapturing with the queen)', moves: 'e4 c5 c3', check: { kind: 'good', san: 'd5' } },
  { opening: 'Sicilian Defense: Alapin Variation', field: 'black', quote: '2…d5 (recapturing with the queen)', moves: 'e4 c5 c3 d5 exd5', check: { kind: 'good', san: 'Qxd5' } },
  { opening: 'Sicilian Defense: Alapin Variation', field: 'black', quote: '2…Nf6 (3.e5 Nd5)', moves: 'e4 c5 c3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Sicilian Defense: Alapin Variation', field: 'black', quote: '2…Nf6 (3.e5 Nd5)', moves: 'e4 c5 c3 Nf6 e5', check: { kind: 'good', san: 'Nd5' } },

  // "toothless" read as: White gets nothing, the position is level.
  { opening: 'Sicilian Defense: Bowdler Attack', field: 'idea', quote: 'this is an offbeat, slightly toothless sideline', moves: 'e4 c5 Bc4', check: { kind: 'eval', band: 'level' } },
  { opening: 'Sicilian Defense: Bowdler Attack', field: 'black', quote: '…e6 and …d5 hit the bishop and take the centre', moves: 'e4 c5 Bc4', check: { kind: 'good', san: 'e6' } },
  // White's third move isn't given; 3.Nf3 chosen (after 3.Nc3, …d5 would drop a pawn).
  { opening: 'Sicilian Defense: Bowdler Attack', field: 'black', quote: '…e6 and …d5 hit the bishop and take the centre', moves: 'e4 c5 Bc4 e6 Nf3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Sicilian Defense: Chekhover Variation', field: 'black', quote: 'Gain time on the queen with …Nc6', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4', check: { kind: 'good', san: 'Nc6' } },
  { opening: 'Sicilian Defense: Chekhover Variation', field: 'white', quote: 'After …Nc6, pin with Bb5', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6', check: { kind: 'good', san: 'Bb5' } },
  { opening: 'Sicilian Defense: Chekhover Variation', field: 'black', quote: 'After Bb5 …Bd7', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5', check: { kind: 'good', san: 'Bd7' } },
  { opening: 'Sicilian Defense: Chekhover Variation', field: 'white', quote: 'swap on c6', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5 Bd7', check: { kind: 'good', san: 'Bxc6' } },

  { opening: 'Sicilian Defense: Closed', field: 'black', quote: 'Develop flexibly with …Nc6', moves: 'e4 c5 Nc3', check: { kind: 'good', san: 'Nc6' } },
  { opening: 'Sicilian Defense: Closed', field: 'black', quote: 'or …e6 and …d5 to hit the centre', moves: 'e4 c5 Nc3', check: { kind: 'good', san: 'e6' } },

  { opening: 'Sicilian Defense: Delayed Alapin Variation, with d6', field: 'idea', quote: 'Black usually hits e4 with the knight instead', moves: 'e4 c5 Nf3 d6 c3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with d6', field: 'black', quote: 'If White plays d4 anyway, take the pawn with …Nxe4', moves: 'e4 c5 Nf3 d6 c3 Nf6 d4', check: { kind: 'good', san: 'Nxe4' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with d6', field: 'white', quote: 'defend e4 first with Be2 or Bd3', moves: 'e4 c5 Nf3 d6 c3 Nf6', check: { kind: 'good', san: 'Be2' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with d6', field: 'white', quote: 'defend e4 first with Be2 or Bd3', moves: 'e4 c5 Nf3 d6 c3 Nf6', check: { kind: 'good', san: 'Bd3' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with d6', field: 'white', quote: '4…Nxe4?? loses the knight to 5.Qa4+', moves: 'e4 c5 Nf3 d6 c3 Nf6 Be2', check: { kind: 'blunder', san: 'Nxe4' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with d6', field: 'white', quote: '4…Nxe4?? loses the knight to 5.Qa4+', moves: 'e4 c5 Nf3 d6 c3 Nf6 Be2 Nxe4 Qa4+', check: { kind: 'eval', band: 'winning', side: 'white' } },

  { opening: 'Sicilian Defense: Delayed Alapin Variation, with e6', field: 'black', quote: '3…d5 or 3…Nf6 (4.e5 Nd5) challenge the centre at once', moves: 'e4 c5 Nf3 e6 c3', check: { kind: 'good', san: 'd5' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with e6', field: 'black', quote: '3…d5 or 3…Nf6 (4.e5 Nd5) challenge the centre at once', moves: 'e4 c5 Nf3 e6 c3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with e6', field: 'black', quote: '3…Nf6 (4.e5 Nd5)', moves: 'e4 c5 Nf3 e6 c3 Nf6 e5', check: { kind: 'good', san: 'Nd5' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with e6', field: 'white', quote: 'If Black plays …d5, either push e5', moves: 'e4 c5 Nf3 e6 c3 d5', check: { kind: 'good', san: 'e5' } },
  { opening: 'Sicilian Defense: Delayed Alapin Variation, with e6', field: 'white', quote: 'or allow exd5 positions', moves: 'e4 c5 Nf3 e6 c3 d5', check: { kind: 'good', san: 'exd5' } },

  { opening: 'Sicilian Defense: Dragon Variation, Accelerated Dragon', field: 'white', quote: 'Either 5.c4 (Maróczy Bind)', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6', check: { kind: 'good', san: 'c4' } },
  { opening: 'Sicilian Defense: Dragon Variation, Accelerated Dragon', field: 'white', quote: 'or Nc3, Be3, f3, Qd2 and 0-0-0', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6', check: { kind: 'good', san: 'Nc3' } },
  // Black needs …Nc6 first: read as 5.c4 Nf6 6.Nc3 Nc6 7.Be2 Nxd4.
  { opening: 'Sicilian Defense: Dragon Variation, Accelerated Dragon', field: 'black', quote: 'Against the Bind, trade knights with …Nxd4', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3 Nc6 Be2', check: { kind: 'good', san: 'Nxd4' } },

  { opening: 'Sicilian Defense: French Variation', field: 'white', quote: 'Usually 3.d4 for an Open Sicilian', moves: 'e4 c5 Nf3 e6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Sicilian Defense: French Variation', field: 'white', quote: 'Quieter options are 3.c3', moves: 'e4 c5 Nf3 e6', check: { kind: 'good', san: 'c3' } },
  { opening: 'Sicilian Defense: French Variation', field: 'white', quote: "a King's Indian Attack set-up with d3, g3 and Bg2", moves: 'e4 c5 Nf3 e6', check: { kind: 'playable', san: 'd3' } },

  { opening: 'Sicilian Defense: Hyperaccelerated Dragon', field: 'white', quote: '3.c3 followed by d4', moves: 'e4 c5 Nf3 g6', check: { kind: 'good', san: 'c3' } },
  { opening: 'Sicilian Defense: Hyperaccelerated Dragon', field: 'white', quote: 'After 3.d4 cxd4 4.Qxd4 the queen attacks the rook on h8, gaining time.', moves: 'e4 c5 Nf3 g6 d4 cxd4', check: { kind: 'good', san: 'Qxd4' } },
  { opening: 'Sicilian Defense: Hyperaccelerated Dragon', field: 'black', quote: 'After 3.d4 cxd4 4.Qxd4, play …Nf6', moves: 'e4 c5 Nf3 g6 d4 cxd4 Qxd4', check: { kind: 'good', san: 'Nf6' } },
  // "…Nc6 with gains of time on the queen" read as 4…Nf6 5.e5 Nc6.
  { opening: 'Sicilian Defense: Hyperaccelerated Dragon', field: 'black', quote: 'and …Nc6 with gains of time on the queen', moves: 'e4 c5 Nf3 g6 d4 cxd4 Qxd4 Nf6 e5', check: { kind: 'good', san: 'Nc6' } },
  // "Against c3 set-ups" read as straight after 3.c3.
  { opening: 'Sicilian Defense: Hyperaccelerated Dragon', field: 'black', quote: 'Against c3 set-ups, …d5 hits the centre.', moves: 'e4 c5 Nf3 g6 c3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Sicilian Defense: Kramnik Variation', field: 'black', quote: 'Develop with …Nc6 and …Nf6', moves: 'e4 c5 Nf3 e6 c4', check: { kind: 'good', san: 'Nc6' } },

  { opening: 'Sicilian Defense: Löwenthal Variation', field: 'white', quote: '5.Nb5 heads for d6', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5', check: { kind: 'good', san: 'Nb5' } },
  { opening: 'Sicilian Defense: Löwenthal Variation', field: 'black', quote: 'After 5.Nb5, …a6', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5', check: { kind: 'good', san: 'a6' } },
  { opening: 'Sicilian Defense: Löwenthal Variation', field: 'white', quote: 'After …a6, Nd6+ Bxd6 Qxd6 wins the bishop pair', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 a6', check: { kind: 'good', san: 'Nd6+' } },
  { opening: 'Sicilian Defense: Löwenthal Variation', field: 'black', quote: '7.Qxd6 Qf6 offers a queen trade', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 a6 Nd6+ Bxd6 Qxd6', check: { kind: 'good', san: 'Qf6' } },

  { opening: 'Sicilian Defense: McDonnell Attack', field: 'black', quote: '2…d5 is the principled answer', moves: 'e4 c5 f4', check: { kind: 'good', san: 'd5' } },
  { opening: 'Sicilian Defense: McDonnell Attack', field: 'black', quote: '…e6 with …d5, or …Nc6 with …g6, are also good', moves: 'e4 c5 f4', check: { kind: 'good', san: 'e6' } },
  { opening: 'Sicilian Defense: McDonnell Attack', field: 'black', quote: '…e6 with …d5, or …Nc6 with …g6, are also good', moves: 'e4 c5 f4', check: { kind: 'good', san: 'Nc6' } },

  { opening: 'Sicilian Defense: Modern Variations, Main Line', field: 'idea', quote: 'asks White to defend it, usually with 5.Nc3', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Sicilian Defense: Modern Variations, Main Line', field: 'black', quote: 'Choose …a6 (Najdorf)', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'good', san: 'a6' } },
  { opening: 'Sicilian Defense: Modern Variations, Main Line', field: 'black', quote: '…g6 (Dragon)', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'playable', san: 'g6' } },
  { opening: 'Sicilian Defense: Modern Variations, Main Line', field: 'black', quote: '…Nc6 (Classical)', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'good', san: 'Nc6' } },
  { opening: 'Sicilian Defense: Modern Variations, Main Line', field: 'black', quote: '…e6 (Scheveningen)', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'playable', san: 'e6' } },

  { opening: 'Sicilian Defense: Modern Variations, Tartakower', field: 'black', quote: 'Taking with …dxc3 is fine if you develop carefully', moves: 'e4 c5 Nf3 d6 d4 cxd4 c3', check: { kind: 'good', san: 'dxc3' } },
  { opening: 'Sicilian Defense: Modern Variations, Tartakower', field: 'black', quote: 'simpler is …Nf6, hitting e4', moves: 'e4 c5 Nf3 d6 d4 cxd4 c3', check: { kind: 'good', san: 'Nf6' } },
  // "Comfortable" read as Black has no problems, i.e. level, not better.
  { opening: 'Sicilian Defense: Modern Variations, Tartakower', field: 'black', quote: 'Black is comfortable either way.', moves: 'e4 c5 Nf3 d6 d4 cxd4 c3', check: { kind: 'eval', band: 'level' } },
  { opening: 'Sicilian Defense: Modern Variations, Tartakower', field: 'black', quote: 'Black is comfortable either way.', moves: 'e4 c5 Nf3 d6 d4 cxd4 c3 dxc3 Nxc3', check: { kind: 'eval', band: 'level' } },

  { opening: 'Sicilian Defense: Modern Variations', field: 'white', quote: 'Usually 3.d4 for the Open Sicilian', moves: 'e4 c5 Nf3 d6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Sicilian Defense: Modern Variations', field: 'white', quote: 'play 3.Bb5+ (Moscow Variation)', moves: 'e4 c5 Nf3 d6', check: { kind: 'good', san: 'Bb5+' } },
  { opening: 'Sicilian Defense: Modern Variations', field: 'white', quote: 'or 3.c3 (Delayed Alapin)', moves: 'e4 c5 Nf3 d6', check: { kind: 'good', san: 'c3' } },
  { opening: 'Sicilian Defense: Modern Variations', field: 'black', quote: 'If White recaptures 4.Qxd4, …Nc6', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4', check: { kind: 'good', san: 'Nc6' } },
  { opening: 'Sicilian Defense: Modern Variations', field: 'black', quote: 'or …a6 with …Nc6 gains time on the queen', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4', check: { kind: 'playable', san: 'a6' } },

  { opening: 'Sicilian Defense: Moscow Variation', field: 'black', quote: '3…Bd7 trades bishops and gives a solid game', moves: 'e4 c5 Nf3 d6 Bb5+', check: { kind: 'good', san: 'Bd7' } },
  { opening: 'Sicilian Defense: Moscow Variation', field: 'black', quote: '3…Nd7 keeps the bishops for a sharper position', moves: 'e4 c5 Nf3 d6 Bb5+', check: { kind: 'good', san: 'Nd7' } },
  { opening: 'Sicilian Defense: Moscow Variation', field: 'white', quote: 'After 3…Bd7 4.Bxd7+ Qxd7, play c4 and Nc3', moves: 'e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7', check: { kind: 'good', san: 'c4' } },
  { opening: 'Sicilian Defense: Moscow Variation', field: 'white', quote: 'or 0-0, c3 and d4 for a big centre', moves: 'e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7', check: { kind: 'good', san: 'O-O' } },
  // "an easy position" read as "comfortable", i.e. a slight edge for White.
  { opening: 'Sicilian Defense: Moscow Variation', field: 'idea', quote: 'White usually trades the light-squared bishops and gets an easy position', moves: 'e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7', check: { kind: 'eval', band: 'slight', side: 'white' } },

  { opening: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack', field: 'black', quote: 'Either …g6, …Bg7 and …Nf6', moves: 'e4 c5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'g6' } },
  { opening: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack', field: 'black', quote: 'or …e6 and …Nge7', moves: 'e4 c5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'e6' } },

  { opening: "Sicilian Defense: O'Kelly Variation", field: 'white', quote: '3.c3 or 3.c4, positions where …a6 is a wasted move', moves: 'e4 c5 Nf3 a6', check: { kind: 'good', san: 'c3' } },
  { opening: "Sicilian Defense: O'Kelly Variation", field: 'white', quote: '3.c3 or 3.c4, positions where …a6 is a wasted move', moves: 'e4 c5 Nf3 a6', check: { kind: 'good', san: 'c4' } },
  { opening: "Sicilian Defense: O'Kelly Variation", field: 'idea', quote: 'If White plays the normal 3.d4, Black follows with …Nf6', moves: 'e4 c5 Nf3 a6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'Nf6' } },
  { opening: "Sicilian Defense: O'Kelly Variation", field: 'black', quote: 'After 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3, play …e5 to hit the knight', moves: 'e4 c5 Nf3 a6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'good', san: 'e5' } },
  { opening: "Sicilian Defense: O'Kelly Variation", field: 'black', quote: 'Against 3.c3, hit e4 with …d5 or …Nf6', moves: 'e4 c5 Nf3 a6 c3', check: { kind: 'good', san: 'd5' } },
  { opening: "Sicilian Defense: O'Kelly Variation", field: 'black', quote: 'Against 3.c3, hit e4 with …d5 or …Nf6', moves: 'e4 c5 Nf3 a6 c3', check: { kind: 'good', san: 'Nf6' } },
  { opening: "Sicilian Defense: O'Kelly Variation", field: 'black', quote: 'Against 3.c4, play …e6', moves: 'e4 c5 Nf3 a6 c4', check: { kind: 'good', san: 'e6' } },

  { opening: 'Sicilian Defense: Old Sicilian', field: 'white', quote: '3.d4 for the Open Sicilian', moves: 'e4 c5 Nf3 Nc6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'white', quote: 'avoid it with 3.Bb5 (Rossolimo)', moves: 'e4 c5 Nf3 Nc6', check: { kind: 'good', san: 'Bb5' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'white', quote: '3.Nc3 or 3.c3', moves: 'e4 c5 Nf3 Nc6', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'white', quote: '3.Nc3 or 3.c3', moves: 'e4 c5 Nf3 Nc6', check: { kind: 'good', san: 'c3' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: 'After 3.d4 cxd4 4.Nxd4, choose …Nf6', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: '…e6 (Taimanov)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'e6' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: '…g6 (Accelerated Dragon)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'g6' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: '…g6 (Accelerated Dragon) or …e5', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'e5' } },
  // "…Nf6 (then …e5 or …d6)" read as 4…Nf6 5.Nc3 and then the Sveshnikov or the Classical.
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: '…Nf6 (then …e5 or …d6)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'good', san: 'e5' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: '…Nf6 (then …e5 or …d6)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3', check: { kind: 'good', san: 'd6' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: 'Against 3.Bb5, …g6 or …e6 are solid.', moves: 'e4 c5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'g6' } },
  { opening: 'Sicilian Defense: Old Sicilian', field: 'black', quote: 'Against 3.Bb5, …g6 or …e6 are solid.', moves: 'e4 c5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'e6' } },

  { opening: 'Sicilian Defense: Open', field: 'white', quote: 'c4 (Maróczy Bind) is an option against …g6', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6', check: { kind: 'good', san: 'c4' } },
  { opening: 'Sicilian Defense: Open', field: 'black', quote: 'Choose …Nf6 (Sveshnikov or Classical)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Sicilian Defense: Open', field: 'black', quote: '…e6 (Taimanov)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'e6' } },
  { opening: 'Sicilian Defense: Open', field: 'black', quote: '…g6 (Accelerated Dragon)', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'g6' } },
  { opening: 'Sicilian Defense: Open', field: 'black', quote: '…g6 (Accelerated Dragon) or …e5', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4', check: { kind: 'good', san: 'e5' } },

  { opening: 'Sicilian Defense: Prins Variation', field: 'black', quote: 'Strike at once with 5…e5, chasing the knight', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3', check: { kind: 'good', san: 'e5' } },
  // "…d5 becomes possible" read as following 5…e5 6.Nb3 d5.
  { opening: 'Sicilian Defense: Prins Variation', field: 'black', quote: 'with no knight on c3, …d5 becomes possible', moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5 Nb3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Sicilian Defense: Smith-Morra Gambit', field: 'black', quote: 'Accept and develop carefully', moves: 'e4 c5 d4 cxd4 c3', check: { kind: 'good', san: 'dxc3' } },
  { opening: 'Sicilian Defense: Smith-Morra Gambit', field: 'black', quote: 'Declining with 3…Nf6 or 3…d5', moves: 'e4 c5 d4 cxd4 c3', check: { kind: 'playable', san: 'Nf6' } },
  { opening: 'Sicilian Defense: Smith-Morra Gambit', field: 'black', quote: 'Declining with 3…Nf6 or 3…d5', moves: 'e4 c5 d4 cxd4 c3', check: { kind: 'playable', san: 'd5' } },

  { opening: 'Sicilian Defense: Taimanov Variation', field: 'white', quote: '5.Nc3 with Be3', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Sicilian Defense: Taimanov Variation', field: 'white', quote: 'or 5.Nb5 d6 6.c4 for a Maróczy bind', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6', check: { kind: 'good', san: 'Nb5' } },
  { opening: 'Sicilian Defense: Taimanov Variation', field: 'white', quote: 'or 5.Nb5 d6 6.c4 for a Maróczy bind', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nb5 d6', check: { kind: 'good', san: 'c4' } },
  // "…a6, …Qc7 and …Nf6" read as starting with 5…a6 after 5.Nc3.
  { opening: 'Sicilian Defense: Taimanov Variation', field: 'black', quote: '…a6, …Qc7 and …Nf6', moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nc3', check: { kind: 'good', san: 'a6' } },

  // ─── French ──────────────────────────────────────────────────────────────
  { opening: 'French Defense', field: 'white', quote: 'Build a centre with d4', moves: 'e4 e6', check: { kind: 'good', san: 'd4' } },

  { opening: 'French Defense: Advance Variation', field: 'black', quote: '…c5, …Nc6, …Qb6', moves: 'e4 e6 d4 d5 e5', check: { kind: 'good', san: 'c5' } },
  { opening: 'French Defense: Advance Variation', field: 'white', quote: 'c3 and Nf3 to hold d4', moves: 'e4 e6 d4 d5 e5 c5', check: { kind: 'good', san: 'c3' } },
  // The trap's move order isn't given; the standard 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Nxd4 8.Nxd4 is used.
  { opening: 'French Defense: Advance Variation', field: 'black', quote: '…Nxd4?? Nxd4 Qxd4 loses the queen to Bb5+', moves: 'e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4 Nxd4', check: { kind: 'blunder', san: 'Qxd4' } },
  { opening: 'French Defense: Advance Variation', field: 'black', quote: '…Nxd4?? Nxd4 Qxd4 loses the queen to Bb5+', moves: 'e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4 Nxd4 Qxd4 Bb5+', check: { kind: 'eval', band: 'winning', side: 'white' } },

  { opening: 'French Defense: Exchange Variation', field: 'black', quote: 'The position is level', moves: 'e4 e6 d4 d5 exd5 exd5', check: { kind: 'eval', band: 'level' } },

  { opening: 'French Defense: Franco-Sicilian Defense', field: 'white', quote: '3.Nf3 cxd4 4.Nxd4 gives an Open Sicilian', moves: 'e4 c5 d4 e6', check: { kind: 'good', san: 'Nf3' } },
  { opening: 'French Defense: Franco-Sicilian Defense', field: 'white', quote: '3.d5 grabs space', moves: 'e4 c5 d4 e6', check: { kind: 'good', san: 'd5' } },
  { opening: 'French Defense: Franco-Sicilian Defense', field: 'black', quote: 'Answer Nf3 with …cxd4', moves: 'e4 c5 d4 e6 Nf3', check: { kind: 'good', san: 'cxd4' } },
  // "or play …d5" read as the alternative answer to 3.Nf3.
  { opening: 'French Defense: Franco-Sicilian Defense', field: 'black', quote: 'or play …d5 for French-type positions', moves: 'e4 c5 d4 e6 Nf3', check: { kind: 'playable', san: 'd5' } },
  { opening: 'French Defense: Franco-Sicilian Defense', field: 'black', quote: 'Against 3.d5, …exd5 exd5 and …d6', moves: 'e4 c5 d4 e6 d5', check: { kind: 'good', san: 'exd5' } },
  { opening: 'French Defense: Franco-Sicilian Defense', field: 'black', quote: 'Against 3.d5, …exd5 exd5 and …d6', moves: 'e4 c5 d4 e6 d5 exd5 exd5', check: { kind: 'good', san: 'd6' } },

  { opening: "French Defense: King's Indian Attack", field: 'black', quote: '…d5, …c5, …Nc6', moves: 'e4 e6 d3', check: { kind: 'good', san: 'd5' } },

  { opening: 'French Defense: Knight Variation', field: 'black', quote: '2…d5 and the normal French plan', moves: 'e4 e6 Nf3', check: { kind: 'good', san: 'd5' } },
  { opening: 'French Defense: Knight Variation', field: 'white', quote: 'Answer …d5 with 3.Nc3, 3.e5 or 3.exd5', moves: 'e4 e6 Nf3 d5', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'French Defense: Knight Variation', field: 'white', quote: 'Answer …d5 with 3.Nc3, 3.e5 or 3.exd5', moves: 'e4 e6 Nf3 d5', check: { kind: 'good', san: 'e5' } },
  { opening: 'French Defense: Knight Variation', field: 'white', quote: 'Answer …d5 with 3.Nc3, 3.e5 or 3.exd5', moves: 'e4 e6 Nf3 d5', check: { kind: 'good', san: 'exd5' } },
  { opening: 'French Defense: Knight Variation', field: 'black', quote: 'If White pushes e5 without d4, hit it with …c5', moves: 'e4 e6 Nf3 d5 e5', check: { kind: 'good', san: 'c5' } },

  { opening: 'French Defense: La Bourdonnais Variation', field: 'black', quote: '2…d5, and if 3.e5', moves: 'e4 e6 f4', check: { kind: 'good', san: 'd5' } },
  { opening: 'French Defense: La Bourdonnais Variation', field: 'black', quote: 'if 3.e5, then …c5', moves: 'e4 e6 f4 d5 e5', check: { kind: 'good', san: 'c5' } },

  { opening: 'French Defense: Paulsen Variation', field: 'black', quote: 'Pin with …Bb4', moves: 'e4 e6 d4 d5 Nc3', check: { kind: 'good', san: 'Bb4' } },
  { opening: 'French Defense: Paulsen Variation', field: 'black', quote: 'or play …Nf6 to pressure e4', moves: 'e4 e6 d4 d5 Nc3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'French Defense: Paulsen Variation', field: 'black', quote: '…dxe4 gives up the centre for a solid, freer game', moves: 'e4 e6 d4 d5 Nc3', check: { kind: 'good', san: 'dxe4' } },
  { opening: 'French Defense: Paulsen Variation', field: 'white', quote: 'Against …Bb4, e5 and a3 to win the bishop pair', moves: 'e4 e6 d4 d5 Nc3 Bb4', check: { kind: 'good', san: 'e5' } },
  // a3 timing read as the Winawer main line 4.e5 c5 5.a3.
  { opening: 'French Defense: Paulsen Variation', field: 'white', quote: 'Against …Bb4, e5 and a3 to win the bishop pair', moves: 'e4 e6 d4 d5 Nc3 Bb4 e5 c5', check: { kind: 'good', san: 'a3' } },
  { opening: 'French Defense: Paulsen Variation', field: 'white', quote: 'Against …Nf6, Bg5 or e5', moves: 'e4 e6 d4 d5 Nc3 Nf6', check: { kind: 'good', san: 'Bg5' } },
  { opening: 'French Defense: Paulsen Variation', field: 'white', quote: 'Against …Nf6, Bg5 or e5', moves: 'e4 e6 d4 d5 Nc3 Nf6', check: { kind: 'good', san: 'e5' } },
  { opening: 'French Defense: Paulsen Variation', field: 'white', quote: 'Against …dxe4, Nxe4', moves: 'e4 e6 d4 d5 Nc3 dxe4', check: { kind: 'good', san: 'Nxe4' } },

  { opening: "French Defense: Queen's Knight", field: 'black', quote: '2…d5 and the normal French plan', moves: 'e4 e6 Nc3', check: { kind: 'good', san: 'd5' } },
  { opening: "French Defense: Queen's Knight", field: 'idea', quote: 'After 2…d5, White can transpose with 3.d4 or play 3.Nf3 (Two Knights)', moves: 'e4 e6 Nc3 d5', check: { kind: 'good', san: 'd4' } },
  { opening: "French Defense: Queen's Knight", field: 'idea', quote: 'After 2…d5, White can transpose with 3.d4 or play 3.Nf3 (Two Knights)', moves: 'e4 e6 Nc3 d5', check: { kind: 'playable', san: 'Nf3' } },
  // "If White avoids d4" read as 3.Nf3.
  { opening: "French Defense: Queen's Knight", field: 'black', quote: 'If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4.', moves: 'e4 e6 Nc3 d5 Nf3', check: { kind: 'playable', san: 'dxe4' } },
  { opening: "French Defense: Queen's Knight", field: 'black', quote: 'If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4.', moves: 'e4 e6 Nc3 d5 Nf3', check: { kind: 'good', san: 'Nf6' } },
  { opening: "French Defense: Queen's Knight", field: 'black', quote: 'If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4.', moves: 'e4 e6 Nc3 d5 Nf3', check: { kind: 'good', san: 'd4' } },

  // "playable but slightly clumsy" plus "Both give Black easy play" read as level.
  { opening: 'French Defense: Schlechter Variation', field: 'idea', quote: 'It is playable but slightly clumsy', moves: 'e4 e6 d4 d5 Bd3', check: { kind: 'eval', band: 'level' } },
  { opening: 'French Defense: Schlechter Variation', field: 'black', quote: '3…c5 hits d4 at once', moves: 'e4 e6 d4 d5 Bd3', check: { kind: 'good', san: 'c5' } },
  { opening: 'French Defense: Schlechter Variation', field: 'black', quote: '…dxe4 Bxe4 …Nf6 gains time on the bishop', moves: 'e4 e6 d4 d5 Bd3', check: { kind: 'good', san: 'dxe4' } },
  { opening: 'French Defense: Schlechter Variation', field: 'black', quote: '…dxe4 Bxe4 …Nf6 gains time on the bishop', moves: 'e4 e6 d4 d5 Bd3 dxe4 Bxe4', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'French Defense: Steiner Variation', field: 'black', quote: '2…d5 opens the position', moves: 'e4 e6 c4', check: { kind: 'good', san: 'd5' } },
  // "exchange on d5" could be exd5 or cxd5; exd5 chosen.
  { opening: 'French Defense: Steiner Variation', field: 'white', quote: 'If …d5 comes, exchange on d5', moves: 'e4 e6 c4 d5', check: { kind: 'good', san: 'exd5' } },

  { opening: 'French Defense: Tarrasch Variation', field: 'black', quote: '3…c5 opens the centre', moves: 'e4 e6 d4 d5 Nd2', check: { kind: 'good', san: 'c5' } },
  { opening: 'French Defense: Tarrasch Variation', field: 'black', quote: '3…Nf6 4.e5 Nfd7 gives a locked chain', moves: 'e4 e6 d4 d5 Nd2', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'French Defense: Tarrasch Variation', field: 'black', quote: '3…Nf6 4.e5 Nfd7 gives a locked chain', moves: 'e4 e6 d4 d5 Nd2 Nf6 e5', check: { kind: 'good', san: 'Nfd7' } },
  // White's fifth move isn't given; 5.Bd3 chosen.
  { opening: 'French Defense: Tarrasch Variation', field: 'black', quote: 'then …c5, …Nc6, …Qb6 and …f6', moves: 'e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3', check: { kind: 'good', san: 'c5' } },

  { opening: 'French Defense: Two Knights Variation', field: 'black', quote: '3…Nf6 heads for normal French play', moves: 'e4 e6 Nf3 d5 Nc3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'French Defense: Two Knights Variation', field: 'black', quote: 'if 4.e5, …Nfd7', moves: 'e4 e6 Nf3 d5 Nc3 Nf6 e5', check: { kind: 'good', san: 'Nfd7' } },
  { opening: 'French Defense: Two Knights Variation', field: 'black', quote: '3…d4 grabs space and gains time on the c3 knight', moves: 'e4 e6 Nf3 d5 Nc3', check: { kind: 'good', san: 'd4' } },

  // ─── Caro-Kann ───────────────────────────────────────────────────────────
  { opening: 'Caro-Kann Defense', field: 'white', quote: 'Build a centre with d4', moves: 'e4 c6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Caro-Kann Defense', field: 'white', quote: 'e5 (Advance) for space', moves: 'e4 c6 d4 d5', check: { kind: 'good', san: 'e5' } },
  { opening: 'Caro-Kann Defense', field: 'white', quote: 'Nc3 or Nd2 for quick development', moves: 'e4 c6 d4 d5', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Caro-Kann Defense', field: 'white', quote: 'Nc3 or Nd2 for quick development', moves: 'e4 c6 d4 d5', check: { kind: 'good', san: 'Nd2' } },
  { opening: 'Caro-Kann Defense', field: 'white', quote: 'or exd5 for a calmer structure', moves: 'e4 c6 d4 d5', check: { kind: 'good', san: 'exd5' } },

  { opening: 'Caro-Kann Defense: Accelerated Panov Attack', field: 'black', quote: '2…d5 3.exd5 cxd5 4.cxd5 Nf6 regains the pawn', moves: 'e4 c6 c4', check: { kind: 'good', san: 'd5' } },
  { opening: 'Caro-Kann Defense: Accelerated Panov Attack', field: 'black', quote: '2…d5 3.exd5 cxd5 4.cxd5 Nf6 regains the pawn', moves: 'e4 c6 c4 d5 exd5 cxd5 cxd5', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Caro-Kann Defense: Accelerated Panov Attack', field: 'black', quote: '2…e5 is a playable alternative', moves: 'e4 c6 c4', check: { kind: 'playable', san: 'e5' } },

  { opening: 'Caro-Kann Defense: Advance Variation', field: 'black', quote: '…Bf5, …e6, then …c5 against d4', moves: 'e4 c6 d4 d5 e5', check: { kind: 'good', san: 'Bf5' } },
  // White's moves aren't given; the calm line 4.Nf3 e6 5.Be2 c5 chosen.
  { opening: 'Caro-Kann Defense: Advance Variation', field: 'black', quote: '…Bf5, …e6, then …c5 against d4', moves: 'e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2', check: { kind: 'good', san: 'c5' } },
  { opening: 'Caro-Kann Defense: Advance Variation', field: 'white', quote: 'Calmly with Nf3, Be2, 0-0 and c3', moves: 'e4 c6 d4 d5 e5 Bf5', check: { kind: 'good', san: 'Nf3' } },
  { opening: 'Caro-Kann Defense: Advance Variation', field: 'white', quote: 'aggressively with Nc3 and g4 or h4', moves: 'e4 c6 d4 d5 e5 Bf5', check: { kind: 'playable', san: 'Nc3' } },
  // h4 read as playable straight away at move 4.
  { opening: 'Caro-Kann Defense: Advance Variation', field: 'white', quote: 'aggressively with Nc3 and g4 or h4', moves: 'e4 c6 d4 d5 e5 Bf5', check: { kind: 'good', san: 'h4' } },

  { opening: 'Caro-Kann Defense: Breyer Variation', field: 'black', quote: 'Take the centre with …d5 and …e5', moves: 'e4 c6 d3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Caro-Kann Defense: Endgame Offer', field: 'black', quote: '…dxe4 dxe4 Qxd1+ Kxd1 gives a safe, level endgame', moves: 'e4 c6 Nf3 d5 d3', check: { kind: 'good', san: 'dxe4' } },
  { opening: 'Caro-Kann Defense: Endgame Offer', field: 'black', quote: '…dxe4 dxe4 Qxd1+ Kxd1 gives a safe, level endgame', moves: 'e4 c6 Nf3 d5 d3 dxe4 dxe4 Qxd1+ Kxd1', check: { kind: 'eval', band: 'level' } },
  { opening: 'Caro-Kann Defense: Endgame Offer', field: 'white', quote: 'White accepts that …dxe4 and a queen trade leads to a level endgame.', moves: 'e4 c6 Nf3 d5 d3 dxe4 dxe4 Qxd1+ Kxd1', check: { kind: 'eval', band: 'level' } },
  { opening: 'Caro-Kann Defense: Endgame Offer', field: 'black', quote: 'Or keep queens on with …Bg4', moves: 'e4 c6 Nf3 d5 d3', check: { kind: 'good', san: 'Bg4' } },

  { opening: 'Caro-Kann Defense: Exchange Variation', field: 'white', quote: 'Bd3, c3, Bf4', moves: 'e4 c6 d4 d5 exd5 cxd5', check: { kind: 'good', san: 'Bd3' } },
  { opening: 'Caro-Kann Defense: Exchange Variation', field: 'black', quote: '…Nc6, …Nf6, …Bg4 and …e6', moves: 'e4 c6 d4 d5 exd5 cxd5 Bd3', check: { kind: 'good', san: 'Nc6' } },

  { opening: 'Caro-Kann Defense: Hillbilly Attack', field: 'black', quote: '2…d5 gains time on the bishop', moves: 'e4 c6 Bc4', check: { kind: 'good', san: 'd5' } },
  { opening: 'Caro-Kann Defense: Hillbilly Attack', field: 'white', quote: 'exchange with 3.exd5 cxd5', moves: 'e4 c6 Bc4 d5', check: { kind: 'good', san: 'exd5' } },
  { opening: 'Caro-Kann Defense: Hillbilly Attack', field: 'white', quote: 'then retreat the bishop or check on b5', moves: 'e4 c6 Bc4 d5 exd5 cxd5', check: { kind: 'good', san: 'Bb3' } },
  { opening: 'Caro-Kann Defense: Hillbilly Attack', field: 'white', quote: 'then retreat the bishop or check on b5', moves: 'e4 c6 Bc4 d5 exd5 cxd5', check: { kind: 'good', san: 'Bb5+' } },
  { opening: 'Caro-Kann Defense: Hillbilly Attack', field: 'white', quote: 'Retreating 3.Bb3 at once lets …dxe4 give Black the better game.', moves: 'e4 c6 Bc4 d5', check: { kind: 'dubious', san: 'Bb3' } },
  { opening: 'Caro-Kann Defense: Hillbilly Attack', field: 'white', quote: 'Retreating 3.Bb3 at once lets …dxe4 give Black the better game.', moves: 'e4 c6 Bc4 d5 Bb3', check: { kind: 'good', san: 'dxe4' } },

  { opening: 'Caro-Kann Defense: Maróczy Variation', field: 'black', quote: '3…e6 followed by …c5 attacks d4', moves: 'e4 c6 d4 d5 f3', check: { kind: 'good', san: 'e6' } },
  { opening: 'Caro-Kann Defense: Maróczy Variation', field: 'black', quote: 'or …g6 and …Bg7 aims at d4', moves: 'e4 c6 d4 d5 f3', check: { kind: 'good', san: 'g6' } },
  { opening: 'Caro-Kann Defense: Maróczy Variation', field: 'white', quote: 'If …dxe4 fxe4, use the half-open f-file', moves: 'e4 c6 d4 d5 f3 dxe4', check: { kind: 'good', san: 'fxe4' } },

  { opening: 'Caro-Kann Defense: Modern Variation', field: 'idea', quote: 'usually leads to 3…dxe4 4.Nxe4', moves: 'e4 c6 d4 d5 Nd2', check: { kind: 'good', san: 'dxe4' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'idea', quote: 'Black chooses …Bf5, …Nd7 or …Nf6', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4', check: { kind: 'good', san: 'Bf5' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'idea', quote: 'Black chooses …Bf5, …Nd7 or …Nf6', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4', check: { kind: 'good', san: 'Nd7' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'idea', quote: 'Black chooses …Bf5, …Nd7 or …Nf6', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'white', quote: 'Against …Bf5, chase the bishop with Ng3', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5', check: { kind: 'good', san: 'Ng3' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'white', quote: 'chase the bishop with Ng3, h4 and h5', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6', check: { kind: 'good', san: 'h4' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'white', quote: 'Against …Nd7, develop quickly with Bc4 or Nf3', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7', check: { kind: 'good', san: 'Bc4' } },
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'white', quote: 'Against …Nd7, develop quickly with Bc4 or Nf3', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7', check: { kind: 'good', san: 'Nf3' } },
  // White's fifth move isn't given; 5.Nf3 chosen.
  { opening: 'Caro-Kann Defense: Modern Variation', field: 'black', quote: '…Nd7 first prepares …Ngf6 without doubled pawns after a knight swap.', moves: 'e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7 Nf3', check: { kind: 'good', san: 'Ngf6' } },

  { opening: 'Caro-Kann Defense: Two Knights Attack', field: 'idea', quote: 'The usual answer is …Bg4', moves: 'e4 c6 Nf3 d5 Nc3', check: { kind: 'good', san: 'Bg4' } },
  { opening: 'Caro-Kann Defense: Two Knights Attack', field: 'white', quote: 'h3 to ask the g4 bishop to decide', moves: 'e4 c6 Nf3 d5 Nc3 Bg4', check: { kind: 'good', san: 'h3' } },
  { opening: 'Caro-Kann Defense: Two Knights Attack', field: 'idea', quote: 'after h3 Black often gives up the bishop for the knight', moves: 'e4 c6 Nf3 d5 Nc3 Bg4 h3', check: { kind: 'good', san: 'Bxf3' } },
  { opening: 'Caro-Kann Defense: Two Knights Attack', field: 'white', quote: 'After …Bxf3, recapture with the queen', moves: 'e4 c6 Nf3 d5 Nc3 Bg4 h3 Bxf3', check: { kind: 'good', san: 'Qxf3' } },
  { opening: 'Caro-Kann Defense: Two Knights Attack', field: 'black', quote: '3…Bg4 4.h3 Bxf3 5.Qxf3 e6', moves: 'e4 c6 Nf3 d5 Nc3 Bg4 h3 Bxf3 Qxf3', check: { kind: 'good', san: 'e6' } },

  // ─── Scandinavian ────────────────────────────────────────────────────────
  { opening: 'Scandinavian Defense', field: 'white', quote: '2.exd5, then Nc3 to gain time on the queen', moves: 'e4 d5', check: { kind: 'good', san: 'exd5' } },
  { opening: 'Scandinavian Defense', field: 'white', quote: '2.exd5, then Nc3 to gain time on the queen', moves: 'e4 d5 exd5 Qxd5', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Scandinavian Defense', field: 'idea', quote: 'Black recaptures with the queen (…Qxd5) or the knight (…Nf6)', moves: 'e4 d5 exd5', check: { kind: 'good', san: 'Qxd5' } },
  { opening: 'Scandinavian Defense', field: 'idea', quote: 'Black recaptures with the queen (…Qxd5) or the knight (…Nf6)', moves: 'e4 d5 exd5', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Scandinavian Defense', field: 'black', quote: 'Get the queen to safety (a5, d6 or d8)', moves: 'e4 d5 exd5 Qxd5 Nc3', check: { kind: 'good', san: 'Qa5' } },
  { opening: 'Scandinavian Defense', field: 'black', quote: 'Get the queen to safety (a5, d6 or d8)', moves: 'e4 d5 exd5 Qxd5 Nc3', check: { kind: 'good', san: 'Qd6' } },
  { opening: 'Scandinavian Defense', field: 'black', quote: 'Get the queen to safety (a5, d6 or d8)', moves: 'e4 d5 exd5 Qxd5 Nc3', check: { kind: 'good', san: 'Qd8' } },

  // "It is dubious" judges the gambit position (Black is a pawn down without enough for it), not 2…c6 against Black's other moves.
  { opening: 'Scandinavian Defense: Blackburne-Kloosterboer Gambit', field: 'idea', quote: 'It is dubious', moves: 'e4 d5 exd5 c6', check: { kind: 'eval', band: 'clear', side: 'white' } },
  { opening: 'Scandinavian Defense: Blackburne-Kloosterboer Gambit', field: 'white', quote: '3.dxc6 Nxc6, then Nf3', moves: 'e4 d5 exd5 c6', check: { kind: 'good', san: 'dxc6' } },
  { opening: 'Scandinavian Defense: Blackburne-Kloosterboer Gambit', field: 'white', quote: '3.dxc6 Nxc6, then Nf3', moves: 'e4 d5 exd5 c6 dxc6 Nxc6', check: { kind: 'good', san: 'Nf3' } },
  // White's fourth move isn't given; 4.Nf3 (from the white field) chosen.
  { opening: 'Scandinavian Defense: Blackburne-Kloosterboer Gambit', field: 'black', quote: 'After 3.dxc6 Nxc6, develop fast with …e5', moves: 'e4 d5 exd5 c6 dxc6 Nxc6 Nf3', check: { kind: 'good', san: 'e5' } },

  { opening: 'Scandinavian Defense: Gubinsky-Melts Defense', field: 'white', quote: 'd4, Nf3, and develop', moves: 'e4 d5 exd5 Qxd5 Nc3 Qd6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Scandinavian Defense: Gubinsky-Melts Defense', field: 'black', quote: '…Nf6, then …a6 (to stop Nb5) or …c6', moves: 'e4 d5 exd5 Qxd5 Nc3 Qd6 d4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Scandinavian Defense: Gubinsky-Melts Defense', field: 'black', quote: '…Nf6, then …a6 (to stop Nb5) or …c6', moves: 'e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3', check: { kind: 'playable', san: 'a6' } },
  { opening: 'Scandinavian Defense: Gubinsky-Melts Defense', field: 'black', quote: '…Nf6, then …a6 (to stop Nb5) or …c6', moves: 'e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3', check: { kind: 'good', san: 'c6' } },

  { opening: 'Scandinavian Defense: Main Line', field: 'white', quote: 'd4, Nf3, Bc4 and Bd2', moves: 'e4 d5 exd5 Qxd5 Nc3 Qa5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Scandinavian Defense: Main Line', field: 'black', quote: '…Nf6, …c6 (giving the queen the c7 retreat)', moves: 'e4 d5 exd5 Qxd5 Nc3 Qa5 d4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Scandinavian Defense: Main Line', field: 'black', quote: '…Nf6, …c6 (giving the queen the c7 retreat)', moves: 'e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3', check: { kind: 'good', san: 'c6' } },

  { opening: 'Scandinavian Defense: Mieses-Kotrč Variation', field: 'white', quote: '3.Nc3 hits the queen', moves: 'e4 d5 exd5 Qxd5', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Scandinavian Defense: Mieses-Kotrč Variation', field: 'white', quote: '3.d4 or 3.Nf3 are calmer alternatives', moves: 'e4 d5 exd5 Qxd5', check: { kind: 'playable', san: 'd4' } },
  { opening: 'Scandinavian Defense: Mieses-Kotrč Variation', field: 'white', quote: '3.d4 or 3.Nf3 are calmer alternatives', moves: 'e4 d5 exd5 Qxd5', check: { kind: 'playable', san: 'Nf3' } },
  { opening: 'Scandinavian Defense: Mieses-Kotrč Variation', field: 'black', quote: 'After 3.Nc3, retreat to a5, d6 or d8', moves: 'e4 d5 exd5 Qxd5 Nc3', check: { kind: 'good', san: 'Qa5' } },
  { opening: 'Scandinavian Defense: Mieses-Kotrč Variation', field: 'black', quote: 'After 3.Nc3, retreat to a5, d6 or d8', moves: 'e4 d5 exd5 Qxd5 Nc3', check: { kind: 'good', san: 'Qd6' } },
  { opening: 'Scandinavian Defense: Mieses-Kotrč Variation', field: 'black', quote: 'After 3.Nc3, retreat to a5, d6 or d8', moves: 'e4 d5 exd5 Qxd5 Nc3', check: { kind: 'good', san: 'Qd8' } },

  { opening: 'Scandinavian Defense: Modern Variation', field: 'white', quote: '3.d4 Nxd5 4.c4 kicks the knight', moves: 'e4 d5 exd5 Nf6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Scandinavian Defense: Modern Variation', field: 'white', quote: '3.d4 Nxd5 4.c4 kicks the knight', moves: 'e4 d5 exd5 Nf6 d4 Nxd5', check: { kind: 'good', san: 'c4' } },
  { opening: 'Scandinavian Defense: Modern Variation', field: 'white', quote: 'Holding the pawn with 3.c4 lets Black open lines with …c6 or …e6', moves: 'e4 d5 exd5 Nf6 c4', check: { kind: 'good', san: 'c6' } },
  { opening: 'Scandinavian Defense: Modern Variation', field: 'white', quote: 'Holding the pawn with 3.c4 lets Black open lines with …c6 or …e6', moves: 'e4 d5 exd5 Nf6 c4', check: { kind: 'good', san: 'e6' } },
  { opening: 'Scandinavian Defense: Modern Variation', field: 'black', quote: 'Regain the pawn with …Nxd5', moves: 'e4 d5 exd5 Nf6 d4', check: { kind: 'good', san: 'Nxd5' } },
  { opening: 'Scandinavian Defense: Modern Variation', field: 'black', quote: '…Bg4 first is also possible after 3.d4', moves: 'e4 d5 exd5 Nf6 d4', check: { kind: 'good', san: 'Bg4' } },

  { opening: 'Scandinavian Defense: Valencian Variation', field: 'white', quote: 'd4, Nf3, Bc4 or Bd3, and castle', moves: 'e4 d5 exd5 Qxd5 Nc3 Qd8', check: { kind: 'good', san: 'd4' } },

  // ─── Pirc, Modern, Rat and Nimzowitsch ───────────────────────────────────
  { opening: 'Pirc Defense', field: 'white', quote: 'd4 and Nc3, then choose', moves: 'e4 d6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Pirc Defense', field: 'white', quote: 'd4 and Nc3, then choose', moves: 'e4 d6 d4 Nf6', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Pirc Defense', field: 'white', quote: 'f4 and e5 (Austrian Attack)', moves: 'e4 d6 d4 Nf6 Nc3 g6', check: { kind: 'good', san: 'f4' } },
  { opening: 'Pirc Defense', field: 'white', quote: 'Be3, Qd2 and Bh6 with h4–h5 (150 Attack)', moves: 'e4 d6 d4 Nf6 Nc3 g6', check: { kind: 'good', san: 'Be3' } },
  { opening: 'Pirc Defense', field: 'white', quote: 'Nf3, Be2 and 0-0 (Classical)', moves: 'e4 d6 d4 Nf6 Nc3 g6', check: { kind: 'good', san: 'Nf3' } },

  { opening: 'Modern Defense', field: 'white', quote: 'A big centre with d4 and Nc3', moves: 'e4 g6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Modern Defense', field: 'black', quote: '…Bg7 and …d6, then hit d4', moves: 'e4 g6 d4', check: { kind: 'good', san: 'Bg7' } },

  // White's third move isn't given; 3.Nf3 (first in the white field) chosen.
  { opening: 'Rat Defense: Antal Defense', field: 'black', quote: '…e5, …Ngf6, …Be7, …c6 and …0-0', moves: 'e4 d6 d4 Nd7 Nf3', check: { kind: 'good', san: 'e5' } },

  { opening: 'Rat Defense: Harmonist', field: 'black', quote: 'Hit e4 with …Nf6', moves: 'e4 d6 f4', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'Rat Defense: Small Center Defense', field: 'white', quote: 'Use the extra space: Nf3, Nc3 and Bd3', moves: 'e4 e6 d4 d6', check: { kind: 'good', san: 'Nf3' } },
  { opening: 'Rat Defense: Small Center Defense', field: 'white', quote: 'Use the extra space: Nf3, Nc3 and Bd3', moves: 'e4 e6 d4 d6', check: { kind: 'good', san: 'Bd3' } },
  { opening: 'Rat Defense: Small Center Defense', field: 'white', quote: '(c4 is also playable)', moves: 'e4 e6 d4 d6', check: { kind: 'playable', san: 'c4' } },

  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'Build a centre with d4', moves: 'e4 Nc6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Nimzowitsch Defense', field: 'black', quote: 'Challenge the centre with …d5 or …e5 right away', moves: 'e4 Nc6 d4', check: { kind: 'good', san: 'd5' } },
  { opening: 'Nimzowitsch Defense', field: 'black', quote: 'Challenge the centre with …d5 or …e5 right away', moves: 'e4 Nc6 d4', check: { kind: 'playable', san: 'e5' } },
  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'Against …d5, e5 or Nc3', moves: 'e4 Nc6 d4 d5', check: { kind: 'good', san: 'e5' } },
  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'Against …d5, e5 or Nc3', moves: 'e4 Nc6 d4 d5', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'Against …e5, 3.d5 or 3.dxe5 is stronger than 3.Nf3', moves: 'e4 Nc6 d4 e5', check: { kind: 'good', san: 'd5' } },
  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'Against …e5, 3.d5 or 3.dxe5 is stronger than 3.Nf3', moves: 'e4 Nc6 d4 e5', check: { kind: 'good', san: 'dxe5' } },
  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'Against …e5, 3.d5 or 3.dxe5 is stronger than 3.Nf3', moves: 'e4 Nc6 d4 e5', check: { kind: 'dubious', san: 'Nf3' } },
  { opening: 'Nimzowitsch Defense', field: 'white', quote: 'which only transposes to a level Scotch', moves: 'e4 Nc6 d4 e5 Nf3 exd4 Nxd4', check: { kind: 'eval', band: 'level' } },

  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'white', quote: '3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight', moves: 'e4 e5 d4 Nc6', check: { kind: 'good', san: 'dxe5' } },
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'white', quote: '3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight', moves: 'e4 e5 d4 Nc6 dxe5 Nxe5', check: { kind: 'good', san: 'f4' } },
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'white', quote: '3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight', moves: 'e4 e5 d4 Nc6 dxe5 Nxe5', check: { kind: 'playable', san: 'Nf3' } },
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'white', quote: '3.d5 Nce7 gains space', moves: 'e4 e5 d4 Nc6', check: { kind: 'good', san: 'd5' } },
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'white', quote: '3.Nf3 exd4 4.Nxd4 is only a level Scotch.', moves: 'e4 e5 d4 Nc6', check: { kind: 'dubious', san: 'Nf3' } },
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'white', quote: '3.Nf3 exd4 4.Nxd4 is only a level Scotch.', moves: 'e4 e5 d4 Nc6 Nf3 exd4 Nxd4', check: { kind: 'eval', band: 'level' } },
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'black', quote: 'After d5 …Nce7', moves: 'e4 e5 d4 Nc6 d5', check: { kind: 'good', san: 'Nce7' } },
  // "it can drop to g6" read as the retreat after 4.f4.
  { opening: 'Nimzowitsch Defense: Kennedy Variation', field: 'black', quote: 'keep the knight active (it can drop to g6)', moves: 'e4 e5 d4 Nc6 dxe5 Nxe5 f4', check: { kind: 'good', san: 'Ng6' } },

  // Added in the strategy check (#5): claims made by rewritten notes.
  { opening: 'Sicilian Defense: Bowdler Attack', field: 'black', quote: 'If White already has Nc3 in, prepare …d5', moves: 'e4 c5 Bc4 e6 Nc3', check: { kind: 'dubious', san: 'd5' } },
  { opening: 'French Defense: Advance Variation', field: 'black', quote: 'so …Nxd4 just drops a piece', moves: 'e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4', check: { kind: 'blunder', san: 'Nxd4' } },
];
