# Repertoire verification report

Generated 2026-09-24 by `npm run verify`. Stockfish 19 at depth 22; Lichess masters database; Lichess games rated 1600–2200 (blitz, rapid, classical), shown as "club".

Evaluations are from White's point of view (+ is good for White). "Loss" is how much worse the book move is than Stockfish's top choice, in pawns. Under 0.30 is normal opening noise.

## Summary

- ⚠️ 0.31 worse than Nxe5 — White: Spanish 4.Bb5, *2…Nf6: back to the Four Knights*, 3.Nc3

## White: Spanish 4.Bb5

### Symmetrical: Metger Unpin

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O O-O 6.d3 d6 7.Bg5 Bxc3 8.bxc3 Qe7 9.Re1 Nd8 10.d4 Ne6 11.Bc1`

**Final position:** +0.43 (Stockfish continues Nd7 g3 a6 Bf1 f6 Nh4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| **1.e4** | +0.22 | e4 +0.22 | 0.00 | 1309466 (45%) | 1524784942 (59%, scores 51%) |  |
| 1…e5 | +0.23 | e5 +0.23 |  | 314452 (24%) | 528407918 (35%, scores 47%) |  |
| **2.Nf3** | +0.19 | Nf3 +0.19 | 0.00 | 289894 (92%) | 339392524 (64%, scores 53%) |  |
| 2…Nc6 | +0.25 | Nc6 +0.25 |  | 248258 (86%) | 224509319 (66%, scores 47%) |  |
| **3.Nc3** | +0.11 | Bb5 +0.16 | 0.05 | 14272 (6%) | 16668473 (7%, scores 52%) |  |
| 3…Nf6 | +0.13 | Nf6 +0.13 |  | 13457 (92%) | 9989617 (48%, scores 48%) |  |
| **4.Bb5** | +0.00 | d4 +0.12 | 0.12 | 6960 (41%) | 4370518 (24%, scores 53%) |  |
| 4…Bb4 | +0.12 | Nd4 +0.02 |  | 2854 (37%) | 820318 (15%, scores 49%) |  |
| **5.O-O** | +0.12 | O-O +0.12 | 0.00 | 2691 (94%) | 288983 (34%, scores 54%) |  |
| 5…O-O | +0.02 | O-O +0.02 |  | 2567 (95%) | 152439 (53%, scores 47%) |  |
| **6.d3** | +0.04 | Re1 +0.07 | 0.03 | 2139 (83%) | 83765 (55%, scores 55%) |  |
| 6…d6 | +0.19 | Bxc3 +0.03 |  | 1443 (67%) | 57860 (57%, scores 46%) |  |
| **7.Bg5** | +0.05 | Ne2 +0.15 | 0.10 | 1025 (69%) | 44273 (57%, scores 58%) |  |
| 7…Bxc3 | +0.06 | Ne7 +0.00 |  | 872 (85%) | 22498 (47%, scores 50%) |  |
| **8.bxc3** | +0.12 | bxc3 +0.12 | 0.00 | 872 (100%) | 22413 (100%, scores 50%) |  |
| 8…Qe7 | +0.08 | a6 +0.03 |  | 761 (58%) | 12404 (35%, scores 51%) |  |
| **9.Re1** | +0.08 | Re1 +0.08 | 0.00 | 622 (82%) | 6109 (48%, scores 51%) |  |
| 9…Nd8 | +0.35 | h6 +0.02 |  | 541 (87%) | 5571 (89%, scores 49%) |  |
| **10.d4** | +0.36 | d4 +0.36 | 0.00 | 533 (99%) | 5064 (90%, scores 51%) |  |
| 10…Ne6 | +0.43 | Bg4 +0.31 |  | 438 (82%) | 4018 (75%, scores 50%) |  |
| **11.Bc1** | +0.45 | Bc1 +0.45 | 0.00 | 349 (79%) | 1983 (49%, scores 55%) |  |

### Symmetrical: 7…Ne7

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O O-O 6.d3 d6 7.Bg5 Ne7 8.Bxf6 gxf6 9.Nh4`

**Final position:** +0.00 (Stockfish continues c6 Ba4 Kh8 Bb3 a5 a3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7…Ne7 | +0.00 | Ne7 +0.00 |  | 141 (14%) | 3342 (7%, scores 53%) |  |
| **8.Bxf6** | +0.03 | Bxf6 +0.03 | 0.00 | 29 (21%) | 2278 (68%, scores 45%) |  |
| 8…gxf6 | +0.09 | gxf6 +0.09 |  | 29 (100%) | 2268 (100%, scores 55%) |  |
| **9.Nh4** | +0.00 | d4 +0.19 | 0.19 | 14 (48%) | 818 (36%, scores 51%) |  |

### 4…Bb4 5.O-O d6? 6.Nd5!

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O d6 6.Nd5 Nxd5 7.exd5`

**Final position:** +2.34 (Stockfish continues a6 Ba4 b5 dxc6 bxa4 d4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…d6 | +1.52 | O-O +0.02 |  | 46 (2%) | 71788 (25%, scores 45%) |  |
| **6.Nd5** | +1.65 | Nd5 +1.65 | 0.00 | 23 (50%) | 12988 (17%, scores 64%) |  |
| 6…Nxd5 | +1.70 | Ba5 +1.70 |  | 3 (13%) | 1546 (12%, scores 38%) |  |
| **7.exd5** | +2.05 | exd5 +2.05 | 0.00 | 3 (100%) | 1594 (100%, scores 62%) |  |

### 4…Bb4 5.O-O Bxc3

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O Bxc3 6.bxc3`

**Final position:** +0.55 (Stockfish continues d6 d4 Nxe4 Qe2 Nxc3 Bxc6+)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Bxc3 | +0.42 | O-O +0.02 |  | 73 (3%) | 50808 (18%, scores 45%) |  |
| **6.bxc3** | +0.53 | bxc3 +0.53 | 0.00 | 59 (81%) | 21437 (42%, scores 57%) |  |

### Rubinstein: Exchange line

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.e5 dxc3 7.exf6 Qxf6 8.dxc3 Qe5+ 9.Qe2 Qxe2+ 10.Kxe2`

**Final position:** +0.02 (Stockfish continues c6 Bd3 d5 Be3 Be6 a4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…Nd4 | +0.02 | Nd4 +0.02 |  | 2719 (36%) | 571201 (11%, scores 50%) |  |
| **5.Nxd4** | +0.06 | Nxd4 +0.06 | 0.00 | 618 (23%) | 167885 (29%, scores 47%) |  |
| 5…exd4 | +0.08 | exd4 +0.08 |  | 618 (100%) | 167661 (100%, scores 53%) |  |
| **6.e5** | +0.14 | e5 +0.14 | 0.00 | 588 (95%) | 38008 (23%, scores 56%) |  |
| 6…dxc3 | -0.01 | dxc3 -0.01 |  | 588 (100%) | 35124 (92%, scores 44%) |  |
| **7.exf6** | +0.03 | exf6 +0.03 | 0.00 | 587 (100%) | 34889 (99%, scores 56%) |  |
| 7…Qxf6 | +0.05 | Qxf6 +0.05 |  | 583 (99%) | 24746 (71%, scores 46%) |  |
| **8.dxc3** | +0.10 | dxc3 +0.10 | 0.00 | 567 (97%) | 20052 (81%, scores 57%) |  |
| 8…Qe5+ | +0.05 | Be7 +0.00 |  | 245 (43%) | 4279 (21%, scores 44%) |  |
| **9.Qe2** | +0.02 | Qe2 +0.02 | 0.00 | 189 (77%) | 2011 (47%, scores 53%) |  |
| 9…Qxe2+ | +0.00 | Qxe2+ +0.00 |  | 189 (100%) | 1863 (93%, scores 47%) |  |
| **10.Kxe2** | +0.00 | Kxe2 +0.00 | 0.00 | 53 (28%) | 581 (30%, scores 50%) |  |

### Rubinstein: 7…cxd2+

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.e5 dxc3 7.exf6 cxd2+ 8.Bxd2`

**Final position:** +2.82 (Stockfish continues Qxf6 O-O Kd8 Bc3 Qg5 a4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7…cxd2+ | +2.21 | Qxf6 +0.05 |  | 4 (1%) | 8790 (25%, scores 40%) |  |
| **8.Bxd2** | +2.42 | Bxd2 +2.42 | 0.00 | 4 (100%) | 8004 (91%, scores 62%) |  |

### Rubinstein: 8…Bc5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.e5 dxc3 7.exf6 Qxf6 8.dxc3 Bc5 9.Qe2+`

**Final position:** +0.08 (Stockfish continues Qe7 O-O Qxe2 Bxe2 d5 Bf4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 8…Bc5 | +0.01 | Be7 +0.00 |  | 237 (42%) | 7170 (36%, scores 45%) |  |
| **9.Qe2+** | +0.19 | Qe2+ +0.19 | 0.00 | 151 (64%) | 1637 (23%, scores 52%) |  |

### Rubinstein: 8…c6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.e5 dxc3 7.exf6 Qxf6 8.dxc3 c6 9.Bd3`

**Final position:** +0.12 (Stockfish continues d5 Be3 Bd6 O-O O-O Qh5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 8…c6 | +0.02 | Be7 +0.00 |  | 54 (10%) | 6043 (30%, scores 40%) |  |
| **9.Bd3** | +0.24 | Bd3 +0.24 | 0.00 | 49 (91%) | 5128 (85%, scores 63%) |  |

### Classical: the fork trick

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bc5 5.O-O O-O 6.Nxe5 Nxe5 7.d4 Bd6 8.f4 Nc6 9.e5 Be7 10.d5 Nb4 11.exf6 Bxf6`

**Final position:** +0.26 (Stockfish continues a3 Bxc3 axb4 Bxb4 f5 Re8)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…Bc5 | +0.16 | Nd4 +0.02 |  | 570 (7%) | 1322705 (25%, scores 48%) |  |
| **5.O-O** | +0.16 | Nxe5 +0.20 | 0.04 | 357 (62%) | 590353 (36%, scores 52%) |  |
| 5…O-O | +0.12 | O-O +0.12 |  | 305 (78%) | 238120 (35%, scores 48%) |  |
| **6.Nxe5** | +0.17 | Nxe5 +0.17 | 0.00 | 208 (68%) | 18912 (8%, scores 62%) |  |
| 6…Nxe5 | +0.14 | Nxe5 +0.14 |  | 187 (89%) | 14421 (71%, scores 38%) |  |
| **7.d4** | +0.11 | d4 +0.11 | 0.00 | 187 (100%) | 14393 (100%, scores 62%) |  |
| 7…Bd6 | +0.08 | Bd6 +0.08 |  | 178 (95%) | 5188 (36%, scores 46%) |  |
| **8.f4** | +0.08 | dxe5 +0.10 | 0.02 | 157 (86%) | 2584 (48%, scores 60%) |  |
| 8…Nc6 | +0.35 | Neg4 +0.10 |  | 54 (34%) | 749 (29%, scores 48%) |  |
| **9.e5** | +0.24 | e5 +0.24 | 0.00 | 54 (100%) | 734 (98%, scores 53%) |  |
| 9…Be7 | +0.33 | Bb4 +0.19 |  | 38 (70%) | 486 (57%, scores 50%) |  |
| **10.d5** | +0.08 | exf6 +0.28 | 0.20 | 25 (66%) | 257 (50%, scores 53%) |  |
| 10…Nb4 | +0.32 | Bc5+ -0.02 |  | 18 (72%) | 58 (23%, scores 55%) |  |
| **11.exf6** | +0.24 | exf6 +0.24 | 0.00 | 17 (94%) | 37 (64%, scores 45%) |  |
| 11…Bxf6 | +0.38 | Bxf6 +0.38 |  | 17 (100%) | 37 (100%, scores 55%) |  |

### Classical: 5…d6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bc5 5.O-O d6 6.d4`

**Final position:** +0.70 (Stockfish continues exd4 Nxd4 Bd7 Nf5 O-O Bg5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…d6 | +0.59 | O-O +0.12 |  | 62 (16%) | 344978 (50%, scores 49%) |  |
| **6.d4** | +0.60 | d4 +0.60 | 0.00 | 54 (86%) | 123172 (31%, scores 57%) |  |

### Classical: 7…Bxd4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bc5 5.O-O O-O 6.Nxe5 Nxe5 7.d4 Bxd4 8.Qxd4`

**Final position:** +1.22 (Stockfish continues d6 Re1 Bd7 Bf1 a6 f4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7…Bxd4 | +1.31 | Bd6 +0.08 |  | 0 (0%) | 4941 (34%, scores 34%) |  |
| **8.Qxd4** | +1.19 | Qxd4 +1.19 | 0.00 | 0 (0%) | 4932 (100%, scores 66%) |  |

### 4…a6: the exchange

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 a6 5.Bxc6 dxc6 6.Nxe5 Nxe4 7.Nxe4 Qd4 8.O-O Qxe5 9.Re1`

**Final position:** +0.23 (Stockfish continues Be6 d4 Qf5 Bg5 h6 Qd3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…a6 | +0.22 | Nd4 +0.02 |  | 39 (1%) | 610387 (11%, scores 43%) |  |
| **5.Bxc6** | +0.40 | Bxc6 +0.40 | 0.00 | 38 (97%) | 401680 (66%, scores 58%) |  |
| 5…dxc6 | +0.37 | dxc6 +0.37 |  | 37 (97%) | 324070 (81%, scores 43%) |  |
| **6.Nxe5** | +0.28 | Nxe5 +0.28 | 0.00 | 31 (78%) | 181142 (51%, scores 61%) |  |
| 6…Nxe4 | +0.20 | Nxe4 +0.20 |  | 31 (100%) | 20482 (11%, scores 52%) |  |
| **7.Nxe4** | +0.24 | Nxe4 +0.24 | 0.00 | 31 (100%) | 16956 (83%, scores 49%) |  |
| 7…Qd4 | +0.25 | Qd4 +0.25 |  | 26 (84%) | 13442 (79%, scores 52%) |  |
| **8.O-O** | +0.29 | O-O +0.29 | 0.00 | 26 (100%) | 8262 (61%, scores 54%) |  |
| 8…Qxe5 | +0.38 | Qxe5 +0.38 |  | 26 (100%) | 7983 (97%, scores 46%) |  |
| **9.Re1** | +0.23 | d4 +0.33 | 0.10 | 8 (26%) | 6104 (64%, scores 52%) |  |

### 4…a6: 6…Qd4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 a6 5.Bxc6 dxc6 6.Nxe5 Qd4 7.Nf3`

**Final position:** +2.18 (Stockfish continues Qb4 d3 Qe7 Qe2 h6 Be3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…Qd4 | +2.05 | Nxe4 +0.20 |  | 0 (0%) | 63249 (34%, scores 34%) |  |
| **7.Nf3** | +2.20 | Nf3 +2.20 | 0.00 | 0 (0%) | 54349 (86%, scores 68%) |  |

### 4…a6: 5…bxc6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 a6 5.Bxc6 bxc6 6.Nxe5`

**Final position:** +1.56 (Stockfish continues Bd6 d4 Qe7 Bg5 Bxe5 dxe5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…bxc6 | +1.41 | dxc6 +0.37 |  | 1 (3%) | 77129 (19%, scores 36%) |  |
| **6.Nxe5** | +1.34 | Nxe5 +1.34 | 0.00 | 1 (100%) | 45516 (56%, scores 66%) |  |

### 4…d6 5.d4 exd4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 d6 5.d4 exd4 6.Nxd4 Bd7 7.O-O`

**Final position:** +0.63 (Stockfish continues Be7 Nxc6 Bxc6 Bxc6+ bxc6 f4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…d6 | +0.58 | Nd4 +0.02 |  | 277 (4%) | 1679247 (31%, scores 46%) |  |
| **5.d4** | +0.62 | d4 +0.62 | 0.00 | 262 (92%) | 557238 (30%, scores 58%) |  |
| 5…exd4 | +0.71 | exd4 +0.71 |  | 183 (59%) | 380844 (61%, scores 44%) |  |
| **6.Nxd4** | +0.68 | Nxd4 +0.68 | 0.00 | 146 (80%) | 329898 (87%, scores 56%) |  |
| 6…Bd7 | +0.72 | Bd7 +0.72 |  | 236 (100%) | 468266 (98%, scores 45%) |  |
| **7.O-O** | +0.78 | O-O +0.78 | 0.00 | 174 (56%) | 228163 (35%, scores 56%) |  |

### 4…d6 5.d4 Bd7

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 d6 5.d4 Bd7 6.Bxc6 Bxc6 7.Qd3`

**Final position:** +1.05 (Stockfish continues exd4 Nxd4 g6 Bg5 Bg7 O-O-O)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Bd7 | +0.99 | exd4 +0.71 |  | 124 (40%) | 149922 (24%, scores 43%) |  |
| **6.Bxc6** | +0.95 | Bxc6 +0.95 | 0.00 | 42 (20%) | 42578 (22%, scores 57%) |  |
| 6…Bxc6 | +1.12 | Bxc6 +1.12 |  | 42 (100%) | 34164 (80%, scores 45%) |  |
| **7.Qd3** | +1.02 | Qe2 +1.15 | 0.13 | 43 (91%) | 4616 (10%, scores 70%) |  |

### 4…d6 5.d4 a6?

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 d6 5.d4 a6 6.Bxc6+ bxc6 7.dxe5`

**Final position:** +3.16 (Stockfish continues Ng4 Bf4 dxe5 Qxd8+ Kxd8 Bxe5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…a6 | +3.08 | exd4 +0.71 |  | 0 (0%) | 55640 (9%, scores 32%) |  |
| **6.Bxc6+** | +2.99 | Bxc6+ +2.99 | 0.00 | 0 (0%) | 37752 (68%, scores 74%) |  |
| 6…bxc6 | +3.04 | bxc6 +3.04 |  | 0 (0%) | 37717 (100%, scores 26%) |  |
| **7.dxe5** | +3.11 | dxe5 +3.11 | 0.00 | 0 (0%) | 37857 (93%, scores 76%) |  |

### 3…Bc5: the fork trick

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Bc5 4.Nxe5 Nxe5 5.d4 Bd6 6.dxe5 Bxe5 7.Bd3`

**Final position:** +0.43 (Stockfish continues Nf6 O-O d6 Ne2 Nd7 f4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 3…Bc5 | +0.63 | Nf6 +0.13 |  | 187 (1%) | 5769359 (28%, scores 49%) |  |
| **4.Nxe5** | +0.72 | Nxe5 +0.72 | 0.00 | 172 (82%) | 1130134 (18%, scores 61%) |  |
| 4…Nxe5 | +0.50 | Nxe5 +0.50 |  | 150 (87%) | 554541 (49%, scores 36%) |  |
| **5.d4** | +0.52 | d4 +0.52 | 0.00 | 150 (100%) | 553454 (100%, scores 64%) |  |
| 5…Bd6 | +0.50 | Bd6 +0.50 |  | 149 (99%) | 140291 (25%, scores 43%) |  |
| **6.dxe5** | +0.55 | dxe5 +0.55 | 0.00 | 147 (99%) | 138270 (99%, scores 57%) |  |
| 6…Bxe5 | +0.45 | Bxe5 +0.45 |  | 147 (100%) | 138244 (100%, scores 43%) |  |
| **7.Bd3** | +0.51 | Bd3 +0.51 | 0.00 | 49 (33%) | 32041 (23%, scores 61%) |  |

### 2…Nf6: back to the Four Knights

`1.e4 e5 2.Nf3 Nf6 3.Nc3 Nc6 4.Bb5`

**Final position:** +0.02 (Stockfish continues Nd4 Nxd4 exd4 e5 dxc3 exf6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 2…Nf6 | +0.34 | Nc6 +0.25 |  | 34242 (12%) | 37211561 (11%, scores 48%) |  |
| **3.Nc3** | +0.06 | Nxe5 +0.37 | 0.31 | 3773 (11%) | 12136583 (33%, scores 52%) | ⚠️ 0.31 worse than Nxe5 |
| 3…Nc6 | +0.04 | Nc6 +0.04 |  | 3635 (74%) | 8309125 (53%, scores 49%) |  |

### Gaps: common club replies not covered

"Frequency" is roughly how many of every 100 Four Knights games (with you playing this repertoire) reach that reply.

- **1.9 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O d6 6.Nd5`: **Bc5** (50% of club games in that position)
- **1.8 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O O-O 6.d3`: **Bxc3** (22% of club games in that position)
- **1.7 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 a6 5.Bxc6 dxc6 6.Nxe5`: **Bd6** (19% of club games in that position)
- **1.6 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bc5 5.O-O`: **a6** (6% of club games in that position)
- **1.5 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 d6 5.d4 Bd7 6.Bxc6`: **bxc6** (20% of club games in that position)
- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bc5 5.O-O O-O 6.Nxe5`: **Bxf2+** (14% of club games in that position)
- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 a6 5.Bxc6 dxc6 6.Nxe5`: **Bc5** (13% of club games in that position)
- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 a6 5.Bxc6 dxc6 6.Nxe5`: **Qe7** (13% of club games in that position)

### Before the Four Knights (other openings)

- After `1.e4`: c5 (24% of club games)
- After `1.e4`: e6 (11% of club games)
- After `1.e4`: d5 (9% of club games)
- After `1.e4`: c6 (8% of club games)
- After `1.e4 e5 2.Nf3`: d6 (15% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3`: d6 (10% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3 Bc5 4.Nxe5`: Bxf2+ (44% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3 Bc5 4.Nxe5 Nxe5 5.d4`: Bxd4 (47% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3 Bc5 4.Nxe5 Nxe5 5.d4`: Bb4 (11% of club games)
- After `1.e4 e5 2.Nf3 Nf6 3.Nc3`: Bc5 (18% of club games)
- After `1.e4 e5 2.Nf3 Nf6 3.Nc3`: Bb4 (15% of club games)
- After `1.e4 e5 2.Nf3 Nf6 3.Nc3`: d6 (10% of club games)

## White: Scotch 4.d4

### Main line: 5…Bb4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5 8.exd5 cxd5 9.O-O O-O 10.Bg5 c6 11.Qf3`

**Final position:** +0.01 (Stockfish continues Rb8 h3 Bd6 b3 h6 Bxf6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| **1.e4** | +0.22 | e4 +0.22 | 0.00 | 1309466 (45%) | 1524784942 (59%, scores 51%) |  |
| 1…e5 | +0.23 | e5 +0.23 |  | 314452 (24%) | 528407918 (35%, scores 47%) |  |
| **2.Nf3** | +0.19 | Nf3 +0.19 | 0.00 | 289894 (92%) | 339392524 (64%, scores 53%) |  |
| 2…Nc6 | +0.25 | Nc6 +0.25 |  | 248258 (86%) | 224509319 (66%, scores 47%) |  |
| **3.Nc3** | +0.11 | Bb5 +0.16 | 0.05 | 14272 (6%) | 16668473 (7%, scores 52%) |  |
| 3…Nf6 | +0.13 | Nf6 +0.13 |  | 13457 (92%) | 9989617 (48%, scores 48%) |  |
| **4.d4** | +0.12 | d4 +0.12 | 0.00 | 6287 (37%) | 4793813 (26%, scores 55%) |  |
| 4…exd4 | +0.00 | exd4 +0.00 |  | 5710 (91%) | 4017749 (82%, scores 46%) |  |
| **5.Nxd4** | +0.03 | Nxd4 +0.03 | 0.00 | 5224 (91%) | 3784223 (94%, scores 54%) |  |
| 5…Bb4 | +0.04 | Bb4 +0.04 |  | 6168 (92%) | 2256298 (43%, scores 51%) |  |
| **6.Nxc6** | +0.11 | Nxc6 +0.11 | 0.00 | 6178 (100%) | 1763803 (77%, scores 51%) |  |
| 6…bxc6 | +0.11 | bxc6 +0.11 |  | 6164 (100%) | 1536359 (87%, scores 50%) |  |
| **7.Bd3** | +0.11 | Bd3 +0.11 | 0.00 | 6255 (100%) | 1262960 (71%, scores 52%) |  |
| 7…d5 | +0.10 | d5 +0.10 |  | 4436 (71%) | 648127 (51%, scores 50%) |  |
| **8.exd5** | +0.05 | exd5 +0.05 | 0.00 | 4209 (94%) | 504402 (77%, scores 52%) |  |
| 8…cxd5 | +0.00 | cxd5 +0.00 |  | 2978 (71%) | 376803 (75%, scores 48%) |  |
| **9.O-O** | +0.00 | O-O +0.00 | 0.00 | 2746 (92%) | 319214 (84%, scores 53%) |  |
| 9…O-O | -0.02 | c6 -0.02 |  | 2735 (100%) | 287134 (90%, scores 47%) |  |
| **10.Bg5** | -0.01 | Qf3 +0.00 | 0.01 | 2902 (64%) | 293879 (67%, scores 53%) |  |
| 10…c6 | +0.00 | c6 +0.00 |  | 2528 (87%) | 209807 (71%, scores 49%) |  |
| **11.Qf3** | -0.02 | a3 +0.00 | 0.02 | 1667 (66%) | 130305 (61%, scores 51%) |  |

### Main line: 7…O-O

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 O-O 8.O-O d5 9.exd5 cxd5 10.Bg5 c6 11.Qf3`

**Final position:** +0.01 (Stockfish continues Rb8 h3 Bd6 b3 h6 Bxf6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7…O-O | +0.10 | d5 +0.10 |  | 1651 (26%) | 459756 (36%, scores 47%) |  |
| **8.O-O** | +0.01 | Bd2 +0.05 | 0.04 | 1643 (100%) | 365955 (79%, scores 54%) |  |
| 8…d5 | +0.06 | d5 +0.06 |  | 1270 (77%) | 160229 (44%, scores 50%) |  |
| **9.exd5** | +0.05 | exd5 +0.05 | 0.00 | 1154 (91%) | 116207 (65%, scores 52%) |  |
| 9…cxd5 | +0.05 | cxd5 +0.05 |  | 1800 (87%) | 154390 (78%, scores 49%) |  |

### Main line: 7…O-O 8.O-O Re8

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 O-O 8.O-O Re8 9.Bg5`

**Final position:** +0.37 (Stockfish continues h6 Bh4 d5 exd5 g5 Bg3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 8…Re8 | +0.27 | d5 +0.06 |  | 342 (21%) | 93070 (25%, scores 46%) |  |
| **9.Bg5** | +0.33 | Bg5 +0.33 | 0.00 | 167 (49%) | 45951 (49%, scores 57%) |  |

### Main line: 8…O-O

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5 8.exd5 O-O 9.O-O cxd5 10.Bg5 c6 11.Qf3`

**Final position:** +0.01 (Stockfish continues Rb8 h3 Bd6 b3 h6 Bxf6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 8…O-O | +0.03 | cxd5 +0.00 |  | 929 (22%) | 95286 (19%, scores 52%) |  |
| **9.O-O** | +0.14 | O-O +0.14 | 0.00 | 926 (100%) | 82859 (87%, scores 49%) |  |

### 6…dxc6: early queen trade

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 dxc6 7.Qxd8+ Kxd8 8.Bd2`

**Final position:** +0.66 (Stockfish continues Be6 Be2 Rg8 f3 Kc8 a3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…dxc6 | +0.64 | bxc6 +0.11 |  | 9 (0%) | 77719 (4%, scores 43%) |  |
| **7.Qxd8+** | +0.63 | Qxd8+ +0.63 | 0.00 | 7 (78%) | 50324 (63%, scores 59%) |  |
| 7…Kxd8 | +0.56 | Kxd8 +0.56 |  | 7 (100%) | 50302 (100%, scores 41%) |  |
| **8.Bd2** | +0.58 | Bd2 +0.58 | 0.00 | 4 (50%) | 15578 (24%, scores 60%) |  |

### 6…Bxc3+: bishop pair

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 Bxc3+ 7.bxc3 bxc6 8.Bd3`

**Final position:** +0.35 (Stockfish continues O-O O-O Re8 Re1 d5 e5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…Bxc3+ | +0.56 | bxc6 +0.11 |  | 5 (0%) | 147971 (8%, scores 44%) |  |
| **7.bxc3** | +0.54 | bxc3 +0.54 | 0.00 | 5 (100%) | 145256 (97%, scores 57%) |  |
| 7…bxc6 | +0.51 | bxc6 +0.51 |  | 3 (60%) | 117189 (79%, scores 44%) |  |
| **8.Bd3** | +0.40 | Bd3 +0.40 | 0.00 | 3 (100%) | 71381 (61%, scores 60%) |  |

### 5…Bc5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bc5 6.Nxc6 bxc6 7.Bd3`

**Final position:** +0.16 (Stockfish continues O-O Na4 Bb6 O-O d5 e5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Bc5 | +0.34 | Bb4 +0.04 |  | 307 (5%) | 1000890 (19%, scores 44%) |  |
| **6.Nxc6** | +0.17 | Be3 +0.40 | 0.23 | 109 (36%) | 513223 (48%, scores 53%) |  |
| 6…bxc6 | +0.19 | bxc6 +0.19 |  | 107 (98%) | 431662 (84%, scores 48%) |  |
| **7.Bd3** | +0.20 | Bd3 +0.20 | 0.00 | 102 (88%) | 198988 (35%, scores 54%) |  |

### 5…Bc5 6.Nxc6 dxc6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bc5 6.Nxc6 dxc6 7.Qxd8+ Kxd8`

**Final position:** +0.60 (Stockfish continues f3 Re8 Bf4 Be6 a4 a6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…dxc6 | +0.65 | bxc6 +0.19 |  | 2 (2%) | 78109 (15%, scores 44%) |  |
| **7.Qxd8+** | +0.72 | Qxd8+ +0.72 | 0.00 | 2 (100%) | 51166 (64%, scores 60%) |  |
| 7…Kxd8 | +0.73 | Kxd8 +0.73 |  | 2 (100%) | 51130 (100%, scores 40%) |  |

### 5…Nxd4: centralised queen

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Nxd4 6.Qxd4 d6 7.Bf4 Be7 8.O-O-O`

**Final position:** +1.25 (Stockfish continues O-O Kb1 Be6 f3 Nd7 Qd2)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Nxd4 | +1.16 | Bb4 +0.04 |  | 13 (0%) | 1253893 (24%, scores 41%) |  |
| **6.Qxd4** | +1.10 | Qxd4 +1.10 | 0.00 | 13 (100%) | 1250470 (100%, scores 59%) |  |
| 6…d6 | +1.15 | d6 +1.15 |  | 16 (100%) | 754464 (44%, scores 43%) |  |
| **7.Bf4** | +1.12 | Bf4 +1.12 | 0.00 | 2 (7%) | 129305 (7%, scores 64%) |  |
| 7…Be7 | +1.26 | Be7 +1.26 |  | 2 (100%) | 124725 (75%, scores 38%) |  |
| **8.O-O-O** | +1.33 | O-O-O +1.33 | 0.00 | 2 (100%) | 99983 (72%, scores 63%) |  |

### 5…d6: into the Spanish

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 d6 6.Bb5 Bd7 7.O-O`

**Final position:** +0.63 (Stockfish continues Be7 Nxc6 Bxc6 Bxc6+ bxc6 f4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…d6 | +0.74 | Bb4 +0.04 |  | 89 (1%) | 333000 (6%, scores 47%) |  |
| **6.Bb5** | +0.79 | Bb5 +0.79 | 0.00 | 90 (34%) | 146992 (17%, scores 55%) |  |
| 6…Bd7 | +0.72 | Bd7 +0.72 |  | 236 (100%) | 468266 (98%, scores 45%) |  |
| **7.O-O** | +0.78 | O-O +0.78 | 0.00 | 174 (56%) | 228163 (35%, scores 56%) |  |

### 5…Nxd4 6.Qxd4 b6? 7.e5!

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Nxd4 6.Qxd4 b6 7.e5`

**Final position:** +5.21 (Stockfish continues Ng8 Bc4 Bb7 O-O Bc5 Qg4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…b6 | +5.12 | d6 +1.15 |  | 0 (0%) | 286986 (17%, scores 40%) |  |
| **7.e5** | +5.20 | e5 +5.20 | 0.00 | 0 (0%) | 66734 (20%, scores 64%) |  |

### 5…Nxd4 6.Qxd4 Be7? 7.e5!

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Nxd4 6.Qxd4 Be7 7.e5`

**Final position:** +5.90 (Stockfish continues d5 exf6 Bxf6 Qd1 Be6 Be2)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…Be7 | +5.59 | d6 +1.15 |  | 0 (0%) | 230318 (13%, scores 39%) |  |
| **7.e5** | +5.92 | e5 +5.92 | 0.00 | 0 (0%) | 60688 (25%, scores 68%) |  |

### 5…Nxd4 6.Qxd4 c5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Nxd4 6.Qxd4 c5 7.Qd3`

**Final position:** +3.42 (Stockfish continues d6 Bf4 Be6 O-O-O a6 Bxd6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…c5 | +3.12 | d6 +1.15 |  | 0 (0%) | 258203 (15%, scores 41%) |  |
| **7.Qd3** | +3.13 | Qd3 +3.13 | 0.00 | 0 (0%) | 50192 (19%, scores 64%) |  |

### 4…Bb4 5.Nxe5 Qe7

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 Bb4 5.Nxe5 Qe7 6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3`

**Final position:** +0.25 (Stockfish continues Nd6 c3 Nf5 Nxc6 dxc6 Qxe7+)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…Bb4 | +0.26 | exd4 +0.00 |  | 570 (9%) | 365951 (7%, scores 49%) |  |
| **5.Nxe5** | +0.38 | Nxe5 +0.38 | 0.00 | 424 (74%) | 40548 (11%, scores 60%) |  |
| 5…Qe7 | +0.39 | Bxc3+ +0.36 |  | 162 (38%) | 5377 (13%, scores 52%) |  |
| **6.Qd3** | +0.41 | Qd3 +0.41 | 0.00 | 90 (56%) | 1861 (34%, scores 53%) |  |
| 6…Bxc3+ | +0.45 | Bxc3+ +0.45 |  | 11 (12%) | 324 (17%, scores 54%) |  |
| **7.Qxc3** | +0.29 | Qxc3 +0.29 | 0.00 | 11 (100%) | 169 (52%, scores 53%) |  |
| 7…Nxe4 | +0.22 | Nxe4 +0.22 |  | 11 (100%) | 163 (96%, scores 47%) |  |
| **8.Qe3** | +0.33 | Qe3 +0.33 | 0.00 | 9 (82%) | 131 (80%, scores 54%) |  |

### 4…Bb4 5.Nxe5 Nxe4? 6.Qg4!

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 Bb4 5.Nxe5 Nxe4 6.Qg4 Nxc3 7.Qxg7 Rf8 8.a3`

**Final position:** +1.22 (Stockfish continues Ba5 Nxc6 dxc6 Qe5+ Qe7 Qxe7+)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Nxe4 | +0.39 | Bxc3+ +0.36 |  | 79 (19%) | 13904 (34%, scores 42%) |  |
| **6.Qg4** | +1.15 | Qg4 +1.15 | 0.00 | 67 (85%) | 9031 (62%, scores 61%) |  |
| 6…Nxc3 | +1.20 | Nxc3 +1.20 |  | 66 (99%) | 6465 (72%, scores 45%) |  |
| **7.Qxg7** | +1.21 | Qxg7 +1.21 | 0.00 | 66 (100%) | 5357 (83%, scores 57%) |  |
| 7…Rf8 | +1.14 | Ne4+ +1.13 |  | 59 (89%) | 4054 (76%, scores 46%) |  |
| **8.a3** | +1.28 | a3 +1.28 | 0.00 | 57 (97%) | 3248 (80%, scores 57%) |  |

### 4…Bb4 5.Nxe5 Nxe5? 6.dxe5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 Bb4 5.Nxe5 Nxe5 6.dxe5 Nxe4 7.Qg4`

**Final position:** +3.88 (Stockfish continues d5 Qxg7 Rf8 Bd3 Nxc3 a3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Nxe5 | +3.10 | Bxc3+ +0.36 |  | 4 (1%) | 13498 (33%, scores 33%) |  |
| **6.dxe5** | +3.12 | dxe5 +3.12 | 0.00 | 4 (100%) | 28432 (98%, scores 63%) |  |
| 6…Nxe4 | +3.22 | Nxe4 +3.22 |  | 4 (100%) | 23294 (82%, scores 38%) |  |
| **7.Qg4** | +3.45 | Qg4 +3.45 | 0.00 | 3 (75%) | 8625 (37%, scores 71%) |  |

### 4…Bb4 5.Nxe5 Bxc3+

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 Bb4 5.Nxe5 Bxc3+ 6.bxc3 Qe7 7.f3 Nxe5 8.dxe5 Qxe5 9.Qd4`

**Final position:** +0.64 (Stockfish continues d6 a4 O-O Qxe5 dxe5 Ba3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Bxc3+ | +0.36 | Bxc3+ +0.36 |  | 99 (23%) | 5001 (12%, scores 34%) |  |
| **6.bxc3** | +0.71 | bxc3 +0.71 | 0.00 | 99 (100%) | 4985 (100%, scores 66%) |  |
| 6…Qe7 | +0.69 | Qe7 +0.69 |  | 99 (100%) | 1072 (21%, scores 52%) |  |
| **7.f3** | +0.72 | f3 +0.72 | 0.00 | 17 (17%) | 60 (5%, scores 53%) |  |
| 7…Nxe5 | +0.77 | Nxe5 +0.77 |  | 17 (100%) | 61 (98%, scores 48%) |  |
| **8.dxe5** | +0.67 | dxe5 +0.67 | 0.00 | 17 (100%) | 61 (100%, scores 52%) |  |
| 8…Qxe5 | +0.67 | Qxe5 +0.67 |  | 17 (100%) | 65 (98%, scores 48%) |  |
| **9.Qd4** | +0.67 | Qd4 +0.67 | 0.00 | 17 (100%) | 69 (72%, scores 52%) |  |

### 4…d6 5.Bb5 exd4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 d6 5.Bb5 exd4 6.Nxd4 Bd7 7.O-O`

**Final position:** +0.63 (Stockfish continues Be7 Nxc6 Bxc6 Bxc6+ bxc6 f4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…d6 | +0.67 | exd4 +0.00 |  | 11 (0%) | 296048 (6%, scores 41%) |  |
| **5.Bb5** | +0.85 | d5 +0.87 | 0.02 | 49 (49%) | 59548 (12%, scores 60%) |  |
| 5…exd4 | +0.71 | exd4 +0.71 |  | 183 (59%) | 380844 (61%, scores 44%) |  |
| **6.Nxd4** | +0.68 | Nxd4 +0.68 | 0.00 | 146 (80%) | 329898 (87%, scores 56%) |  |

### 4…d6 5.Bb5 Bd7

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 d6 5.Bb5 Bd7 6.Bxc6 Bxc6 7.Qd3`

**Final position:** +1.05 (Stockfish continues exd4 Nxd4 g6 Bg5 Bg7 O-O-O)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…Bd7 | +0.99 | exd4 +0.71 |  | 124 (40%) | 149922 (24%, scores 43%) |  |
| **6.Bxc6** | +0.95 | Bxc6 +0.95 | 0.00 | 42 (20%) | 42578 (22%, scores 57%) |  |
| 6…Bxc6 | +1.12 | Bxc6 +1.12 |  | 42 (100%) | 34164 (80%, scores 45%) |  |
| **7.Qd3** | +1.02 | Qe2 +1.15 | 0.13 | 43 (91%) | 4616 (10%, scores 70%) |  |

### 4…d6 5.Bb5 a6?

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 d6 5.Bb5 a6 6.Bxc6+ bxc6 7.dxe5`

**Final position:** +3.16 (Stockfish continues Ng4 Bf4 dxe5 Qxd8+ Kxd8 Bxe5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…a6 | +3.08 | exd4 +0.71 |  | 0 (0%) | 55640 (9%, scores 32%) |  |
| **6.Bxc6+** | +2.99 | Bxc6+ +2.99 | 0.00 | 0 (0%) | 37752 (68%, scores 74%) |  |
| 6…bxc6 | +3.04 | bxc6 +3.04 |  | 0 (0%) | 37717 (100%, scores 26%) |  |
| **7.dxe5** | +3.11 | dxe5 +3.11 | 0.00 | 0 (0%) | 37857 (93%, scores 76%) |  |

### Gaps: common club replies not covered

"Frequency" is roughly how many of every 100 Four Knights games (with you playing this repertoire) reach that reply.

- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 O-O 8.O-O`: **Bxc3** (10% of club games in that position)
- **1.1 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 O-O 8.O-O`: **d6** (10% of club games in that position)

### Before the Four Knights (other openings)

- After `1.e4`: c5 (24% of club games)
- After `1.e4`: e6 (11% of club games)
- After `1.e4`: d5 (9% of club games)
- After `1.e4`: c6 (8% of club games)
- After `1.e4 e5 2.Nf3`: d6 (15% of club games)
- After `1.e4 e5 2.Nf3`: Nf6 (11% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3`: Bc5 (28% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3`: d6 (10% of club games)

## White: Italian 4.Bc4

### 4…Bc5: quiet Italian

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 d6 6.O-O O-O 7.h3`

**Final position:** +0.22 (Stockfish continues Na5 Bb3 c6 Na4 Nxb3 axb3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| **1.e4** | +0.22 | e4 +0.22 | 0.00 | 1309466 (45%) | 1524784942 (59%, scores 51%) |  |
| 1…e5 | +0.23 | e5 +0.23 |  | 314452 (24%) | 528407918 (35%, scores 47%) |  |
| **2.Nf3** | +0.19 | Nf3 +0.19 | 0.00 | 289894 (92%) | 339392524 (64%, scores 53%) |  |
| 2…Nc6 | +0.25 | Nc6 +0.25 |  | 248258 (86%) | 224509319 (66%, scores 47%) |  |
| **3.Nc3** | +0.11 | Bb5 +0.16 | 0.05 | 14272 (6%) | 16668473 (7%, scores 52%) |  |
| 3…Nf6 | +0.13 | Nf6 +0.13 |  | 13457 (92%) | 9989617 (48%, scores 48%) |  |
| **4.Bc4** | -0.14 | d4 +0.12 | 0.26 | 224 (1%) | 5844492 (32%, scores 49%) |  |
| 4…Bc5 | +0.06 | Nxe4 -0.18 |  | 124 (33%) | 4744090 (41%, scores 50%) |  |
| **5.d3** | +0.41 | d3 +0.41 | 0.00 | 426 (88%) | 4510754 (52%, scores 52%) |  |
| 5…d6 | +0.40 | h6 +0.38 |  | 858 (45%) | 2102038 (36%, scores 50%) |  |
| **6.O-O** | +0.41 | Na4 +0.48 | 0.07 | 34 (4%) | 242948 (10%, scores 46%) |  |
| 6…O-O | +0.43 | h6 +0.43 |  | 13 (14%) | 100756 (12%, scores 49%) |  |
| **7.h3** | +0.25 | Na4 +0.46 | 0.21 | 7 (21%) | 207682 (33%, scores 54%) |  |

### 4…Bc5 5.d3 O-O

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 O-O 6.O-O d6 7.h3`

**Final position:** +0.22 (Stockfish continues Na5 Bb3 c6 Na4 Nxb3 axb3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…O-O | +0.45 | h6 +0.38 |  | 110 (6%) | 1573336 (27%, scores 46%) |  |
| **6.O-O** | +0.37 | Bg5 +0.41 | 0.04 | 43 (38%) | 335566 (21%, scores 53%) |  |
| 6…d6 | +0.41 | h6 +0.39 |  | 20 (16%) | 507343 (37%, scores 47%) |  |

### 4…Bc5 5.d3 h6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 h6 6.O-O`

**Final position:** +0.36 (Stockfish continues O-O h3 d6 Na4 Na5 Nxc5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…h6 | +0.38 | h6 +0.38 |  | 611 (32%) | 1688338 (29%, scores 50%) |  |
| **6.O-O** | +0.39 | O-O +0.39 | 0.00 | 213 (34%) | 701254 (25%, scores 49%) |  |

### 4…Bc5: 6…Bg4 pin

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 d6 6.O-O Bg4 7.h3 Bxf3 8.Qxf3`

**Final position:** +0.39 (Stockfish continues Nd4 Qd1 O-O Bg5 c6 Na4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…Bg4 | +0.52 | h6 +0.43 |  | 20 (21%) | 346966 (42%, scores 59%) |  |
| **7.h3** | +0.48 | Na4 +0.53 | 0.05 | 13 (65%) | 195094 (52%, scores 43%) |  |
| 7…Bxf3 | +0.40 | Bh5 +0.32 |  | 0 (0%) | 13624 (7%, scores 46%) |  |
| **8.Qxf3** | +0.47 | Qxf3 +0.47 | 0.00 | 0 (0%) | 13484 (99%, scores 55%) |  |

### 4…Bc5: 6…Bg4 7.h3 Bh5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 d6 6.O-O Bg4 7.h3 Bh5 8.Nd5`

**Final position:** +0.06 (Stockfish continues Nxd5 Bxd5 O-O Be3 Bb6 g4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7…Bh5 | +0.32 | Bh5 +0.32 |  | 13 (100%) | 161071 (83%, scores 59%) |  |
| **8.Nd5** | +0.08 | Bg5 +0.11 | 0.03 | 2 (14%) | 11823 (7%, scores 40%) |  |

### 4…Bc5: 6…h6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 d6 6.O-O h6 7.Na4`

**Final position:** +0.36 (Stockfish continues Bb6 h3 Na5 Bd5 O-O a3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…h6 | +0.43 | h6 +0.43 |  | 24 (25%) | 196832 (24%, scores 56%) |  |
| **7.Na4** | +0.38 | Na4 +0.38 | 0.00 | 66 (70%) | 42107 (5%, scores 51%) |  |

### 4…Bc5 5.d3 O-O 6.O-O h6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 O-O 6.O-O h6 7.h3`

**Final position:** +0.33 (Stockfish continues a6 Be3 d6 a4 Bxe3 fxe3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6…h6 | +0.39 | h6 +0.39 |  | 90 (71%) | 570771 (41%, scores 52%) |  |
| **7.h3** | +0.34 | h3 +0.34 | 0.00 | 98 (49%) | 262310 (24%, scores 51%) |  |

### 4…h6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 h6 5.d4 exd4 6.Nxd4`

**Final position:** +0.73 (Stockfish continues Bb4 Nxc6 bxc6 O-O d6 e5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…h6 | +0.80 | Nxe4 -0.18 |  | 1 (0%) | 824819 (7%, scores 46%) |  |
| **5.d4** | +0.88 | d4 +0.88 | 0.00 | 1 (50%) | 402212 (21%, scores 57%) |  |
| 5…exd4 | +0.76 | exd4 +0.76 |  | 1 (100%) | 308789 (75%, scores 44%) |  |
| **6.Nxd4** | +0.78 | Nxd4 +0.78 | 0.00 | 1 (100%) | 302072 (98%, scores 56%) |  |

### 4…Nxe4: the fork trick

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bd3 dxe4 7.Bxe4 Bd6 8.O-O O-O 9.Re1`

**Final position:** +0.14 (Stockfish continues Bg4 c3 Kh8 h3 Bh5 Bxc6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…Nxe4 | -0.18 | Nxe4 -0.18 |  | 214 (57%) | 2455208 (21%, scores 59%) |  |
| **5.Nxe4** | -0.18 | Nxe4 -0.18 | 0.00 | 165 (68%) | 1318305 (53%, scores 38%) |  |
| 5…d5 | -0.13 | d5 -0.13 |  | 165 (100%) | 1315637 (100%, scores 62%) |  |
| **6.Bd3** | -0.11 | Bd3 -0.11 | 0.00 | 140 (85%) | 331466 (25%, scores 45%) |  |
| 6…dxe4 | -0.11 | dxe4 -0.11 |  | 130 (93%) | 304366 (92%, scores 54%) |  |
| **7.Bxe4** | -0.13 | Bxe4 -0.13 | 0.00 | 130 (100%) | 304263 (100%, scores 46%) |  |
| 7…Bd6 | -0.14 | Bd6 -0.14 |  | 120 (92%) | 162089 (53%, scores 58%) |  |
| **8.O-O** | +0.00 | O-O +0.00 | 0.00 | 64 (53%) | 70909 (44%, scores 43%) |  |
| 8…O-O | +0.18 | Bg4 +0.16 |  | 60 (94%) | 54894 (77%, scores 58%) |  |
| **9.Re1** | +0.20 | Re1 +0.20 | 0.00 | 40 (67%) | 10301 (19%, scores 50%) |  |

### 4…Nxe4: 7…Bc5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bd3 dxe4 7.Bxe4 Bc5 8.O-O`

**Final position:** +0.36 (Stockfish continues O-O d3 f6 c3 Kh8 h3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7…Bc5 | +0.38 | Bd6 -0.14 |  | 0 (0%) | 33009 (11%, scores 50%) |  |
| **8.O-O** | +0.36 | c3 +0.37 | 0.01 | 0 (0%) | 14799 (44%, scores 52%) |  |

### 4…Bb4 5.d3 Bxc3+

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bb4 5.d3 Bxc3+ 6.bxc3 d6 7.O-O`

**Final position:** +0.37 (Stockfish continues h6 Bb3 O-O Re1 Re8 Nd2)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…Bb4 | +0.15 | Nxe4 -0.18 |  | 12 (3%) | 1333171 (12%, scores 49%) |  |
| **5.d3** | +0.29 | Nd5 +0.54 | 0.25 | 6 (18%) | 811849 (52%, scores 52%) |  |
| 5…Bxc3+ | +0.42 | d6 +0.39 |  | 4 (3%) | 202560 (23%, scores 46%) |  |
| **6.bxc3** | +0.42 | bxc3 +0.42 | 0.00 | 4 (100%) | 201988 (100%, scores 54%) |  |
| 6…d6 | +0.35 | d6 +0.35 |  | 2 (50%) | 46811 (21%, scores 46%) |  |
| **7.O-O** | +0.39 | Bb3 +0.39 | 0.00 | 1 (50%) | 11752 (24%, scores 54%) |  |

### 4…Bb4 5.d3 O-O

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bb4 5.d3 O-O 6.O-O`

**Final position:** +0.32 (Stockfish continues Bxc3 bxc3 h6 Re1 d6 Bb3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…O-O | +0.38 | d6 +0.39 |  | 14 (10%) | 265327 (30%, scores 47%) |  |
| **6.O-O** | +0.37 | O-O +0.37 | 0.00 | 15 (100%) | 105410 (38%, scores 54%) |  |

### 4…Bb4 5.d3 d6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bb4 5.d3 d6 6.O-O`

**Final position:** +0.24 (Stockfish continues Na5 Bb3 Nxb3 axb3 h6 Ne2)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…d6 | +0.39 | d6 +0.39 |  | 60 (42%) | 163112 (19%, scores 49%) |  |
| **6.O-O** | +0.28 | O-O +0.28 | 0.00 | 43 (68%) | 36100 (21%, scores 52%) |  |

### 4…Be7: Hungarian-style

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Be7 5.d3 O-O 6.O-O d6 7.a4`

**Final position:** +0.47 (Stockfish continues Bg4 h3 Bxf3 Qxf3 Nd4 Qd1)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…Be7 | +0.37 | Nxe4 -0.18 |  | 26 (7%) | 1121695 (10%, scores 50%) |  |
| **5.d3** | +0.40 | O-O +0.43 | 0.03 | 17 (41%) | 843026 (47%, scores 50%) |  |
| 5…O-O | +0.44 | O-O +0.44 |  | 149 (28%) | 822170 (59%, scores 50%) |  |
| **6.O-O** | +0.40 | a3 +0.40 | 0.00 | 44 (30%) | 222900 (27%, scores 50%) |  |
| 6…d6 | +0.47 | h6 +0.45 |  | 470 (99%) | 373343 (72%, scores 52%) |  |
| **7.a4** | +0.52 | a4 +0.52 | 0.00 | 271 (57%) | 15983 (3%, scores 52%) |  |

### 4…Be7 5.d3 d6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Be7 5.d3 d6 6.a4 O-O 7.O-O`

**Final position:** +0.47 (Stockfish continues Bg4 h3 Bxf3 Qxf3 Nd4 Qd1)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…d6 | +0.44 | O-O +0.44 |  | 382 (72%) | 454679 (33%, scores 51%) |  |
| **6.a4** | +0.36 | a3 +0.36 | 0.00 | 90 (23%) | 8275 (1%, scores 52%) |  |
| 6…O-O | +0.43 | Nb4 +0.38 |  | 82 (84%) | 5385 (45%, scores 49%) |  |
| **7.O-O** | +0.44 | O-O +0.44 | 0.00 | 51 (47%) | 3408 (23%, scores 51%) |  |

### 4…d6?! 5.Ng5 Be6

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 d6 5.Ng5 Be6 6.Nxe6 fxe6 7.Bxe6`

**Final position:** +3.03 (Stockfish continues g6 d3 Nd4 Bh3 Bg7 O-O)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4…d6 | +1.50 | Nxe4 -0.18 |  | 0 (0%) | 690589 (6%, scores 46%) |  |
| **5.Ng5** | +1.61 | Ng5 +1.61 | 0.00 | 1 (100%) | 136644 (12%, scores 60%) |  |
| 5…Be6 | +2.28 | d5 +1.66 |  | 0 (0%) | 61275 (45%, scores 41%) |  |
| **6.Nxe6** | +2.82 | Nxe6 +2.82 | 0.00 | 0 (0%) | 22750 (37%, scores 63%) |  |
| 6…fxe6 | +2.95 | fxe6 +2.95 |  | 0 (0%) | 22685 (100%, scores 37%) |  |
| **7.Bxe6** | +3.13 | Bxe6 +3.13 | 0.00 | 0 (0%) | 21594 (95%, scores 64%) |  |

### 4…d6?! 5.Ng5 d5

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 d6 5.Ng5 d5 6.exd5 Na5 7.Bb5+ c6 8.dxc6 bxc6 9.Be2`

**Final position:** +1.54 (Stockfish continues Be7 d3 Rb8 O-O O-O Re1)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5…d5 | +1.66 | d5 +1.66 |  | 1 (100%) | 57910 (42%, scores 42%) |  |
| **6.exd5** | +1.48 | exd5 +1.48 | 0.00 | 1 (100%) | 49212 (85%, scores 59%) |  |
| 6…Na5 | +1.67 | Na5 +1.67 |  | 1 (100%) | 27012 (55%, scores 45%) |  |
| **7.Bb5+** | +1.65 | Bb5+ +1.65 | 0.00 | 1 (100%) | 17710 (66%, scores 58%) |  |
| 7…c6 | +1.57 | c6 +1.57 |  | 1 (100%) | 13327 (75%, scores 42%) |  |
| **8.dxc6** | +1.53 | dxc6 +1.53 | 0.00 | 1 (100%) | 13184 (99%, scores 58%) |  |
| 8…bxc6 | +1.65 | bxc6 +1.65 |  | 1 (100%) | 11877 (90%, scores 42%) |  |
| **9.Be2** | +1.53 | Ba4 +1.69 | 0.16 | 0 (0%) | 1823 (15%, scores 59%) |  |

### Gaps: common club replies not covered

"Frequency" is roughly how many of every 100 Four Knights games (with you playing this repertoire) reach that reply.

- **1.9 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bd3 dxe4 7.Bxe4`: **f5** (10% of club games in that position)
- **1.9 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bd3 dxe4 7.Bxe4`: **Bg4** (10% of club games in that position)
- **1.4 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bb4 5.d3`: **d5** (12% of club games in that position)
- **1.3 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bb4 5.d3`: **h6** (11% of club games in that position)
- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 d6 6.O-O`: **Be6** (8% of club games in that position)
- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bd3 dxe4 7.Bxe4`: **Bd7** (6% of club games in that position)
- **1.1 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bc5 5.d3 O-O 6.O-O`: **a6** (10% of club games in that position)
- **1.1 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Bb4 5.d3 Bxc3+ 6.bxc3`: **O-O** (39% of club games in that position)

### Before the Four Knights (other openings)

- After `1.e4`: c5 (24% of club games)
- After `1.e4`: e6 (11% of club games)
- After `1.e4`: d5 (9% of club games)
- After `1.e4`: c6 (8% of club games)
- After `1.e4 e5 2.Nf3`: d6 (15% of club games)
- After `1.e4 e5 2.Nf3`: Nf6 (11% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3`: Bc5 (28% of club games)
- After `1.e4 e5 2.Nf3 Nc6 3.Nc3`: d6 (10% of club games)

## Four Knights as Black

### Rubinstein vs 5.Nxd4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.e5 dxc3 7.exf6 Qxf6 8.dxc3 Qe5+ 9.Qe2 Qxe2+ 10.Kxe2 c6`

**Final position:** +0.13 (Stockfish continues Bd3 d5 Be3 a5 a4 Be7)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 1.e4 | +0.22 | e4 +0.22 |  | 1309466 (45%) | 1524784942 (59%, scores 51%) |  |
| **1…e5** | +0.23 | e5 +0.23 | 0.00 | 314452 (24%) | 528407918 (35%, scores 47%) |  |
| 2.Nf3 | +0.19 | Nf3 +0.19 |  | 289894 (92%) | 339392524 (64%, scores 53%) |  |
| **2…Nc6** | +0.25 | Nc6 +0.25 | 0.00 | 248258 (86%) | 224509319 (66%, scores 47%) |  |
| 3.Nc3 | +0.11 | Bb5 +0.16 |  | 14272 (6%) | 16668473 (7%, scores 52%) |  |
| **3…Nf6** | +0.13 | Nf6 +0.13 | 0.00 | 13457 (92%) | 9989617 (48%, scores 48%) |  |
| 4.Bb5 | +0.00 | d4 +0.12 |  | 6960 (41%) | 4370518 (24%, scores 53%) |  |
| **4…Nd4** | +0.02 | Nd4 +0.02 | 0.00 | 2719 (36%) | 571201 (11%, scores 50%) |  |
| 5.Nxd4 | +0.06 | Nxd4 +0.06 |  | 618 (23%) | 167885 (29%, scores 47%) |  |
| **5…exd4** | +0.08 | exd4 +0.08 | 0.00 | 618 (100%) | 167661 (100%, scores 53%) |  |
| 6.e5 | +0.14 | e5 +0.14 |  | 588 (95%) | 38008 (23%, scores 56%) |  |
| **6…dxc3** | -0.01 | dxc3 -0.01 | 0.00 | 588 (100%) | 35124 (92%, scores 44%) |  |
| 7.exf6 | +0.03 | exf6 +0.03 |  | 587 (100%) | 34889 (99%, scores 56%) |  |
| **7…Qxf6** | +0.05 | Qxf6 +0.05 | 0.00 | 583 (99%) | 24746 (71%, scores 46%) |  |
| 8.dxc3 | +0.10 | dxc3 +0.10 |  | 567 (97%) | 20052 (81%, scores 57%) |  |
| **8…Qe5+** | +0.05 | Be7 +0.00 | 0.05 | 245 (43%) | 4279 (21%, scores 44%) |  |
| 9.Qe2 | +0.02 | Qe2 +0.02 |  | 189 (77%) | 2011 (47%, scores 53%) |  |
| **9…Qxe2+** | +0.00 | Qxe2+ +0.00 | 0.00 | 189 (100%) | 1863 (93%, scores 47%) |  |
| 10.Kxe2 | +0.00 | Kxe2 +0.00 |  | 53 (28%) | 581 (30%, scores 50%) |  |
| **10…c6** | +0.02 | c6 +0.02 | 0.00 | 41 (82%) | 416 (72%, scores 51%) |  |

### Rubinstein vs 5.Ba4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Ba4 Bc5 6.Nxe5 O-O 7.Nd3 Bb6 8.e5 Ne8`

**Final position:** +0.02 (Stockfish continues Nd5 d6 Ne3 c5 c3 Nc6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.Ba4 | -0.22 | Nxd4 +0.06 |  | 842 (31%) | 67629 (12%, scores 52%) |  |
| **5…Bc5** | -0.04 | c6 -0.25 | 0.21 | 347 (41%) | 17964 (26%, scores 50%) |  |
| 6.Nxe5 | -0.09 | Nxe5 -0.09 |  | 244 (70%) | 4842 (27%, scores 53%) |  |
| **6…O-O** | +0.00 | O-O +0.00 | 0.00 | 224 (91%) | 3204 (64%, scores 49%) |  |
| 7.Nd3 | +0.07 | Nd3 +0.07 |  | 219 (98%) | 1777 (55%, scores 56%) |  |
| **7…Bb6** | +0.00 | Bb6 +0.00 | 0.00 | 217 (99%) | 1691 (95%, scores 44%) |  |
| 8.e5 | +0.01 | e5 +0.01 |  | 198 (91%) | 1283 (74%, scores 60%) |  |
| **8…Ne8** | +0.00 | Ne8 +0.00 | 0.00 | 183 (92%) | 704 (55%, scores 46%) |  |

### Rubinstein: punishing 5.Nxe5?

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxe5 Qe7 6.f4 Nxb5 7.Nxb5 d6 8.Nf3 Qxe4+ 9.Kf2 Ng4+`

**Final position:** -0.41 (Stockfish continues Kg1 Qc6 a4 Be7 h3 Nf6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.Nxe5 | -0.32 | Nxd4 +0.06 |  | 64 (2%) | 98145 (17%, scores 52%) |  |
| **5…Qe7** | -0.31 | Qe7 -0.31 | 0.00 | 50 (78%) | 24677 (25%, scores 58%) |  |
| 6.f4 | -0.49 | Nf3 -0.33 |  | 39 (78%) | 11312 (46%, scores 41%) |  |
| **6…Nxb5** | -0.55 | Nxb5 -0.55 | 0.00 | 39 (100%) | 8581 (76%, scores 62%) |  |
| 7.Nxb5 | -0.47 | Nxb5 -0.47 |  | 39 (100%) | 8539 (100%, scores 38%) |  |
| **7…d6** | -0.51 | d6 -0.51 | 0.00 | 35 (90%) | 7752 (89%, scores 64%) |  |
| 8.Nf3 | -0.45 | Nf3 -0.45 |  | 35 (100%) | 5317 (69%, scores 42%) |  |
| **8…Qxe4+** | -0.43 | Qxe4+ -0.43 | 0.00 | 31 (89%) | 4320 (81%, scores 61%) |  |
| 9.Kf2 | -0.38 | Kf2 -0.38 |  | 30 (97%) | 1137 (26%, scores 49%) |  |
| **9…Ng4+** | -0.35 | Ng4+ -0.35 | 0.00 | 22 (73%) | 726 (64%, scores 54%) |  |

### Rubinstein: 5.Nxe5? … 9.Qe2

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxe5 Qe7 6.f4 Nxb5 7.Nxb5 d6 8.Nf3 Qxe4+ 9.Qe2 Qxe2+ 10.Kxe2 Kd7`

**Final position:** -0.49 (Stockfish continues Nc3 a6 b3 b5 Bb2 Bb7)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 9.Qe2 | -0.91 | Kf2 -0.38 |  | 1 (3%) | 3139 (73%, scores 35%) |  |
| **9…Qxe2+** | -0.60 | Qxe2+ -0.60 | 0.00 | 1 (100%) | 2994 (95%, scores 66%) |  |
| 10.Kxe2 | -0.57 | Kxe2 -0.57 |  | 1 (100%) | 2992 (100%, scores 34%) |  |
| **10…Kd7** | -0.55 | Kd7 -0.55 | 0.00 | 0 (0%) | 781 (26%, scores 76%) |  |

### Rubinstein: 5.Nxe5? Qe7 6.Nf3

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxe5 Qe7 6.Nf3 Nxb5 7.Nxb5 Qxe4+ 8.Qe2 Qxe2+ 9.Kxe2 Nd5`

**Final position:** -0.19 (Stockfish continues d3 a6 Nc3 Nxc3+ bxc3 b6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6.Nf3 | -0.33 | Nf3 -0.33 |  | 11 (22%) | 11088 (45%, scores 44%) |  |
| **6…Nxb5** | -0.10 | Nxb5 -0.10 | 0.00 | 10 (91%) | 8130 (73%, scores 58%) |  |
| 7.Nxb5 | -0.30 | Nxb5 -0.30 |  | 10 (100%) | 7936 (98%, scores 42%) |  |
| **7…Qxe4+** | -0.21 | Qxe4+ -0.21 | 0.00 | 10 (100%) | 7320 (87%, scores 60%) |  |
| 8.Qe2 | -0.27 | Qe2 -0.27 |  | 9 (90%) | 6933 (95%, scores 40%) |  |
| **8…Qxe2+** | -0.21 | Qxe2+ -0.21 | 0.00 | 9 (100%) | 6695 (97%, scores 61%) |  |
| 9.Kxe2 | -0.28 | Kxe2 -0.28 |  | 9 (100%) | 6690 (100%, scores 39%) |  |
| **9…Nd5** | -0.33 | Nd5 -0.33 | 0.00 | 10 (100%) | 5142 (74%, scores 68%) |  |

### Rubinstein vs 5.Nxd4 exd4 6.Ne2

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.Ne2 c6 7.Bd3 d5`

**Final position:** -0.47 (Stockfish continues e5 Nd7 Nxd4 Nxe5 Bf5 Bxf5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6.Ne2 | -0.57 | e5 +0.14 |  | 3 (0%) | 92278 (55%, scores 44%) |  |
| **6…c6** | -0.52 | c6 -0.52 | 0.00 | 1 (33%) | 27612 (30%, scores 58%) |  |
| 7.Bd3 | -0.48 | Bd3 -0.48 |  | 1 (100%) | 12612 (46%, scores 43%) |  |
| **7…d5** | -0.60 | d5 -0.60 | 0.00 | 1 (100%) | 3784 (30%, scores 67%) |  |

### Rubinstein vs 5.O-O

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.O-O Nxb5 6.Nxb5 c6 7.Nc3 d6 8.d4 Qc7`

**Final position:** -0.03 (Stockfish continues Bg5 Be7 a4 h6 Bh4 Nh5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.O-O | +0.02 | Nxd4 +0.06 |  | 425 (16%) | 66866 (12%, scores 52%) |  |
| **5…Nxb5** | +0.01 | c6 +0.00 | 0.01 | 220 (52%) | 43252 (64%, scores 45%) |  |
| 6.Nxb5 | +0.00 | Nxb5 +0.00 |  | 220 (100%) | 43103 (100%, scores 55%) |  |
| **6…c6** | +0.02 | c6 +0.02 | 0.00 | 196 (89%) | 20766 (48%, scores 46%) |  |
| 7.Nc3 | +0.02 | Nc3 +0.02 |  | 196 (100%) | 20532 (99%, scores 55%) |  |
| **7…d6** | -0.08 | d6 -0.08 | 0.00 | 183 (93%) | 13337 (65%, scores 47%) |  |
| 8.d4 | -0.04 | d4 -0.04 |  | 182 (99%) | 10742 (78%, scores 54%) |  |
| **8…Qc7** | -0.10 | Qc7 -0.10 | 0.00 | 179 (98%) | 4568 (41%, scores 52%) |  |

### Rubinstein vs 5.Bc4

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Bc4 Bc5 6.Nxe5 Qe7 7.Nf3 d5`

**Final position:** +0.00 (Stockfish continues Bxd5 Bg4 d3 O-O-O Be3 Nxd5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.Bc4 | +0.00 | Nxd4 +0.06 |  | 712 (26%) | 104346 (18%, scores 51%) |  |
| **5…Bc5** | +0.00 | Bc5 +0.00 | 0.00 | 466 (65%) | 31951 (30%, scores 54%) |  |
| 6.Nxe5 | +0.00 | d3 +0.00 |  | 214 (46%) | 10690 (33%, scores 45%) |  |
| **6…Qe7** | +0.00 | Qe7 +0.00 | 0.00 | 191 (89%) | 4474 (36%, scores 61%) |  |
| 7.Nf3 | +0.00 | Nf3 +0.00 |  | 161 (84%) | 788 (18%, scores 49%) |  |
| **7…d5** | +0.00 | d5 +0.00 | 0.00 | 160 (99%) | 553 (70%, scores 55%) |  |

### Scotch Four Knights

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5 8.exd5 cxd5 9.O-O O-O 10.Bg5 c6`

**Final position:** +0.00 (Stockfish continues a3 Bd6 Re1 h6 Bh4 a5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4.d4 | +0.12 | d4 +0.12 |  | 6287 (37%) | 4793813 (26%, scores 55%) |  |
| **4…exd4** | +0.00 | exd4 +0.00 | 0.00 | 5710 (91%) | 4017749 (82%, scores 46%) |  |
| 5.Nxd4 | +0.03 | Nxd4 +0.03 |  | 5224 (91%) | 3784223 (94%, scores 54%) |  |
| **5…Bb4** | +0.04 | Bb4 +0.04 | 0.00 | 6168 (92%) | 2256298 (43%, scores 51%) |  |
| 6.Nxc6 | +0.11 | Nxc6 +0.11 |  | 6178 (100%) | 1763803 (77%, scores 51%) |  |
| **6…bxc6** | +0.11 | bxc6 +0.11 | 0.00 | 6164 (100%) | 1536359 (87%, scores 50%) |  |
| 7.Bd3 | +0.11 | Bd3 +0.11 |  | 6255 (100%) | 1262960 (71%, scores 52%) |  |
| **7…d5** | +0.10 | d5 +0.10 | 0.00 | 4436 (71%) | 648127 (51%, scores 50%) |  |
| 8.exd5 | +0.05 | exd5 +0.05 |  | 4209 (94%) | 504402 (77%, scores 52%) |  |
| **8…cxd5** | +0.00 | cxd5 +0.00 | 0.00 | 2978 (71%) | 376803 (75%, scores 48%) |  |
| 9.O-O | +0.00 | O-O +0.00 |  | 2746 (92%) | 319214 (84%, scores 53%) |  |
| **9…O-O** | -0.02 | c6 -0.02 | 0.00 | 2735 (100%) | 287134 (90%, scores 47%) |  |
| 10.Bg5 | -0.01 | Qf3 +0.00 |  | 2902 (64%) | 293879 (67%, scores 53%) |  |
| **10…c6** | +0.00 | c6 +0.00 | 0.00 | 2528 (87%) | 209807 (71%, scores 49%) |  |

### Belgrade Gambit

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nd5 Be7`

**Final position:** -0.07 (Stockfish continues Bd3 d6 h3 Be6 Nf4 a6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.Nd5 | -0.25 | Nxd4 +0.03 |  | 484 (8%) | 216421 (5%, scores 57%) |  |
| **5…Be7** | -0.07 | Nb4 -0.20 | 0.13 | 221 (46%) | 36316 (17%, scores 47%) |  |

### Italian: the fork trick

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bd3 dxe4 7.Bxe4 Bd6`

**Final position:** +0.00 (Stockfish continues O-O O-O Re1 Bg4 c3 Kh8)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4.Bc4 | -0.14 | d4 +0.12 |  | 224 (1%) | 5844492 (32%, scores 49%) |  |
| **4…Nxe4** | -0.18 | Nxe4 -0.18 | 0.00 | 214 (57%) | 2455208 (21%, scores 59%) |  |
| 5.Nxe4 | -0.18 | Nxe4 -0.18 |  | 165 (68%) | 1318305 (53%, scores 38%) |  |
| **5…d5** | -0.13 | d5 -0.13 | 0.00 | 165 (100%) | 1315637 (100%, scores 62%) |  |
| 6.Bd3 | -0.11 | Bd3 -0.11 |  | 140 (85%) | 331466 (25%, scores 45%) |  |
| **6…dxe4** | -0.11 | dxe4 -0.11 | 0.00 | 130 (93%) | 304366 (92%, scores 54%) |  |
| 7.Bxe4 | -0.13 | Bxe4 -0.13 |  | 130 (100%) | 304263 (100%, scores 46%) |  |
| **7…Bd6** | -0.14 | Bd6 -0.14 | 0.00 | 120 (92%) | 162089 (53%, scores 58%) |  |

### Italian: 6.Bxd5?

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bxd5 Qxd5 7.Nc3 Qd6`

**Final position:** -1.34 (Stockfish continues d3 Bg4 h3 Bh5 Ne4 Qd5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6.Bxd5 | -1.61 | Bd3 -0.11 |  | 11 (7%) | 650185 (49%, scores 37%) |  |
| **6…Qxd5** | -1.52 | Qxd5 -1.52 | 0.00 | 11 (100%) | 649359 (100%, scores 63%) |  |
| 7.Nc3 | -1.36 | Nc3 -1.36 |  | 7 (64%) | 370227 (57%, scores 38%) |  |
| **7…Qd6** | -1.34 | Qa5 -1.54 | 0.20 | 3 (43%) | 69897 (19%, scores 66%) |  |

### Italian: 6.Bxd5? Qxd5 7.d3

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bxd5 Qxd5 7.d3 Bg4`

**Final position:** -1.55 (Stockfish continues h3 Bh5 Bd2 O-O-O Bc3 Bb4)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 7.d3 | -1.56 | Nc3 -1.36 |  | 4 (36%) | 236890 (36%, scores 36%) |  |
| **7…Bg4** | -1.53 | Bf5 -1.60 | 0.07 | 3 (75%) | 117812 (49%, scores 67%) |  |

### Italian: 6.Bb5?

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Nxe4 d5 6.Bb5 dxe4 7.Nxe5 Qg5`

**Final position:** -3.52 (Stockfish continues d4 Qxg2 Rf1 Bd6 Nxc6 a6)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 6.Bb5 | -3.09 | Bd3 -0.11 |  | 11 (7%) | 159520 (12%, scores 37%) |  |
| **6…dxe4** | -2.95 | dxe4 -2.95 | 0.00 | 11 (100%) | 158061 (99%, scores 64%) |  |
| 7.Nxe5 | -3.21 | Nxe5 -3.21 |  | 10 (91%) | 103407 (65%, scores 39%) |  |
| **7…Qg5** | -3.22 | Qg5 -3.22 | 0.00 | 7 (70%) | 21604 (21%, scores 73%) |  |

### Italian: 5.Bxf7+

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.Bxf7+ Kxf7 6.Nxe4 d5`

**Final position:** -1.76 (Stockfish continues Ng3 e4 Ng1 h5 d4 exd3)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.Bxf7+ | -1.70 | Nxe4 -0.18 |  | 28 (12%) | 904171 (37%, scores 43%) |  |
| **5…Kxf7** | -1.46 | Kxf7 -1.46 | 0.00 | 28 (100%) | 902460 (100%, scores 57%) |  |
| 6.Nxe4 | -1.58 | Nxe4 -1.58 |  | 28 (100%) | 897322 (99%, scores 43%) |  |
| **6…d5** | -1.83 | d5 -1.83 | 0.00 | 27 (96%) | 766919 (85%, scores 58%) |  |

### Italian: 5.O-O

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bc4 Nxe4 5.O-O Nxc3 6.dxc3 f6`

**Final position:** -0.60 (Stockfish continues b4 Ne7 Re1 d6 Bb3 Bd7)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 5.O-O | -0.62 | Nxe4 -0.18 |  | 49 (20%) | 102495 (4%, scores 48%) |  |
| **5…Nxc3** | -0.59 | Nxc3 -0.59 | 0.00 | 56 (72%) | 107266 (78%, scores 51%) |  |
| 6.dxc3 | -0.53 | dxc3 -0.53 |  | 56 (100%) | 92102 (86%, scores 50%) |  |
| **6…f6** | -0.54 | f6 -0.54 | 0.00 | 8 (14%) | 8816 (9%, scores 58%) |  |

### Quiet 4.d3

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d3 d5 5.exd5 Nxd5`

**Final position:** -0.19 (Stockfish continues Nxe5 Nxe5 Qe2 Bd6 Nxd5 O-O)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4.d3 | -0.25 | d4 +0.12 |  | 23 (0%) | 1278098 (7%, scores 47%) |  |
| **4…d5** | -0.28 | Bb4 -0.29 | 0.01 | 9 (30%) | 285200 (14%, scores 57%) |  |
| 5.exd5 | -0.38 | Bg5 -0.35 |  | 7 (64%) | 181329 (62%, scores 44%) |  |
| **5…Nxd5** | -0.28 | Nxd5 -0.28 | 0.00 | 7 (100%) | 180055 (99%, scores 56%) |  |

### Halloween Gambit

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Nxe5 Nxe5 5.d4 Ng6 6.e5 Ng8`

**Final position:** -2.85 (Stockfish continues Bc4 c6 Qe2 Bb4 O-O d5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4.Nxe5 | -1.90 | d4 +0.12 |  | 16 (0%) | 674938 (4%, scores 55%) |  |
| **4…Nxe5** | -2.09 | Nxe5 -2.09 | 0.00 | 16 (100%) | 653122 (96%, scores 46%) |  |
| 5.d4 | -2.42 | d4 -2.42 |  | 16 (100%) | 647399 (99%, scores 55%) |  |
| **5…Ng6** | -2.46 | Ng6 -2.46 | 0.00 | 10 (63%) | 350895 (54%, scores 49%) |  |
| 6.e5 | -2.51 | e5 -2.51 |  | 10 (100%) | 337884 (96%, scores 51%) |  |
| **6…Ng8** | -2.72 | Ng8 -2.72 | 0.00 | 7 (70%) | 290460 (86%, scores 49%) |  |

### Glek System (4.g3)

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.g3 d5 5.exd5 Nxd5 6.Bg2 Nxc3 7.bxc3 Bd6`

**Final position:** +0.02 (Stockfish continues O-O O-O d4 Bf5 dxe5 Nxe5)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 4.g3 | -0.14 | d4 +0.12 |  | 1905 (11%) | 214967 (1%, scores 52%) |  |
| **4…d5** | +0.01 | Bc5 -0.19 | 0.20 | 663 (35%) | 45887 (17%, scores 53%) |  |
| 5.exd5 | +0.00 | exd5 +0.00 |  | 662 (100%) | 39992 (87%, scores 49%) |  |
| **5…Nxd5** | +0.04 | Nxd5 +0.04 | 0.00 | 623 (94%) | 39299 (98%, scores 51%) |  |
| 6.Bg2 | +0.09 | Bg2 +0.09 |  | 618 (98%) | 27778 (70%, scores 53%) |  |
| **6…Nxc3** | +0.06 | Nxc3 +0.06 | 0.00 | 527 (85%) | 18409 (66%, scores 48%) |  |
| 7.bxc3 | +0.05 | bxc3 +0.05 |  | 526 (100%) | 17936 (97%, scores 52%) |  |
| **7…Bd6** | +0.05 | Bc5 +0.00 | 0.05 | 283 (37%) | 8921 (36%, scores 48%) |  |

### Gaps: common club replies not covered

"Frequency" is roughly how many of every 100 Four Knights games (with you playing this repertoire) reach that reply.

- **1.8 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6`: **Bd2** (10% of club games in that position)
- **1.5 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Bc4 Bc5`: **O-O** (35% of club games in that position)
- **1.5 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4`: **f3** (6% of club games in that position)
- **1.5 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4`: **d3** (6% of club games in that position)
- **1.5 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5 8.exd5 cxd5 9.O-O O-O`: **h3** (17% of club games in that position)
- **1.4 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5`: **e5** (11% of club games in that position)
- **1.4 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d3 d5`: **Bg5** (20% of club games in that position)
- **1.3 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bb4`: **Bg5** (5% of club games in that position)
- **1.3 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4`: **Nd5** (19% of club games in that position)
- **1.2 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Ba4 Bc5`: **O-O** (43% of club games in that position)
- **1.1 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxd4 exd4 6.Ne2 c6`: **Bc4** (30% of club games in that position)
- **1.1 in 100** — after `1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Bc4 Bc5`: **d3** (26% of club games in that position)

### Before the Four Knights (other openings)

- After `the start`: d4 (27% of club games)
- After `1.e4 e5`: Bc4 (10% of club games)
- After `1.e4 e5`: f4 (9% of club games)
- After `1.e4 e5 2.Nf3 Nc6`: Bc4 (42% of club games)
- After `1.e4 e5 2.Nf3 Nc6`: Bb5 (26% of club games)
- After `1.e4 e5 2.Nf3 Nc6`: d4 (19% of club games)
