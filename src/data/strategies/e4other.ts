import type { Strategy } from '../strategies';

export const STRATEGIES_E4OTHER: Record<string, Strategy> = {
  // ─── Sicilian ────────────────────────────────────────────────────────────
  "Sicilian Defense": {
    idea: "1…c5 fights for d4 from the side. If White opens the centre with d4, Black trades the c-pawn for White's d-pawn, getting two central pawns to one and a half-open c-file.",
    white: "Either open up with Nf3 and d4, using the lead in development for a kingside attack, or sidestep the theory with an anti-Sicilian such as 2.c3, 2.Nc3 or 3.Bb5.",
    black: "Pressure down the c-file (…Rc8, sometimes …Rxc3), expand with …a6 and …b5, and aim for the freeing …d5 break. The extra central pawn pays off in the long run.",
  },
  "Sicilian Defense: Accelerated Dragon": {
    idea: "Black fianchettoes with …g6 before playing …d6, so that …d5 can later be played in one move instead of two.",
    white: "The critical try is c4 (the Maróczy Bind) to stop …d5 for good and cramp Black. Otherwise Nc3, Be3 and Bc4, but then Black gets …d5 in one go.",
    black: "…Bg7, …Nf6, …0-0 and …d5 if allowed. Against the Maróczy Bind, play …d6, swap knights with …Nxd4, then pressure c4 and a2 with …Be6, …Qa5 and …a5.",
  },
  "Sicilian Defense: Alapin Variation": {
    idea: "2.c3 prepares d4, so White can recapture with the c-pawn and keep a full pawn centre, avoiding the Open Sicilian's theory.",
    white: "Play d4 and meet …cxd4 with cxd4. If Black plays …d5, an isolated d-pawn often arises: use it for piece play and a kingside attack with Bd3, Qe2 and Nc3.",
    black: "Hit e4 before d4 arrives: 2…d5 (recapturing with the queen) or 2…Nf6 (3.e5 Nd5). Against an isolated d-pawn, blockade d5 and trade pieces.",
  },
  "Sicilian Defense: Bowdler Attack": {
    idea: "2.Bc4 points the bishop at f7, but it is easily blunted by …e6 and …d5, so this is an offbeat, slightly toothless sideline.",
    white: "Develop quietly with Nc3, d3 and Nf3 in an Italian-style setup and hope the bishop on c4 (or b3 after …d5) eventually pays off.",
    black: "…e6 and …d5 gain time on the bishop and take the centre. Then develop normally with …Nc6, …Nf6 and …Be7.",
  },
  "Sicilian Defense: Chekhover Variation": {
    idea: "4.Qxd4 recaptures with the queen. With …d6 already played, Black can't hit it at once with a knight, so White gets quick development and often castles long.",
    white: "After …Nc6, pin with Bb5 and swap on c6, then Nc3, Bg5 and 0-0-0 with the rooks aimed at d6. White gives up the bishop pair for a lead in development.",
    black: "Gain time on the queen with …Nc6. After Bb5 …Bd7 and Bxc6 Bxc6 you have the bishop pair; continue …Nf6, …e6, …Be7 and keep d6 well covered.",
  },
  "Sicilian Defense: Closed": {
    idea: "2.Nc3 keeps the centre closed and delays or skips d4. It usually leads to the Closed Sicilian (g3, Bg2) or the Grand Prix Attack (f4).",
    white: "Either fianchetto with g3, Bg2, d3, Be3, Qd2 and push f4–f5, or play f4, Nf3 and Bb5 or Bc4 (Grand Prix) with a direct kingside attack.",
    black: "Develop flexibly with …Nc6 and …g6/…Bg7, or …e6 and …d5 to hit the centre. Long-term play is on the queenside with …Rb8 and …b5–b4.",
  },
  "Sicilian Defense: Closed, Traditional": {
    idea: "The classic Closed Sicilian set-up: no early d4 from White, both sides fianchetto, and play happens on opposite wings.",
    white: "g3, Bg2, d3, Be3, Qd2 and Nge2, then f4–f5 to attack the king. Bh6 to swap off Black's fianchettoed bishop is a common idea.",
    black: "…g6, …Bg7, …d6, then …e6 or …e5 and …Nge7. Use the knight outpost on d4, and push the queenside pawns with …Rb8, …b5–b4.",
  },
  "Sicilian Defense: Delayed Alapin Variation, with d6": {
    idea: "3.c3 after 2…d6 prepares d4 with a pawn recapture. Black's …d6 means …d5 now costs an extra move, so Black usually hits e4 with the knight instead.",
    white: "Play d4, or defend e4 first with Be2 or Bd3. Trap: after 3…Nf6 4.Be2, 4…Nxe4?? loses the knight to 5.Qa4+, which forks the king and knight.",
    black: "3…Nf6 at once attacks e4, so White must defend it before playing d4. Then …Nc6, …Bg4 and …g6 or …e6 put pressure on d4.",
  },
  "Sicilian Defense: Delayed Alapin Variation, with e6": {
    idea: "3.c3 after 2…e6 aims for d4 with a pawn recapture. Because Black has played …e6, …d5 is natural and leads to French or isolated-pawn positions.",
    white: "Play d4. If Black plays …d5, either push e5 for an Advance French-type structure or allow exd5 positions with an isolated d-pawn and active pieces.",
    black: "3…d5 or 3…Nf6 (4.e5 Nd5) challenge the centre at once. In French-type structures, attack d4 with …Nc6 and …Qb6.",
  },
  "Sicilian Defense: Dragon Variation, Accelerated Dragon": {
    idea: "Black plays …g6 before …Nf6. This avoids some anti-Dragon lines, but with no knight on f6 attacking e4, White can set up the Maróczy Bind with c4.",
    white: "Either 5.c4 (Maróczy Bind) to clamp down on d5, or Nc3, Be3, f3, Qd2 and 0-0-0, transposing to Yugoslav Attack-style Dragons with h4–h5.",
    black: "…Bg7, …Nf6, …Nc6 and …0-0, using the bishop on the long diagonal. Against the Bind, trade knights with …Nxd4 and play on the dark squares with …Be6 and …a5.",
  },
  "Sicilian Defense: French Variation": {
    idea: "2…e6 keeps options open: the Kan (…a6), the Taimanov (…Nc6) or the Scheveningen. It also allows a quick …d5 in some lines.",
    white: "Usually 3.d4 for an Open Sicilian, with Nc3, Bd3 or Be2 and kingside play. Quieter options are 3.c3 and a King's Indian Attack set-up with d3, g3 and Bg2.",
    black: "Develop flexibly with …a6, …Qc7, …Nc6 and …Nf6, keeping the dark-squared bishop free to go to b4, c5 or e7. Look for …b5 and the …d5 break.",
  },
  "Sicilian Defense: Hyperaccelerated Dragon": {
    idea: "2…g6 fianchettoes straight away, keeping …d5 in reserve. It invites 3.d4 and gives White some extra options against the slow set-up.",
    white: "3.c3 followed by d4 puts a pawn wall against the bishop on g7. After 3.d4 cxd4 4.Qxd4 the queen attacks the rook on h8, gaining time.",
    black: "…Bg7, …Nc6 and …Nf6. After 3.d4 cxd4 4.Qxd4, play …Nf6 and …Nc6 with gains of time on the queen. Against c3 set-ups, …d5 hits the centre.",
  },
  "Sicilian Defense: Kramnik Variation": {
    idea: "3.c4 grabs space and makes …d5 hard to play, giving a Maróczy-style grip on d5 before White has committed to d4.",
    white: "Nc3 and d4 (or a slower d3/g3 set-up), keeping a firm grip on d5 and using the extra space.",
    black: "Develop with …Nc6 and …Nf6, aiming at the d4 square that c4 has weakened (…Nd4 is often a good outpost). Prepare …d5 or …b5 to break the bind.",
  },
  "Sicilian Defense: Löwenthal Variation": {
    idea: "4…e5 kicks the d4 knight at once, accepting a hole on d5 and a backward d-pawn in return for quick development.",
    white: "5.Nb5 heads for d6. After …a6, Nd6+ Bxd6 Qxd6 wins the bishop pair and the dark squares. Then put pieces on d5 with c4 and Nc3.",
    black: "After 5.Nb5, …a6 6.Nd6+ Bxd6 7.Qxd6 Qf6 offers a queen trade and develops fast; …d6 instead leads to the Kalashnikov. Use the lead in development.",
  },
  "Sicilian Defense: McDonnell Attack": {
    idea: "2.f4 is a Grand Prix-style kingside attack without Nc3 first. It weakens White's king and leaves e4 without a knight to defend it.",
    white: "Nf3, Bc4 or Bb5, d3 and 0-0, then f4–f5 to attack the king.",
    black: "2…d5 is the principled answer, hitting e4 when no knight on c3 defends it. …e6 with …d5, or …Nc6 with …g6, are also good.",
  },
  "Sicilian Defense: Modern Variations, Main Line": {
    idea: "4…Nf6 attacks e4 and asks White to defend it, usually with 5.Nc3. From there Black picks the main system: Najdorf, Dragon, Classical or Scheveningen.",
    white: "5.Nc3, then often Be3, f3, Qd2 and 0-0-0 with g4–g5 or h4–h5 (English or Yugoslav Attack). Calmer options are Be2 and 0-0 with f4.",
    black: "Choose …a6 (Najdorf), …g6 (Dragon), …Nc6 (Classical) or …e6 (Scheveningen). Then use the c-file, push …b5, and look for …d5 or …e5 at the right moment.",
  },
  "Sicilian Defense: Modern Variations, Tartakower": {
    idea: "4.c3 offers a Morra-style pawn after …d6: if Black takes with …dxc3, White recaptures Nxc3 for a lead in development.",
    white: "After …dxc3 Nxc3, develop fast with Bc4, Nf3, 0-0, Qe2 and Rd1 against the d6 pawn. It is a sharp gamble; a careful defender keeps the pawn.",
    black: "Taking with …dxc3 is fine if you develop carefully; simpler is …Nf6, hitting e4. Black is comfortable either way.",
  },
  "Sicilian Defense: Modern Variations": {
    idea: "2…d6 prepares the main Open Sicilians (Najdorf, Dragon, Classical, Scheveningen), all of which start with …Nf6 hitting e4 after 3.d4 cxd4 4.Nxd4.",
    white: "Usually 3.d4 for the Open Sicilian. To avoid theory, play 3.Bb5+ (Moscow Variation) or 3.c3 (Delayed Alapin).",
    black: "After 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3, choose a system. If White recaptures 4.Qxd4, …Nc6 or …a6 with …Nc6 gains time on the queen.",
  },
  "Sicilian Defense: Moscow Variation": {
    idea: "3.Bb5+ avoids the Open Sicilian. White usually trades the light-squared bishops and gets an easy position with a grip on d5.",
    white: "After 3…Bd7 4.Bxd7+ Qxd7, play c4 and Nc3 for a Maróczy-style bind, or 0-0, c3 and d4 for a big centre.",
    black: "3…Bd7 trades bishops and gives a solid game with …Nc6, …Nf6 and …g6 or …e6. 3…Nd7 keeps the bishops for a sharper position.",
  },
  "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack": {
    idea: "3.Bb5 pins the c6 knight and threatens Bxc6, doubling Black's pawns. White avoids the Open Sicilian and plays a slower game.",
    white: "0-0, Re1 and c3 for d4, or Bxc6 followed by d3, h3 and Nc3, playing against the doubled c-pawns and keeping the position closed.",
    black: "Accept Bxc6 for the bishop pair. Either …g6, …Bg7 and …Nf6, or …e6 and …Nge7 to recapture on c6 with a knight. …d6 and …e5 give a solid dark-square set-up.",
  },
  "Sicilian Defense: O'Kelly Variation": {
    idea: "2…a6 is a waiting move. If White plays the normal 3.d4, Black follows with …Nf6 and …e5, and the knight on d4 has no b5 square.",
    white: "3.c3 or 3.c4, positions where …a6 is a wasted move. 3.c4 grabs space and stops …b5; 3.c3 builds a centre with d4.",
    black: "After 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3, play …e5 to hit the knight. Against 3.c3, hit e4 with …d5 or …Nf6. Against 3.c4, play …e6 and …Nc6.",
  },
  "Sicilian Defense: Old Sicilian": {
    idea: "2…Nc6 develops and adds control of d4. It leads to the Sveshnikov, Taimanov, Accelerated Dragon or Classical, depending on Black's next moves.",
    white: "3.d4 for the Open Sicilian, or avoid it with 3.Bb5 (Rossolimo), 3.Nc3 or 3.c3.",
    black: "After 3.d4 cxd4 4.Nxd4, choose …Nf6 (then …e5 or …d6), …e6 (Taimanov), …g6 (Accelerated Dragon) or …e5. Against 3.Bb5, …g6 or …e6 are solid.",
  },
  "Sicilian Defense: Open": {
    idea: "3.d4 opens the centre. White gets a lead in development and an open d-file; Black gets the central pawn majority and the c-file.",
    white: "After 3…cxd4 4.Nxd4, develop with Nc3, Be3 or Bc4 and castle. The knight on d4 is a target, so watch for …e5 and …Nxd4. c4 (Maróczy Bind) is an option against …g6.",
    black: "Choose …Nf6 (Sveshnikov or Classical), …e6 (Taimanov), …g6 (Accelerated Dragon) or …e5. Play down the c-file and aim for …d5 to free the game.",
  },
  "Sicilian Defense: Prins Variation": {
    idea: "5.f3 defends e4 with a pawn rather than Nc3, keeping the c-pawn free so White can play c4 for a Maróczy Bind.",
    white: "Play c4, Nc3, Be3 and Be2 to clamp down on d5 and cramp Black. The f3 pawn also supports a later g4 if Black castles short.",
    black: "Strike at once with 5…e5, chasing the knight; with no knight on c3, …d5 becomes possible. Slow play lets White set up the bind with c4.",
  },
  "Sicilian Defense: Smith-Morra Gambit": {
    idea: "2.d4 cxd4 3.c3 offers a pawn. After …dxc3 Nxc3, White has fast development and open c- and d-files against Black's queen and d6 pawn.",
    white: "Nc3, Nf3, Bc4, 0-0, Qe2 and Rd1, aiming at d6 and f7. Nd5 sacrifices and Nb5 jumps are typical. Against a careful defence the pawn is hard to win back.",
    black: "Accept and develop carefully: …Nc6, …e6, …d6, …a6 and …Nf6 or …Nge7, castling before opening lines. Declining with 3…Nf6 or 3…d5 leads to Alapin-type positions.",
  },
  "Sicilian Defense: Taimanov Variation": {
    idea: "4…e6 keeps the d-pawn flexible and the dark-squared bishop free to go to b4. It is a flexible system built on …a6 and …Qc7.",
    white: "5.Nc3 with Be3, Qd2 or Qf3 and 0-0-0 (English Attack), or 5.Nb5 d6 6.c4 for a Maróczy bind.",
    black: "…a6, …Qc7 and …Nf6, with …Bb4 to pin the c3 knight. Swapping on d4 and playing …b5 gives queenside play, and …d5 frees the position.",
  },

  // ─── French ──────────────────────────────────────────────────────────────
  "French Defense": {
    idea: "1…e6 prepares …d5 with a solid pawn chain. The cost is the light-squared bishop on c8, which is shut in behind the e6 pawn.",
    white: "Build a centre with d4. Often e5 locks the centre and gives kingside space; then attack with f4–f5, Qg4 or a bishop on d3 aimed at h7.",
    black: "…d5, then hit White's pawn chain: …c5 against d4 and …f6 against e5. Pressure d4 with …Nc6 and …Qb6. Trade off the bad c8 bishop with …b6 and …Ba6 when possible.",
  },
  "French Defense: Advance Variation": {
    idea: "3.e5 locks the centre and gains kingside space. The fight is over the d4 pawn, the base of White's chain.",
    white: "c3 and Nf3 to hold d4, then Bd3 or Be2 and kingside play. Black's …Qb6 hits b2 and d4, so keep them covered.",
    black: "…c5, …Nc6, …Qb6 and …Nge7–f5 pile up on d4; …f6 later attacks e5. Trap: after Bd3 and …cxd4 cxd4, taking …Nxd4 Nxd4 Qxd4?? loses the queen to Bb5+.",
  },
  "French Defense: Exchange Variation": {
    idea: "3.exd5 exd5 gives a symmetrical structure with an open e-file. The c8 bishop is freed, so Black's usual French problem disappears.",
    white: "Develop quickly with Bd3, Nf3, 0-0 and Re1, and use the e-file. c4 creates an isolated d-pawn position if White wants more tension.",
    black: "Easy development: …Bd6, …Nf6 or …Ne7, …Bg4 or …Bf5, and castle. The position is level; castling queenside is an option for a sharper game.",
  },
  "French Defense: Franco-Sicilian Defense": {
    idea: "After 1.e4 c5 2.d4, 2…e6 declines to take on d4 at once and keeps French-style …d5 ideas, avoiding a Smith-Morra Gambit.",
    white: "3.Nf3 cxd4 4.Nxd4 gives an Open Sicilian. 3.d5 grabs space and gives a reversed Benoni after …exd5 exd5.",
    black: "Answer Nf3 with …cxd4 for a normal Open Sicilian, or play …d5 for French-type positions. Against 3.d5, …exd5 exd5 and …d6 with …Nf6 and …g6.",
  },
  "French Defense: King's Indian Attack": {
    idea: "2.d3 avoids the main lines. White sets up d3, Nd2, Ngf3, g3, Bg2 and 0-0, then pushes e5 for a kingside attack.",
    white: "After e5, attack with Nf1–h2–g4, h4–h5 and Bf4. The e5 pawn is a wedge that cramps Black's kingside.",
    black: "…d5, …c5, …Nc6, …Nge7 and …0-0, then a queenside pawn storm with …b5–b4 and …a5–a4. It is a race: Black's queenside against White's kingside.",
  },
  "French Defense: Knight Variation": {
    idea: "2.Nf3 delays d4, keeping options such as a King's Indian Attack with d3, or transposing to normal French lines later.",
    white: "Answer …d5 with 3.Nc3, 3.e5 or 3.exd5, or play d3, g3 and Bg2 (King's Indian Attack). d4 can still transpose to the main lines.",
    black: "2…d5 and the normal French plan. If White pushes e5 without d4, hit it with …c5, …Nc6, …Qc7 and …f6.",
  },
  "French Defense: La Bourdonnais Variation": {
    idea: "2.f4 grabs kingside space and supports a later e5, but weakens White's dark squares and the g1–a7 diagonal.",
    white: "Nf3, then e5 and d4 for an Advance French with f4 already played, or d3 and a King's Indian Attack set-up. f4–f5 is the long-term attacking idea.",
    black: "2…d5, and if 3.e5, then …c5, …Nc6 and …Qb6 to aim at d4 and g1. The weakened dark squares give Black good piece play.",
  },
  "French Defense: Paulsen Variation": {
    idea: "3.Nc3 defends e4 with the knight. Black chooses the Winawer (…Bb4), the Classical (…Nf6) or the Rubinstein (…dxe4).",
    white: "Against …Bb4, e5 and a3 to win the bishop pair; Qg4 attacks g7. Against …Nf6, Bg5 or e5. Against …dxe4, Nxe4 and quick development.",
    black: "Pin with …Bb4 and accept …Bxc3 to double White's c-pawns, or play …Nf6 to pressure e4. …dxe4 gives up the centre for a solid, freer game.",
  },
  "French Defense: Queen's Knight": {
    idea: "2.Nc3 develops before d4. After 2…d5, White can transpose with 3.d4 or play 3.Nf3 (Two Knights).",
    white: "Transpose to main lines with d4, or keep it quiet with Nf3 and d3, aiming for e5 later.",
    black: "2…d5 and the normal French plan. If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4.",
  },
  "French Defense: Schlechter Variation": {
    idea: "3.Bd3 defends e4 with the bishop. It is playable but slightly clumsy: the bishop can be hit and it blocks White's queen's view of d4.",
    white: "Ne2 and c3 to support d4, and castle quickly. The bishop on d3 points at h7 if Black castles short.",
    black: "3…c5 hits d4 at once, or …dxe4 Bxe4 …Nf6 gains time on the bishop. Both give Black easy play.",
  },
  "French Defense: Steiner Variation": {
    idea: "2.c4 hinders …d5, but leaves d4 and d3 weak and invites Black to open the centre.",
    white: "Nc3 and Nf3 with a grip on d5. If …d5 comes, exchange on d5 and play for open lines and quick development.",
    black: "2…d5 opens the position. Recapture on d5 and develop freely with …Nf6, …Nc6 and …Bc5 or …Bb4, aiming at the weak d4 square.",
  },
  "French Defense: Tarrasch Variation": {
    idea: "3.Nd2 defends e4 without allowing the …Bb4 pin. The c-pawn stays free to support d4 with c3.",
    white: "c3, Ngf3 or Ne2 and Bd3. If Black gets an isolated d-pawn after …c5, blockade d4 and trade pieces. If the centre locks after e5, attack on the kingside.",
    black: "3…c5 opens the centre, often accepting an isolated d-pawn with active pieces. 3…Nf6 4.e5 Nfd7 gives a locked chain: then …c5, …Nc6, …Qb6 and …f6.",
  },
  "French Defense: Two Knights Variation": {
    idea: "2.Nf3 d5 3.Nc3 develops both knights before deciding on d4, keeping e5 and exd5 options open.",
    white: "e5 to cramp Black, then d4 for main-line French positions, or exd5 for open play. Developing quickly is the priority.",
    black: "3…Nf6 heads for normal French play; if 4.e5, …Nfd7 and …c5. 3…d4 grabs space and gains time on the c3 knight.",
  },

  // ─── Caro-Kann ───────────────────────────────────────────────────────────
  "Caro-Kann Defense": {
    idea: "1…c6 prepares …d5 supported by the c-pawn. Unlike the French, the c8 bishop can get out (…Bf5 or …Bg4) before …e6 closes it in.",
    white: "Build a centre with d4, then choose: e5 (Advance) for space, Nc3 or Nd2 for quick development, or exd5 for a calmer structure.",
    black: "…d5, develop the c8 bishop outside the pawn chain, then …e6, …Nd7 and …Ngf6 for a very solid position. Later free the game with …c5 or …e5.",
  },
  "Caro-Kann Defense: Accelerated Panov Attack": {
    idea: "2.c4 hits d5 before Black plays …d5, aiming for open positions where White's pieces are more active.",
    white: "After 2…d5 3.exd5 cxd5 4.cxd5, Black wins the pawn back. Develop quickly with Nc3, Nf3 and d4, often reaching Panov-type isolated d-pawn positions.",
    black: "2…d5 3.exd5 cxd5 4.cxd5 Nf6 regains the pawn. 2…e5 is a good alternative: it fixes White's d-pawn and grabs the dark squares around d4.",
  },
  "Caro-Kann Defense: Advance Variation": {
    idea: "3.e5 gains space and shuts the f6 square to Black's knight. Black gets the bishop out to f5 before …e6, then hits d4 with …c5.",
    white: "Calmly with Nf3, Be2, 0-0 and c3, or aggressively with Nc3 and g4 or h4 to chase the f5 bishop and gain kingside space.",
    black: "…Bf5, …e6, then …c5 against d4 with …Nc6 and …Qb6. Knights go to e7 and d7. Keep an escape route for the f5 bishop against h4 or g4.",
  },
  "Caro-Kann Defense: Breyer Variation": {
    idea: "2.d3 is a quiet move aiming for a King's Indian Attack set-up instead of a direct central fight.",
    white: "Nd2, Ngf3, g3, Bg2 and 0-0, then e5 or a slow kingside build-up.",
    black: "Take the centre with …d5 and …e5, and develop naturally with …Nf6, …Bd6 or …Bc5, and …0-0. Black has a free hand.",
  },
  "Caro-Kann Defense: Endgame Offer": {
    idea: "2.Nf3 d5 3.d3 is a quiet King's Indian Attack set-up. If Black plays …dxe4 dxe4, the queens can come off and White's king is stuck in the centre.",
    white: "g3, Bg2, Nbd2 and 0-0 in King's Indian Attack style. White accepts that …dxe4 and a queen trade leads to a level endgame.",
    black: "…dxe4 dxe4 Qxd1+ Kxd1 gives an easy endgame because White can no longer castle. Or keep queens on with …Bg4, …e6 and …Nf6.",
  },
  "Caro-Kann Defense: Exchange Variation": {
    idea: "3.exd5 cxd5 gives a symmetrical structure. Without c4 (the Panov), White aims for a quiet game with c3 and Bd3.",
    white: "Bd3, c3, Bf4, Nf3, Nbd2 and Qc2, aiming at h7 and the kingside. A knight can go to e5.",
    black: "…Nc6, …Nf6, …Bg4 and …e6. A good long-term plan is the minority attack …b5–b4 against White's c3 pawn.",
  },
  "Caro-Kann Defense: Hillbilly Attack": {
    idea: "2.Bc4 aims at f7, but runs straight into …d5. It is an offbeat line that relies on tricks.",
    white: "After …d5, either exchange on d5 or retreat the bishop to b3 and look for quick development and tricks against f7, sometimes with Qh5.",
    black: "2…d5 gains time on the bishop and takes the centre. Develop normally and don't panic about f7; …e6 and …Nf6 cover it.",
  },
  "Caro-Kann Defense: Maróczy Variation": {
    idea: "3.f3 supports e4 with a pawn to keep a big centre, but it takes the f3 square from the knight and weakens the dark squares.",
    white: "Nc3, Be3, Qd2 and Bd3, keeping the big centre. If …dxe4 fxe4, use the half-open f-file and the extra central pawn.",
    black: "3…e6 followed by …c5 attacks d4, or …g6 and …Bg7 aims at d4 and the weakened dark squares. Pressure on the g1–a7 diagonal with …Qb6 is common.",
  },
  "Caro-Kann Defense: Modern Variation": {
    idea: "3.Nd2 (like 3.Nc3) usually leads to 3…dxe4 4.Nxe4, after which Black chooses …Bf5, …Nd7 or …Nf6.",
    white: "Against …Bf5, chase the bishop with Ng3, h4 and h5, gain space and often castle queenside. Against …Nd7, develop quickly with Bc4 or Nf3 and aim at e6.",
    black: "…Bf5, …e6, …Nd7 and …Ngf6, then …c5 or …Qc7 and castle. …Nd7 first prepares …Ngf6 without doubled pawns after a knight swap.",
  },
  "Caro-Kann Defense: Two Knights Attack": {
    idea: "2.Nf3 d5 3.Nc3 develops both knights first. The usual answer is …Bg4, and after h3 Black often gives up the bishop for the knight.",
    white: "h3 to ask the g4 bishop to decide. After …Bxf3, recapture with the queen and use the bishop pair with g3, Bg2 and 0-0, or open the position with d4.",
    black: "3…Bg4 4.h3 Bxf3 5.Qxf3 e6, then …Nf6, …Nbd7 and …Be7. The light-square pawns on c6, d5 and e6 make a solid wall.",
  },

  // ─── Scandinavian ────────────────────────────────────────────────────────
  "Scandinavian Defense": {
    idea: "1…d5 challenges e4 at once. After 2.exd5, Black recaptures with the queen (…Qxd5) or the knight (…Nf6) and aims for a solid Caro-Kann-like set-up.",
    white: "2.exd5, then Nc3 to gain time on the queen, d4, Nf3 and quick development. Use the lead in development and extra space.",
    black: "Get the queen to safety (a5, d6 or d8), then …Nf6, …c6, …Bf5 or …Bg4, and …e6. A solid structure with few weaknesses.",
  },
  "Scandinavian Defense: Blackburne-Kloosterboer Gambit": {
    idea: "2…c6 offers a pawn: after 3.dxc6 Nxc6 Black gets quick development. It is dubious; White can keep the extra pawn with careful play.",
    white: "3.dxc6 Nxc6, then Nf3, d3 or d4, and develop quietly to keep the pawn. 3.d4 cxd5 transposes to a Caro-Kann Exchange structure.",
    black: "After 3.dxc6 Nxc6, develop fast with …e5, …Nf6 and …Bc5 or …Bf5. You must play actively; the extra development is your only compensation.",
  },
  "Scandinavian Defense: Gubinsky-Melts Defense": {
    idea: "3…Qd6 puts the queen on a central square, away from the Bd2-and-Nd5 tricks that hit it on a5, though it can still be chased by Nb5 or Bf4.",
    white: "d4, Nf3, and develop; Nb5 or Bf4 gain time on the queen. Set-ups with g3/Bg2 or Be3, Qd2 and 0-0-0 are both common.",
    black: "…Nf6, then …a6 (to stop Nb5) or …c6, then …Bg4 or …Bf5, …e6 and castle short. The queen on d6 covers c7 and e5.",
  },
  "Scandinavian Defense: Main Line": {
    idea: "3…Qa5 puts the queen on a5, pinning the c3 knight and keeping it out of harm's way. Black aims for a Caro-Kann-like set-up with …c6, …Bf5 and …e6.",
    white: "d4, Nf3, Bc4 and Bd2, threatening Nd5 with a discovered attack on the queen. Castle and use the lead in development.",
    black: "…Nf6, …c6 (giving the queen the c7 retreat), …Bf5 or …Bg4, …e6 and …Nbd7. Watch Bd2 with Nd5 or b4 tricks against the queen on a5.",
  },
  "Scandinavian Defense: Mieses-Kotrč Variation": {
    idea: "2…Qxd5 recaptures with the queen at once. White will gain a tempo with Nc3; Black accepts that in return for a clean, solid position.",
    white: "3.Nc3 hits the queen; then d4, Nf3 and fast development. 3.d4 or 3.Nf3 are calmer alternatives.",
    black: "After 3.Nc3, retreat to a5, d6 or d8, then …Nf6, …c6, …Bf5 or …Bg4, and …e6. Don't move the queen again unless you have to.",
  },
  "Scandinavian Defense: Modern Variation": {
    idea: "2…Nf6 delays recapturing on d5, planning …Nxd5 so the queen doesn't come out early.",
    white: "3.d4 Nxd5 4.c4 kicks the knight and builds a big centre. Holding the pawn with 3.c4 lets Black open lines with …c6 or …e6 for quick development.",
    black: "Regain the pawn with …Nxd5 (…Bg4 first is also possible after 3.d4), then pressure d4 with …g6, …Bg7 and …Nc6. Against c4 tries, develop fast rather than chasing material.",
  },
  "Scandinavian Defense: Valencian Variation": {
    idea: "3…Qd8 retreats the queen all the way home: very safe, but White gets a clear lead in development and space.",
    white: "d4, Nf3, Bc4 or Bd3, and castle. Use the space and development lead before Black finishes setting up.",
    black: "…Nf6, …c6, …Bf5 or …Bg4, …e6 and …Nbd7: a Caro-Kann-like position. Be patient; the position is solid but passive.",
  },

  // ─── Pirc, Modern, Rat and Nimzowitsch ───────────────────────────────────
  "Pirc Defense": {
    idea: "1…d6 with …Nf6, …g6, …Bg7 and …0-0. Black lets White build a big centre, then attacks it with …e5 or …c5.",
    white: "d4 and Nc3, then choose: f4 and e5 (Austrian Attack), Be3, Qd2 and Bh6 with h4–h5 (150 Attack), or Nf3, Be2 and 0-0 (Classical).",
    black: "Complete development quickly, then strike with …e5 or …c5, or play …c6 and …b5 on the queenside. Don't stay passive or White's e5 or f4–f5 will crush you.",
  },
  "Modern Defense": {
    idea: "1…g6 fianchettoes before …Nf6. Black delays the knight so White's e5 can't kick it, and keeps …c6, …d6 and …e5 or …c5 flexible.",
    white: "A big centre with d4 and Nc3, then Be3, Qd2 and f3 or f4. Against a fianchetto, h4–h5 and Bh6 to swap the g7 bishop are typical attacking ideas.",
    black: "…Bg7 and …d6, then hit d4 with …c5 or …e5, or expand with …c6, …a6 and …b5. The g7 bishop on the long diagonal is the key piece.",
  },
  "Rat Defense": {
    idea: "Black plays …d6 (sometimes with …e6 or …Nd7) and delays …Nf6 and …g6, keeping a small, flexible centre to aim for …e5 or …c5 later.",
    white: "Take the centre with d4 and often c4, develop naturally with Nc3, Nf3 and Be2, and use the extra space.",
    black: "Develop compactly behind the pawns and break with …e5 or …c5 at the right moment. Don't fall too far behind in development.",
  },
  "Rat Defense: Antal Defense": {
    idea: "2…Nd7 supports …e5 without allowing a queen trade on e5, often heading for a Philidor (Hanham) set-up while avoiding some Pirc lines.",
    white: "Nf3, Nc3 and Bc4 aimed at f7, then 0-0 and Re1. Keep the pawn on d4 and look for tactics on f7 before Black has castled.",
    black: "…e5, …Ngf6, …Be7, …c6 and …0-0: a solid Hanham-style set-up. Watch f7 when White's bishop is on c4, and later play for …b5 or …exd4 with …Re8.",
  },
  "Rat Defense: Harmonist": {
    idea: "2.f4 grabs kingside space immediately, Austrian-style, before d4 or Nc3.",
    white: "Nf3, Nc3 and d4 or Bc4, then e5 or f4–f5 for a kingside attack.",
    black: "Hit e4 with …Nf6 and develop quickly. …e5 or …c5 can exploit the squares f4 has weakened, especially the g1–a7 diagonal.",
  },
  "Rat Defense: Small Center Defense": {
    idea: "1…e6 and 2…d6 set up a 'small centre' with pawns on d6 and e6, keeping …e5 or …c5 for later.",
    white: "Use the extra space: c4, Nc3, Nf3 and Be2, castle, and keep Black cramped.",
    black: "…Nf6, …Be7 and …0-0, then break with …e5 or …c5. Patience is needed; Black is solid but has less space.",
  },
  "Nimzowitsch Defense": {
    idea: "1…Nc6 develops at once and puts pressure on d4. Black follows with …d5 or …e5, since the knight blocks the c-pawn.",
    white: "Build a centre with d4 and develop with Nc3 and Nf3. Against …d5, e5 or Nc3; against …e5, Nf3 can transpose to normal 1.e4 e5 openings.",
    black: "Challenge the centre with …d5 or …e5 right away and develop quickly. Without a c-pawn break, these two moves are Black's main ways to fight.",
  },
  "Nimzowitsch Defense: Kennedy Variation": {
    idea: "After 1.e4 e5 2.d4 (or 1.e4 Nc6 2.d4 e5), Black defends e5 with …Nc6 instead of taking on d4. White can take on e5, push d5, or transpose to the Scotch.",
    white: "3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight; 3.d5 Nce7 gains space; 3.Nf3 exd4 4.Nxd4 is a Scotch.",
    black: "After dxe5 Nxe5, keep the knight active (it can drop to g6) and develop with …Bc5 and …Nf6. After d5 …Nce7, play …Ng6, …Bc5 and …d6.",
  },
};
