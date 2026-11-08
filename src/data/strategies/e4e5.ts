import type { Strategy } from '../strategies';

export const STRATEGIES_E4E5: Record<string, Strategy> = {
  // ─────────────────────────────── 1.e4 and the 2nd-move families
  "King's Pawn Game": {
    idea: "1.e4 takes the centre and opens lines for the queen and the f1 bishop. Black's choice of reply decides the whole character of the game.",
    white: "Develop toward the centre: Nf3, a bishop, castle. If Black answers 1…e5, you can head for the Four Knights with Nf3 and Nc3.",
    black: "1…e5 claims an equal share of the centre and leads to open games; 1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry.",
  },
  "King's Knight Opening": {
    idea: "2.Nf3 develops with a threat: the knight attacks e5, so Black must defend it, counterattack e4, or gambit.",
    white: "Keep developing with threats: Nc3, Bb5, Bc4 or d4 depending on Black's reply. Most main lines start here.",
    black: "2…Nc6 is the natural defence of e5. 2…Nf6 (Petrov) counterattacks e4 and 2…d6 (Philidor) holds e5 with a pawn.",
  },
  "King's Knight Opening: Normal Variation": {
    idea: "2…Nc6 defends e5 and develops. White now chooses the opening: 3.Bb5 (Spanish), 3.Bc4 (Italian), 3.d4 (Scotch) or 3.Nc3 (Three/Four Knights).",
    white: "Pick your system: Nc3 for the Four Knights, Bb5 to hit e5's defender, Bc4 to aim at f7, or d4 to open the centre at once.",
    black: "Answer each with a principled move: …Nf6 against Nc3 and Bc4, …Nf6 or …a6 against Bb5, …exd4 against d4.",
  },
  "Petrov's Defense": {
    idea: "2…Nf6 counterattacks e4 instead of defending e5. It is solid and symmetrical, and Black aims to equalise without weaknesses.",
    white: "3.Nxe5 is the main line, but after 3…d6 the knight retreats and play is level. 3.Nc3 steers back to a Four Knights if Black plays …Nc6.",
    black: "Against 3.Nxe5 play 3…d6 first, then …Nxe4. Never 3…Nxe4? at once: 4.Qe2 wins material, as …Nf6?? loses the queen to Nc6+.",
  },
  "Petrov's Defense: Italian Variation": {
    idea: "3.Bc4 ignores the attack on e4 and develops toward f7, offering the e-pawn for quick development.",
    white: "If Black takes on e4, Nc3 gives you fast development and pressure on f7 for the pawn. If Black plays …Nc6, you are in a Two Knights.",
    black: "…Nxe4 is fine: after Nc3 Nxc3 dxc3, hold e5 with …f6 and develop with …d6 and …Be7. 3…Nc6 is the quiet choice.",
  },
  "Petrov's Defense: Modern Attack": {
    idea: "3.d4 hits e5 and opens the centre at once, rather than taking on e5 with the knight.",
    white: "After 3…Nxe4, Bd3 and Nxe5, castle and undermine the e4 knight with c4, hitting its d5 support. After 3…exd4, e5 kicks the knight and Qxd4 regains the pawn.",
    black: "3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line: …Bd6, …O-O and …Nd7 to swap off the e5 knight. The knight on e4 is strong while d5 holds it.",
  },
  "Petrov's Defense: Three Knights Game": {
    idea: "3.Nc3 guards e4 and invites Black back into a Four Knights with …Nc6. It avoids Petrov theory.",
    white: "After …Nc6 play Bb5 and carry on with your Spanish Four Knights. 3.Nxe5 is a little stronger, but Nc3 keeps you on familiar ground.",
    black: "…Nc6 gives a Four Knights where your repertoire applies. …Bb4 keeps a Petrov flavour, pinning the c3 knight that guards e4.",
  },
  "Philidor Defense": {
    idea: "2…d6 holds e5 with a pawn. It is solid but passive: the f8 bishop is shut in and Black has less space.",
    white: "Hit the centre with d4, then Nc3, Bc4 and O-O. With Bc4 aimed at f7, Black's …Nd7 and …Be7 setups are full of traps.",
    black: "Either give up the centre with …exd4 and develop with …Nf6 and …Be7, or hold e5 with …Nf6, …Nbd7, …Be7 and …c6. Guard f7 carefully.",
  },
  "Elephant Gambit": {
    idea: "2…d5 hits back in the centre at once, leaving e5 hanging. It is a dubious gambit: White has two good ways to win a pawn.",
    white: "3.exd5 is cleanest: against …e4, Qe2 pins the pawn and d3 breaks it up; against …Bd6, d4 hits e5. 3.Nxe5 is also good.",
    black: "If you play it, rely on fast development: …Bd6, …Nf6 and …O-O, and hope White grabs too much. Objectively 2…Nc6 is better.",
  },
  "King's Pawn Game: Busch-Gass Gambit": {
    idea: "2…Bc5 develops the bishop but leaves e5 undefended, offering a pawn. It is dubious.",
    white: "Take it: 3.Nxe5, and d4 next gains time on the c5 bishop. Watch f2: Black's only play is …Qh4 hitting f2 and e4, and …Bxf2+ tricks.",
    black: "If you meet the pawn grab, go for activity: …Qh4 or …Qe7 against the e5 knight and e4, then develop fast. 2…Nc6 is the sound move.",
  },
  "King's Pawn Game: Maróczy Defense": {
    idea: "2.d4 d6 defends e5 with a pawn, Philidor-style, before White has played Nf3.",
    white: "dxe5 dxe5 Qxd8+ Kxd8 trades queens and costs Black castling rights. Or play Nf3 and Nc3 for a Philidor with an extra choice.",
    black: "After the queen trade the king is safe enough: hold e5 with …Bd6 or …f6, and develop with …Be6 and …Nd7. Or answer Nf3 with …Nf6 and …Nbd7.",
  },

  // ─────────────────────────────── Centre Game
  "Center Game": {
    idea: "2.d4 opens the centre at once. After 2…exd4 White must either recapture with the queen early or gambit a pawn.",
    white: "3.Qxd4 is the Centre Game proper; 3.c3 turns it into the Danish Gambit. Either way you want fast development and pressure on the e-file.",
    black: "Take: 2…exd4. Then develop with tempo on White's queen (…Nc6) and get your king castled before the centre opens.",
  },
  "Center Game Accepted": {
    idea: "After 2…exd4 3.Qxd4, White's queen comes out early and Black gains a tempo with …Nc6.",
    white: "Retreat to e3 after …Nc6, then Nc3, Bd2 and O-O-O, with f4 or Bc4 to follow. The queen on e3 backs up e4.",
    black: "…Nc6, …Nf6, …Bb4, …O-O and …Re8 hit e4 hard. …d5 frees the position once your pieces are out.",
  },

  // ─────────────────────────────── Bishop's Opening
  "Bishop's Opening": {
    idea: "2.Bc4 aims at f7 before committing the knights. It often transposes to an Italian or a Vienna.",
    white: "Play d3, Nf3, c3 and O-O for a slow Italian-style game, or Nc3 and f4 for something sharper. Keep e4 guarded.",
    black: "2…Nf6 hits e4 and is the most testing reply. Develop with …Nc6, …Bc5 or …c6 and …d5 to take the centre.",
  },
  "Bishop's Opening: Berlin Defense": {
    idea: "2…Nf6 counterattacks e4 at once, asking White how to defend it.",
    white: "3.d3 is solid and leads to a quiet Italian-type game. 3.d4 exd4 4.Nf3 is the Urusov Gambit; 3.Nc3 heads into the Vienna.",
    black: "Against 3.d3, …c6 and …d5 build a strong centre. Against 3.d4, take on d4 and develop; …Nc6 and …Bc5 lead back to an Italian.",
  },
  "Bishop's Opening: Boi Variation": {
    idea: "2…Bc5 mirrors White's bishop, so both sides aim at f7 and f2.",
    white: "c3 and d4 build a centre with gain of time on the c5 bishop, or Nf3 transposes to an Italian. Qh5 hits e5 and f7 at once.",
    black: "Develop with …Nf6, …Nc6 and …d6. Against an early Qh5, …Qe7 covers both e5 and f7.",
  },
  "Bishop's Opening: Philidor Counterattack": {
    idea: "2…c6 prepares …d5, hitting the c4 bishop and taking the centre.",
    white: "3.d4 is the sharp answer: after …d5 exd5 cxd5 Bb5+, Black can be left with an isolated d-pawn. Nf3 and d4 is also good.",
    black: "Play …d5 as soon as possible; …Nf6 first is also fine. Once …d5 is in, you have a free game and the c4 bishop is blunted.",
  },

  // ─────────────────────────────── Vienna
  "Vienna Game": {
    idea: "2.Nc3 guards e4 and prepares f4, a King's Gambit with the knight already out. Bc4 and g3 are quieter options.",
    white: "f4 is the main attacking idea, opening the f-file. Bc4 aims at f7. g3 and Bg2 give a slow, positional game.",
    black: "…Nf6 and …d5 is the key freeing plan. Against f4, …d5 hits e4 at once.",
  },
  "Vienna Game: Anderssen Defense": {
    idea: "2…Bc5 develops the bishop toward f2 before the knights come out.",
    white: "Nf3 is natural, and if …Nc6 it is a Three Knights where the fork trick Nxe5 and d4 works. Bc4 is the sharper choice.",
    black: "Develop with …Nf6, …Nc6 and …d6. Don't allow the fork trick: if White plays Nf3, cover e5 with …d6 before …Nc6.",
  },
  "Vienna Game: Falkbeer Variation": {
    idea: "2…Nf6 is the main Vienna, hitting e4 and preparing …d5.",
    white: "3.f4 is the Vienna Gambit; 3.Bc4 aims at f7 and invites …Nxe4 tactics; 3.g3 and Bg2 is positional; 3.Nf3 is a Petrov Three Knights.",
    black: "Against 3.f4, …d5! is the antidote: after fxe5 Nxe4 the knight is strong. Against 3.Bc4, …Nc6 is solid; 3…Nxe4 4.Qh5 leads to wild play.",
  },
  "Vienna Game: Max Lange Defense": {
    idea: "2…Nc6 is a flexible reply that keeps …Nf6 and …Bc5 in reserve.",
    white: "f4 gives a sharp King's Gambit-style game; Bc4 aims at f7; Nf3 transposes to the Three Knights.",
    black: "Develop with …Nf6 or …Bc5. Against f4, taking with …exf4 leads to sharp gambits, so know a line before you go in.",
  },

  // ─────────────────────────────── King's Gambit
  "King's Gambit": {
    idea: "2.f4 offers a pawn to deflect e5, open the f-file and build a big centre with d4.",
    white: "Nf3 stops …Qh4+, then Bc4, d4 and O-O to attack along the f-file. Once f2 has moved, …Qh4+ is a recurring danger.",
    black: "Accept with …exf4 and develop fast, or decline with …Bc5 or …d5. Hitting back in the centre with …d5 is the key idea in most lines.",
  },
  "King's Gambit Accepted": {
    idea: "2…exf4 takes the pawn. White gets the centre and the f-file; Black must decide whether to hold f4 or give it back.",
    white: "Nf3 (or Bc4), then d4 and Bxf4 to win the pawn back with a big centre. Aim everything at f7.",
    black: "Either hold f4 with …g5 (sharp and double-edged) or give it back with …d5 or …Nf6 and develop. 3…d5 is a sound modern choice.",
  },
  "King's Gambit Declined": {
    idea: "Black refuses the f4 pawn and develops instead, avoiding the sharpest lines.",
    white: "Develop with Nf3, Nc3 and Bc4, and keep the threat of fxe5. Castle once your king is covered.",
    black: "Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6. Take on f4 later only when it suits you.",
  },
  "King's Gambit Declined: Classical Variation": {
    idea: "2…Bc5 controls g1, so White can't castle easily. A famous trap: 3.fxe5?? Qh4+ and …Qxe4+ forks king and rook.",
    white: "Play Nf3 first, then c3 and d4 to kick the bishop, or Nc3 and Bc4. Only take on e5 when …Qh4+ is no longer possible.",
    black: "Develop with …d6, …Nf6 and …Nc6, keeping the bishop on the a7–g1 diagonal. …exf4 at a good moment opens lines toward White's king.",
  },
  "King's Gambit Declined: Falkbeer Countergambit": {
    idea: "2…d5 strikes back in the centre. After 3.exd5, Black can push …e4 to cramp White.",
    white: "After 3.exd5 e4, d3 breaks up the e4 wedge, then Nf3 and dxe4. Keep the d5 pawn if it is safe, but don't fall behind in development.",
    black: "…e4 and …Nf6, then win the d5 pawn back later. …Bc5 aims at g1 and makes White's king uncomfortable.",
  },
  "King's Gambit Declined: Petrov's Defense": {
    idea: "2…Nf6 counterattacks e4 instead of taking on f4.",
    white: "3.fxe5 Nxe4 4.Nf3 is the main line: develop and kick the e4 knight with d3. Watch out for …Qh4+ while your kingside is loose.",
    black: "After fxe5 Nxe4, your knight is active and White's king is airy. Develop fast with …Be7 or …Bc5 and …d6 to open lines.",
  },
  "King's Gambit Declined: Queen's Knight Defense": {
    idea: "2…Nc6 develops and waits, asking White to commit before Black decides about f4.",
    white: "Nf3 and Bc4 (or Nc3), then d4 or O-O with the f-file in mind. An early fxe5 opens the e1–h4 diagonal for …Qh4+.",
    black: "Take on f4 once White has committed, or develop with …Nf6 and …Bc5. Watch e5: after fxe5 Nxe5, d4 kicks the knight.",
  },

  // ─────────────────────────────── Scotch, Ponziani
  "Scotch Game": {
    idea: "3.d4 opens the centre at once. After 3…exd4 4.Nxd4, White has a central knight and free development.",
    white: "Develop fast with Nc3, Be3 and Bc4 or Bd3. Against 4…Nf6, Nxc6 bxc6 e5 (the Mieses) is the main line.",
    black: "Hit the d4 knight with …Bc5 or e4 with …Nf6. Black's freeing move is …d5 once the pieces are out.",
  },
  "Scotch Game: Göring Gambit": {
    idea: "4.c3 offers a pawn (or two) for rapid development, like a Danish Gambit with Nf3 already out.",
    white: "After …dxc3 Nxc3, develop with Bc4, O-O and Qb3 or Re1, and aim at f7. You have no material back, so keep attacking.",
    black: "4…d5 is the safe way to decline: after exd5 Qxd5 cxd4, develop with …Bg4 or …Bb4+. Accepting is playable if you develop quickly.",
  },
  "Scotch Game: Scotch Gambit": {
    idea: "4.Bc4 leaves d4 for later and develops toward f7, often transposing to the Two Knights.",
    white: "Against …Nf6, e5 or O-O leads to sharp Two Knights lines. Against …Bc5, c3 or O-O and Ng5 against f7.",
    black: "…Nf6 is principled: meet e5 with …d5 and …Ne4. …Bc5 is also fine but watch f7. Give the pawn back if it helps you develop.",
  },
  "Ponziani Opening": {
    idea: "3.c3 prepares d4 to build a full pawn centre, but it takes the c3 square from the b1 knight.",
    white: "Play d4 next. Against …Nf6, d4 keeps the initiative; against …d5, Qa4 pins the c6 knight and puts pressure on e4.",
    black: "Strike at once: …Nf6 hits e4, which c3 no longer guards, and …d5 opens the centre before White is ready.",
  },
  "Ponziani Opening: Neumann Gambit": {
    idea: "In the Two Knights, 4.c3 prepares d4 but leaves e4 unprotected, offering the pawn.",
    white: "Play d4 and aim to open the centre while Black's knight is on e4. Qe2 hits the knight on the e-file.",
    black: "Take the pawn with …Nxe4, then …d5 keeps the knight in the centre and hits the c4 bishop.",
  },

  // ─────────────────────────────── Italian
  "Italian Game": {
    idea: "3.Bc4 develops the bishop to its most aggressive diagonal, aiming at f7, the weakest point in Black's camp.",
    white: "Build with c3, d3 or d4, O-O and Re1. Ng5 against f7 is a threat whenever Black's pieces leave it weak.",
    black: "3…Bc5 (Giuoco Piano) mirrors White; 3…Nf6 (Two Knights) counterattacks e4. Both are sound; avoid passive moves that shut in the f8 bishop.",
  },
  "Italian Game: Anti-Fried Liver Defense": {
    idea: "3…h6 stops Ng5 for good, but it spends a move that doesn't develop anything.",
    white: "Use the extra time: d4 to open the centre, or c3 and d4. Treat it like a Scotch-style position where Black has wasted a tempo.",
    black: "Follow up with …Nf6, …Bc5 or …d6 and castle. You are a little slow, so avoid opening the centre before your king is safe.",
  },
  "Italian Game: Blackburne-Kostić Gambit": {
    idea: "3…Nd4 sets a trap: 4.Nxe5? Qg5! and 5.Nxf7? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3 is mate. Objectively it just wastes time.",
    white: "Don't take e5. 4.Nxd4 exd4 and O-O, or 4.c3 to kick the knight, leaves you a little better.",
    black: "Mostly a trap. After 4.Nxd4 exd4, play …Bc5, …Ne7 or …Nf6, and …d5 to free the game.",
  },
  "Italian Game: Giuoco Piano": {
    idea: "3…Bc5 puts Black's bishop on the same active diagonal as White's, aiming at f2.",
    white: "c3 prepares d4 (Classical); d3 keeps it slow (Pianissimo); b4 is the Evans Gambit. All aim to use the c4 bishop against f7.",
    black: "Develop with …Nf6, …d6 and …O-O. Keep the bishop: …a6 and …Ba7 give it a safe home if White plays d4.",
  },
  "Italian Game: Classical Variation": {
    idea: "4.c3 prepares d4 to build a big centre and gain time on the c5 bishop.",
    white: "Play d4 and, after …exd4, cxd4 with a full centre. Quieter: d3 first, then O-O, Re1 and d4 later.",
    black: "Hit back with …Nf6 against e4. If d4 exd4 cxd4, …Bb4+ moves the bishop with check. Or play …d6, …a6 and …Ba7 to keep the bishop.",
  },
  "Italian Game: Evans Gambit": {
    idea: "4.b4 offers a pawn to deflect the c5 bishop, so c3 and d4 come with gain of time.",
    white: "After …Bxb4, play c3 and d4 with a big centre and fast development. Qb3 and Ba3 ideas add pressure on f7 and the uncastled king.",
    black: "Accept and give a pawn back to get your king safe and pieces out, or decline with …Bb6. Don't cling to material.",
  },
  "Italian Game: Giuoco Pianissimo": {
    idea: "4.d3 is the very quiet Italian: solid pawns, slow manoeuvring, and the d4 break kept in reserve.",
    white: "c3, O-O, Re1, h3 and Nbd2–f1–g3. a4 gives the bishop a home on a2. Open the centre with d4 only when your pieces are ready.",
    black: "Mirror it: …Nf6, …d6, …O-O, …a6 and …Ba7. …h6 and …Be6 are useful, and …d5 is the break when White is slow.",
  },
  "Italian Game: Giuoco Pianissimo, Italian Four Knights Variation": {
    idea: "With Nc3 in, it is the Italian Four Knights. White plays the quiet d3 setup rather than allow the fork trick.",
    white: "Castle, h3, then a3 so …Na5 can be met by Ba2. Re1 and Be3 trade off the c5 bishop; Ne2–g3 or Nd5 activate your knights.",
    black: "Develop with …d6, …O-O and …h6 or …a6. …Na5 swaps the c4 bishop; …Bg4 pins if White delays h3.",
  },
  "Italian Game: Giuoco Pianissimo, Canal Variation": {
    idea: "6.Bg5 pins the f6 knight before castling, so Nd5 hits the pinned knight a second time.",
    white: "Nd5 adds pressure on f6, and Bxf6 can break up Black's kingside pawns. Keep your king flexible until Black commits.",
    black: "…h6 asks the bishop; after Bxf6 Qxf6 you have the bishop pair. …Na5 swaps off the c4 bishop. Don't play …g5 unless you can castle queenside.",
  },
  "Italian Game: Hungarian Defense": {
    idea: "3…Be7 is solid and passive. The bishop covers g5 and avoids all Two Knights tactics.",
    white: "Take the centre with d4: against …exd4 recapture and develop; against …d6, d5 gains space. Or play the quiet d3 setup.",
    black: "Develop with …d6, …Nf6 and …O-O and hold e5. It is cramped, but solid; …exd4 frees things if White pushes hard.",
  },
  "Italian Game: Paris Defense": {
    idea: "3…d6 holds e5 with a pawn but shuts in the f8 bishop and leaves f7 short of defenders.",
    white: "Take the centre with c3 and d4 (or d4 at once). Once Black plays …Nf6, Ng5 against f7 becomes a real threat.",
    black: "Develop with …Be7 and …Nf6, or …Be6 to trade off White's bishop. Guard f7 before playing …Nf6.",
  },
  "Italian Game: Rosentreter Gambit": {
    idea: "4.d4 offers the d-pawn straight away to open lines against the c5 bishop and f7.",
    white: "After …exd4, play c3 or O-O for Scotch Gambit-type play with fast development and pressure on f7.",
    black: "Either capture is fine. Take, develop with …Nf6 and …d6, and give the pawn back rather than fall behind in development.",
  },
  "Italian Game: Rousseau Gambit": {
    idea: "3…f5 is a dubious counter-gambit: it opens Black's king on the a2–g8 diagonal, where White's bishop already sits.",
    white: "4.d4 hits e5 and opens lines while Black's king is exposed. Look for Qh5+ checks once the f-pawn has gone.",
    black: "Play …fxe4 and …Nf6 and get castled fast. It is objectively bad; 3…Nf6 or 3…Bc5 are sound.",
  },
  "Italian Game: Two Knights Defense": {
    idea: "3…Nf6 counterattacks e4 and invites White to attack f7 with Ng5.",
    white: "4.Ng5 attacks f7; 4.d4 opens the centre; 4.d3 keeps it quiet; 4.Nc3 is the Italian Four Knights, where …Nxe4 tricks appear.",
    black: "Against Ng5, …d5 and …Na5. Against d4, take and hit back with …d5 or …Nxe4. Against quiet moves, develop and play …d5 when you can.",
  },
  "Italian Game: Two Knights Defense, Knight Attack": {
    idea: "4.Ng5 attacks f7 twice. Black must block with …d5 and usually gives a pawn for activity.",
    white: "After 4…d5 5.exd5, if …Na5 play Bb5+, and after …c6 dxc6 bxc6, Be2. Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black.",
    black: "4…d5 5.exd5 Na5! hits the bishop. Then …c6, …h6 and …e4 give you lots of activity for the pawn. Never 5…Nxd5?.",
  },
  "Italian Game: Two Knights Defense, Modern Bishop's Opening": {
    idea: "4.d3 is the quiet Two Knights: White guards e4 and plays a slow Giuoco Pianissimo-style game.",
    white: "c3, O-O, Re1, h3 and a4, then Nbd2–f1–g3. Open the centre with d4 only once everything is developed.",
    black: "…Bc5 or …Be7, …d6 or …d5, castle, …h6 and …a6. Keep pieces flexible; …d5 is the freeing break when White is slow.",
  },
  "Italian Game: Two Knights Defense, Open Variation": {
    idea: "4.d4 opens the centre while Black's king is still in the middle, leading to sharp lines like the Max Lange.",
    white: "After 4…exd4, 5.e5 kicks the knight, or 5.O-O gambits and Re1 hits e4 along the e-file.",
    black: "Take 4…exd4. Meet 5.e5 with 5…d5, hitting the c4 bishop, and 5.O-O with 5…Nxe4 6.Re1 d5. Return the pawn if it helps you castle.",
  },

  // ─────────────────────────────── Ruy Lopez
  "Ruy Lopez": {
    idea: "3.Bb5 attacks the c6 knight, the defender of e5. It is not yet a threat to win e5, but the pressure lasts all game.",
    white: "Castle, then Re1, c3 and d4 to build a centre. The b1 knight often goes d2–f1–g3. Bxc6 and Nxe5 becomes a real threat once e5 is weak.",
    black: "3…a6 asks the bishop, 3…Nf6 counterattacks e4. Develop with …Be7 or …Bc5, castle, and use …b5 and …d6 to gain space.",
  },
  "Ruy Lopez: Berlin Defense": {
    idea: "3…Nf6 counterattacks e4. Its main line leads to a queenless middlegame where Black has given up castling but is very solid.",
    white: "4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 gives you a kingside pawn majority. 4.d3 keeps queens on.",
    black: "4…Nxe4 is the main line: the queenless ending is hard to crack thanks to your bishop pair. Against 4.d3, …Bc5 and …d6 are solid.",
  },
  "Ruy Lopez: Bird Variation": {
    idea: "3…Nd4 offers to swap knights. After Nxd4 exd4, Black gets a pawn on d4 that cramps White, but has spent time.",
    white: "4.Nxd4 exd4 5.O-O, then d3 and c3 to break up the d4 pawn. Your development lead is the trump.",
    black: "…c6 kicks the bishop, …Bc5, …Ne7 and …d5 later. The d4 pawn needs support, so keep pieces near it.",
  },
  "Ruy Lopez: Classical Variation": {
    idea: "3…Bc5 develops the bishop to its most active square, aiming at f2.",
    white: "c3 and d4 gain time on the c5 bishop; you can castle first. If Black plays …Nd4, Nxd4 Bxd4 and c3 kick the bishop.",
    black: "…Nf6, …O-O and …Bb6 to keep the bishop on the diagonal. 4.c3 f5 (the Cordel Gambit) is a sharp try.",
  },
  "Ruy Lopez: Cozio Defense": {
    idea: "3…Nge7 supports the c6 knight so Bxc6 never ruins Black's pawns, then the f8 bishop goes to g7 or the knight to g6.",
    white: "Black's set-up is slow, so take the centre: c3 and d4, or O-O and d4, or Nc3 and d4.",
    black: "…g6, …Bg7 and …O-O, or …Ng6, …Be7 and …O-O. Solid but passive; …exd4 frees the game if White gets too much.",
  },
  "Ruy Lopez: Morphy Defense": {
    idea: "3…a6 asks the bishop to decide. It is the main line: Black can later break the pin with …b5.",
    white: "Ba4, O-O, Re1, c3, h3 and d4: the Closed Spanish, slow and rich. 4.Bxc6 (the Exchange) gives a simpler endgame-style game.",
    black: "…Nf6, …Be7, …b5, …d6 and …O-O. …Na5 swaps the light bishop; …c5 and …Bb7 add queenside space.",
  },
  "Ruy Lopez: Morphy Defense, Tarrasch Variation": {
    idea: "A Spanish where White has developed with Nc3 instead of c3, so the d4 break isn't supported by a pawn.",
    white: "Castle, d3 or d4, and Re1. With Nc3 out, your play is simpler but less ambitious than the Closed Spanish.",
    black: "…b5 (Bb3) gains space, then …Bc5 or …Be7, …d6 and castle. With no c3 pawn, White has no big centre to fear.",
  },
  "Ruy Lopez: Schliemann Defense": {
    idea: "3…f5 is a sharp counter-gambit: Black hits e4 and wants to open the f-file.",
    white: "4.Nc3 is the main answer, defending e4 and meeting …fxe4 with Nxe4. 4.d3 gives a quieter game. Black's king is weakened, so open lines when you can.",
    black: "…fxe4, …Nf6 and …d5 to grab the centre, then …Bc5 or …Bd6 and castle. Very sharp: know a line before you play it.",
  },
  "Ruy Lopez: Steinitz Defense": {
    idea: "3…d6 holds e5 with a pawn, but it is passive and the pinned c6 knight makes e5 hard to keep.",
    white: "d4 at once, then Nc3, O-O and Re1. Black usually has to give up the centre with …exd4.",
    black: "…Bd7 to unpin, …Nf6 and …Be7, and …exd4 when the pressure on e5 gets too much. Solid but cramped.",
  },
  "Ruy Lopez: Steinitz Defense, Nimzowitsch Attack": {
    idea: "White takes on c6 as soon as Black unpins with …Bd7, before Black can free the game with …exd4.",
    white: "After …Bxc6, Qd3 backs up d4 and e4 and prepares dxe5. Bg5, O-O-O and Rhe1 keep the pressure on.",
    black: "Uncomfortable: e5 is held only by the d6 pawn and dxe5 is coming. Castle fast and accept giving up the centre; your bishop pair is the compensation.",
  },

  // ─────────────────────────────── Three Knights
  "Three Knights Opening": {
    idea: "3.Nc3 develops and guards e4. If Black plays …Nf6, it is the Four Knights.",
    white: "Against …Nf6 play your Four Knights. Against …Bc5, the fork trick Nxe5 and d4 gives you the bishop pair and a big centre.",
    black: "…Nf6 is simplest, reaching the Four Knights. …Bb4 or …g6 avoid it. Don't play …Bc5 without …d6: the fork trick works.",
  },

  // ─────────────────────────────── Four Knights
  "Four Knights Game": {
    idea: "All four knights are out. White picks the plan at move 4: Bb5 (Spanish), d4 (Scotch) or Bc4 (Italian); g3, a3 and Nxe5 are sidelines.",
    white: "Knights first, then bishops. Keep e4 guarded, castle early, and put pressure on e5 through the c6 knight.",
    black: "Each 4th move has a clear answer: …Nd4 against Bb5, …exd4 against d4, the …Nxe4 fork trick against Bc4, and …d5 against slow moves.",
  },
  "Four Knights Game: Spanish Variation": {
    idea: "4.Bb5 attacks the c6 knight, e5's only defender, and clears f1 so White can castle.",
    white: "Castle, Re1 or d3, then Bg5 to pin f6. Bxc6 and Nxe5 is a threat that keeps returning. Doubled c-pawns after …Bxc3 bxc3 are fine.",
    black: "4…Nd4 (Rubinstein) is the most testing. …Bb4 copies White, and …Bc5 invites the fork trick. Don't try 4…Nxe4: with the bishop on b5, …d5 forks nothing.",
  },
  "Four Knights Game: Spanish Variation, Classical Variation": {
    idea: "4…Bc5 puts the bishop on its most active square, but it allows the fork trick: Nxe5, and d4 forks bishop and knight.",
    white: "Castle, then Nxe5: after …Nxe5 d4, chase with f4, e5 and d5 for a big space advantage. If Black plays …d6, hit the centre with d4.",
    black: "Castle and know the fork trick lines, or play 5…d6 to stop it, though d4 then gains time. 6…Nd4 (the Marshall Variation) gives a pawn instead.",
  },
  "Four Knights Game: Spanish Variation, Bardeleben Variation": {
    idea: "In the fork-trick line, Black answers 9.e5 with …Bb4 instead of …Be7, eyeing the c3 knight.",
    white: "Win the f6 knight back and keep your space. Once Black's queen reaches f6 it hits d4 together with the c6 knight, so keep d4 guarded.",
    black: "After exf6 Qxf6, pressure d4 with the queen and knight, and use …Bxc3 to damage White's pawns. White's kingside is loose after f4.",
  },
  "Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation": {
    idea: "After 6.Nxe5, Black doesn't take back: 6…Nd4 gives the e5 pawn, as in the Rubinstein, for active pieces aimed at White's king.",
    white: "You are a pawn up. Keep the bishop (Ba4), bring the e5 knight back to cover the kingside (Nf3 or Nd3), and don't grab more.",
    black: "Activity for the pawn: …d6 to open lines, …Re8, and queen moves toward the kingside. The c5 bishop, aimed at f2, is the key attacker.",
  },
  "Four Knights Game: Spanish Variation, Double Spanish": {
    idea: "4…Bb4 copies White, eyeing the c3 knight that guards e4.",
    white: "Castle, d3, then Bg5 pin. Against an early …d6, Nd5! hits the b4 bishop. Against …Bxc3, recapture bxc3 and play Re1 and d4.",
    black: "Castle before …d6: 5…d6? 6.Nd5! wins material. Then …d6, …Bxc3 at the right moment, and unpin with …Qe7 if needed.",
  },
  "Four Knights Game: Spanish Variation, Nimzowitsch Variation": {
    idea: "6.Bxc6 gives up the bishop at once to remove e5's defender before Black can play …d6.",
    white: "After …dxc6, d3 and Bg5 pin the f6 knight. Black's c-pawns are doubled, so your healthy kingside majority helps in an ending.",
    black: "Recapture …dxc6 to open the d-file and free the c8 bishop. You have the bishop pair; keep e5 guarded (…Bd6 or …Re8) and play …h6 against Bg5.",
  },
  "Four Knights Game: Spanish Variation, Symmetrical Variation": {
    idea: "Both sides castle and play d3/…d6. The symmetry breaks with 7.Bg5, pinning the f6 knight.",
    white: "Bg5 pins, and Nd5 hits the pinned knight. Bxf6 …gxf6 wrecks Black's king cover; if …Bxc3, bxc3 gives you the bishop pair and d4.",
    black: "Deal with the pin: …Bxc3 and …Qe7 (the Metger Unpin), …Ne7 to reroute toward g6, or …Be6. Don't copy White blindly.",
  },
  "Four Knights Game: Spanish Variation, Symmetrical Variation, Metger Unpin": {
    idea: "Black gives up the bishop for the c3 knight, then unpins with …Qe7 so …Nd8–e6 can kick the g5 bishop.",
    white: "Re1, d4, and Bc1 when …Ne6 hits g5: keep the bishop pair. Then Bf1, a4–a5, or dxe5 at a good moment.",
    black: "…Nd8–e6, then …c5 and knight play on f4 or g4. White's doubled c-pawns are your long-term target.",
  },
  "Four Knights Game: Spanish Variation, Symmetrical Variation, Tarrasch Variation": {
    idea: "7…Be6 develops the c8 bishop and keeps the b4 bishop, ignoring the pin for now.",
    white: "Use the pin: Nd5 hits the b4 bishop and the pinned f6 knight, and d4 opens the centre.",
    black: "…Bxc3 at the right moment and …h6 to question the g5 bishop. …Qe7 unpins if needed.",
  },
  "Four Knights Game: Spanish Variation, Ranken Variation": {
    idea: "After 4…a6, White takes on c6 and grabs e5. Black can win the pawn back with a queen fork, but falls behind in development.",
    white: "After …dxc6 Nxe5 Nxe4 Nxe4 Qd4, castle and play Re1 and d4: Black's king is stuck in the centre. Against 6…Qd4, Nf3 keeps the extra pawn.",
    black: "Recapture …dxc6, and after Nxe5 play …Nxe4! then …Qd4 to win the material back. …bxc6 or 6…Qd4 leave you a pawn down.",
  },
  "Four Knights Game: Spanish Variation, Rubinstein Variation": {
    idea: "4…Nd4 jumps forward, hitting the b5 bishop and the f3 knight and offering the e5 pawn for activity. The most testing reply to 4.Bb5.",
    white: "5.Nxd4 is safe and leads to a level ending; 5.Ba4, 5.Bc4 and 5.O-O are alternatives. Avoid 5.Nxe5? Qe7!, which leaves Black clearly better.",
    black: "Against 5.Nxe5? play …Qe7, hitting the knight and e4. Against 5.Ba4, …Bc5 and castle; against 5.O-O, …Nxb5 for the bishop pair.",
  },
  "Four Knights Game: Spanish Variation, Rubinstein Variation Accepted": {
    idea: "5.Nxd4 exd4 6.e5 dxc3 7.exf6 Qxf6 8.dxc3 Qe5+ 9.Qe2: a burst of captures leads to a level, queenless position.",
    white: "Trade queens and recapture with the king. Then Be3 or Bf4, Rhe1 and Rad1 on the open files. Safe and low-theory, not a winning try.",
    black: "Trade queens and play …c6, …d5, …Bd6 and castle. Don't play 7…cxd2+?: Bxd2 gives White a big lead in development.",
  },
  "Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation": {
    idea: "5.O-O ignores the knight and castles, giving up the b5 bishop for quick development.",
    white: "After …Nxb5 Nxb5 c6, Nc3 and d4 open the centre before Black's bishops come to life.",
    black: "Take the bishop with …Nxb5 for the bishop pair, kick the knight with …c6, then …d6 and …Qc7. Keep the centre closed until you are castled.",
  },
  "Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit": {
    idea: "After 5.Ba4 Bc5 6.Nxe5, Black castles and lets the e5 pawn go for very active pieces.",
    white: "Keep the pawn with Nd3 (guarding f2), e5 to kick the f6 knight, then Nd5–e3 to cover the kingside. Stay alert: Black's pieces aim at f2.",
    black: "…Bb6, then …d6 to open lines and …Qg5 or …Qh4 to attack. Every tempo counts; the pawn matters far less than your activity.",
  },

  "Four Knights Game: Scotch Variation": {
    idea: "4.d4 opens the centre before Black is ready. If Black ignores it, dxe5 kicks the f6 knight.",
    white: "After …exd4 Nxd4, swap on c6, then Bd3, O-O and Bg5. Against …Bb4 with Nxe5, Qg4 tricks on g7 punish loose knights.",
    black: "4…exd4 is normal: pin with …Bb4, recapture …bxc6 and strike with …d5. 4…Bb4 (Krause) gives e5 for a pin.",
  },
  "Four Knights Game: Scotch Variation Accepted": {
    idea: "4…exd4 gives up the centre. White chooses between 5.Nxd4 (the main line) and 5.Nd5 (the Belgrade Gambit).",
    white: "5.Nxd4, then Nxc6 against …Bb4 or …Bc5. If Black swaps on d4, Qxd4 is strong; against a slow move, e5 kicks the f6 knight.",
    black: "5…Bb4 is the main line: …bxc6 and …d5 give you a solid c6–d5 centre. After 5…Nxd4 6.Qxd4 you must play …d6, or e5 is crushing.",
  },
  "Four Knights Game: Scotch Variation Accepted, Main Line": {
    idea: "After 7…d5 8.exd5, Black castles before recapturing. Both sides castle and Black takes back with …cxd5.",
    white: "Castle, then Bg5 and Qf3 after …cxd5 and …c6. Rook to e1, and target the c6 and d5 pawns. Don't play 9.dxc6?: …Re8+ catches your king.",
    black: "Recapture …cxd5, then …c6, …Bd6, …h6 to question the pin, …Rb8 on the half-open b-file, and …Re8. Watch Nxd5 tactics.",
  },
  "Four Knights Game: Scotch Variation, Belgrade Gambit": {
    idea: "5.Nd5 gambits the d4 pawn for central activity and tactical chances, especially if Black grabs e4.",
    white: "Win the pawn back with Nxd4 if you can, or keep the pressure with Bc4 and Bf4. Against …Nxe4, Qe2 leads to sharp tactics.",
    black: "Stay calm: …Be7 and castle, then …d6 and …Nxd5 at a good moment. 5…Nxe4 is playable but wild; …Be7 keeps the pawn safely.",
  },
  "Four Knights Game: Scotch Variation, Krause Gambit": {
    idea: "4…Bb4 pins the c3 knight instead of taking on d4, leaving e5 to be taken.",
    white: "Take with 5.Nxe5. If …Nxe4? Qg4 hits g7 and the knight; if …Nxe5? dxe5 and Qg4 again. Against …Qe7, Qd3 holds e4.",
    black: "5…Qe7 (the Leonhardt) is best. 5…Nxe4? and 5…Nxe5? both run into Qg4 tactics because g7 is unguarded.",
  },
  "Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense": {
    idea: "5…Qe7 hits the e5 knight and e4 together. Black wins the pawn back but gives up the bishop pair.",
    white: "6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3: you have the bishop pair and a lead in development. Bd3, O-O and Re1 on the e-file.",
    black: "…Bxc3+ and …Nxe4 regain the pawn. Then trade the e5 knight, castle quickly and watch the e-file, where your queen and king sit.",
  },

  "Four Knights Game: Italian Variation": {
    idea: "4.Bc4 aims at f7 but leaves e4 guarded only by the c3 knight, allowing the fork trick 4…Nxe4 5.Nxe4 d5.",
    white: "Against the fork trick play 6.Bd3, never 6.Bxd5?. Against …Bc5, …Bb4 or …Be7, the quiet setup: d3, O-O, h3 and a3 or a4.",
    black: "4…Nxe4! 5.Nxe4 d5 forks bishop and knight and wins the piece back with full equality. Against 6.Bxd5? take with the queen.",
  },
  "Four Knights Game: Italian Variation, Noa Gambit": {
    idea: "After 4…Nxe4, 5.Bxf7+ Kxf7 6.Nxe4 wins the knight back: material is level, but Black's king has lost castling.",
    white: "Hope to use the exposed king with a knight check on g5 and a quick d4. In practice White has nothing for the bishop pair.",
    black: "Take with the king, then …d5 builds a big centre. Tuck the king away with …h6 and …Kg8, connect the rooks and use your bishops.",
  },
  "Four Knights Game: Glek System": {
    idea: "4.g3 fianchettoes the f1 bishop for a slow, closed game, with Nh4 and f4 as the long-term attacking plan.",
    white: "Bg2, d3, O-O and Be3, then Nh4 and f4 to open the f-file. Keep e4 solid with d3.",
    black: "Strike with …d5 at once: exd5 Nxd5, swap on c3, then …Bd6 to guard e5. Castle and play …Re8 or …Qe7. White's c3 pawns are a little weak.",
  },
  "Four Knights Game: Gunsberg Variation": {
    idea: "4.a3 is a slow waiting move that takes b4 away from Black's bishop.",
    white: "Follow with d4, Bc4 or g3. Against …Bc5, the fork trick works: Nxe5, and d4 forks bishop and knight.",
    black: "As against every slow move, hit the centre with …d5. Avoid …Bc5 unless you have prepared …d6, because of the fork trick.",
  },
  "Four Knights Game: Halloween Gambit": {
    idea: "4.Nxe5 gives a whole knight for a pawn to chase Black's knights with a pawn storm. It is dubious.",
    white: "d4, e5 (and often d5 and f4) drive the knights back, then fast development and attack. You need a quick initiative, as you are a piece down.",
    black: "Take, retreat to g6 and g8, then …d6, …Be7, …Nh6 or …Ne7 and castle. Give back a pawn if needed: a piece for two pawns still wins.",
  },
};
