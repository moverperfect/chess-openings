import type { Claim } from './claims';

export const CLAIMS_E4E5: Claim[] = [
  { opening: "King's Pawn Game", field: 'black', quote: '1…e5 claims an equal share of the centre', moves: 'e4', check: { kind: 'good', san: 'e5' } },
  { opening: "King's Pawn Game", field: 'black', quote: '1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry', moves: 'e4', check: { kind: 'good', san: 'c5' } },
  { opening: "King's Pawn Game", field: 'black', quote: '1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry', moves: 'e4', check: { kind: 'good', san: 'e6' } },
  { opening: "King's Pawn Game", field: 'black', quote: '1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry', moves: 'e4', check: { kind: 'good', san: 'c6' } },

  { opening: "King's Knight Opening", field: 'black', quote: '2…Nc6 is the natural defence of e5', moves: 'e4 e5 Nf3', check: { kind: 'good', san: 'Nc6' } },

  { opening: "King's Knight Opening: Normal Variation", field: 'black', quote: '…Nf6 against Nc3 and Bc4', moves: 'e4 e5 Nf3 Nc6 Nc3', check: { kind: 'good', san: 'Nf6' } },
  { opening: "King's Knight Opening: Normal Variation", field: 'black', quote: '…Nf6 against Nc3 and Bc4', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'good', san: 'Nf6' } },
  { opening: "King's Knight Opening: Normal Variation", field: 'black', quote: '…Nf6 or …a6 against Bb5', moves: 'e4 e5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'Nf6' } },
  { opening: "King's Knight Opening: Normal Variation", field: 'black', quote: '…Nf6 or …a6 against Bb5', moves: 'e4 e5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'a6' } },
  { opening: "King's Knight Opening: Normal Variation", field: 'black', quote: '…exd4 against d4', moves: 'e4 e5 Nf3 Nc6 d4', check: { kind: 'good', san: 'exd4' } },

  { opening: "Petrov's Defense", field: 'white', quote: '3.Nxe5 is the main line', moves: 'e4 e5 Nf3 Nf6', check: { kind: 'good', san: 'Nxe5' } },
  // The retreat square is not named; read as 4.Nf3, the main line.
  { opening: "Petrov's Defense", field: 'white', quote: 'after 3…d6 the knight retreats and play is level', moves: 'e4 e5 Nf3 Nf6 Nxe5 d6 Nf3', check: { kind: 'eval', band: 'level' } },
  { opening: "Petrov's Defense", field: 'black', quote: 'Against 3.Nxe5 play 3…d6 first', moves: 'e4 e5 Nf3 Nf6 Nxe5', check: { kind: 'good', san: 'd6' } },
  { opening: "Petrov's Defense", field: 'black', quote: '4.Qe2 forces …Qe7', moves: 'e4 e5 Nf3 Nf6 Nxe5 Nxe4', check: { kind: 'good', san: 'Qe2' } },
  { opening: "Petrov's Defense", field: 'black', quote: '4.Qe2 forces …Qe7', moves: 'e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2', check: { kind: 'good', san: 'Qe7' } },
  { opening: "Petrov's Defense", field: 'black', quote: 'White keeps a small edge', moves: 'e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Qe7 Qxe4 d6', check: { kind: 'eval', band: 'slight', side: 'white' } },
  { opening: "Petrov's Defense", field: 'black', quote: '…Nf6?? loses the queen to Nc6+', moves: 'e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2', check: { kind: 'blunder', san: 'Nf6' } },
  { opening: "Petrov's Defense", field: 'black', quote: '…Nf6?? loses the queen to Nc6+', moves: 'e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6 Nc6+', check: { kind: 'eval', band: 'winning', side: 'white' } },

  { opening: "Petrov's Defense: Italian Variation", field: 'white', quote: 'If Black takes on e4, Nc3 gives you fast development', moves: 'e4 e5 Nf3 Nf6 Bc4 Nxe4', check: { kind: 'good', san: 'Nc3' } },
  { opening: "Petrov's Defense: Italian Variation", field: 'black', quote: '…Nxe4 is best', moves: 'e4 e5 Nf3 Nf6 Bc4', check: { kind: 'good', san: 'Nxe4' } },
  { opening: "Petrov's Defense: Italian Variation", field: 'black', quote: 'after Nc3 Nxc3 dxc3, hold e5 with …f6', moves: 'e4 e5 Nf3 Nf6 Bc4 Nxe4 Nc3 Nxc3 dxc3', check: { kind: 'good', san: 'f6' } },
  { opening: "Petrov's Defense: Italian Variation", field: 'black', quote: '3…Nc6, a Two Knights, is a quieter, level alternative', moves: 'e4 e5 Nf3 Nf6 Bc4 Nc6', check: { kind: 'eval', band: 'level' } },

  { opening: "Petrov's Defense: Modern Attack", field: 'white', quote: 'After 3…Nxe4, Bd3', moves: 'e4 e5 Nf3 Nf6 d4 Nxe4', check: { kind: 'good', san: 'Bd3' } },
  // Black's setup is not named; read as 5…Bd6 6.O-O O-O, the black note's plan.
  { opening: "Petrov's Defense: Modern Attack", field: 'white', quote: 'undermine the e4 knight with c4', moves: 'e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5 Nxe5 Bd6 O-O O-O', check: { kind: 'good', san: 'c4' } },
  { opening: "Petrov's Defense: Modern Attack", field: 'white', quote: 'After 3…exd4, e5 kicks the knight and Qxd4 regains the pawn', moves: 'e4 e5 Nf3 Nf6 d4 exd4', check: { kind: 'good', san: 'e5' } },
  { opening: "Petrov's Defense: Modern Attack", field: 'black', quote: '3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line', moves: 'e4 e5 Nf3 Nf6 d4', check: { kind: 'good', san: 'Nxe4' } },
  { opening: "Petrov's Defense: Modern Attack", field: 'black', quote: '3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line', moves: 'e4 e5 Nf3 Nf6 d4 Nxe4 Bd3', check: { kind: 'good', san: 'd5' } },
  { opening: "Petrov's Defense: Modern Attack", field: 'black', quote: '3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line', moves: 'e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5', check: { kind: 'good', san: 'Nxe5' } },

  { opening: "Petrov's Defense: Three Knights Game", field: 'white', quote: 'After …Nc6 play Bb5', moves: 'e4 e5 Nf3 Nf6 Nc3 Nc6', check: { kind: 'good', san: 'Bb5' } },
  { opening: "Petrov's Defense: Three Knights Game", field: 'white', quote: '3.Nxe5 is a little stronger, but Nc3 keeps you on familiar ground', moves: 'e4 e5 Nf3 Nf6', check: { kind: 'good', san: 'Nxe5' } },
  { opening: "Petrov's Defense: Three Knights Game", field: 'white', quote: '3.Nxe5 is a little stronger, but Nc3 keeps you on familiar ground', moves: 'e4 e5 Nf3 Nf6', check: { kind: 'playable', san: 'Nc3' } },
  { opening: "Petrov's Defense: Three Knights Game", field: 'black', quote: '…Nc6 gives a Four Knights', moves: 'e4 e5 Nf3 Nf6 Nc3', check: { kind: 'good', san: 'Nc6' } },
  { opening: "Petrov's Defense: Three Knights Game", field: 'black', quote: '…Bb4 keeps a Petrov flavour', moves: 'e4 e5 Nf3 Nf6 Nc3', check: { kind: 'playable', san: 'Bb4' } },

  { opening: 'Philidor Defense', field: 'white', quote: 'Hit the centre with d4', moves: 'e4 e5 Nf3 d6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Philidor Defense', field: 'black', quote: 'give up the centre with …exd4', moves: 'e4 e5 Nf3 d6 d4', check: { kind: 'good', san: 'exd4' } },
  { opening: 'Philidor Defense', field: 'black', quote: 'hold e5 with …Nf6', moves: 'e4 e5 Nf3 d6 d4', check: { kind: 'playable', san: 'Nf6' } },

  { opening: 'Elephant Gambit', field: 'idea', quote: 'It is a dubious gambit', moves: 'e4 e5 Nf3', check: { kind: 'dubious', san: 'd5' } },
  { opening: 'Elephant Gambit', field: 'white', quote: '3.exd5 is cleanest', moves: 'e4 e5 Nf3 d5', check: { kind: 'good', san: 'exd5' } },
  { opening: 'Elephant Gambit', field: 'white', quote: 'against …e4, Qe2 pins the pawn', moves: 'e4 e5 Nf3 d5 exd5 e4', check: { kind: 'good', san: 'Qe2' } },
  { opening: 'Elephant Gambit', field: 'white', quote: 'against …Bd6, d4 hits e5', moves: 'e4 e5 Nf3 d5 exd5 Bd6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Elephant Gambit', field: 'white', quote: '3.Nxe5 is also playable', moves: 'e4 e5 Nf3 d5', check: { kind: 'playable', san: 'Nxe5' } },
  { opening: 'Elephant Gambit', field: 'black', quote: 'Objectively 2…Nc6 is better', moves: 'e4 e5 Nf3', check: { kind: 'good', san: 'Nc6' } },

  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'idea', quote: 'It is unsound.', moves: 'e4 e5 Nf3', check: { kind: 'mistake', san: 'Bc5' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'white', quote: 'Take it: 3.Nxe5', moves: 'e4 e5 Nf3 Bc5', check: { kind: 'good', san: 'Nxe5' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'black', quote: 'After 3.Nxe5 you are a pawn down and White is much better', moves: 'e4 e5 Nf3 Bc5 Nxe5', check: { kind: 'eval', band: 'winning', side: 'white' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'black', quote: "Don't lash out with …Qh4?", moves: 'e4 e5 Nf3 Bc5 Nxe5', check: { kind: 'mistake', san: 'Qh4' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'black', quote: 'd4 hits the bishop', moves: 'e4 e5 Nf3 Bc5 Nxe5 Qh4', check: { kind: 'good', san: 'd4' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'black', quote: 'Develop with …Nc6 or …d6', moves: 'e4 e5 Nf3 Bc5 Nxe5', check: { kind: 'playable', san: 'Nc6' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'black', quote: 'Develop with …Nc6 or …d6', moves: 'e4 e5 Nf3 Bc5 Nxe5', check: { kind: 'playable', san: 'd6' } },
  { opening: "King's Pawn Game: Busch-Gass Gambit", field: 'black', quote: '2…Nc6 is the sound move', moves: 'e4 e5 Nf3', check: { kind: 'good', san: 'Nc6' } },

  { opening: "King's Pawn Game: Maróczy Defense", field: 'white', quote: 'dxe5 dxe5 Qxd8+ Kxd8 trades queens', moves: 'e4 e5 d4 d6', check: { kind: 'playable', san: 'dxe5' } },
  { opening: "King's Pawn Game: Maróczy Defense", field: 'white', quote: 'Or play Nf3 and Nc3', moves: 'e4 e5 d4 d6', check: { kind: 'good', san: 'Nf3' } },
  { opening: "King's Pawn Game: Maróczy Defense", field: 'black', quote: 'After the queen trade the king is safe enough', moves: 'e4 e5 d4 d6 dxe5 dxe5 Qxd8+ Kxd8', check: { kind: 'eval', band: 'level' } },
  { opening: "King's Pawn Game: Maróczy Defense", field: 'black', quote: 'Or answer Nf3 with …Nf6', moves: 'e4 e5 d4 d6 Nf3', check: { kind: 'playable', san: 'Nf6' } },

  { opening: 'Center Game', field: 'black', quote: 'Take: 2…exd4.', moves: 'e4 e5 d4', check: { kind: 'good', san: 'exd4' } },
  { opening: 'Center Game', field: 'black', quote: "develop with tempo on White's queen (…Nc6)", moves: 'e4 e5 d4 exd4 Qxd4', check: { kind: 'good', san: 'Nc6' } },

  { opening: 'Center Game Accepted', field: 'idea', quote: 'Black gains a tempo with …Nc6', moves: 'e4 e5 d4 exd4 Qxd4', check: { kind: 'good', san: 'Nc6' } },
  { opening: 'Center Game Accepted', field: 'white', quote: 'Retreat to e3 after …Nc6', moves: 'e4 e5 d4 exd4 Qxd4 Nc6', check: { kind: 'good', san: 'Qe3' } },

  { opening: "Bishop's Opening", field: 'black', quote: '2…Nf6 hits e4 and is the most testing reply', moves: 'e4 e5 Bc4', check: { kind: 'good', san: 'Nf6' } },

  { opening: "Bishop's Opening: Berlin Defense", field: 'white', quote: '3.d3 is solid', moves: 'e4 e5 Bc4 Nf6', check: { kind: 'good', san: 'd3' } },
  { opening: "Bishop's Opening: Berlin Defense", field: 'black', quote: 'Against 3.d3, …c6 and …d5 build a strong centre', moves: 'e4 e5 Bc4 Nf6 d3', check: { kind: 'good', san: 'c6' } },
  { opening: "Bishop's Opening: Berlin Defense", field: 'black', quote: 'Against 3.d4, take on d4', moves: 'e4 e5 Bc4 Nf6 d4', check: { kind: 'good', san: 'exd4' } },

  { opening: "Bishop's Opening: Boi Variation", field: 'black', quote: 'Against an early Qh5, …Qe7 covers both e5 and f7', moves: 'e4 e5 Bc4 Bc5 Qh5', check: { kind: 'good', san: 'Qe7' } },

  { opening: "Bishop's Opening: Philidor Counterattack", field: 'white', quote: '3.d4 is the sharp answer', moves: 'e4 e5 Bc4 c6', check: { kind: 'good', san: 'd4' } },
  { opening: "Bishop's Opening: Philidor Counterattack", field: 'white', quote: 'after …d5 exd5 cxd5 Bb5+, Black can be left with an isolated d-pawn', moves: 'e4 e5 Bc4 c6 d4 d5 exd5 cxd5', check: { kind: 'good', san: 'Bb5+' } },
  { opening: "Bishop's Opening: Philidor Counterattack", field: 'white', quote: 'Nf3 and d4 is also good', moves: 'e4 e5 Bc4 c6', check: { kind: 'good', san: 'Nf3' } },
  // White's 3rd move is not given; read as 3.d4, the white field's main answer.
  { opening: "Bishop's Opening: Philidor Counterattack", field: 'black', quote: 'Play …d5 as soon as possible', moves: 'e4 e5 Bc4 c6 d4', check: { kind: 'good', san: 'd5' } },
  // White's 3rd move is not given; read as 3.d4, the white field's main answer.
  { opening: "Bishop's Opening: Philidor Counterattack", field: 'black', quote: '…Nf6 first lets White win e5 or take over the centre', moves: 'e4 e5 Bc4 c6 d4', check: { kind: 'dubious', san: 'Nf6' } },
  { opening: "Bishop's Opening: Philidor Counterattack", field: 'black', quote: '…Nf6 first lets White win e5 or take over the centre', moves: 'e4 e5 Bc4 c6 Nf3', check: { kind: 'mistake', san: 'Nf6' } },
  { opening: "Bishop's Opening: Philidor Counterattack", field: 'black', quote: 'Play …d5 as soon as possible', moves: 'e4 e5 Bc4 c6 Nf3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Vienna Game', field: 'black', quote: '…Nf6 and …d5 is the key freeing plan', moves: 'e4 e5 Nc3', check: { kind: 'good', san: 'Nf6' } },
  // Read with …Nf6 already in, as the previous sentence plans.
  { opening: 'Vienna Game', field: 'black', quote: 'Against f4, …d5 hits e4 at once', moves: 'e4 e5 Nc3 Nf6 f4', check: { kind: 'good', san: 'd5' } },

  { opening: 'Vienna Game: Anderssen Defense', field: 'white', quote: 'Nf3 is natural', moves: 'e4 e5 Nc3 Bc5', check: { kind: 'good', san: 'Nf3' } },
  { opening: 'Vienna Game: Anderssen Defense', field: 'white', quote: 'the fork trick Nxe5 and d4 works', moves: 'e4 e5 Nc3 Bc5 Nf3 Nc6', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Vienna Game: Anderssen Defense', field: 'white', quote: 'the fork trick Nxe5 and d4 works', moves: 'e4 e5 Nc3 Bc5 Nf3 Nc6 Nxe5 Nxe5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Vienna Game: Anderssen Defense', field: 'white', quote: 'Bc4 is the sharper choice', moves: 'e4 e5 Nc3 Bc5', check: { kind: 'good', san: 'Bc4' } },
  { opening: 'Vienna Game: Anderssen Defense', field: 'black', quote: 'if White plays Nf3, cover e5 with …d6 before …Nc6', moves: 'e4 e5 Nc3 Bc5 Nf3', check: { kind: 'good', san: 'd6' } },
  { opening: 'Vienna Game: Anderssen Defense', field: 'black', quote: "Don't allow the fork trick", moves: 'e4 e5 Nc3 Bc5 Nf3', check: { kind: 'dubious', san: 'Nc6' } },

  { opening: 'Vienna Game: Falkbeer Variation', field: 'black', quote: 'Against 3.f4, …d5! is the antidote', moves: 'e4 e5 Nc3 Nf6 f4', check: { kind: 'good', san: 'd5' } },
  { opening: 'Vienna Game: Falkbeer Variation', field: 'black', quote: 'Against 3.Bc4, …Nc6 is solid', moves: 'e4 e5 Nc3 Nf6 Bc4', check: { kind: 'good', san: 'Nc6' } },

  { opening: "King's Gambit", field: 'white', quote: 'Nf3 stops …Qh4+', moves: 'e4 e5 f4 exf4', check: { kind: 'good', san: 'Nf3' } },
  { opening: "King's Gambit", field: 'black', quote: 'Accepting with …exf4 is objectively best', moves: 'e4 e5 f4', check: { kind: 'good', san: 'exf4' } },
  { opening: "King's Gambit", field: 'black', quote: 'Declining with …Bc5 or …d5 gives a level game', moves: 'e4 e5 f4 Bc5', check: { kind: 'eval', band: 'level' } },
  { opening: "King's Gambit", field: 'black', quote: 'Declining with …Bc5 or …d5 gives a level game', moves: 'e4 e5 f4 d5', check: { kind: 'eval', band: 'level' } },

  { opening: "King's Gambit Accepted", field: 'white', quote: 'Nf3 (or Bc4)', moves: 'e4 e5 f4 exf4', check: { kind: 'good', san: 'Nf3' } },
  { opening: "King's Gambit Accepted", field: 'white', quote: 'Nf3 (or Bc4)', moves: 'e4 e5 f4 exf4', check: { kind: 'good', san: 'Bc4' } },
  // White's 3rd move is not given; read as 3.Nf3.
  { opening: "King's Gambit Accepted", field: 'black', quote: 'hold f4 with …g5', moves: 'e4 e5 f4 exf4 Nf3', check: { kind: 'good', san: 'g5' } },
  // White's 3rd move is not given; read as 3.Nf3.
  { opening: "King's Gambit Accepted", field: 'black', quote: 'give it back with …d5 or …Nf6', moves: 'e4 e5 f4 exf4 Nf3', check: { kind: 'good', san: 'Nf6' } },
  // White's 3rd move is not given; read as 3.Nf3.
  { opening: "King's Gambit Accepted", field: 'black', quote: '3…d5 is a solid, simpler choice', moves: 'e4 e5 f4 exf4 Nf3', check: { kind: 'playable', san: 'd5' } },

  // This note has no position of its own; read as Black declining on move 2.
  { opening: "King's Gambit Declined", field: 'black', quote: 'Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6', moves: 'e4 e5 f4 Bc5', check: { kind: 'eval', band: 'level' } },
  { opening: "King's Gambit Declined", field: 'black', quote: 'Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6', moves: 'e4 e5 f4 d5', check: { kind: 'eval', band: 'level' } },
  { opening: "King's Gambit Declined", field: 'black', quote: 'Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6', moves: 'e4 e5 f4 Nf6', check: { kind: 'eval', band: 'level' } },
  { opening: "King's Gambit Declined", field: 'black', quote: 'Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6', moves: 'e4 e5 f4 Nc6', check: { kind: 'eval', band: 'level' } },

  { opening: "King's Gambit Declined: Classical Variation", field: 'idea', quote: '3.fxe5?? Qh4+', moves: 'e4 e5 f4 Bc5', check: { kind: 'blunder', san: 'fxe5' } },
  // White's reply to …Qh4+ is not given; 4.g3 is the move that lets …Qxe4+ fork the h1 rook.
  { opening: "King's Gambit Declined: Classical Variation", field: 'idea', quote: '3.fxe5?? Qh4+ and …Qxe4+ forks king and rook', moves: 'e4 e5 f4 Bc5 fxe5 Qh4+ g3 Qxe4+', check: { kind: 'eval', band: 'winning', side: 'black' } },
  { opening: "King's Gambit Declined: Classical Variation", field: 'white', quote: 'Play Nf3 first', moves: 'e4 e5 f4 Bc5', check: { kind: 'good', san: 'Nf3' } },

  { opening: "King's Gambit Declined: Falkbeer Countergambit", field: 'idea', quote: '3…exf4 is the modern choice', moves: 'e4 e5 f4 d5 exd5', check: { kind: 'good', san: 'exf4' } },
  { opening: "King's Gambit Declined: Falkbeer Countergambit", field: 'idea', quote: 'the old push …e4?!, to cramp White, is less accurate', moves: 'e4 e5 f4 d5 exd5', check: { kind: 'dubious', san: 'e4' } },
  { opening: "King's Gambit Declined: Falkbeer Countergambit", field: 'black', quote: '3…exf4 is simplest: develop with …Nf6', moves: 'e4 e5 f4 d5 exd5 exf4 Nf3', check: { kind: 'good', san: 'Nf6' } },
  { opening: "King's Gambit Declined: Falkbeer Countergambit", field: 'white', quote: 'After 3.exd5 e4, d3 breaks up the e4 wedge', moves: 'e4 e5 f4 d5 exd5 e4', check: { kind: 'good', san: 'd3' } },

  { opening: "King's Gambit Declined: Petrov's Defense", field: 'white', quote: '3.fxe5 Nxe4 4.Nf3 is the main line', moves: 'e4 e5 f4 Nf6', check: { kind: 'good', san: 'fxe5' } },
  { opening: "King's Gambit Declined: Petrov's Defense", field: 'white', quote: '3.fxe5 Nxe4 4.Nf3 is the main line', moves: 'e4 e5 f4 Nf6 fxe5 Nxe4', check: { kind: 'good', san: 'Nf3' } },

  { opening: "King's Gambit Declined: Queen's Knight Defense", field: 'black', quote: "If White plays an early fxe5, don't recapture", moves: 'e4 e5 f4 Nc6 fxe5', check: { kind: 'mistake', san: 'Nxe5' } },
  { opening: "King's Gambit Declined: Queen's Knight Defense", field: 'black', quote: '…Qh4+ and …Qxe4+ win the h1 rook', moves: 'e4 e5 f4 Nc6 fxe5', check: { kind: 'good', san: 'Qh4+' } },
  { opening: "King's Gambit Declined: Queen's Knight Defense", field: 'black', quote: '…Qh4+ and …Qxe4+ win the h1 rook', moves: 'e4 e5 f4 Nc6 fxe5 Qh4+ g3 Qxe4+', check: { kind: 'eval', band: 'winning', side: 'black' } },

  { opening: 'Scotch Game', field: 'white', quote: 'Against 4…Nf6, Nxc6 bxc6 e5 (the Mieses) is the main line', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6', check: { kind: 'good', san: 'Nxc6' } },
  { opening: 'Scotch Game', field: 'white', quote: 'Against 4…Nf6, Nxc6 bxc6 e5 (the Mieses) is the main line', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6', check: { kind: 'good', san: 'e5' } },
  { opening: 'Scotch Game', field: 'black', quote: 'Hit the d4 knight with …Bc5 or e4 with …Nf6', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4', check: { kind: 'good', san: 'Bc5' } },
  { opening: 'Scotch Game', field: 'black', quote: 'Hit the d4 knight with …Bc5 or e4 with …Nf6', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'Scotch Game: Göring Gambit', field: 'white', quote: 'After …dxc3 Nxc3', moves: 'e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3', check: { kind: 'good', san: 'Nxc3' } },
  { opening: 'Scotch Game: Göring Gambit', field: 'black', quote: '4…d5 is the safe way to decline', moves: 'e4 e5 Nf3 Nc6 d4 exd4 c3', check: { kind: 'good', san: 'd5' } },
  { opening: 'Scotch Game: Göring Gambit', field: 'black', quote: 'after exd5 Qxd5 cxd4, develop with …Bg4 or …Bb4+', moves: 'e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4', check: { kind: 'good', san: 'Bg4' } },
  { opening: 'Scotch Game: Göring Gambit', field: 'black', quote: 'after exd5 Qxd5 cxd4, develop with …Bg4 or …Bb4+', moves: 'e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4', check: { kind: 'good', san: 'Bb4+' } },
  { opening: 'Scotch Game: Göring Gambit', field: 'black', quote: 'Accepting is playable', moves: 'e4 e5 Nf3 Nc6 d4 exd4 c3', check: { kind: 'good', san: 'dxc3' } },

  { opening: 'Scotch Game: Scotch Gambit', field: 'white', quote: 'Against …Nf6, e5 or O-O', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6', check: { kind: 'good', san: 'e5' } },
  { opening: 'Scotch Game: Scotch Gambit', field: 'white', quote: 'Against …Nf6, e5 or O-O', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Scotch Game: Scotch Gambit', field: 'white', quote: 'Against …Bc5, c3 or O-O', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5', check: { kind: 'good', san: 'c3' } },
  { opening: 'Scotch Game: Scotch Gambit', field: 'white', quote: 'Against …Bc5, c3 or O-O', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Scotch Game: Scotch Gambit', field: 'black', quote: '…Nf6 is principled', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Scotch Game: Scotch Gambit', field: 'black', quote: 'meet e5 with …d5', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5', check: { kind: 'good', san: 'd5' } },
  { opening: 'Scotch Game: Scotch Gambit', field: 'black', quote: '…Bc5 is also fine', moves: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4', check: { kind: 'good', san: 'Bc5' } },

  { opening: 'Ponziani Opening', field: 'white', quote: 'Against …Nf6, d4 keeps the initiative', moves: 'e4 e5 Nf3 Nc6 c3 Nf6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Ponziani Opening', field: 'white', quote: 'against …d5, Qa4 pins the c6 knight', moves: 'e4 e5 Nf3 Nc6 c3 d5', check: { kind: 'good', san: 'Qa4' } },
  { opening: 'Ponziani Opening', field: 'black', quote: 'Strike at once: …Nf6 hits e4', moves: 'e4 e5 Nf3 Nc6 c3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Ponziani Opening', field: 'black', quote: '…d5 opens the centre before White is ready', moves: 'e4 e5 Nf3 Nc6 c3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Ponziani Opening: Neumann Gambit', field: 'black', quote: 'Take the pawn with …Nxe4', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 c3', check: { kind: 'good', san: 'Nxe4' } },
  // White's 5th move is not given; read as 5.d4, the white field's plan.
  { opening: 'Ponziani Opening: Neumann Gambit', field: 'black', quote: 'then …d5 keeps the knight in the centre and hits the c4 bishop', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 c3 Nxe4 d4', check: { kind: 'good', san: 'd5' } },

  { opening: 'Italian Game', field: 'black', quote: '3…Bc5 (Giuoco Piano) mirrors White; 3…Nf6 (Two Knights) counterattacks e4. Both are sound', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'good', san: 'Bc5' } },
  { opening: 'Italian Game', field: 'black', quote: '3…Bc5 (Giuoco Piano) mirrors White; 3…Nf6 (Two Knights) counterattacks e4. Both are sound', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'Italian Game: Anti-Fried Liver Defense', field: 'white', quote: 'Use the extra time: d4 to open the centre, or c3 and d4', moves: 'e4 e5 Nf3 Nc6 Bc4 h6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Italian Game: Anti-Fried Liver Defense', field: 'white', quote: 'Use the extra time: d4 to open the centre, or c3 and d4', moves: 'e4 e5 Nf3 Nc6 Bc4 h6', check: { kind: 'good', san: 'c3' } },

  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'idea', quote: '4.Nxe5? Qg5!', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4', check: { kind: 'mistake', san: 'Nxe5' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'idea', quote: '4.Nxe5? Qg5!', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5', check: { kind: 'good', san: 'Qg5' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'idea', quote: '5.Nxf7? Qxg2', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5 Qg5', check: { kind: 'mistake', san: 'Nxf7' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'idea', quote: '6.Rf1 Qxe4+ 7.Be2 Nf3 is mate', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5 Qg5 Nxf7 Qxg2 Rf1 Qxe4+', check: { kind: 'eval', band: 'winning', side: 'black' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'idea', quote: 'Objectively it just wastes time', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'dubious', san: 'Nd4' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'white', quote: "Don't take e5", moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4', check: { kind: 'dubious', san: 'Nxe5' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'white', quote: '4.Nxd4 exd4 and O-O leaves you clearly better', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4', check: { kind: 'good', san: 'Nxd4' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'white', quote: '4.c3 is weaker', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4', check: { kind: 'dubious', san: 'c3' } },
  { opening: 'Italian Game: Blackburne-Kostić Gambit', field: 'white', quote: '4.Nxd4 exd4 and O-O leaves you clearly better', moves: 'e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4 exd4 O-O', check: { kind: 'eval', band: 'clear', side: 'white' } },

  // Black's 4th move is not given; read as 4…Nf6, the black field's choice.
  { opening: 'Italian Game: Classical Variation', field: 'white', quote: 'Play d4', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Italian Game: Classical Variation', field: 'white', quote: 'after …exd4, cxd4 with a full centre', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4', check: { kind: 'good', san: 'cxd4' } },
  { opening: 'Italian Game: Classical Variation', field: 'black', quote: 'Hit back with …Nf6 against e4', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Italian Game: Classical Variation', field: 'black', quote: 'If d4 exd4 cxd4, …Bb4+ moves the bishop with check', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4', check: { kind: 'good', san: 'Bb4+' } },

  { opening: 'Italian Game: Evans Gambit', field: 'white', quote: 'After …Bxb4, play c3 and d4', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4', check: { kind: 'good', san: 'c3' } },
  // Black's 5th move is not given; read as 5…Ba5, the main line.
  { opening: 'Italian Game: Evans Gambit', field: 'white', quote: 'After …Bxb4, play c3 and d4', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Italian Game: Evans Gambit', field: 'black', quote: 'Accept and give a pawn back', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4', check: { kind: 'good', san: 'Bxb4' } },
  { opening: 'Italian Game: Evans Gambit', field: 'black', quote: 'decline with …Bb6', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4', check: { kind: 'playable', san: 'Bb6' } },

  { opening: 'Italian Game: Giuoco Pianissimo, Canal Variation', field: 'black', quote: '…h6 asks the bishop', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Bc5 d3 d6 Bg5', check: { kind: 'good', san: 'h6' } },
  // Before castling, Black can still go queenside, and 7…g5 is Stockfish's choice.
  { opening: 'Italian Game: Giuoco Pianissimo, Canal Variation', field: 'black', quote: "Don't play …g5 unless you can castle queenside", moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 Bg5 h6 Bh4', check: { kind: 'good', san: 'g5' } },
  // Once Black has castled kingside, …g5 runs into the Nxg5 sacrifice.
  { opening: 'Italian Game: Giuoco Pianissimo, Canal Variation', field: 'black', quote: "Don't play …g5 unless you can castle queenside", moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 Bg5 h6 Bh4 O-O Qd2', check: { kind: 'mistake', san: 'g5' } },

  { opening: 'Italian Game: Hungarian Defense', field: 'white', quote: 'Take the centre with d4', moves: 'e4 e5 Nf3 Nc6 Bc4 Be7', check: { kind: 'good', san: 'd4' } },
  // The recapture is not named; read as 5.Nxd4.
  { opening: 'Italian Game: Hungarian Defense', field: 'white', quote: 'against …exd4 recapture and develop', moves: 'e4 e5 Nf3 Nc6 Bc4 Be7 d4 exd4', check: { kind: 'good', san: 'Nxd4' } },
  { opening: 'Italian Game: Hungarian Defense', field: 'white', quote: 'against …d6, d5 gains space', moves: 'e4 e5 Nf3 Nc6 Bc4 Be7 d4 d6', check: { kind: 'good', san: 'd5' } },

  { opening: 'Italian Game: Paris Defense', field: 'white', quote: 'Take the centre with c3 and d4 (or d4 at once)', moves: 'e4 e5 Nf3 Nc6 Bc4 d6', check: { kind: 'good', san: 'c3' } },
  { opening: 'Italian Game: Paris Defense', field: 'white', quote: 'Take the centre with c3 and d4 (or d4 at once)', moves: 'e4 e5 Nf3 Nc6 Bc4 d6', check: { kind: 'good', san: 'd4' } },
  // No moment given; read as 4.c3 Nf6, the first chance for …Nf6 in the white field's plan.
  { opening: 'Italian Game: Paris Defense', field: 'white', quote: 'Once Black plays …Nf6, Ng5 against f7 becomes a real threat', moves: 'e4 e5 Nf3 Nc6 Bc4 d6 c3 Nf6', check: { kind: 'good', san: 'Ng5' } },

  { opening: 'Italian Game: Rosentreter Gambit', field: 'white', quote: 'After …exd4, play c3 or O-O', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 d4 exd4', check: { kind: 'good', san: 'c3' } },
  { opening: 'Italian Game: Rosentreter Gambit', field: 'white', quote: 'After …exd4, play c3 or O-O', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 d4 exd4', check: { kind: 'good', san: 'O-O' } },
  // "Either capture" names two of the three captures (…exd4, …Bxd4, …Nxd4); read as …exd4 and …Bxd4.
  { opening: 'Italian Game: Rosentreter Gambit', field: 'black', quote: '…Nxd4, …exd4 and …Bxd4 are all playable', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 d4', check: { kind: 'playable', san: 'Nxd4' } },
  { opening: 'Italian Game: Rosentreter Gambit', field: 'black', quote: '…Nxd4, …exd4 and …Bxd4 are all playable', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 d4', check: { kind: 'playable', san: 'exd4' } },
  { opening: 'Italian Game: Rosentreter Gambit', field: 'black', quote: '…Nxd4, …exd4 and …Bxd4 are all playable', moves: 'e4 e5 Nf3 Nc6 Bc4 Bc5 d4', check: { kind: 'playable', san: 'Bxd4' } },

  { opening: 'Italian Game: Rousseau Gambit', field: 'idea', quote: '3…f5 is a dubious counter-gambit', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'dubious', san: 'f5' } },
  { opening: 'Italian Game: Rousseau Gambit', field: 'white', quote: '4.d4 hits e5', moves: 'e4 e5 Nf3 Nc6 Bc4 f5', check: { kind: 'good', san: 'd4' } },
  // White's 4th move is not given; read as 4.d4, the white field's move.
  { opening: 'Italian Game: Rousseau Gambit', field: 'black', quote: 'Take with …exd4', moves: 'e4 e5 Nf3 Nc6 Bc4 f5 d4', check: { kind: 'good', san: 'exd4' } },
  { opening: 'Italian Game: Rousseau Gambit', field: 'black', quote: '…fxe4 is also playable', moves: 'e4 e5 Nf3 Nc6 Bc4 f5 d4', check: { kind: 'playable', san: 'fxe4' } },
  { opening: 'Italian Game: Rousseau Gambit', field: 'black', quote: 'It is objectively bad', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'mistake', san: 'f5' } },
  { opening: 'Italian Game: Rousseau Gambit', field: 'black', quote: '3…Nf6 or 3…Bc5 are sound', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Italian Game: Rousseau Gambit', field: 'black', quote: '3…Nf6 or 3…Bc5 are sound', moves: 'e4 e5 Nf3 Nc6 Bc4', check: { kind: 'good', san: 'Bc5' } },

  { opening: 'Italian Game: Two Knights Defense', field: 'black', quote: 'Against Ng5, …d5 and …Na5', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5', check: { kind: 'good', san: 'd5' } },
  { opening: 'Italian Game: Two Knights Defense', field: 'black', quote: 'Against Ng5, …d5 and …Na5', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5', check: { kind: 'good', san: 'Na5' } },
  { opening: 'Italian Game: Two Knights Defense', field: 'black', quote: 'Against d4, take', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4', check: { kind: 'good', san: 'exd4' } },

  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'idea', quote: 'Black must block with …d5', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5', check: { kind: 'good', san: 'd5' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'white', quote: 'if …Na5 play Bb5+', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5', check: { kind: 'good', san: 'Bb5+' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'white', quote: 'after …c6 dxc6 bxc6, Be2', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6', check: { kind: 'good', san: 'Be2' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'white', quote: 'Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5', check: { kind: 'mistake', san: 'Nxd5' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'white', quote: 'Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5', check: { kind: 'good', san: 'Nxf7' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'white', quote: 'Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'black', quote: '4…d5 5.exd5 Na5! hits the bishop', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5', check: { kind: 'good', san: 'Na5' } },
  { opening: 'Italian Game: Two Knights Defense, Knight Attack', field: 'black', quote: 'Never 5…Nxd5?', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5', check: { kind: 'mistake', san: 'Nxd5' } },

  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'white', quote: '5.e5 kicks the knight, or 5.O-O gambits', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4', check: { kind: 'good', san: 'e5' } },
  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'white', quote: '5.e5 kicks the knight, or 5.O-O gambits', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'white', quote: '5.O-O gambits and Re1 hits e4 along the e-file', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4', check: { kind: 'good', san: 'Re1' } },
  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'black', quote: 'Take 4…exd4.', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4', check: { kind: 'good', san: 'exd4' } },
  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'black', quote: 'Meet 5.e5 with 5…d5', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 e5', check: { kind: 'good', san: 'd5' } },
  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'black', quote: '5.O-O with 5…Nxe4 6.Re1 d5', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O', check: { kind: 'good', san: 'Nxe4' } },
  { opening: 'Italian Game: Two Knights Defense, Open Variation', field: 'black', quote: '5.O-O with 5…Nxe4 6.Re1 d5', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1', check: { kind: 'good', san: 'd5' } },

  { opening: 'Ruy Lopez', field: 'black', quote: '3…a6 asks the bishop, 3…Nf6 counterattacks e4', moves: 'e4 e5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'a6' } },
  { opening: 'Ruy Lopez', field: 'black', quote: '3…a6 asks the bishop, 3…Nf6 counterattacks e4', moves: 'e4 e5 Nf3 Nc6 Bb5', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'Ruy Lopez: Berlin Defense', field: 'white', quote: '4.O-O Nxe4 5.d4', moves: 'e4 e5 Nf3 Nc6 Bb5 Nf6', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Ruy Lopez: Berlin Defense', field: 'white', quote: '4.O-O Nxe4 5.d4', moves: 'e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4', check: { kind: 'good', san: 'd4' } },
  { opening: 'Ruy Lopez: Berlin Defense', field: 'white', quote: '4.d3 keeps queens on', moves: 'e4 e5 Nf3 Nc6 Bb5 Nf6', check: { kind: 'good', san: 'd3' } },
  { opening: 'Ruy Lopez: Berlin Defense', field: 'black', quote: '4…Nxe4 is the main line', moves: 'e4 e5 Nf3 Nc6 Bb5 Nf6 O-O', check: { kind: 'good', san: 'Nxe4' } },
  { opening: 'Ruy Lopez: Berlin Defense', field: 'black', quote: 'Against 4.d3, …Bc5 and …d6 are solid', moves: 'e4 e5 Nf3 Nc6 Bb5 Nf6 d3', check: { kind: 'good', san: 'Bc5' } },

  { opening: 'Ruy Lopez: Bird Variation', field: 'white', quote: '4.Nxd4 exd4 5.O-O', moves: 'e4 e5 Nf3 Nc6 Bb5 Nd4', check: { kind: 'good', san: 'Nxd4' } },
  { opening: 'Ruy Lopez: Bird Variation', field: 'white', quote: '4.Nxd4 exd4 5.O-O', moves: 'e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4', check: { kind: 'good', san: 'O-O' } },
  // No moment given; read as Black's 5th move after the white field's 5.O-O.
  { opening: 'Ruy Lopez: Bird Variation', field: 'black', quote: '…c6 kicks the bishop', moves: 'e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 O-O', check: { kind: 'good', san: 'c6' } },

  { opening: 'Ruy Lopez: Classical Variation', field: 'white', quote: 'c3 and d4 gain time on the c5 bishop; you can castle first', moves: 'e4 e5 Nf3 Nc6 Bb5 Bc5', check: { kind: 'good', san: 'c3' } },
  { opening: 'Ruy Lopez: Classical Variation', field: 'white', quote: 'c3 and d4 gain time on the c5 bishop; you can castle first', moves: 'e4 e5 Nf3 Nc6 Bb5 Bc5', check: { kind: 'good', san: 'O-O' } },
  // Read after 4.O-O, the usual moment for …Nd4.
  { opening: 'Ruy Lopez: Classical Variation', field: 'white', quote: 'If Black plays …Nd4, Nxd4 Bxd4 and c3 kick the bishop', moves: 'e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nd4', check: { kind: 'good', san: 'Nxd4' } },
  { opening: 'Ruy Lopez: Classical Variation', field: 'white', quote: 'If Black plays …Nd4, Nxd4 Bxd4 and c3 kick the bishop', moves: 'e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nd4 Nxd4 Bxd4', check: { kind: 'good', san: 'c3' } },

  { opening: 'Ruy Lopez: Cozio Defense', field: 'white', quote: 'c3 and d4, or O-O and d4, or Nc3 and d4', moves: 'e4 e5 Nf3 Nc6 Bb5 Nge7', check: { kind: 'playable', san: 'c3' } },
  { opening: 'Ruy Lopez: Cozio Defense', field: 'white', quote: 'c3 and d4, or O-O and d4, or Nc3 and d4', moves: 'e4 e5 Nf3 Nc6 Bb5 Nge7', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Ruy Lopez: Cozio Defense', field: 'white', quote: 'c3 and d4, or O-O and d4, or Nc3 and d4', moves: 'e4 e5 Nf3 Nc6 Bb5 Nge7', check: { kind: 'good', san: 'Nc3' } },

  { opening: 'Ruy Lopez: Morphy Defense', field: 'white', quote: 'Ba4, O-O, Re1, c3, h3 and d4: the Closed Spanish', moves: 'e4 e5 Nf3 Nc6 Bb5 a6', check: { kind: 'good', san: 'Ba4' } },
  { opening: 'Ruy Lopez: Morphy Defense', field: 'white', quote: '4.Bxc6 (the Exchange) gives a simpler endgame-style game', moves: 'e4 e5 Nf3 Nc6 Bb5 a6', check: { kind: 'good', san: 'Bxc6' } },
  { opening: 'Ruy Lopez: Morphy Defense', field: 'black', quote: '…Nf6, …Be7, …b5, …d6 and …O-O', moves: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'Ruy Lopez: Morphy Defense, Tarrasch Variation', field: 'black', quote: '…b5 (Bb3) gains space', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Ba4', check: { kind: 'good', san: 'b5' } },
  { opening: 'Ruy Lopez: Morphy Defense, Tarrasch Variation', field: 'black', quote: 'then …Bc5 or …Be7', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Ba4 b5 Bb3', check: { kind: 'good', san: 'Bc5' } },
  { opening: 'Ruy Lopez: Morphy Defense, Tarrasch Variation', field: 'black', quote: 'then …Bc5 or …Be7', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Ba4 b5 Bb3', check: { kind: 'good', san: 'Be7' } },

  { opening: 'Ruy Lopez: Schliemann Defense', field: 'white', quote: '4.Nc3 is the main answer', moves: 'e4 e5 Nf3 Nc6 Bb5 f5', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Ruy Lopez: Schliemann Defense', field: 'white', quote: 'meeting …fxe4 with Nxe4', moves: 'e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4', check: { kind: 'good', san: 'Nxe4' } },
  { opening: 'Ruy Lopez: Schliemann Defense', field: 'white', quote: '4.d3 gives a quieter game', moves: 'e4 e5 Nf3 Nc6 Bb5 f5', check: { kind: 'good', san: 'd3' } },
  { opening: 'Ruy Lopez: Schliemann Defense', field: 'black', quote: '…fxe4, …Nf6 and …d5 to grab the centre', moves: 'e4 e5 Nf3 Nc6 Bb5 f5 Nc3', check: { kind: 'good', san: 'fxe4' } },
  // Read against the white field's 4.Nc3 fxe4 5.Nxe4.
  { opening: 'Ruy Lopez: Schliemann Defense', field: 'black', quote: '…fxe4, …Nf6 and …d5 to grab the centre', moves: 'e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4', check: { kind: 'good', san: 'Nf6' } },

  { opening: 'Ruy Lopez: Steinitz Defense', field: 'white', quote: 'd4 at once', moves: 'e4 e5 Nf3 Nc6 Bb5 d6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Ruy Lopez: Steinitz Defense', field: 'black', quote: '…Bd7 to unpin', moves: 'e4 e5 Nf3 Nc6 Bb5 d6 d4', check: { kind: 'good', san: 'Bd7' } },

  { opening: 'Ruy Lopez: Steinitz Defense, Nimzowitsch Attack', field: 'white', quote: 'After …Bxc6, Qd3 backs up d4 and e4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 d6 Bb5 Bd7 Bxc6 Bxc6', check: { kind: 'good', san: 'Qd3' } },

  { opening: 'Three Knights Opening', field: 'white', quote: 'Against …Bc5, the fork trick Nxe5 and d4', moves: 'e4 e5 Nf3 Nc6 Nc3 Bc5', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Three Knights Opening', field: 'white', quote: 'Against …Bc5, the fork trick Nxe5 and d4', moves: 'e4 e5 Nf3 Nc6 Nc3 Bc5 Nxe5 Nxe5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Three Knights Opening', field: 'black', quote: '…Nf6 is simplest', moves: 'e4 e5 Nf3 Nc6 Nc3', check: { kind: 'good', san: 'Nf6' } },
  { opening: 'Three Knights Opening', field: 'black', quote: '…Bb4 avoids it and is playable', moves: 'e4 e5 Nf3 Nc6 Nc3', check: { kind: 'playable', san: 'Bb4' } },
  { opening: 'Three Knights Opening', field: 'black', quote: '…g6 is dubious', moves: 'e4 e5 Nf3 Nc6 Nc3', check: { kind: 'dubious', san: 'g6' } },
  { opening: 'Three Knights Opening', field: 'black', quote: "Don't play …Bc5 without …d6: the fork trick works", moves: 'e4 e5 Nf3 Nc6 Nc3', check: { kind: 'dubious', san: 'Bc5' } },

  { opening: 'Four Knights Game', field: 'black', quote: '…Nd4 against Bb5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5', check: { kind: 'good', san: 'Nd4' } },
  { opening: 'Four Knights Game', field: 'black', quote: '…exd4 against d4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4', check: { kind: 'good', san: 'exd4' } },
  { opening: 'Four Knights Game', field: 'black', quote: 'the …Nxe4 fork trick against Bc4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4', check: { kind: 'good', san: 'Nxe4' } },
  // "Slow moves" read as the sidelines the idea names: 4.g3 and 4.a3.
  { opening: 'Four Knights Game', field: 'black', quote: '…d5 against slow moves', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 g3', check: { kind: 'good', san: 'd5' } },
  { opening: 'Four Knights Game', field: 'black', quote: '…d5 against slow moves', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 a3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Four Knights Game: Spanish Variation', field: 'black', quote: '4…Nd4 (Rubinstein) is the most testing', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5', check: { kind: 'good', san: 'Nd4' } },
  { opening: 'Four Knights Game: Spanish Variation', field: 'black', quote: "Don't try 4…Nxe4", moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5', check: { kind: 'dubious', san: 'Nxe4' } },
  // The moment is not named; read as the Double Spanish, 4…Bb4 5.O-O O-O 6.d3 Bxc3.
  { opening: 'Four Knights Game: Spanish Variation', field: 'white', quote: 'Doubled c-pawns after …Bxc3 bxc3 are fine', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3', check: { kind: 'good', san: 'bxc3' } },
  { opening: 'Four Knights Game: Spanish Variation', field: 'white', quote: 'Doubled c-pawns after …Bxc3 bxc3 are fine', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3', check: { kind: 'eval', band: 'level' } },

  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'idea', quote: 'it allows the fork trick: Nxe5, and d4 forks bishop and knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'idea', quote: 'it allows the fork trick: Nxe5, and d4 forks bishop and knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 Nxe5 Nxe5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'Castle, then Nxe5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5', check: { kind: 'good', san: 'O-O' } },
  // Read with Black castling in between, the main line.
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'Castle, then Nxe5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'after …Nxe5 d4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5', check: { kind: 'good', san: 'd4' } },
  // Black's replies are not named; read as 7…Bd6 8.f4 Nc6 9.e5 Be7, the main line.
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'chase with f4, e5 and d5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6', check: { kind: 'good', san: 'f4' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'chase with f4, e5 and d5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6', check: { kind: 'good', san: 'e5' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'chase with f4, e5 and d5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Be7', check: { kind: 'good', san: 'd5' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'though best play stays level', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Be7 d5', check: { kind: 'eval', band: 'level' } },
  // Read as the black field's 5…d6.
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'white', quote: 'If Black plays …d6, hit the centre with d4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O d6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'black', quote: 'play 5…d6 to stop it', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O', check: { kind: 'playable', san: 'd6' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'black', quote: 'though d4 then gains time', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O d6', check: { kind: 'good', san: 'd4' } },
  { opening: 'Four Knights Game: Spanish Variation, Classical Variation', field: 'black', quote: '6…Nd4 (the Marshall Variation) gives a pawn instead', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5', check: { kind: 'playable', san: 'Nd4' } },

  { opening: 'Four Knights Game: Spanish Variation, Bardeleben Variation', field: 'white', quote: 'Win the f6 knight back', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Bb4', check: { kind: 'good', san: 'exf6' } },
  { opening: 'Four Knights Game: Spanish Variation, Bardeleben Variation', field: 'black', quote: 'After exf6 Qxf6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Bb4 exf6', check: { kind: 'good', san: 'Qxf6' } },

  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation', field: 'white', quote: 'Drop the bishop to c4, not a4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4', check: { kind: 'good', san: 'Bc4' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation', field: 'white', quote: 'Drop the bishop to c4, not a4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4', check: { kind: 'mistake', san: 'Ba4' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation', field: 'white', quote: 'against …d6 and …Bg4, Be2 breaks the pin', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4 Bc4 d6 Nf3 Bg4', check: { kind: 'good', san: 'Be2' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation', field: 'white', quote: 'Bring the e5 knight back to f3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4 Bc4 d6', check: { kind: 'good', san: 'Nf3' } },
  // No moment given; read as Black's reply to the white field's 7.Ba4.
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation', field: 'black', quote: '…d6 to open lines', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4 Ba4', check: { kind: 'good', san: 'd6' } },

  // White's 5th move is not given; read as 5.O-O, first in the white field's plan.
  { opening: 'Four Knights Game: Spanish Variation, Double Spanish', field: 'white', quote: 'Against an early …d6, Nd5! hits the b4 bishop', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O d6', check: { kind: 'good', san: 'Nd5' } },
  // White's 5th move is not given; read as 5.O-O.
  { opening: 'Four Knights Game: Spanish Variation, Double Spanish', field: 'black', quote: '5…d6? 6.Nd5! wins material', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O', check: { kind: 'mistake', san: 'd6' } },
  { opening: 'Four Knights Game: Spanish Variation, Double Spanish', field: 'black', quote: '5…d6? 6.Nd5! wins material', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O d6 Nd5', check: { kind: 'eval', band: 'winning', side: 'white' } },

  { opening: 'Four Knights Game: Spanish Variation, Nimzowitsch Variation', field: 'white', quote: 'After …dxc6, d3 and Bg5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Bxc6 dxc6', check: { kind: 'good', san: 'd3' } },
  { opening: 'Four Knights Game: Spanish Variation, Nimzowitsch Variation', field: 'black', quote: 'Recapture …dxc6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Bxc6', check: { kind: 'good', san: 'dxc6' } },

  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation', field: 'white', quote: 'Bg5 pins', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6', check: { kind: 'good', san: 'Bg5' } },
  // Black's 7th move is not named; read as 7…Be6, which the black note warns lets Nd5 in.
  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation', field: 'white', quote: 'Nd5 hits the pinned knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Be6', check: { kind: 'good', san: 'Nd5' } },
  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation', field: 'white', quote: 'bxc3 gives you the bishop pair and d4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3', check: { kind: 'good', san: 'bxc3' } },
  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation', field: 'black', quote: '…Bxc3 and …Qe7 (the Metger Unpin), or …Ne7 to reroute toward g6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5', check: { kind: 'good', san: 'Bxc3' } },
  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation', field: 'black', quote: '…Bxc3 and …Qe7 (the Metger Unpin), or …Ne7 to reroute toward g6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5', check: { kind: 'good', san: 'Ne7' } },
  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation', field: 'black', quote: 'Avoid …Be6?!, which lets Nd5 add to the pressure', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5', check: { kind: 'dubious', san: 'Be6' } },

  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation, Metger Unpin', field: 'white', quote: 'Re1, d4, and Bc1 when …Ne6 hits g5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7', check: { kind: 'good', san: 'Re1' } },
  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation, Metger Unpin', field: 'white', quote: 'Re1, d4, and Bc1 when …Ne6 hits g5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Ne6', check: { kind: 'good', san: 'Bc1' } },

  { opening: 'Four Knights Game: Spanish Variation, Symmetrical Variation, Tarrasch Variation', field: 'white', quote: 'Nd5 hits the b4 bishop and the pinned f6 knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Be6', check: { kind: 'good', san: 'Nd5' } },

  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'white', quote: 'After …dxc6 Nxe5 Nxe4 Nxe4 Qd4, castle', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Nxe4 Nxe4 Qd4', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'white', quote: 'Against 6…Qd4, Nf3 keeps the extra pawn', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Qd4', check: { kind: 'good', san: 'Nf3' } },
  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'black', quote: 'Recapture …dxc6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6', check: { kind: 'good', san: 'dxc6' } },
  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'black', quote: 'after Nxe5 play …Nxe4!', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5', check: { kind: 'good', san: 'Nxe4' } },
  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'black', quote: 'then …Qd4 to win the material back', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Nxe4 Nxe4', check: { kind: 'good', san: 'Qd4' } },
  // "Leave you a pawn down" read as worse than the recommended move.
  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'black', quote: '…bxc6 or 6…Qd4 leave you a pawn down', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6', check: { kind: 'dubious', san: 'bxc6' } },
  { opening: 'Four Knights Game: Spanish Variation, Ranken Variation', field: 'black', quote: '…bxc6 or 6…Qd4 leave you a pawn down', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5', check: { kind: 'dubious', san: 'Qd4' } },

  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: 'Avoid 5.Nxe5?! Qe7!, which gives Black the better game', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxe5 Qe7', check: { kind: 'eval', band: 'slight', side: 'black' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: 'Avoid 5.Nxe5?! Qe7!', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4', check: { kind: 'dubious', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'idea', quote: 'The most testing reply to 4.Bb5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5', check: { kind: 'good', san: 'Nd4' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: '5.Nxd4 is safe', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4', check: { kind: 'good', san: 'Nxd4' } },
  // The ending is the forcing line from the Rubinstein Accepted note, through the queen trade.
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: '5.Nxd4 is safe and leads to a level ending', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+ Kxe2', check: { kind: 'eval', band: 'level' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: '5.Ba4, 5.Bc4 and 5.O-O are alternatives', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4', check: { kind: 'playable', san: 'Ba4' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: '5.Ba4, 5.Bc4 and 5.O-O are alternatives', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4', check: { kind: 'playable', san: 'Bc4' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'white', quote: '5.Ba4, 5.Bc4 and 5.O-O are alternatives', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4', check: { kind: 'playable', san: 'O-O' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'black', quote: 'Against 5.Nxe5?! play …Qe7', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxe5', check: { kind: 'good', san: 'Qe7' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'black', quote: 'Against 5.Ba4, …Bc5 and castle', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4', check: { kind: 'good', san: 'Bc5' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation', field: 'black', quote: 'against 5.O-O, …Nxb5 for the bishop pair', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O', check: { kind: 'good', san: 'Nxb5' } },

  // The line stops at 9.Qe2; "queenless" read as after the queen trade both fields recommend (9…Qxe2+ 10.Kxe2).
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation Accepted', field: 'idea', quote: 'a burst of captures leads to a level, queenless position', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+ Kxe2', check: { kind: 'eval', band: 'level' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation Accepted', field: 'white', quote: 'Trade queens and recapture with the king', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+', check: { kind: 'good', san: 'Kxe2' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation Accepted', field: 'black', quote: 'Trade queens and play …c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2', check: { kind: 'good', san: 'Qxe2+' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation Accepted', field: 'black', quote: "Don't play 7…cxd2+?", moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6', check: { kind: 'mistake', san: 'cxd2+' } },

  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation', field: 'white', quote: 'After …Nxb5 Nxb5 c6, Nc3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O Nxb5 Nxb5 c6', check: { kind: 'good', san: 'Nc3' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation', field: 'black', quote: 'Take the bishop with …Nxb5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O', check: { kind: 'good', san: 'Nxb5' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation', field: 'black', quote: 'kick the knight with …c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O Nxb5 Nxb5', check: { kind: 'good', san: 'c6' } },

  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit', field: 'white', quote: 'Keep the pawn with Nd3 (guarding f2)', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O', check: { kind: 'good', san: 'Nd3' } },
  // Black's 7th move is not given; read as the black field's 7…Bb6.
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit', field: 'white', quote: 'e5 to kick the f6 knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O Nd3 Bb6', check: { kind: 'good', san: 'e5' } },
  { opening: 'Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit', field: 'black', quote: '…Bb6, then …d6 to open lines', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O Nd3', check: { kind: 'good', san: 'Bb6' } },

  { opening: 'Four Knights Game: Scotch Variation', field: 'white', quote: 'After …exd4 Nxd4, swap on c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4', check: { kind: 'good', san: 'Nxd4' } },
  // Black's 5th move is not given; read as the black field's 5…Bb4.
  { opening: 'Four Knights Game: Scotch Variation', field: 'white', quote: 'After …exd4 Nxd4, swap on c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4', check: { kind: 'good', san: 'Nxc6' } },
  { opening: 'Four Knights Game: Scotch Variation', field: 'white', quote: 'then Bd3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6', check: { kind: 'good', san: 'Bd3' } },
  { opening: 'Four Knights Game: Scotch Variation', field: 'black', quote: '4…exd4 is normal', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4', check: { kind: 'good', san: 'exd4' } },
  { opening: 'Four Knights Game: Scotch Variation', field: 'black', quote: 'pin with …Bb4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4', check: { kind: 'good', san: 'Bb4' } },
  { opening: 'Four Knights Game: Scotch Variation', field: 'black', quote: 'recapture …bxc6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6', check: { kind: 'good', san: 'bxc6' } },
  { opening: 'Four Knights Game: Scotch Variation', field: 'black', quote: 'strike with …d5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3', check: { kind: 'good', san: 'd5' } },

  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'white', quote: '5.Nxd4, then Nxc6 against …Bb4 or …Bc5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4', check: { kind: 'good', san: 'Nxd4' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'white', quote: '5.Nxd4, then Nxc6 against …Bb4 or …Bc5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4', check: { kind: 'good', san: 'Nxc6' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'white', quote: '5.Nxd4, then Nxc6 against …Bb4 or …Bc5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bc5', check: { kind: 'good', san: 'Nxc6' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'white', quote: 'If Black swaps on d4, Qxd4 is strong', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4', check: { kind: 'good', san: 'Qxd4' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: '5…Bb4 is the main line', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4', check: { kind: 'good', san: 'Bb4' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: '…bxc6 and …d5 give you a solid c6–d5 centre', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6', check: { kind: 'good', san: 'bxc6' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: 'you must play …d6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4', check: { kind: 'good', san: 'd6' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: '5…Nxd4?', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4', check: { kind: 'mistake', san: 'Nxd4' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: '6.Qxd4 leaves White clearly better', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4', check: { kind: 'eval', band: 'clear', side: 'white' } },
  // The slow move is not named; read as 6…Be7, the natural developing move.
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: 'or e5 is crushing', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4 Be7', check: { kind: 'good', san: 'e5' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted', field: 'black', quote: 'or e5 is crushing', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4 Be7 e5', check: { kind: 'eval', band: 'winning', side: 'white' } },

  { opening: 'Four Knights Game: Scotch Variation Accepted, Main Line', field: 'white', quote: 'Castle, then Bg5 and Qf3 after …cxd5 and …c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O O-O cxd5', check: { kind: 'good', san: 'Bg5' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted, Main Line', field: 'white', quote: 'Castle, then Bg5 and Qf3 after …cxd5 and …c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O O-O cxd5 Bg5 c6', check: { kind: 'good', san: 'Qf3' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted, Main Line', field: 'white', quote: 'Castle, then Bg5 and Qf3 after …cxd5 and …c6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O', check: { kind: 'good', san: 'O-O' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted, Main Line', field: 'white', quote: '9.dxc6 is greedy: after …Re8+', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O dxc6', check: { kind: 'good', san: 'Re8+' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted, Main Line', field: 'white', quote: '9.dxc6 is greedy: after …Re8+ your king is stuck in the centre and Black is fine', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O dxc6', check: { kind: 'eval', band: 'level' } },
  { opening: 'Four Knights Game: Scotch Variation Accepted, Main Line', field: 'black', quote: 'Recapture …cxd5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O O-O', check: { kind: 'good', san: 'cxd5' } },

  { opening: 'Four Knights Game: Scotch Variation, Belgrade Gambit', field: 'white', quote: 'Against …Nxe4, Qe2 leads to sharp tactics', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5 Nxe4', check: { kind: 'good', san: 'Qe2' } },
  { opening: 'Four Knights Game: Scotch Variation, Belgrade Gambit', field: 'black', quote: 'Stay calm: …Be7 and castle', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5', check: { kind: 'good', san: 'Be7' } },
  { opening: 'Four Knights Game: Scotch Variation, Belgrade Gambit', field: 'black', quote: '5…Nxe4 is playable but wild', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5', check: { kind: 'good', san: 'Nxe4' } },

  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'Take with 5.Nxe5.', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'If …Nxe4? Qg4 hits g7 and the knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5', check: { kind: 'mistake', san: 'Nxe4' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'If …Nxe4? Qg4 hits g7 and the knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Nxe4', check: { kind: 'good', san: 'Qg4' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'if …Nxe5? dxe5 and Qg4 again', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5', check: { kind: 'mistake', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'if …Nxe5? dxe5 and Qg4 again', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Nxe5', check: { kind: 'good', san: 'dxe5' } },
  // Black's 6th move is not given; read as 6…Nxe4, the knight's natural square.
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'if …Nxe5? dxe5 and Qg4 again', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Nxe5 dxe5 Nxe4', check: { kind: 'good', san: 'Qg4' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'white', quote: 'Against …Qe7, Qd3 holds e4', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7', check: { kind: 'good', san: 'Qd3' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'black', quote: '5…Qe7 (the Leonhardt) is best', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5', check: { kind: 'good', san: 'Qe7' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'black', quote: '5…Nxe4? and 5…Nxe5? both run into Qg4 tactics', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5', check: { kind: 'mistake', san: 'Nxe4' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit', field: 'black', quote: '5…Nxe4? and 5…Nxe5? both run into Qg4 tactics', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5', check: { kind: 'mistake', san: 'Nxe5' } },

  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense', field: 'white', quote: '6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7', check: { kind: 'good', san: 'Qd3' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense', field: 'white', quote: '6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3 Bxc3+', check: { kind: 'good', san: 'Qxc3' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense', field: 'white', quote: '6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3 Bxc3+ Qxc3 Nxe4', check: { kind: 'good', san: 'Qe3' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense', field: 'black', quote: '…Bxc3+ and …Nxe4 regain the pawn', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3', check: { kind: 'good', san: 'Bxc3+' } },
  { opening: 'Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense', field: 'black', quote: '…Bxc3+ and …Nxe4 regain the pawn', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3 Bxc3+ Qxc3', check: { kind: 'good', san: 'Nxe4' } },

  { opening: 'Four Knights Game: Italian Variation', field: 'white', quote: 'Against the fork trick play 6.Bd3', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5', check: { kind: 'good', san: 'Bd3' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'white', quote: 'never 6.Bxd5?', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5', check: { kind: 'mistake', san: 'Bxd5' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'white', quote: 'Against …Bc5, …Bb4 or …Be7, the quiet setup: d3', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Bc5', check: { kind: 'good', san: 'd3' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'white', quote: 'Against …Bc5, …Bb4 or …Be7, the quiet setup: d3', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Bb4', check: { kind: 'playable', san: 'd3' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'white', quote: 'Against …Bc5, …Bb4 or …Be7, the quiet setup: d3', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Be7', check: { kind: 'good', san: 'd3' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'black', quote: '4…Nxe4! 5.Nxe4 d5 forks bishop and knight', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3', check: { kind: 'good', san: 'Nxe4' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'black', quote: '4…Nxe4! 5.Nxe4 d5 forks bishop and knight', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4', check: { kind: 'good', san: 'd5' } },
  // Read after the white field's 6.Bd3 dxe4 7.Bxe4, where Black has the piece back.
  { opening: 'Four Knights Game: Italian Variation', field: 'black', quote: 'wins the piece back with full equality', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5 Bd3 dxe4 Bxe4', check: { kind: 'eval', band: 'level' } },
  { opening: 'Four Knights Game: Italian Variation', field: 'black', quote: 'Against 6.Bxd5? take with the queen', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5 Bxd5', check: { kind: 'good', san: 'Qxd5' } },

  // "White has nothing for the bishop pair" read as Black slightly better.
  { opening: 'Four Knights Game: Italian Variation, Noa Gambit', field: 'white', quote: 'objectively Black is much better', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Bxf7+ Kxf7 Nxe4', check: { kind: 'eval', band: 'winning', side: 'black' } },
  { opening: 'Four Knights Game: Italian Variation, Noa Gambit', field: 'black', quote: 'Take with the king', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Bxf7+', check: { kind: 'good', san: 'Kxf7' } },
  { opening: 'Four Knights Game: Italian Variation, Noa Gambit', field: 'black', quote: 'then …d5 builds a big centre', moves: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Bxf7+ Kxf7 Nxe4', check: { kind: 'good', san: 'd5' } },

  { opening: 'Four Knights Game: Glek System', field: 'black', quote: 'Strike with …d5 at once', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 g3', check: { kind: 'good', san: 'd5' } },
  // White's 6th move is not given; read as 6.Bg2.
  { opening: 'Four Knights Game: Glek System', field: 'black', quote: 'swap on c3', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2', check: { kind: 'good', san: 'Nxc3' } },
  { opening: 'Four Knights Game: Glek System', field: 'black', quote: 'then …Bd6 to guard e5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3', check: { kind: 'good', san: 'Bd6' } },

  { opening: 'Four Knights Game: Gunsberg Variation', field: 'white', quote: 'Against …Bc5, the fork trick works: Nxe5, and d4 forks bishop and knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 a3 Bc5', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Gunsberg Variation', field: 'white', quote: 'Against …Bc5, the fork trick works: Nxe5, and d4 forks bishop and knight', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 a3 Bc5 Nxe5 Nxe5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Four Knights Game: Gunsberg Variation', field: 'black', quote: 'hit the centre with …d5', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 a3', check: { kind: 'good', san: 'd5' } },
  { opening: 'Four Knights Game: Gunsberg Variation', field: 'black', quote: 'Avoid …Bc5 unless you have prepared …d6', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 a3', check: { kind: 'dubious', san: 'Bc5' } },

  { opening: 'Four Knights Game: Halloween Gambit', field: 'idea', quote: 'It is unsound.', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6', check: { kind: 'mistake', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Halloween Gambit', field: 'white', quote: 'd4, e5 (and often d5 and f4) drive the knights back', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5', check: { kind: 'good', san: 'd4' } },
  { opening: 'Four Knights Game: Halloween Gambit', field: 'black', quote: 'Take, retreat to g6 and g8', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5', check: { kind: 'good', san: 'Nxe5' } },
  { opening: 'Four Knights Game: Halloween Gambit', field: 'black', quote: 'Take, retreat to g6 and g8', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4', check: { kind: 'good', san: 'Ng6' } },
  { opening: 'Four Knights Game: Halloween Gambit', field: 'black', quote: 'Take, retreat to g6 and g8', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4 Ng6 e5', check: { kind: 'good', san: 'Ng8' } },
  // Black gives back the d-pawn: 7.Bc4 d5 8.Bxd5 leaves a piece for two pawns.
  { opening: 'Four Knights Game: Halloween Gambit', field: 'black', quote: 'a piece for two pawns still wins', moves: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4 Ng6 e5 Ng8 Bc4 d5 Bxd5', check: { kind: 'eval', band: 'winning', side: 'black' } },

  // Added in the strategy check (#5): the rewritten Queen's Knight Defence warning.
  { opening: "King's Gambit Declined: Queen's Knight Defense", field: 'white', quote: "Don't play an early fxe5", moves: 'e4 e5 f4 Nc6', check: { kind: 'blunder', san: 'fxe5' } },
];
