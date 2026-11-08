import type { Strategy } from '../strategies';

export const STRATEGIES_D4FLANK: Record<string, Strategy> = {
  // ---------------------------------------------------------------- 1.d4 d5
  "Queen's Pawn Game": {
    idea: "1.d4 claims the centre with a pawn the queen already guards. White can follow with c4 (Queen's Gambit) or a quiet system such as the London or Colle.",
    white: "Aim for c4 to attack Black's centre, or build a solid set-up (Nf3, e3, Bd3 or Bf4, Nbd2) and push e4 later. Pressure on the c-file and queenside is typical.",
    black: "Either meet it head-on with 1…d5, or play 1…Nf6 and choose an Indian set-up that hits the centre later with …c5, …e5 or …d5.",
  },
  "Queen's Pawn Game: Zukertort Variation": {
    idea: "1.d4 d5 2.Nf3 develops before committing: White keeps c4, the London (Bf4), Colle (e3) and Torre (Bg5) all in reserve.",
    white: "Pick a system: c4 for a Queen's Gambit, or e3, Bd3, Nbd2, O-O and e4 in Colle style, or Bf4 and c3 for a London.",
    black: "…Nf6 and a quick …c5 or …Bf5/…Bg4 develop easily. Against a slow system, aim for …c5 and …Nc6 to pressure d4.",
  },
  "Queen's Pawn Game: Symmetrical Variation": {
    idea: "1.d4 d5 2.Nf3 Nf6: both sides develop the king's knight. White now chooses between c4 and a quiet system.",
    white: "c4 gives a Queen's Gambit. Otherwise e3, Bd3, Nbd2, O-O and the e3–e4 break (Colle), or Bf4/Bg5 set-ups with e3 and c3.",
    black: "Get the light-squared bishop out with …Bf5 or …Bg4 before …e6, and challenge d4 with …c5. Against the Colle, meet e4 with …dxe4 and …c5.",
  },
  "Queen's Pawn Game: Anti-Torre": {
    idea: "2…Bg4 pins the f3 knight and develops the bishop before …e6 can shut it in, but it leaves b7 less protected.",
    white: "Hit the bishop with Ne5, or play c4 and Qb3 to attack b7 and d5. e3, Be2 and h3 to ask the bishop its intentions are also good.",
    black: "Follow with …Nd7, …e6, …c6 and …Nf6. Be ready to give up the bishop with …Bxf3 to keep the position simple.",
  },
  "Queen's Pawn Game: Krause Variation": {
    idea: "2…c5 strikes at d4 straight away instead of defending d5 first.",
    white: "3.c4 gives a sharp, open Queen's Gambit. 3.dxc5 is also fine: Black regains with …e6 and …Bxc5 but White develops quickly. 3.e3 keeps a calm Colle set-up.",
    black: "After dxc5, play …e6 and …Bxc5 (or …Qa5+) for easy development. Otherwise …Nc6 and …Nf6 keep pressure on d4.",
  },
  "Queen's Pawn Game: Chigorin Variation": {
    idea: "2.Nc3 blocks the c-pawn but prepares e4, often with f3 or Bg5 (the Veresov). The game becomes sharper than a normal Queen's Pawn.",
    white: "Aim for e4: f3 and e4, or Bg5 and f3. If Black lets White build a full centre, attack on the kingside with Qd2 and long castling.",
    black: "Stop e4 with …Nf6 and …Bf5, or counter with …c5. Black's c-pawn is free while White's is blocked, so …c5 is a natural break.",
  },
  "Queen's Pawn Game: Accelerated London System": {
    idea: "1.d4 d5 2.Bf4 develops the dark-squared bishop before e3 locks it in, aiming for the London pyramid c3, d4, e3.",
    white: "e3, Nf3, c3, Bd3, Nbd2 and O-O. Ne5 and a kingside attack follow if Black is slow. Keep h3 or h4 ready so the bishop can retreat.",
    black: "Strike with …c5 and …Qb6 at b2, which the bishop no longer guards. …Nc6 and …Bf5 or …Bd6 to swap off White's good bishop work well.",
  },
  "Queen's Pawn Game: Accelerated London System, Steinitz Countergambit": {
    idea: "2…c5 hits d4 before White has played e3 or Nf3, using the fact that the bishop has left b2 unguarded.",
    white: "e3 and c3 to hold d4, then Nf3 and Nd2. Meet …Qb6 by covering b2 with Qb3 or Qc1. Taking on c5 gives Black quick development.",
    black: "…Nc6 and …Qb6 against b2 and d4, with …Nf6 and …e6 or …Bf5. If White takes on c5, regain with …e6 and …Bxc5.",
  },
  "Queen's Pawn Game: Modern Defense": {
    idea: "1…g6 fianchettoes and lets White build a big centre, planning to undermine it with …d6, …c5 or …e5.",
    white: "Take the centre with c4 and e4 (or e4 alone), develop Nc3, Nf3 and Be3, and keep it solid. Qd2 and h4–h5 attack the fianchetto.",
    black: "…Bg7, …d6, then a central break: …e5 or …c5. …Nc6 and …Bg4 put pressure on d4. Do not let White's centre stay unchallenged.",
  },
  "Blackmar-Diemer Gambit": {
    idea: "2.e4 dxe4 3.Nc3 Nf6 4.f3 gives a pawn for quick development and an open f-file aimed at Black's king. Risky but dangerous at club level.",
    white: "After 4…exf3 5.Nxf3: Bd3, O-O, Qe1–h4 and Ne5 or Ng5, attacking f7 and h7. Play fast; if the attack fails, the pawn is simply lost.",
    black: "Accept and develop safely: …Bg4, …e6 or …g6, then castle. Give a pawn back if it kills the attack. Declining with 4…e5 or 4…Bf5 is fine too.",
  },
  "Queen's Gambit": {
    idea: "2.c4 offers a wing pawn to lure Black's d5 pawn from the centre. It's not a real gambit: White can usually win the pawn back.",
    white: "Develop Nc3 and Nf3 to pressure d5. If Black takes on c4, play e3 or e4 and recapture with Bxc4, getting the ideal centre.",
    black: "Choose: hold d5 with …e6 (Declined) or …c6 (Slav), or take with …dxc4 (Accepted) and hit back with …c5. Don't try to hang on to the c4 pawn.",
  },
  "Queen's Gambit Accepted": {
    idea: "2…dxc4 gives up the centre for a while to get free development and hit back with …c5. Black doesn't try to keep the pawn.",
    white: "e3 or e4, then Bxc4 and Nf3. Aim for d4–d5 or an isolated d-pawn with active pieces. Trap: 3.e3 b5? 4.a4 c6 5.axb5 cxb5 6.Qf3 wins material.",
    black: "…Nf6, …e6, …c5 and …a6 with …b5 to gain queenside space. Swap on d4 to leave White an isolated pawn, then blockade d5.",
  },
  "Queen's Gambit Declined": {
    idea: "2…e6 keeps a firm pawn on d5. Black is solid, but the c8 bishop is shut in and Black must free the game with …c5 or …e5.",
    white: "Nc3, Bg5, e3, Nf3 and Rc1 to press on d5 and the c-file. In the Exchange (cxd5 exd5), the minority attack b4–b5 creates a weak c-pawn.",
    black: "…Nf6, …Be7, …O-O, …Nbd7. Free the game with …dxc4 and …c5 or …e5, or swap pieces with …Ne4. …b6 and …Bb7 also solve the bishop.",
  },
  "Queen's Gambit Declined: Queen's Knight Variation": {
    idea: "3.Nc3 adds a second attacker to d5 and leads to the main lines, with Bg5 pins and the Exchange Variation available.",
    white: "Bg5 to pin a knight on f6, then e3, Nf3, Rc1. Or cxd5 exd5 with Bd3, Qc2 and the minority attack b4–b5 against c6.",
    black: "…Nf6 and …Be7 is the classical way. …c6 aims for the Semi-Slav, and …Bb4 pins the knight. Free the game later with …dxc4 and …c5.",
  },
  "Queen's Gambit Declined: Albin Countergambit": {
    idea: "2…e5 3.dxe5 d4 gives a pawn to plant a cramping pawn on d4 and play for an attack. Sharp and objectively dubious.",
    white: "Nf3, g3, Bg2, O-O and Nbd2, then attack d4 or give the pawn back for the bishop pair. Avoid 4.e3? Bb4+ 5.Bd2 dxe3 6.Bxb4?? exf2+, winning.",
    black: "…Nc6, …Be6 or …Bg4, …Qd7 and long castling, then push …h5–h4 or …f6. Win back e5 with …Nge7–g6 if White doesn't hang on.",
  },
  "Queen's Gambit Declined: Baltic Defense": {
    idea: "2…Bf5 develops the light-squared bishop before …e6 can block it, but it leaves b7 and d5 without the bishop's help.",
    white: "Hit the weak spots: cxd5 and Qb3, or Nc3 and Qb3, attacking b7 and d5. Black has to play precisely to avoid losing a pawn.",
    black: "…e6, …Nf6, …c6 or …Nc6, keeping the bishop active outside the pawn chain. Be ready to give up b7 for development rather than defend passively.",
  },
  "Queen's Gambit Declined: Chigorin Defense": {
    idea: "2…Nc6 blocks the c-pawn and fights with pieces: Black often trades …Bg4xf3 and hits d4 with …e5 rather than holding d5 with pawns.",
    white: "Nc3 and Nf3, or cxd5 Qxd5 and e3/e4 gaining time on the queen. Take the bishop pair and open the position for it.",
    black: "…Bg4 and …Bxf3, …e5 to attack d4, …Nf6 and quick queenside castling. Piece play and central pressure, not pawn structure.",
  },
  "Queen's Gambit Declined: Marshall Defense": {
    idea: "2…Nf6 ignores the c4 pawn. After 3.cxd5 Nxd5 4.e4 the knight is kicked and White gets a free big centre, so it's considered dubious.",
    white: "3.cxd5 Nxd5 4.e4 Nf6 5.Nc3, then Nf3, Bd3 and O-O with an e4/d4 centre and easy development.",
    black: "If allowed, recapture …Nxd5, then hit the centre with …e5 or …c5 and …Nc6. Better to transpose to normal lines with …e6 or …c6.",
  },
  "Slav Defense": {
    idea: "2…c6 supports d5 with a pawn while keeping the c8 bishop free to go to f5 or g4, unlike the Queen's Gambit Declined.",
    white: "Nf3, Nc3 and e3, or a4 if Black takes on c4, stopping …b5. Aim for e4 to grab the centre and target b7 with Qb3 once the bishop leaves c8.",
    black: "…Nf6, then …Bf5 or …Bg4 before …e6. …dxc4 with …b5 or …Bf5 is the main line. Free the position with …c5 or …e5 later.",
  },
  "Slav Defense: Exchange Variation": {
    idea: "3.cxd5 cxd5 makes a symmetrical structure with an open c-file. White is a tempo up and plays for small, risk-free pressure.",
    white: "Nc3, Nf3, Bf4, e3 and Rc1 to use the c-file. Nb5 or Ne5 jumps can be awkward for Black if they copy White move for move.",
    black: "Develop …Nc6, …Nf6, …Bf5 (or …Bg4) and …e6, then contest the c-file with …Rc8. Don't copy blindly: check White's Nb5 and Qb3 ideas.",
  },
  "Slav Defense: Modern Line": {
    idea: "3.Nf3 develops before Nc3, keeping e3 options and avoiding some sharp lines. Most main-line Slavs go through here.",
    white: "Nc3 next for the main line, or e3 and Qb3 if Black plays …Bf5 early, hitting b7. After …dxc4, a4 stops …b5 and e3/e4 regains the pawn.",
    black: "…Nf6, then …dxc4 and …Bf5 (main line), …e6 for the Semi-Slav, or …a6 with …b5. Keep b7 covered when the bishop leaves c8.",
  },
  "Catalan Opening": {
    idea: "3.g3 puts the bishop on g2 to press on d5 and along the long diagonal to b7. White happily gives the c4 pawn to open that diagonal.",
    white: "Bg2, Nf3, O-O, then Qc2 or Qa4 to regain c4 if taken. Queenside pressure with the g2 bishop, Rc1 and Ne5 is the long-term plan.",
    black: "Take on c4 and play …a6, …b5 or …c5, or stay solid with …Be7, …c6 and …Nbd7. The key is freeing the c8 bishop with …b6 or …c5.",
  },
  // ---------------------------------------------------------------- 1.d4 Nf6 and other first replies
  "Indian Defense": {
    idea: "1…Nf6 stops e4 and stays flexible. Black can still choose the King's Indian, Nimzo-Indian, Queen's Indian or Grünfeld.",
    white: "c4 and Nc3 to fight for e4, or a quiet system (London, Torre, Trompowsky) to avoid Black's main defences.",
    black: "Pick a set-up: …g6 and …d6 (King's Indian), …e6 and …Bb4 (Nimzo), …b6 (Queen's Indian), or …g6 with …d5 (Grünfeld).",
  },
  "Indian Defense: Normal Variation": {
    idea: "2.c4 is the main line: White grabs queenside space and prepares Nc3 and e4. Black now decides which Indian defence to play.",
    white: "Nc3 with e4 if Black allows it, or Nf3 and g3. Aim to build a big centre with c4, d4 and e4.",
    black: "…e6 (Nimzo or Queen's Indian), …g6 (King's Indian or Grünfeld), …c5 (Benoni) or …e5 (Budapest). Each challenges the centre differently.",
  },
  "Indian Defense: Knights Variation": {
    idea: "2.Nf3 develops without committing to c4, keeping the London, Torre and Colle all possible.",
    white: "c4 to transpose to main lines, or Bf4, Bg5 or e3 with a quiet system. Fianchetto with g3 is also common.",
    black: "…g6, …e6, …d5 or …c5 all work. Against quiet systems, an early …c5 and …Qb6 at b2 is a good way to test White.",
  },
  "Indian Defense: Accelerated London System": {
    idea: "2.Bf4 gets the bishop out before e3, heading for the London set-up while dodging some …d5 lines.",
    white: "e3, Nf3, c3, h3 (so the bishop can drop to h2), Bd3 and Nbd2. Aim for Ne5 and a kingside attack.",
    black: "…c5 and …Qb6 targets b2, which the bishop has left unguarded. …Nh5 to win the bishop pair and …d5 with …e6 are also good.",
  },
  "Indian Defense: Anti-Nimzo-Indian": {
    idea: "3.Nf3 avoids the Nimzo-Indian pin (…Bb4 after Nc3). Black usually answers with …b6, …Bb4+ or …d5.",
    white: "g3 and Bg2 against …b6, fighting for e4 and the long diagonal. Nc3, e3 and Bd3 is a solid alternative. Aim for e4.",
    black: "…b6 and …Bb7 or …Ba6 (Queen's Indian) controlling e4, …Bb4+ (Bogo-Indian), or …d5 for a Queen's Gambit Declined.",
  },
  "Indian Defense: Budapest Gambit": {
    idea: "2…e5 3.dxe5 Ng4 offers a pawn to get quick piece play. Black usually wins it back on e5 with …Nc6 and …Qe7.",
    white: "Bf4, Nf3, e3 and Nbd2 or Nc3, giving the pawn back for good development. Beware …Bb4+ and …Qe7: with e2 pinned, …Nd3 can be mate.",
    black: "…Nc6, …Bb4+, …Qe7 and …Ngxe5 to regain the pawn, then castle and use the active pieces. 3…Ne4 (Fajarowicz) is a riskier option.",
  },
  "Indian Defense: Seirawan Attack": {
    idea: "3.Bg5 pins the f6 knight before Nc3 or Nf3, fighting for e4 and threatening to double Black's pawns.",
    white: "Nc3 or Nf3 and e3, using the pin to control e4. Take on f6 if it wrecks Black's structure or wins time.",
    black: "Ask the bishop with …h6, hit d4 with …c5, or play …Bb4+. Normal development with …Be7 and …d5 is solid too.",
  },
  "Indian Defense: Spielmann-Indian": {
    idea: "2…c5 attacks d4 before White has played c4, offering Benoni-style play.",
    white: "3.d5 grabs space (then e4 or c4), or keep a calm set-up with 3.c3 or 3.e3 to hold d4.",
    black: "If d5, undermine it with …e6, …b5 or …g6 and …d6. Otherwise …cxd4 or …Qb6 keeps the pressure on d4 and b2.",
  },
  "Indian Defense: Wade-Tartakower Defense": {
    idea: "2…d6 prepares …Bg4 or …Nbd7 and …e5, heading for Old Indian or King's Indian structures.",
    white: "c4 transposes to Old or King's Indian lines. Without c4, g3 or Bg5 set-ups are solid; e4 if Black allows it.",
    black: "…Bg4 pinning the f3 knight, then …Nbd7 and …e5 to fight for the centre. A …g6 fianchetto is also possible.",
  },
  "Indian Defense: West Indian Defense": {
    idea: "2…g6 fianchettoes, leading to the King's Indian (…d6 and …e5) or the Grünfeld (…d5).",
    white: "Nc3 and e4 for a big centre (King's Indian), then queenside play with c5. Against …d5, cxd5 and e4 to build a centre.",
    black: "King's Indian: …Bg7, …d6, …O-O, …e5, then …f5 to attack on the kingside. Grünfeld: …d5, then hit d4 with …Bg7, …c5 and …Nc6.",
  },
  "East Indian Defense": {
    idea: "1.d4 Nf6 2.Nf3 g6: a King's Indian or Grünfeld set-up without c4 yet, so White can still pick a quiet system.",
    white: "c4 transposes to main lines. Otherwise Bf4 or Bg5 with e3, or g3 and Bg2, keeping things safe.",
    black: "…Bg7, …O-O, then …d6 with …e5 or …d5 with …c5. Against quiet systems, an early …c5 is often the best test.",
  },
  "Old Indian Defense": {
    idea: "2…d6 aims for …e5 with the bishop on e7 rather than g7. Solid but a little passive compared with the King's Indian.",
    white: "Nc3, e4, Nf3, Be2 and O-O for a space advantage. Push d5 to gain more space or play on the queenside with b4.",
    black: "…Nbd7, …e5, …Be7, …c6, …O-O and …Re8. Keep the tension; trade on d4 only if it gives your pieces good squares.",
  },
  "Pseudo Queen's Indian Defense": {
    idea: "2…b6 is a Queen's Indian set-up without White's c4, focusing on e4 with …Bb7.",
    white: "g3 and Bg2 to oppose the b7 bishop, or e3, Bd3, O-O and c4/e4 to grab the centre.",
    black: "…Bb7, …e6, …c5 and possibly …Ne4. Keep a firm hold on e4 so White can't build a full centre.",
  },
  "Trompowsky Attack": {
    idea: "2.Bg5 threatens Bxf6, doubling Black's pawns, and avoids main-line theory.",
    white: "Take on f6 to damage Black's structure, then e3 and c4 to fight the bishop pair. Or meet …Ne4 with Bf4 or h4.",
    black: "…Ne4 to chase the bishop and then …c5 and …Qb6 hitting b2. …e6 or …d5 to keep f6 protected is also solid.",
  },
  "Benoni Defense": {
    idea: "2…c5 3.d5 gives White space and Black a queenside majority. After …e6 and …exd5 Black gets an unbalanced Modern Benoni.",
    white: "Nc3, e4, Nf3 and Be2 or Bd3, then push e4–e5 or f4. Black's d6 pawn is a target, and the d5 pawn cramps Black.",
    black: "…e6, …exd5, …d6, …g6 with …Bg7 on the long diagonal, …Re8, and queenside expansion with …a6 and …b5. 3…b5 is the Benko Gambit.",
  },
  "Benoni Defense: Old Benoni": {
    idea: "1…c5 before …Nf6 invites 2.d5 and a closed Benoni structure, or a Sicilian-style game.",
    white: "2.d5 for space, then e4, c4 and Nc3, aiming for queenside expansion. 2.dxc5 grabs a pawn Black usually regains.",
    black: "…e5 to block the centre and prepare …f5 later, or …d6, …g6 and …Bg7.",
  },
  "Benoni Defense: Benoni Gambit Accepted": {
    idea: "2.dxc5 takes the pawn, but Black regains it easily and gets fast development.",
    white: "Develop quickly with e4, Nf3 and Nc3 while Black spends moves winning the pawn back.",
    black: "…e6 and …Bxc5, or …Qa5+ to take back at once. Black gets a quick lead in development.",
  },
  "Englund Gambit": {
    idea: "1…e5 2.dxe5 Nc6 offers a pawn for traps. It's dubious: with simple development, White stays a sound pawn up.",
    white: "3.Nf3 Qe7 4.Bf4 Qb4+ 5.Bd2 Qxb2 6.Bc3?? is a trap: …Bb4 and …Qc1 mate. Play 6.Nc3 instead, or keep it simple with 4.Nc3.",
    black: "…Nc6, …Qe7 and …Nxe5 to regain the pawn; …Qb4+ hitting b2. Traps aside, Black ends up a pawn down, so play it only for surprise.",
  },
  "Englund Gambit Declined": {
    idea: "2.d5 refuses the pawn and gains space, giving a closed position like a reversed Old Benoni.",
    white: "e4, c4 and Nc3 for space. Later push c4–c5 to open the queenside.",
    black: "…d6, …Nf6, …Be7 or …g6, then …f5 to attack e4 as in a closed King's Indian.",
  },
  "Englund Gambit Declined: Reversed Alekhine": {
    idea: "2.Nf3 develops instead of taking. If 2…e4, the knight is kicked as in a reversed Alekhine, and the e4 pawn can become a target.",
    white: "After 2…e4, Nfd2 or Ne5, then c4, Nc3 and Qc2 to win or undermine e4. f3 to break up the pawn is also an option.",
    black: "Push …e4 and support it with …d5 or …f5, or play …exd4 and develop quickly. Make sure the e4 pawn doesn't drop.",
  },
  "Englund Gambit Declined: Reversed French": {
    idea: "2.e3 holds d4 solidly instead of taking. After …exd4 exd4 the structure resembles a French Exchange with colours reversed.",
    white: "Recapture exd4, then Nf3, Bd3, O-O and c4 for an easy game.",
    black: "…exd4 and …d5, or …Nc6 and …Nf6 for normal development. Black has an equal but calm game.",
  },
  "Horwitz Defense": {
    idea: "1…e6 keeps options open: it can become a French (2.e4), Queen's Gambit Declined (…d5), Dutch (…f5) or English Defence (…b6).",
    white: "2.c4 or 2.Nf3 heads for d4 lines; 2.e4 invites a French. Pick whichever suits your repertoire.",
    black: "…d5 for a QGD, …Nf6 for Nimzo/Queen's Indian, …f5 for a Dutch, or …b6 and …Bb7 fighting for e4. 2.c4 Bb4+ is also possible.",
  },
  // ---------------------------------------------------------------- 1.c4
  "English Opening": {
    idea: "1.c4 fights for d5 from the side. White often fianchettoes with g3 and Bg2 and plays on the queenside.",
    white: "Nc3, g3, Bg2 and Nf3, controlling d5 and the long diagonal. Expand on the queenside with Rb1 and b4, or play d4 to transpose.",
    black: "…e5 (reversed Sicilian), …c5 (Symmetrical), …Nf6, or …e6 with …d5. Build a central presence White can't easily undermine.",
  },
  "English Opening: King's English Variation": {
    idea: "1…e5 makes a reversed Sicilian: White has an extra tempo in a Sicilian structure and fights for d5.",
    white: "Nc3, g3, Bg2, d3, then queenside expansion with Rb1, b4–b5. Nd5 jumps into the hole Black's …e5 creates.",
    black: "…Nc6, …Nf6, then …Bb4 or …d5. A closed set-up with …g6, …Bg7, …d6 and …f5 aims for a kingside attack.",
  },
  "English Opening: King's English Variation, Reversed Sicilian": {
    idea: "2.Nc3 controls d5. After …Nf6, Nf3 and …Nc6 it's the English Four Knights, a reversed Four Knights Game.",
    white: "g3, Bg2 and Nf3, then d3 or d4. Aim for queenside play with b4 or a d4 break to open the centre.",
    black: "…Nf6, …Nc6 and …Bb4 to pin and fight for d5 and e4, or …d5 for an open reversed Dragon.",
  },
  "English Opening: King's English Variation, Nimzowitsch Variation": {
    idea: "2.Nf3 attacks e5 at once, asking Black to either defend it or push …e4 to kick the knight.",
    white: "If …e4, Nd4 and then Nc3, d3 or Qc2 to attack the advanced pawn. Against …Nc6, Nc3 leads to normal English structures.",
    black: "…Nc6 is solid. …e4 gains space and kicks the knight, but the pawn needs support from …Nf6, …d5 or …f5.",
  },
  "English Opening: The Whale": {
    idea: "1.c4 e5 2.e4 locks d5 with pawns on c4 and e4, but leaves a hole on d4 and a backward d-pawn.",
    white: "Nc3, g3, Bg2, Nge2 and d3, then f4. Use control of d5 for a knight.",
    black: "…Nc6, …Bc5, …Nf6 and …d6. Put a knight on d4, the hole White's pawns can't cover.",
  },
  "English Opening: Symmetrical Variation": {
    idea: "1…c5 mirrors White. Play often stays symmetrical until someone breaks with d4 or …d5.",
    white: "Nc3, g3, Bg2, Nf3 and O-O, then d4 to open the centre, or a3 and b4 queenside expansion.",
    black: "Copy with …Nc6, …g6, …Bg7, then …d5 or …e5. After d4 cxd4 Nxd4, a Hedgehog with …b6, …e6, …d6 and later …b5 or …d5 is also good.",
  },
  "English Opening: Anglo-Indian Defense": {
    idea: "1…Nf6 is flexible: Black can head for reversed Sicilians, King's Indian or Nimzo-type set-ups.",
    white: "Nc3 and g3, or Nf3, or d4 to transpose to queen's pawn lines. Nc3 with e4 is a direct try against …e6.",
    black: "…e5, …g6, …e6 or …c5 all work. Pick a set-up and stop White grabbing e4 for free.",
  },
  "English Opening: Agincourt Defense": {
    idea: "1…e6 prepares …d5, aiming for Queen's Gambit Declined or Catalan-like positions.",
    white: "Nf3, g3, Bg2 and O-O for a Catalan structure, or Nc3 and e4 for a big centre if Black delays …d5.",
    black: "…d5 and …Nf6, then …Be7 and …O-O. …Bb4 against Nc3 and …c5 are also common.",
  },
  "English Opening: Anglo-Scandinavian Defense": {
    idea: "1…d5 challenges c4 at once. After 2.cxd5 Black must recapture with the queen or knight.",
    white: "2.cxd5, then Nc3 or Nf3 to gain time on the recapturing piece, g3 and Bg2 to aim at the long diagonal.",
    black: "…Nf6 and …Nxd5, then …e5 for a reversed Sicilian, or …Qxd5 and move the queen to a5 or d8. Keep the d5 piece safe.",
  },
  "English Opening: Caro-Kann Defensive System": {
    idea: "1…c6 prepares …d5 with pawn support, as in a Slav or Caro-Kann.",
    white: "Nf3, g3 or b3 and a fianchetto, or e4 for Caro-Kann positions, or d4 to transpose to the Slav.",
    black: "…d5, then …Bf5 or …Bg4 before …e6, as in the Slav. …Nf6 and …g6 is also possible.",
  },
  "English Opening: Great Snake Variation": {
    idea: "1…g6 fianchettoes straight away, often transposing to King's Indian or Modern positions.",
    white: "Nc3 and g3, or e4 and d4 to build a big centre against the fianchetto.",
    black: "…Bg7, then …c5, …e5 or …d6. Hit the long diagonal and challenge White's centre once it appears.",
  },
  // ---------------------------------------------------------------- 1.Nf3 and others
  "Zukertort Opening": {
    idea: "1.Nf3 develops and stops …e5 while keeping d4, c4 and e4 all possible. It often transposes to other openings.",
    white: "Follow with d4, c4 or g3 depending on Black's reply. Choose the transposition you know best.",
    black: "…d5, …Nf6, …c5 or …g6. Pick a set-up you know from 1.d4 or 1.c4 lines.",
  },
  "Zukertort Opening: Black Mustang Defense": {
    idea: "1…Nc6 aims for …e5. If White replies 2.e4 e5, it's 1.e4 e5 2.Nf3 Nc6 — an open game.",
    white: "2.d4 stops …e5 and gives a queen's pawn game. 2.e4 heads for the open games you know.",
    black: "…e5 if allowed, otherwise …d5 and …Bg4 to put pressure on d4.",
  },
  "Zukertort Opening: Kingside Fianchetto": {
    idea: "1…g6 fianchettoes early, allowing White to choose the centre structure.",
    white: "d4 and c4 or e4 for a big centre, or g3 to mirror Black.",
    black: "…Bg7, then …d6, …c5 or …d5. Hit whatever centre White builds.",
  },
  "Zukertort Opening: Old Indian Attack": {
    idea: "2.d3 prepares e4, aiming for a King's Indian Attack-type set-up.",
    white: "Nbd2, e4, g3, Bg2 and O-O. Push e5 for space and attack on the kingside.",
    black: "…Nf6, …c5, …Nc6 and …Bg4, or take the centre with …e5. Expand on the queenside with …b5.",
  },
  "Zukertort Opening: Pirc Invitation": {
    idea: "1…d6 invites 2.e4, reaching a Pirc or Philidor. Black can also aim for …Bg4 or …e5.",
    white: "2.e4 for a Pirc, or d4 and c4 for Old Indian-style positions.",
    black: "…Nf6, …g6 and …Bg7, or …e5. …Bg4 pins the knight if White is slow.",
  },
  "Zukertort Opening: Queen's Gambit Invitation": {
    idea: "1…e6 invites d4 and c4, reaching a Queen's Gambit Declined after …d5.",
    white: "d4 and c4 for a QGD, g3 for a Catalan, or e4 heading for French-like play.",
    black: "…d5 and …Nf6, or …f5 for a Dutch. Use your 1.d4 e6 repertoire.",
  },
  "Zukertort Opening: Sicilian Invitation": {
    idea: "1…c5 invites 2.e4, a Sicilian, or 2.c4, a Symmetrical English.",
    white: "2.e4 for a Sicilian, 2.c4 for the Symmetrical English, or 2.g3 for a quieter game.",
    black: "…Nc6, …g6 and …Bg7, or …Nf6 and …d5. Play the structure that suits your Sicilian or English repertoire.",
  },
  "Zukertort Opening: Slav Invitation": {
    idea: "1…c6 prepares …d5 with pawn support, heading for Slav or Caro-Kann structures.",
    white: "d4 and c4 for a Slav, e4 for a Caro-Kann, or a fianchetto with g3 or b3.",
    black: "…d5, then …Bf5 or …Bg4 before …e6, keeping the bishop active.",
  },
  "Zukertort Opening: Tennison Gambit": {
    idea: "With Nf3 and e4 against …d5, White gives up the e4 pawn for development and pressure on f7. Considered dubious.",
    white: "After …dxe4, Ng5, then d3 or Bc4 and Nc3. Trap: 3.Ng5 Nf6 4.d3 exd3 5.Bxd3 h6?? 6.Nxf7 Kxf7 7.Bg6+ wins the queen.",
    black: "Take and develop carefully with …Nf6, …e5 or …Bf5, watching f7.",
  },
  "Réti Opening": {
    idea: "1.Nf3 d5 2.c4 attacks d5 from the side instead of supporting a centre, often with double fianchetto (g3, b3).",
    white: "g3, Bg2, b3, Bb2 and O-O, pressuring d5 and the long diagonals. Take on d5 or push b4 to gain queenside space.",
    black: "…c6 with …Bf5 or …Bg4 (Slav style), …e6 (QGD style), or …d4 to grab space. Keep the d5 pawn supported.",
  },
  "King's Indian Attack": {
    idea: "White plays Nf3, g3, Bg2, O-O, d3, Nbd2 and e4 — a King's Indian with colours reversed and an extra tempo.",
    white: "Push e5 for space, then attack the king with Nf1–h2–g4, h4 and Qe2. The plan works against almost any Black set-up.",
    black: "…c5, …Nc6, …e6 and …Nf6, then queenside expansion with …b5–b4. Or …dxe4 to open the centre and play on the d-file.",
  },
  "Nimzo-Larsen Attack": {
    idea: "1.b3 or an early b3 with Bb2 aims the bishop at e5 and the long diagonal, playing for central control from the side.",
    white: "Bb2, e3, Nf3 and c4, putting pressure on e5 and d4. Keep flexible and break with c4 or d4 later.",
    black: "Build a central pawn presence with …e5 or …d5 and …c5, and blunt the b2 bishop.",
  },
  "Nimzo-Larsen Attack: Classical Variation": {
    idea: "1.Nf3 d5 2.b3 fianchettoes the queen's bishop and aims to control e5 with a hypermodern set-up.",
    white: "Bb2, e3, c4 and Be2 or Bd3, then O-O. Pressure d5 with c4 and use the b2 bishop on the long diagonal.",
    black: "…Nf6, …c5, …Nc6 and …e6, or …Bg4 or …Bf5. Build a solid pawn centre and blunt the b2 bishop with …e6 and …d5.",
  },
};
