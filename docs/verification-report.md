# Repertoire verification report

Generated 2026-11-23 by `npm run verify`. Stockfish 19 at depth 22; Lichess masters database; Lichess games rated 1600–2200 (blitz, rapid, classical), shown as "club".

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

### Rubinstein: punishing 5.Nxe5?!

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

### Rubinstein: 5.Nxe5?! … 9.Qe2

`1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Nd4 5.Nxe5 Qe7 6.f4 Nxb5 7.Nxb5 d6 8.Nf3 Qxe4+ 9.Qe2 Qxe2+ 10.Kxe2 Kd7`

**Final position:** -0.49 (Stockfish continues Nc3 a6 b3 b5 Bb2 Bb7)

| Move | Eval after book move | Stockfish best | Loss | Masters games | Club games | Flags |
|---|---|---|---|---|---|---|
| 9.Qe2 | -0.91 | Kf2 -0.38 |  | 1 (3%) | 3139 (73%, scores 35%) |  |
| **9…Qxe2+** | -0.60 | Qxe2+ -0.60 | 0.00 | 1 (100%) | 2994 (95%, scores 66%) |  |
| 10.Kxe2 | -0.57 | Kxe2 -0.57 |  | 1 (100%) | 2992 (100%, scores 34%) |  |
| **10…Kd7** | -0.55 | Kd7 -0.55 | 0.00 | 0 (0%) | 781 (26%, scores 76%) |  |

### Rubinstein: 5.Nxe5?! Qe7 6.Nf3

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

## Strategy notes

Concrete claims in the opening strategy notes (`src/data/strategies/*.claims.ts`), checked at depth 22. Bands in pawns: level 0.00–0.30, slightly better 0.30–0.60, clearly better 0.60–1.50, winning 1.50 and up, with 0.15 slack at each edge. Moves: "sound" within 0.30 of best, "playable" within 0.60 of best, "dubious" more than 0.30 worse, "a mistake" more than 0.70 worse, "a blunder" more than 2.00 worse.

**902 of 902 claims hold.**

| Opening | Claim | Position | Expected | Stockfish | |
|---|---|---|---|---|---|
| King's Pawn Game (black) | "1…e5 claims an equal share of the centre" | `e4` | e5 is sound | e5 +0.25, within 0.00 of best | ✅ |
| King's Pawn Game (black) | "1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry" | `e4` | c5 is sound | c5 +0.29, within 0.06 of best | ✅ |
| King's Pawn Game (black) | "1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry" | `e4` | e6 is sound | e6 +0.44, within 0.21 of best | ✅ |
| King's Pawn Game (black) | "1…c5, 1…e6 and 1…c6 are the main ways to avoid symmetry" | `e4` | c6 is sound | c6 +0.34, within 0.11 of best | ✅ |
| King's Knight Opening (black) | "2…Nc6 is the natural defence of e5" | `e4 e5 Nf3` | Nc6 is sound | Nc6 +0.25, within 0.00 of best | ✅ |
| King's Knight Opening: Normal Variation (black) | "…Nf6 against Nc3 and Bc4" | `e4 e5 Nf3 Nc6 Nc3` | Nf6 is sound | Nf6 +0.04, within 0.00 of best | ✅ |
| King's Knight Opening: Normal Variation (black) | "…Nf6 against Nc3 and Bc4" | `e4 e5 Nf3 Nc6 Bc4` | Nf6 is sound | Nf6 +0.19, within 0.00 of best | ✅ |
| King's Knight Opening: Normal Variation (black) | "…Nf6 or …a6 against Bb5" | `e4 e5 Nf3 Nc6 Bb5` | Nf6 is sound | Nf6 +0.14, within 0.00 of best | ✅ |
| King's Knight Opening: Normal Variation (black) | "…Nf6 or …a6 against Bb5" | `e4 e5 Nf3 Nc6 Bb5` | a6 is sound | a6 +0.21, within 0.05 of best | ✅ |
| King's Knight Opening: Normal Variation (black) | "…exd4 against d4" | `e4 e5 Nf3 Nc6 d4` | exd4 is sound | exd4 +0.08, within 0.00 of best | ✅ |
| Petrov's Defense (white) | "3.Nxe5 is the main line" | `e4 e5 Nf3 Nf6` | Nxe5 is sound | Nxe5 +0.21, within 0.00 of best | ✅ |
| Petrov's Defense (white) | "after 3…d6 the knight retreats and play is level" | `e4 e5 Nf3 Nf6 Nxe5 d6 Nf3` | level | +0.26 (Nxe4 d4 Be7 Bd3) | ✅ |
| Petrov's Defense (black) | "Against 3.Nxe5 play 3…d6 first" | `e4 e5 Nf3 Nf6 Nxe5` | d6 is sound | d6 +0.29, within 0.00 of best | ✅ |
| Petrov's Defense (black) | "4.Qe2 forces …Qe7" | `e4 e5 Nf3 Nf6 Nxe5 Nxe4` | Qe2 is sound | Qe2 +0.54, within 0.00 of best | ✅ |
| Petrov's Defense (black) | "4.Qe2 forces …Qe7" | `e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2` | Qe7 is sound | Qe7 +0.60, within 0.00 of best | ✅ |
| Petrov's Defense (black) | "White keeps a small edge" | `e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Qe7 Qxe4 d6` | White slightly better | +0.65 (d4 dxe5 dxe5 Nc6) | ✅ |
| Petrov's Defense (black) | "…Nf6?? loses the queen to Nc6+" | `e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2` | Nf6 is a blunder | Nf6 loses 7.76 (+8.32; best Qe7 +0.56) | ✅ |
| Petrov's Defense (black) | "…Nf6?? loses the queen to Nc6+" | `e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6 Nc6+` | White winning | +8.26 (Qe7 Nxe7 Bxe7 Qd1) | ✅ |
| Petrov's Defense: Italian Variation (white) | "If Black takes on e4, Nc3 gives you fast development" | `e4 e5 Nf3 Nf6 Bc4 Nxe4` | Nc3 is sound | Nc3 -0.71, within 0.23 of best | ✅ |
| Petrov's Defense: Italian Variation (black) | "…Nxe4 is best" | `e4 e5 Nf3 Nf6 Bc4` | Nxe4 is sound | Nxe4 -0.47, within 0.00 of best | ✅ |
| Petrov's Defense: Italian Variation (black) | "after Nc3 Nxc3 dxc3, hold e5 with …f6" | `e4 e5 Nf3 Nf6 Bc4 Nxe4 Nc3 Nxc3 dxc3` | f6 is sound | f6 -0.67, within 0.00 of best | ✅ |
| Petrov's Defense: Italian Variation (black) | "3…Nc6, a Two Knights, is a quieter, level alternative" | `e4 e5 Nf3 Nf6 Bc4 Nc6` | level | +0.24 (d3 Bc5 O-O O-O) | ✅ |
| Petrov's Defense: Modern Attack (white) | "After 3…Nxe4, Bd3" | `e4 e5 Nf3 Nf6 d4 Nxe4` | Bd3 is sound | Bd3 +0.27, within 0.00 of best | ✅ |
| Petrov's Defense: Modern Attack (white) | "undermine the e4 knight with c4" | `e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5 Nxe5 Bd6 O-O O-O` | c4 is sound | c4 +0.30, within 0.00 of best | ✅ |
| Petrov's Defense: Modern Attack (white) | "After 3…exd4, e5 kicks the knight and Qxd4 regains the pawn" | `e4 e5 Nf3 Nf6 d4 exd4` | e5 is sound | e5 +0.50, within 0.00 of best | ✅ |
| Petrov's Defense: Modern Attack (black) | "3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line" | `e4 e5 Nf3 Nf6 d4` | Nxe4 is sound | Nxe4 +0.21, within 0.00 of best | ✅ |
| Petrov's Defense: Modern Attack (black) | "3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line" | `e4 e5 Nf3 Nf6 d4 Nxe4 Bd3` | d5 is sound | d5 +0.28, within 0.00 of best | ✅ |
| Petrov's Defense: Modern Attack (black) | "3…Nxe4 4.Bd3 d5 5.Nxe5 is the main line" | `e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5` | Nxe5 is sound | Nxe5 +0.22, within 0.00 of best | ✅ |
| Petrov's Defense: Three Knights Game (white) | "After …Nc6 play Bb5" | `e4 e5 Nf3 Nf6 Nc3 Nc6` | Bb5 is sound | Bb5 +0.12, within 0.00 of best | ✅ |
| Petrov's Defense: Three Knights Game (white) | "3.Nxe5 is a little stronger, but Nc3 keeps you on familiar ground" | `e4 e5 Nf3 Nf6` | Nxe5 is sound | Nxe5 +0.21, within 0.00 of best | ✅ |
| Petrov's Defense: Three Knights Game (white) | "3.Nxe5 is a little stronger, but Nc3 keeps you on familiar ground" | `e4 e5 Nf3 Nf6` | Nc3 is playable | Nc3 loses 0.32 (+0.05; best Nxe5 +0.37) | ✅ |
| Petrov's Defense: Three Knights Game (black) | "…Nc6 gives a Four Knights" | `e4 e5 Nf3 Nf6 Nc3` | Nc6 is sound | Nc6 +0.07, within 0.00 of best | ✅ |
| Petrov's Defense: Three Knights Game (black) | "…Bb4 keeps a Petrov flavour" | `e4 e5 Nf3 Nf6 Nc3` | Bb4 is playable | Bb4 +0.34, within 0.30 of best | ✅ |
| Philidor Defense (white) | "Hit the centre with d4" | `e4 e5 Nf3 d6` | d4 is sound | d4 +0.53, within 0.00 of best | ✅ |
| Philidor Defense (black) | "give up the centre with …exd4" | `e4 e5 Nf3 d6 d4` | exd4 is sound | exd4 +0.52, within 0.00 of best | ✅ |
| Philidor Defense (black) | "hold e5 with …Nf6" | `e4 e5 Nf3 d6 d4` | Nf6 is playable | Nf6 loses 0.33 (+0.86; best exd4 +0.53) | ✅ |
| Elephant Gambit (idea) | "It is a dubious gambit" | `e4 e5 Nf3` | d5 is dubious | d5 loses 0.69 (+0.94; best Nc6 +0.25) | ✅ |
| Elephant Gambit (white) | "3.exd5 is cleanest" | `e4 e5 Nf3 d5` | exd5 is sound | exd5 +1.20, within 0.00 of best | ✅ |
| Elephant Gambit (white) | "against …e4, Qe2 pins the pawn" | `e4 e5 Nf3 d5 exd5 e4` | Qe2 is sound | Qe2 +1.20, within 0.00 of best | ✅ |
| Elephant Gambit (white) | "against …Bd6, d4 hits e5" | `e4 e5 Nf3 d5 exd5 Bd6` | d4 is sound | d4 +1.34, within 0.00 of best | ✅ |
| Elephant Gambit (white) | "3.Nxe5 is also playable" | `e4 e5 Nf3 d5` | Nxe5 is playable | Nxe5 loses 0.42 (+0.70; best exd5 +1.12) | ✅ |
| Elephant Gambit (black) | "Objectively 2…Nc6 is better" | `e4 e5 Nf3` | Nc6 is sound | Nc6 +0.25, within 0.00 of best | ✅ |
| King's Pawn Game: Busch-Gass Gambit (idea) | "It is unsound." | `e4 e5 Nf3` | Bc5 is a mistake | Bc5 loses 1.71 (+1.96; best Nc6 +0.25) | ✅ |
| King's Pawn Game: Busch-Gass Gambit (white) | "Take it: 3.Nxe5" | `e4 e5 Nf3 Bc5` | Nxe5 is sound | Nxe5 +2.05, within 0.00 of best | ✅ |
| King's Pawn Game: Busch-Gass Gambit (black) | "After 3.Nxe5 you are a pawn down and White is much better" | `e4 e5 Nf3 Bc5 Nxe5` | White winning | +2.18 (d6 Nf3 Bb6 d4) | ✅ |
| King's Pawn Game: Busch-Gass Gambit (black) | "Don't lash out with …Qh4?" | `e4 e5 Nf3 Bc5 Nxe5` | Qh4 is a mistake | Qh4 loses 2.18 (+4.36; best d6 +2.18) | ✅ |
| King's Pawn Game: Busch-Gass Gambit (black) | "d4 hits the bishop" | `e4 e5 Nf3 Bc5 Nxe5 Qh4` | d4 is sound | d4 +4.13, within 0.00 of best | ✅ |
| King's Pawn Game: Busch-Gass Gambit (black) | "Develop with …Nc6 or …d6" | `e4 e5 Nf3 Bc5 Nxe5` | Nc6 is playable | Nc6 +2.11, within 0.00 of best | ✅ |
| King's Pawn Game: Busch-Gass Gambit (black) | "Develop with …Nc6 or …d6" | `e4 e5 Nf3 Bc5 Nxe5` | d6 is playable | d6 +2.37, within 0.00 of best | ✅ |
| King's Pawn Game: Busch-Gass Gambit (black) | "2…Nc6 is the sound move" | `e4 e5 Nf3` | Nc6 is sound | Nc6 +0.25, within 0.00 of best | ✅ |
| King's Pawn Game: Maróczy Defense (white) | "dxe5 dxe5 Qxd8+ Kxd8 trades queens" | `e4 e5 d4 d6` | dxe5 is playable | dxe5 loses 0.35 (+0.34; best Nf3 +0.69) | ✅ |
| King's Pawn Game: Maróczy Defense (white) | "Or play Nf3 and Nc3" | `e4 e5 d4 d6` | Nf3 is sound | Nf3 +0.64, within 0.00 of best | ✅ |
| King's Pawn Game: Maróczy Defense (black) | "After the queen trade the king is safe enough" | `e4 e5 d4 d6 dxe5 dxe5 Qxd8+ Kxd8` | level | +0.31 (Nc3 Nf6 Bc4 Ke8) | ✅ |
| King's Pawn Game: Maróczy Defense (black) | "Or answer Nf3 with …Nf6" | `e4 e5 d4 d6 Nf3` | Nf6 is playable | Nf6 loses 0.33 (+0.86; best exd4 +0.53) | ✅ |
| Center Game (black) | "Take: 2…exd4." | `e4 e5 d4` | exd4 is sound | exd4 +0.01, within 0.00 of best | ✅ |
| Center Game (black) | "develop with tempo on White's queen (…Nc6)" | `e4 e5 d4 exd4 Qxd4` | Nc6 is sound | Nc6 -0.03, within 0.00 of best | ✅ |
| Center Game Accepted (idea) | "Black gains a tempo with …Nc6" | `e4 e5 d4 exd4 Qxd4` | Nc6 is sound | Nc6 -0.03, within 0.00 of best | ✅ |
| Center Game Accepted (white) | "Retreat to e3 after …Nc6" | `e4 e5 d4 exd4 Qxd4 Nc6` | Qe3 is sound | Qe3 +0.00, within 0.00 of best | ✅ |
| Bishop's Opening (black) | "2…Nf6 hits e4 and is the most testing reply" | `e4 e5 Bc4` | Nf6 is sound | Nf6 +0.00, within 0.00 of best | ✅ |
| Bishop's Opening: Berlin Defense (white) | "3.d3 is solid" | `e4 e5 Bc4 Nf6` | d3 is sound | d3 +0.02, within 0.06 of best | ✅ |
| Bishop's Opening: Berlin Defense (black) | "Against 3.d3, …c6 and …d5 build a strong centre" | `e4 e5 Bc4 Nf6 d3` | c6 is sound | c6 +0.01, within 0.00 of best | ✅ |
| Bishop's Opening: Berlin Defense (black) | "Against 3.d4, take on d4" | `e4 e5 Bc4 Nf6 d4` | exd4 is sound | exd4 -0.18, within 0.00 of best | ✅ |
| Bishop's Opening: Boi Variation (black) | "Against an early Qh5, …Qe7 covers both e5 and f7" | `e4 e5 Bc4 Bc5 Qh5` | Qe7 is sound | Qe7 -0.15, within 0.00 of best | ✅ |
| Bishop's Opening: Philidor Counterattack (white) | "3.d4 is the sharp answer" | `e4 e5 Bc4 c6` | d4 is sound | d4 +0.13, within 0.19 of best | ✅ |
| Bishop's Opening: Philidor Counterattack (white) | "after …d5 exd5 cxd5 Bb5+, Black can be left with an isolated d-pawn" | `e4 e5 Bc4 c6 d4 d5 exd5 cxd5` | Bb5+ is sound | Bb5+ +0.24, within 0.00 of best | ✅ |
| Bishop's Opening: Philidor Counterattack (white) | "Nf3 and d4 is also good" | `e4 e5 Bc4 c6` | Nf3 is sound | Nf3 +0.14, within 0.18 of best | ✅ |
| Bishop's Opening: Philidor Counterattack (black) | "Play …d5 as soon as possible" | `e4 e5 Bc4 c6 d4` | d5 is sound | d5 +0.15, within 0.00 of best | ✅ |
| Bishop's Opening: Philidor Counterattack (black) | "…Nf6 first lets White win e5 or take over the centre" | `e4 e5 Bc4 c6 d4` | Nf6 is dubious | Nf6 loses 0.67 (+0.82; best d5 +0.15) | ✅ |
| Bishop's Opening: Philidor Counterattack (black) | "…Nf6 first lets White win e5 or take over the centre" | `e4 e5 Bc4 c6 Nf3` | Nf6 is a mistake | Nf6 loses 1.19 (+1.38; best d5 +0.19) | ✅ |
| Bishop's Opening: Philidor Counterattack (black) | "Play …d5 as soon as possible" | `e4 e5 Bc4 c6 Nf3` | d5 is sound | d5 +0.24, within 0.00 of best | ✅ |
| Vienna Game (black) | "…Nf6 and …d5 is the key freeing plan" | `e4 e5 Nc3` | Nf6 is sound | Nf6 +0.06, within 0.00 of best | ✅ |
| Vienna Game (black) | "Against f4, …d5 hits e4 at once" | `e4 e5 Nc3 Nf6 f4` | d5 is sound | d5 -0.11, within 0.00 of best | ✅ |
| Vienna Game: Anderssen Defense (white) | "Nf3 is natural" | `e4 e5 Nc3 Bc5` | Nf3 is sound | Nf3 +0.30, within 0.00 of best | ✅ |
| Vienna Game: Anderssen Defense (white) | "the fork trick Nxe5 and d4 works" | `e4 e5 Nc3 Bc5 Nf3 Nc6` | Nxe5 is sound | Nxe5 +0.62, within 0.00 of best | ✅ |
| Vienna Game: Anderssen Defense (white) | "the fork trick Nxe5 and d4 works" | `e4 e5 Nc3 Bc5 Nf3 Nc6 Nxe5 Nxe5` | d4 is sound | d4 +0.69, within 0.00 of best | ✅ |
| Vienna Game: Anderssen Defense (white) | "Bc4 is the sharper choice" | `e4 e5 Nc3 Bc5` | Bc4 is sound | Bc4 +0.08, within 0.21 of best | ✅ |
| Vienna Game: Anderssen Defense (black) | "if White plays Nf3, cover e5 with …d6 before …Nc6" | `e4 e5 Nc3 Bc5 Nf3` | d6 is sound | d6 +0.28, within 0.00 of best | ✅ |
| Vienna Game: Anderssen Defense (black) | "Don't allow the fork trick" | `e4 e5 Nc3 Bc5 Nf3` | Nc6 is dubious | Nc6 loses 0.38 (+0.61; best d6 +0.23) | ✅ |
| Vienna Game: Falkbeer Variation (black) | "Against 3.f4, …d5! is the antidote" | `e4 e5 Nc3 Nf6 f4` | d5 is sound | d5 -0.11, within 0.00 of best | ✅ |
| Vienna Game: Falkbeer Variation (black) | "Against 3.Bc4, …Nc6 is solid" | `e4 e5 Nc3 Nf6 Bc4` | Nc6 is sound | Nc6 -0.01, within 0.00 of best | ✅ |
| King's Gambit (white) | "Nf3 stops …Qh4+" | `e4 e5 f4 exf4` | Nf3 is sound | Nf3 -0.62, within 0.01 of best | ✅ |
| King's Gambit (black) | "Accepting with …exf4 is objectively best" | `e4 e5 f4` | exf4 is sound | exf4 -0.50, within 0.00 of best | ✅ |
| King's Gambit (black) | "Declining with …Bc5 or …d5 gives a level game" | `e4 e5 f4 Bc5` | level | +0.15 (Nf3 d6 c3 f5) | ✅ |
| King's Gambit (black) | "Declining with …Bc5 or …d5 gives a level game" | `e4 e5 f4 d5` | level | -0.16 (Nf3 exf4 exd5 Nf6) | ✅ |
| King's Gambit Accepted (white) | "Nf3 (or Bc4)" | `e4 e5 f4 exf4` | Nf3 is sound | Nf3 -0.62, within 0.01 of best | ✅ |
| King's Gambit Accepted (white) | "Nf3 (or Bc4)" | `e4 e5 f4 exf4` | Bc4 is sound | Bc4 -0.61, within 0.00 of best | ✅ |
| King's Gambit Accepted (black) | "hold f4 with …g5" | `e4 e5 f4 exf4 Nf3` | g5 is sound | g5 -0.35, within 0.20 of best | ✅ |
| King's Gambit Accepted (black) | "give it back with …d5 or …Nf6" | `e4 e5 f4 exf4 Nf3` | Nf6 is sound | Nf6 -0.27, within 0.28 of best | ✅ |
| King's Gambit Accepted (black) | "3…d5 is a solid, simpler choice" | `e4 e5 f4 exf4 Nf3` | d5 is playable | d5 loses 0.44 (-0.11; best d6 -0.55) | ✅ |
| King's Gambit Declined (black) | "Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6" | `e4 e5 f4 Bc5` | level | +0.15 (Nf3 d6 c3 f5) | ✅ |
| King's Gambit Declined (black) | "Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6" | `e4 e5 f4 d5` | level | -0.16 (Nf3 exf4 exd5 Nf6) | ✅ |
| King's Gambit Declined (black) | "Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6" | `e4 e5 f4 Nf6` | level | -0.24 (fxe5 Nxe4 Nf3 Ng5) | ✅ |
| King's Gambit Declined (black) | "Develop with …Bc5 (stopping White castling), …d5, …Nf6 or …Nc6" | `e4 e5 f4 Nc6` | level | +0.13 (Nf3 d5 exd5 Qxd5) | ✅ |
| King's Gambit Declined: Classical Variation (idea) | "3.fxe5?? Qh4+" | `e4 e5 f4 Bc5` | fxe5 is a blunder | fxe5 loses 7.29 (-7.14; best Nf3 +0.15) | ✅ |
| King's Gambit Declined: Classical Variation (idea) | "3.fxe5?? Qh4+ and …Qxe4+ forks king and rook" | `e4 e5 f4 Bc5 fxe5 Qh4+ g3 Qxe4+` | Black winning | -6.99 (Qe2 Qxh1 d4 Qxg1) | ✅ |
| King's Gambit Declined: Classical Variation (white) | "Play Nf3 first" | `e4 e5 f4 Bc5` | Nf3 is sound | Nf3 -0.22, within 0.00 of best | ✅ |
| King's Gambit Declined: Falkbeer Countergambit (idea) | "3…exf4 is the modern choice" | `e4 e5 f4 d5 exd5` | exf4 is sound | exf4 -0.20, within 0.00 of best | ✅ |
| King's Gambit Declined: Falkbeer Countergambit (idea) | "the old push …e4?!, to cramp White, is less accurate" | `e4 e5 f4 d5 exd5` | e4 is dubious | e4 loses 0.57 (+0.00; best exf4 -0.57) | ✅ |
| King's Gambit Declined: Falkbeer Countergambit (black) | "3…exf4 is simplest: develop with …Nf6" | `e4 e5 f4 d5 exd5 exf4 Nf3` | Nf6 is sound | Nf6 -0.17, within 0.00 of best | ✅ |
| King's Gambit Declined: Falkbeer Countergambit (white) | "After 3.exd5 e4, d3 breaks up the e4 wedge" | `e4 e5 f4 d5 exd5 e4` | d3 is sound | d3 +0.00, within 0.00 of best | ✅ |
| King's Gambit Declined: Petrov's Defense (white) | "3.fxe5 Nxe4 4.Nf3 is the main line" | `e4 e5 f4 Nf6` | fxe5 is sound | fxe5 -0.28, within 0.00 of best | ✅ |
| King's Gambit Declined: Petrov's Defense (white) | "3.fxe5 Nxe4 4.Nf3 is the main line" | `e4 e5 f4 Nf6 fxe5 Nxe4` | Nf3 is sound | Nf3 -0.26, within 0.00 of best | ✅ |
| King's Gambit Declined: Queen's Knight Defense (black) | "If White plays an early fxe5, don't recapture" | `e4 e5 f4 Nc6 fxe5` | Nxe5 is a mistake | Nxe5 loses 8.09 (+0.46; best Qh4+ -7.63) | ✅ |
| King's Gambit Declined: Queen's Knight Defense (black) | "…Qh4+ and …Qxe4+ win the h1 rook" | `e4 e5 f4 Nc6 fxe5` | Qh4+ is sound | Qh4+ -7.97, within 0.00 of best | ✅ |
| King's Gambit Declined: Queen's Knight Defense (black) | "…Qh4+ and …Qxe4+ win the h1 rook" | `e4 e5 f4 Nc6 fxe5 Qh4+ g3 Qxe4+` | Black winning | -7.94 (Qe2 Qxh1 Nf3 d5) | ✅ |
| Scotch Game (white) | "Against 4…Nf6, Nxc6 bxc6 e5 (the Mieses) is the main line" | `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6` | Nxc6 is sound | Nxc6 -0.35, within 0.00 of best | ✅ |
| Scotch Game (white) | "Against 4…Nf6, Nxc6 bxc6 e5 (the Mieses) is the main line" | `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6` | e5 is sound | e5 -0.38, within 0.14 of best | ✅ |
| Scotch Game (black) | "Hit the d4 knight with …Bc5 or e4 with …Nf6" | `e4 e5 Nf3 Nc6 d4 exd4 Nxd4` | Bc5 is sound | Bc5 -0.15, within 0.11 of best | ✅ |
| Scotch Game (black) | "Hit the d4 knight with …Bc5 or e4 with …Nf6" | `e4 e5 Nf3 Nc6 d4 exd4 Nxd4` | Nf6 is sound | Nf6 -0.23, within 0.00 of best | ✅ |
| Scotch Game: Göring Gambit (white) | "After …dxc3 Nxc3" | `e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3` | Nxc3 is sound | Nxc3 -0.49, within 0.00 of best | ✅ |
| Scotch Game: Göring Gambit (black) | "4…d5 is the safe way to decline" | `e4 e5 Nf3 Nc6 d4 exd4 c3` | d5 is sound | d5 -0.36, within 0.04 of best | ✅ |
| Scotch Game: Göring Gambit (black) | "after exd5 Qxd5 cxd4, develop with …Bg4 or …Bb4+" | `e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4` | Bg4 is sound | Bg4 -0.37, within 0.00 of best | ✅ |
| Scotch Game: Göring Gambit (black) | "after exd5 Qxd5 cxd4, develop with …Bg4 or …Bb4+" | `e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4` | Bb4+ is sound | Bb4+ -0.38, within 0.04 of best | ✅ |
| Scotch Game: Göring Gambit (black) | "Accepting is playable" | `e4 e5 Nf3 Nc6 d4 exd4 c3` | dxc3 is sound | dxc3 -0.46, within 0.00 of best | ✅ |
| Scotch Game: Scotch Gambit (white) | "Against …Nf6, e5 or O-O" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6` | e5 is sound | e5 -0.26, within 0.00 of best | ✅ |
| Scotch Game: Scotch Gambit (white) | "Against …Nf6, e5 or O-O" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6` | O-O is sound | O-O -0.39, within 0.03 of best | ✅ |
| Scotch Game: Scotch Gambit (white) | "Against …Bc5, c3 or O-O" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5` | c3 is sound | c3 -0.20, within 0.00 of best | ✅ |
| Scotch Game: Scotch Gambit (white) | "Against …Bc5, c3 or O-O" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5` | O-O is sound | O-O -0.38, within 0.14 of best | ✅ |
| Scotch Game: Scotch Gambit (black) | "…Nf6 is principled" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4` | Nf6 is sound | Nf6 -0.18, within 0.00 of best | ✅ |
| Scotch Game: Scotch Gambit (black) | "meet e5 with …d5" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5` | d5 is sound | d5 -0.22, within 0.00 of best | ✅ |
| Scotch Game: Scotch Gambit (black) | "…Bc5 is also fine" | `e4 e5 Nf3 Nc6 d4 exd4 Bc4` | Bc5 is sound | Bc5 -0.11, within 0.22 of best | ✅ |
| Ponziani Opening (white) | "Against …Nf6, d4 keeps the initiative" | `e4 e5 Nf3 Nc6 c3 Nf6` | d4 is sound | d4 -0.20, within 0.00 of best | ✅ |
| Ponziani Opening (white) | "against …d5, Qa4 pins the c6 knight" | `e4 e5 Nf3 Nc6 c3 d5` | Qa4 is sound | Qa4 -0.44, within 0.00 of best | ✅ |
| Ponziani Opening (black) | "Strike at once: …Nf6 hits e4" | `e4 e5 Nf3 Nc6 c3` | Nf6 is sound | Nf6 -0.24, within 0.16 of best | ✅ |
| Ponziani Opening (black) | "…d5 opens the centre before White is ready" | `e4 e5 Nf3 Nc6 c3` | d5 is sound | d5 -0.31, within 0.00 of best | ✅ |
| Ponziani Opening: Neumann Gambit (black) | "Take the pawn with …Nxe4" | `e4 e5 Nf3 Nc6 Bc4 Nf6 c3` | Nxe4 is sound | Nxe4 -1.15, within 0.00 of best | ✅ |
| Ponziani Opening: Neumann Gambit (black) | "then …d5 keeps the knight in the centre and hits the c4 bishop" | `e4 e5 Nf3 Nc6 Bc4 Nf6 c3 Nxe4 d4` | d5 is sound | d5 -1.99, within 0.00 of best | ✅ |
| Italian Game (black) | "3…Bc5 (Giuoco Piano) mirrors White; 3…Nf6 (Two Knights) counterattacks e4. Both are sound" | `e4 e5 Nf3 Nc6 Bc4` | Bc5 is sound | Bc5 -0.12, within 0.00 of best | ✅ |
| Italian Game (black) | "3…Bc5 (Giuoco Piano) mirrors White; 3…Nf6 (Two Knights) counterattacks e4. Both are sound" | `e4 e5 Nf3 Nc6 Bc4` | Nf6 is sound | Nf6 +0.19, within 0.00 of best | ✅ |
| Italian Game: Anti-Fried Liver Defense (white) | "Use the extra time: d4 to open the centre, or c3 and d4" | `e4 e5 Nf3 Nc6 Bc4 h6` | d4 is sound | d4 +0.20, within 0.00 of best | ✅ |
| Italian Game: Anti-Fried Liver Defense (white) | "Use the extra time: d4 to open the centre, or c3 and d4" | `e4 e5 Nf3 Nc6 Bc4 h6` | c3 is sound | c3 +0.00, within 0.28 of best | ✅ |
| Italian Game: Blackburne-Kostić Gambit (idea) | "4.Nxe5? Qg5!" | `e4 e5 Nf3 Nc6 Bc4 Nd4` | Nxe5 is a mistake | Nxe5 loses 1.75 (-0.77; best Nxd4 +0.98) | ✅ |
| Italian Game: Blackburne-Kostić Gambit (idea) | "4.Nxe5? Qg5!" | `e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5` | Qg5 is sound | Qg5 -0.88, within 0.00 of best | ✅ |
| Italian Game: Blackburne-Kostić Gambit (idea) | "5.Nxf7? Qxg2" | `e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5 Qg5` | Nxf7 is a mistake | Nxf7 loses 8.38 (-9.12; best O-O -0.74) | ✅ |
| Italian Game: Blackburne-Kostić Gambit (idea) | "6.Rf1 Qxe4+ 7.Be2 Nf3 is mate" | `e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5 Qg5 Nxf7 Qxg2 Rf1 Qxe4+` | Black winning | -9.62 (Qe2 Nxe2 Bxe2 Kxf7) | ✅ |
| Italian Game: Blackburne-Kostić Gambit (idea) | "Objectively it just wastes time" | `e4 e5 Nf3 Nc6 Bc4` | Nd4 is dubious | Nd4 loses 0.91 (+1.08; best Nf6 +0.17) | ✅ |
| Italian Game: Blackburne-Kostić Gambit (white) | "Don't take e5" | `e4 e5 Nf3 Nc6 Bc4 Nd4` | Nxe5 is dubious | Nxe5 loses 1.75 (-0.77; best Nxd4 +0.98) | ✅ |
| Italian Game: Blackburne-Kostić Gambit (white) | "4.Nxd4 exd4 and O-O leaves you clearly better" | `e4 e5 Nf3 Nc6 Bc4 Nd4` | Nxd4 is sound | Nxd4 +0.99, within 0.00 of best | ✅ |
| Italian Game: Blackburne-Kostić Gambit (white) | "4.c3 is weaker" | `e4 e5 Nf3 Nc6 Bc4 Nd4` | c3 is dubious | c3 loses 0.85 (+0.13; best Nxd4 +0.98) | ✅ |
| Italian Game: Blackburne-Kostić Gambit (white) | "4.Nxd4 exd4 and O-O leaves you clearly better" | `e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4 exd4 O-O` | White clearly better | +0.94 (c6 Re1 d6 c3) | ✅ |
| Italian Game: Classical Variation (white) | "Play d4" | `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6` | d4 is sound | d4 -0.19, within 0.07 of best | ✅ |
| Italian Game: Classical Variation (white) | "after …exd4, cxd4 with a full centre" | `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4` | cxd4 is sound | cxd4 -0.41, within 0.29 of best | ✅ |
| Italian Game: Classical Variation (black) | "Hit back with …Nf6 against e4" | `e4 e5 Nf3 Nc6 Bc4 Bc5 c3` | Nf6 is sound | Nf6 -0.08, within 0.00 of best | ✅ |
| Italian Game: Classical Variation (black) | "If d4 exd4 cxd4, …Bb4+ moves the bishop with check" | `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4` | Bb4+ is sound | Bb4+ -0.25, within 0.00 of best | ✅ |
| Italian Game: Evans Gambit (white) | "After …Bxb4, play c3 and d4" | `e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4` | c3 is sound | c3 -0.43, within 0.00 of best | ✅ |
| Italian Game: Evans Gambit (white) | "After …Bxb4, play c3 and d4" | `e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5` | d4 is sound | d4 -0.47, within 0.00 of best | ✅ |
| Italian Game: Evans Gambit (black) | "Accept and give a pawn back" | `e4 e5 Nf3 Nc6 Bc4 Bc5 b4` | Bxb4 is sound | Bxb4 -0.27, within 0.00 of best | ✅ |
| Italian Game: Evans Gambit (black) | "decline with …Bb6" | `e4 e5 Nf3 Nc6 Bc4 Bc5 b4` | Bb6 is playable | Bb6 loses 0.41 (+0.03; best Bxb4 -0.38) | ✅ |
| Italian Game: Giuoco Pianissimo, Canal Variation (black) | "…h6 asks the bishop" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Bc5 d3 d6 Bg5` | h6 is sound | h6 -0.13, within 0.00 of best | ✅ |
| Italian Game: Giuoco Pianissimo, Canal Variation (black) | "Don't play …g5 unless you can castle queenside" | `e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 Bg5 h6 Bh4` | g5 is sound | g5 -0.30, within 0.00 of best | ✅ |
| Italian Game: Giuoco Pianissimo, Canal Variation (black) | "Don't play …g5 unless you can castle queenside" | `e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 Bg5 h6 Bh4 O-O Qd2` | g5 is a mistake | g5 loses 5.95 (+5.95; best Bb4 +0.00) | ✅ |
| Italian Game: Hungarian Defense (white) | "Take the centre with d4" | `e4 e5 Nf3 Nc6 Bc4 Be7` | d4 is sound | d4 +0.14, within 0.00 of best | ✅ |
| Italian Game: Hungarian Defense (white) | "against …exd4 recapture and develop" | `e4 e5 Nf3 Nc6 Bc4 Be7 d4 exd4` | Nxd4 is sound | Nxd4 +0.16, within 0.00 of best | ✅ |
| Italian Game: Hungarian Defense (white) | "against …d6, d5 gains space" | `e4 e5 Nf3 Nc6 Bc4 Be7 d4 d6` | d5 is sound | d5 +0.40, within 0.00 of best | ✅ |
| Italian Game: Paris Defense (white) | "Take the centre with c3 and d4 (or d4 at once)" | `e4 e5 Nf3 Nc6 Bc4 d6` | c3 is sound | c3 +0.12, within 0.05 of best | ✅ |
| Italian Game: Paris Defense (white) | "Take the centre with c3 and d4 (or d4 at once)" | `e4 e5 Nf3 Nc6 Bc4 d6` | d4 is sound | d4 +0.15, within 0.00 of best | ✅ |
| Italian Game: Paris Defense (white) | "Once Black plays …Nf6, Ng5 against f7 becomes a real threat" | `e4 e5 Nf3 Nc6 Bc4 d6 c3 Nf6` | Ng5 is sound | Ng5 +0.68, within 0.00 of best | ✅ |
| Italian Game: Rosentreter Gambit (white) | "After …exd4, play c3 or O-O" | `e4 e5 Nf3 Nc6 Bc4 Bc5 d4 exd4` | c3 is sound | c3 -0.20, within 0.00 of best | ✅ |
| Italian Game: Rosentreter Gambit (white) | "After …exd4, play c3 or O-O" | `e4 e5 Nf3 Nc6 Bc4 Bc5 d4 exd4` | O-O is sound | O-O -0.38, within 0.14 of best | ✅ |
| Italian Game: Rosentreter Gambit (black) | "…Nxd4, …exd4 and …Bxd4 are all playable" | `e4 e5 Nf3 Nc6 Bc4 Bc5 d4` | Nxd4 is playable | Nxd4 -0.18, within 0.00 of best | ✅ |
| Italian Game: Rosentreter Gambit (black) | "…Nxd4, …exd4 and …Bxd4 are all playable" | `e4 e5 Nf3 Nc6 Bc4 Bc5 d4` | exd4 is playable | exd4 loses 0.34 (+0.00; best Nxd4 -0.34) | ✅ |
| Italian Game: Rosentreter Gambit (black) | "…Nxd4, …exd4 and …Bxd4 are all playable" | `e4 e5 Nf3 Nc6 Bc4 Bc5 d4` | Bxd4 is playable | Bxd4 loses 0.35 (+0.01; best Nxd4 -0.34) | ✅ |
| Italian Game: Rousseau Gambit (idea) | "3…f5 is a dubious counter-gambit" | `e4 e5 Nf3 Nc6 Bc4` | f5 is dubious | f5 loses 1.21 (+1.38; best Nf6 +0.17) | ✅ |
| Italian Game: Rousseau Gambit (white) | "4.d4 hits e5" | `e4 e5 Nf3 Nc6 Bc4 f5` | d4 is sound | d4 +1.54, within 0.00 of best | ✅ |
| Italian Game: Rousseau Gambit (black) | "Take with …exd4" | `e4 e5 Nf3 Nc6 Bc4 f5 d4` | exd4 is sound | exd4 +1.50, within 0.00 of best | ✅ |
| Italian Game: Rousseau Gambit (black) | "…fxe4 is also playable" | `e4 e5 Nf3 Nc6 Bc4 f5 d4` | fxe4 is playable | fxe4 loses 0.47 (+1.89; best exd4 +1.42) | ✅ |
| Italian Game: Rousseau Gambit (black) | "It is objectively bad" | `e4 e5 Nf3 Nc6 Bc4` | f5 is a mistake | f5 loses 1.21 (+1.38; best Nf6 +0.17) | ✅ |
| Italian Game: Rousseau Gambit (black) | "3…Nf6 or 3…Bc5 are sound" | `e4 e5 Nf3 Nc6 Bc4` | Nf6 is sound | Nf6 +0.19, within 0.00 of best | ✅ |
| Italian Game: Rousseau Gambit (black) | "3…Nf6 or 3…Bc5 are sound" | `e4 e5 Nf3 Nc6 Bc4` | Bc5 is sound | Bc5 -0.12, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense (black) | "Against Ng5, …d5 and …Na5" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5` | d5 is sound | d5 +0.08, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense (black) | "Against Ng5, …d5 and …Na5" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5` | Na5 is sound | Na5 +0.14, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense (black) | "Against d4, take" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4` | exd4 is sound | exd4 -0.01, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (idea) | "Black must block with …d5" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5` | d5 is sound | d5 +0.08, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (white) | "if …Na5 play Bb5+" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5` | Bb5+ is sound | Bb5+ +0.11, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (white) | "after …c6 dxc6 bxc6, Be2" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6` | Be2 is sound | Be2 +0.00, within 0.07 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (white) | "Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5` | Nxd5 is a mistake | Nxd5 loses 0.81 (+0.89; best Na5 +0.08) | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (white) | "Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5` | Nxf7 is sound | Nxf7 +0.80, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (white) | "Against 5…Nxd5? the Fried Liver (Nxf7) or d4 is dangerous for Black" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5` | d4 is sound | d4 +0.77, within 0.09 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (black) | "4…d5 5.exd5 Na5! hits the bishop" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5` | Na5 is sound | Na5 +0.14, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Knight Attack (black) | "Never 5…Nxd5?" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5` | Nxd5 is a mistake | Nxd5 loses 0.81 (+0.89; best Na5 +0.08) | ✅ |
| Italian Game: Two Knights Defense, Open Variation (white) | "5.e5 kicks the knight, or 5.O-O gambits" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4` | e5 is sound | e5 -0.26, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Open Variation (white) | "5.e5 kicks the knight, or 5.O-O gambits" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4` | O-O is sound | O-O -0.39, within 0.03 of best | ✅ |
| Italian Game: Two Knights Defense, Open Variation (white) | "5.O-O gambits and Re1 hits e4 along the e-file" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4` | Re1 is sound | Re1 -0.02, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Open Variation (black) | "Take 4…exd4." | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4` | exd4 is sound | exd4 -0.01, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Open Variation (black) | "Meet 5.e5 with 5…d5" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 e5` | d5 is sound | d5 -0.22, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Open Variation (black) | "5.O-O with 5…Nxe4 6.Re1 d5" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O` | Nxe4 is sound | Nxe4 -0.09, within 0.00 of best | ✅ |
| Italian Game: Two Knights Defense, Open Variation (black) | "5.O-O with 5…Nxe4 6.Re1 d5" | `e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1` | d5 is sound | d5 -0.06, within 0.00 of best | ✅ |
| Ruy Lopez (black) | "3…a6 asks the bishop, 3…Nf6 counterattacks e4" | `e4 e5 Nf3 Nc6 Bb5` | a6 is sound | a6 +0.21, within 0.05 of best | ✅ |
| Ruy Lopez (black) | "3…a6 asks the bishop, 3…Nf6 counterattacks e4" | `e4 e5 Nf3 Nc6 Bb5` | Nf6 is sound | Nf6 +0.14, within 0.00 of best | ✅ |
| Ruy Lopez: Berlin Defense (white) | "4.O-O Nxe4 5.d4" | `e4 e5 Nf3 Nc6 Bb5 Nf6` | O-O is sound | O-O +0.13, within 0.00 of best | ✅ |
| Ruy Lopez: Berlin Defense (white) | "4.O-O Nxe4 5.d4" | `e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4` | d4 is sound | d4 +0.20, within 0.00 of best | ✅ |
| Ruy Lopez: Berlin Defense (white) | "4.d3 keeps queens on" | `e4 e5 Nf3 Nc6 Bb5 Nf6` | d3 is sound | d3 +0.11, within 0.09 of best | ✅ |
| Ruy Lopez: Berlin Defense (black) | "4…Nxe4 is the main line" | `e4 e5 Nf3 Nc6 Bb5 Nf6 O-O` | Nxe4 is sound | Nxe4 +0.11, within 0.00 of best | ✅ |
| Ruy Lopez: Berlin Defense (black) | "Against 4.d3, …Bc5 and …d6 are solid" | `e4 e5 Nf3 Nc6 Bb5 Nf6 d3` | Bc5 is sound | Bc5 +0.07, within 0.00 of best | ✅ |
| Ruy Lopez: Bird Variation (white) | "4.Nxd4 exd4 5.O-O" | `e4 e5 Nf3 Nc6 Bb5 Nd4` | Nxd4 is sound | Nxd4 +0.54, within 0.00 of best | ✅ |
| Ruy Lopez: Bird Variation (white) | "4.Nxd4 exd4 5.O-O" | `e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4` | O-O is sound | O-O +0.54, within 0.00 of best | ✅ |
| Ruy Lopez: Bird Variation (black) | "…c6 kicks the bishop" | `e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 O-O` | c6 is sound | c6 +0.59, within 0.06 of best | ✅ |
| Ruy Lopez: Classical Variation (white) | "c3 and d4 gain time on the c5 bishop; you can castle first" | `e4 e5 Nf3 Nc6 Bb5 Bc5` | c3 is sound | c3 +0.33, within 0.00 of best | ✅ |
| Ruy Lopez: Classical Variation (white) | "c3 and d4 gain time on the c5 bishop; you can castle first" | `e4 e5 Nf3 Nc6 Bb5 Bc5` | O-O is sound | O-O +0.29, within 0.12 of best | ✅ |
| Ruy Lopez: Classical Variation (white) | "If Black plays …Nd4, Nxd4 Bxd4 and c3 kick the bishop" | `e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nd4` | Nxd4 is sound | Nxd4 +0.24, within 0.00 of best | ✅ |
| Ruy Lopez: Classical Variation (white) | "If Black plays …Nd4, Nxd4 Bxd4 and c3 kick the bishop" | `e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nd4 Nxd4 Bxd4` | c3 is sound | c3 +0.32, within 0.00 of best | ✅ |
| Ruy Lopez: Cozio Defense (white) | "c3 and d4, or O-O and d4, or Nc3 and d4" | `e4 e5 Nf3 Nc6 Bb5 Nge7` | c3 is playable | c3 loses 0.31 (+0.21; best Nc3 +0.52) | ✅ |
| Ruy Lopez: Cozio Defense (white) | "c3 and d4, or O-O and d4, or Nc3 and d4" | `e4 e5 Nf3 Nc6 Bb5 Nge7` | O-O is sound | O-O +0.39, within 0.13 of best | ✅ |
| Ruy Lopez: Cozio Defense (white) | "c3 and d4, or O-O and d4, or Nc3 and d4" | `e4 e5 Nf3 Nc6 Bb5 Nge7` | Nc3 is sound | Nc3 +0.57, within 0.00 of best | ✅ |
| Ruy Lopez: Morphy Defense (white) | "Ba4, O-O, Re1, c3, h3 and d4: the Closed Spanish" | `e4 e5 Nf3 Nc6 Bb5 a6` | Ba4 is sound | Ba4 +0.28, within 0.00 of best | ✅ |
| Ruy Lopez: Morphy Defense (white) | "4.Bxc6 (the Exchange) gives a simpler endgame-style game" | `e4 e5 Nf3 Nc6 Bb5 a6` | Bxc6 is sound | Bxc6 +0.12, within 0.13 of best | ✅ |
| Ruy Lopez: Morphy Defense (black) | "…Nf6, …Be7, …b5, …d6 and …O-O" | `e4 e5 Nf3 Nc6 Bb5 a6 Ba4` | Nf6 is sound | Nf6 +0.29, within 0.00 of best | ✅ |
| Ruy Lopez: Morphy Defense, Tarrasch Variation (black) | "…b5 (Bb3) gains space" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Ba4` | b5 is sound | b5 +0.06, within 0.04 of best | ✅ |
| Ruy Lopez: Morphy Defense, Tarrasch Variation (black) | "then …Bc5 or …Be7" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Ba4 b5 Bb3` | Bc5 is sound | Bc5 +0.07, within 0.00 of best | ✅ |
| Ruy Lopez: Morphy Defense, Tarrasch Variation (black) | "then …Bc5 or …Be7" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Ba4 b5 Bb3` | Be7 is sound | Be7 +0.21, within 0.16 of best | ✅ |
| Ruy Lopez: Schliemann Defense (white) | "4.Nc3 is the main answer" | `e4 e5 Nf3 Nc6 Bb5 f5` | Nc3 is sound | Nc3 +0.46, within 0.16 of best | ✅ |
| Ruy Lopez: Schliemann Defense (white) | "meeting …fxe4 with Nxe4" | `e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4` | Nxe4 is sound | Nxe4 +0.50, within 0.00 of best | ✅ |
| Ruy Lopez: Schliemann Defense (white) | "4.d3 gives a quieter game" | `e4 e5 Nf3 Nc6 Bb5 f5` | d3 is sound | d3 +0.60, within 0.00 of best | ✅ |
| Ruy Lopez: Schliemann Defense (black) | "…fxe4, …Nf6 and …d5 to grab the centre" | `e4 e5 Nf3 Nc6 Bb5 f5 Nc3` | fxe4 is sound | fxe4 +0.64, within 0.00 of best | ✅ |
| Ruy Lopez: Schliemann Defense (black) | "…fxe4, …Nf6 and …d5 to grab the centre" | `e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4` | Nf6 is sound | Nf6 +0.48, within 0.00 of best | ✅ |
| Ruy Lopez: Steinitz Defense (white) | "d4 at once" | `e4 e5 Nf3 Nc6 Bb5 d6` | d4 is sound | d4 +0.60, within 0.00 of best | ✅ |
| Ruy Lopez: Steinitz Defense (black) | "…Bd7 to unpin" | `e4 e5 Nf3 Nc6 Bb5 d6 d4` | Bd7 is sound | Bd7 +0.82, within 0.25 of best | ✅ |
| Ruy Lopez: Steinitz Defense, Nimzowitsch Attack (white) | "After …Bxc6, Qd3 backs up d4 and e4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 d6 Bb5 Bd7 Bxc6 Bxc6` | Qd3 is sound | Qd3 +0.98, within 0.17 of best | ✅ |
| Three Knights Opening (white) | "Against …Bc5, the fork trick Nxe5 and d4" | `e4 e5 Nf3 Nc6 Nc3 Bc5` | Nxe5 is sound | Nxe5 +0.62, within 0.00 of best | ✅ |
| Three Knights Opening (white) | "Against …Bc5, the fork trick Nxe5 and d4" | `e4 e5 Nf3 Nc6 Nc3 Bc5 Nxe5 Nxe5` | d4 is sound | d4 +0.69, within 0.00 of best | ✅ |
| Three Knights Opening (black) | "…Nf6 is simplest" | `e4 e5 Nf3 Nc6 Nc3` | Nf6 is sound | Nf6 +0.04, within 0.00 of best | ✅ |
| Three Knights Opening (black) | "…Bb4 avoids it and is playable" | `e4 e5 Nf3 Nc6 Nc3` | Bb4 is playable | Bb4 loses 0.40 (+0.53; best Nf6 +0.13) | ✅ |
| Three Knights Opening (black) | "…g6 is dubious" | `e4 e5 Nf3 Nc6 Nc3` | g6 is dubious | g6 loses 0.88 (+1.01; best Nf6 +0.13) | ✅ |
| Three Knights Opening (black) | "Don't play …Bc5 without …d6: the fork trick works" | `e4 e5 Nf3 Nc6 Nc3` | Bc5 is dubious | Bc5 loses 0.50 (+0.63; best Nf6 +0.13) | ✅ |
| Four Knights Game (black) | "…Nd4 against Bb5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5` | Nd4 is sound | Nd4 +0.10, within 0.00 of best | ✅ |
| Four Knights Game (black) | "…exd4 against d4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4` | exd4 is sound | exd4 +0.03, within 0.00 of best | ✅ |
| Four Knights Game (black) | "the …Nxe4 fork trick against Bc4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4` | Nxe4 is sound | Nxe4 -0.18, within 0.00 of best | ✅ |
| Four Knights Game (black) | "…d5 against slow moves" | `e4 e5 Nf3 Nc6 Nc3 Nf6 g3` | d5 is sound | d5 +0.03, within 0.22 of best | ✅ |
| Four Knights Game (black) | "…d5 against slow moves" | `e4 e5 Nf3 Nc6 Nc3 Nf6 a3` | d5 is sound | d5 -0.11, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation (black) | "4…Nd4 (Rubinstein) is the most testing" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5` | Nd4 is sound | Nd4 +0.10, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation (black) | "Don't try 4…Nxe4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5` | Nxe4 is dubious | Nxe4 loses 5.62 (+5.64; best Nd4 +0.02) | ✅ |
| Four Knights Game: Spanish Variation (white) | "Doubled c-pawns after …Bxc3 bxc3 are fine" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3` | bxc3 is sound | bxc3 +0.27, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation (white) | "Doubled c-pawns after …Bxc3 bxc3 are fine" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3` | level | +0.28 (d6 Bg5 h6 Bh4) | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (idea) | "it allows the fork trick: Nxe5, and d4 forks bishop and knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5` | Nxe5 is sound | Nxe5 +0.30, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (idea) | "it allows the fork trick: Nxe5, and d4 forks bishop and knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 Nxe5 Nxe5` | d4 is sound | d4 +0.14, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "Castle, then Nxe5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5` | O-O is sound | O-O +0.19, within 0.01 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "Castle, then Nxe5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O` | Nxe5 is sound | Nxe5 +0.22, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "after …Nxe5 d4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5` | d4 is sound | d4 +0.13, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "chase with f4, e5 and d5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6` | f4 is sound | f4 +0.33, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "chase with f4, e5 and d5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6` | e5 is sound | e5 +0.27, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "chase with f4, e5 and d5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Be7` | d5 is sound | d5 +0.08, within 0.20 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "though best play stays level" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Be7 d5` | level | -0.02 (Bc5+ Kh1 Nxd5 Qxd5) | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (white) | "If Black plays …d6, hit the centre with d4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O d6` | d4 is sound | d4 +0.67, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (black) | "play 5…d6 to stop it" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O` | d6 is playable | d6 loses 0.47 (+0.59; best O-O +0.12) | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (black) | "though d4 then gains time" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O d6` | d4 is sound | d4 +0.67, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Classical Variation (black) | "6…Nd4 (the Marshall Variation) gives a pawn instead" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5` | Nd4 is playable | Nd4 +0.44, within 0.30 of best | ✅ |
| Four Knights Game: Spanish Variation, Bardeleben Variation (white) | "Win the f6 knight back" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Bb4` | exf6 is sound | exf6 +0.45, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Bardeleben Variation (black) | "After exf6 Qxf6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Bb4 exf6` | Qxf6 is sound | Qxf6 +0.30, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation (white) | "Drop the bishop to c4, not a4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4` | Bc4 is sound | Bc4 +0.53, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation (white) | "Drop the bishop to c4, not a4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4` | Ba4 is a mistake | Ba4 loses 2.02 (-1.45; best Bc4 +0.57) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation (white) | "against …d6 and …Bg4, Be2 breaks the pin" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4 Bc4 d6 Nf3 Bg4` | Be2 is sound | Be2 +0.61, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation (white) | "Bring the e5 knight back to f3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4 Bc4 d6` | Nf3 is sound | Nf3 +0.55, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation (black) | "…d6 to open lines" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4 Ba4` | d6 is sound | d6 -1.77, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Double Spanish (white) | "Against an early …d6, Nd5! hits the b4 bishop" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O d6` | Nd5 is sound | Nd5 +1.62, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Double Spanish (black) | "5…d6? 6.Nd5! wins material" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O` | d6 is a mistake | d6 loses 1.50 (+1.52; best O-O +0.02) | ✅ |
| Four Knights Game: Spanish Variation, Double Spanish (black) | "5…d6? 6.Nd5! wins material" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O d6 Nd5` | White winning | +1.70 (Ba5 d4 a6 dxe5) | ✅ |
| Four Knights Game: Spanish Variation, Nimzowitsch Variation (white) | "After …dxc6, d3 and Bg5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Bxc6 dxc6` | d3 is sound | d3 +0.00, within 0.10 of best | ✅ |
| Four Knights Game: Spanish Variation, Nimzowitsch Variation (black) | "Recapture …dxc6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Bxc6` | dxc6 is sound | dxc6 +0.06, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation (white) | "Bg5 pins" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6` | Bg5 is sound | Bg5 +0.05, within 0.10 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation (white) | "Nd5 hits the pinned knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Be6` | Nd5 is sound | Nd5 +0.84, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation (white) | "bxc3 gives you the bishop pair and d4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3` | bxc3 is sound | bxc3 +0.18, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation (black) | "…Bxc3 and …Qe7 (the Metger Unpin), or …Ne7 to reroute toward g6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5` | Bxc3 is sound | Bxc3 +0.16, within 0.16 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation (black) | "…Bxc3 and …Qe7 (the Metger Unpin), or …Ne7 to reroute toward g6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5` | Ne7 is sound | Ne7 +0.07, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation (black) | "Avoid …Be6?!, which lets Nd5 add to the pressure" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5` | Be6 is dubious | Be6 loses 0.82 (+0.82; best Ne7 +0.00) | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation, Metger Unpin (white) | "Re1, d4, and Bc1 when …Ne6 hits g5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7` | Re1 is sound | Re1 +0.03, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation, Metger Unpin (white) | "Re1, d4, and Bc1 when …Ne6 hits g5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Ne6` | Bc1 is sound | Bc1 +0.42, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Symmetrical Variation, Tarrasch Variation (white) | "Nd5 hits the b4 bishop and the pinned f6 knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Be6` | Nd5 is sound | Nd5 +0.84, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (white) | "After …dxc6 Nxe5 Nxe4 Nxe4 Qd4, castle" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Nxe4 Nxe4 Qd4` | O-O is sound | O-O +0.41, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (white) | "Against 6…Qd4, Nf3 keeps the extra pawn" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Qd4` | Nf3 is sound | Nf3 +2.14, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (black) | "Recapture …dxc6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6` | dxc6 is sound | dxc6 +0.35, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (black) | "after Nxe5 play …Nxe4!" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5` | Nxe4 is sound | Nxe4 +0.32, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (black) | "then …Qd4 to win the material back" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Nxe4 Nxe4` | Qd4 is sound | Qd4 +0.25, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (black) | "…bxc6 or 6…Qd4 leave you a pawn down" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6` | bxc6 is dubious | bxc6 loses 1.10 (+1.47; best dxc6 +0.37) | ✅ |
| Four Knights Game: Spanish Variation, Ranken Variation (black) | "…bxc6 or 6…Qd4 leave you a pawn down" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5` | Qd4 is dubious | Qd4 loses 1.85 (+2.05; best Nxe4 +0.20) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "Avoid 5.Nxe5?! Qe7!, which gives Black the better game" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxe5 Qe7` | Black slightly better | -0.33 (Nf3 Nxb5 Nxb5 Qxe4+) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "Avoid 5.Nxe5?! Qe7!" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4` | Nxe5 is dubious | Nxe5 loses 0.38 (-0.32; best Nxd4 +0.06) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (idea) | "The most testing reply to 4.Bb5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5` | Nd4 is sound | Nd4 +0.10, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "5.Nxd4 is safe" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4` | Nxd4 is sound | Nxd4 +0.06, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "5.Nxd4 is safe and leads to a level ending" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+ Kxe2` | level | +0.02 (c6 Bd3 d5 Be3) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "5.Ba4, 5.Bc4 and 5.O-O are alternatives" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4` | Ba4 is playable | Ba4 -0.22, within 0.28 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "5.Ba4, 5.Bc4 and 5.O-O are alternatives" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4` | Bc4 is playable | Bc4 +0.00, within 0.06 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (white) | "5.Ba4, 5.Bc4 and 5.O-O are alternatives" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4` | O-O is playable | O-O +0.00, within 0.06 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (black) | "Against 5.Nxe5?! play …Qe7" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxe5` | Qe7 is sound | Qe7 -0.37, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (black) | "Against 5.Ba4, …Bc5 and castle" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4` | Bc5 is sound | Bc5 +0.00, within 0.25 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation (black) | "against 5.O-O, …Nxb5 for the bishop pair" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O` | Nxb5 is sound | Nxb5 +0.02, within 0.02 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation Accepted (idea) | "a burst of captures leads to a level, queenless position" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+ Kxe2` | level | +0.02 (c6 Bd3 d5 Be3) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation Accepted (white) | "Trade queens and recapture with the king" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+` | Kxe2 is sound | Kxe2 +0.07, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation Accepted (black) | "Trade queens and play …c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2` | Qxe2+ is sound | Qxe2+ +0.10, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation Accepted (black) | "Don't play 7…cxd2+?" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6` | cxd2+ is a mistake | cxd2+ loses 2.35 (+2.40; best Qxf6 +0.05) | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation (white) | "After …Nxb5 Nxb5 c6, Nc3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O Nxb5 Nxb5 c6` | Nc3 is sound | Nc3 +0.10, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation (black) | "Take the bishop with …Nxb5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O` | Nxb5 is sound | Nxb5 +0.02, within 0.02 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation (black) | "kick the knight with …c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O Nxb5 Nxb5` | c6 is sound | c6 +0.06, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit (white) | "Keep the pawn with Nd3 (guarding f2)" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O` | Nd3 is sound | Nd3 -0.03, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit (white) | "e5 to kick the f6 knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O Nd3 Bb6` | e5 is sound | e5 +0.00, within 0.00 of best | ✅ |
| Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit (black) | "…Bb6, then …d6 to open lines" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O Nd3` | Bb6 is sound | Bb6 -0.04, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (white) | "After …exd4 Nxd4, swap on c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4` | Nxd4 is sound | Nxd4 +0.14, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (white) | "After …exd4 Nxd4, swap on c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4` | Nxc6 is sound | Nxc6 +0.17, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (white) | "then Bd3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6` | Bd3 is sound | Bd3 +0.13, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (black) | "4…exd4 is normal" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4` | exd4 is sound | exd4 +0.03, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (black) | "pin with …Bb4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4` | Bb4 is sound | Bb4 +0.15, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (black) | "recapture …bxc6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6` | bxc6 is sound | bxc6 +0.13, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation (black) | "strike with …d5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3` | d5 is sound | d5 +0.12, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (white) | "5.Nxd4, then Nxc6 against …Bb4 or …Bc5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4` | Nxd4 is sound | Nxd4 +0.14, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (white) | "5.Nxd4, then Nxc6 against …Bb4 or …Bc5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4` | Nxc6 is sound | Nxc6 +0.17, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (white) | "5.Nxd4, then Nxc6 against …Bb4 or …Bc5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bc5` | Nxc6 is sound | Nxc6 +0.20, within 0.20 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (white) | "If Black swaps on d4, Qxd4 is strong" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4` | Qxd4 is sound | Qxd4 +1.39, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "5…Bb4 is the main line" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4` | Bb4 is sound | Bb4 +0.15, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "…bxc6 and …d5 give you a solid c6–d5 centre" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6` | bxc6 is sound | bxc6 +0.13, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "you must play …d6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4` | d6 is sound | d6 +1.39, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "5…Nxd4?" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4` | Nxd4 is a mistake | Nxd4 loses 1.12 (+1.16; best Bb4 +0.04) | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "6.Qxd4 leaves White clearly better" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4` | White clearly better | +1.15 (d6 Bf4 Be7 f3) | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "or e5 is crushing" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4 Be7` | e5 is sound | e5 +5.49, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted (black) | "or e5 is crushing" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxd4 Qxd4 Be7 e5` | White winning | +5.90 (d5 exf6 Bxf6 Qd1) | ✅ |
| Four Knights Game: Scotch Variation Accepted, Main Line (white) | "Castle, then Bg5 and Qf3 after …cxd5 and …c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O O-O cxd5` | Bg5 is sound | Bg5 +0.00, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted, Main Line (white) | "Castle, then Bg5 and Qf3 after …cxd5 and …c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O O-O cxd5 Bg5 c6` | Qf3 is sound | Qf3 +0.03, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted, Main Line (white) | "Castle, then Bg5 and Qf3 after …cxd5 and …c6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O` | O-O is sound | O-O +0.06, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted, Main Line (white) | "9.dxc6 is greedy: after …Re8+" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O dxc6` | Re8+ is sound | Re8+ -0.03, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation Accepted, Main Line (white) | "9.dxc6 is greedy: after …Re8+ your king is stuck in the centre and Black is fine" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O dxc6` | level | +0.00 (Re8+ Kf1 Qd6 h3) | ✅ |
| Four Knights Game: Scotch Variation Accepted, Main Line (black) | "Recapture …cxd5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 O-O O-O` | cxd5 is sound | cxd5 +0.10, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Belgrade Gambit (white) | "Against …Nxe4, Qe2 leads to sharp tactics" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5 Nxe4` | Qe2 is sound | Qe2 -0.16, within 0.10 of best | ✅ |
| Four Knights Game: Scotch Variation, Belgrade Gambit (black) | "Stay calm: …Be7 and castle" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5` | Be7 is sound | Be7 -0.16, within 0.04 of best | ✅ |
| Four Knights Game: Scotch Variation, Belgrade Gambit (black) | "5…Nxe4 is playable but wild" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5` | Nxe4 is sound | Nxe4 -0.11, within 0.09 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "Take with 5.Nxe5." | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4` | Nxe5 is sound | Nxe5 +0.36, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "If …Nxe4? Qg4 hits g7 and the knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5` | Nxe4 is a mistake | Nxe4 loses 0.86 (+1.22; best Bxc3+ +0.36) | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "If …Nxe4? Qg4 hits g7 and the knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Nxe4` | Qg4 is sound | Qg4 +1.18, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "if …Nxe5? dxe5 and Qg4 again" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5` | Nxe5 is a mistake | Nxe5 loses 2.74 (+3.10; best Bxc3+ +0.36) | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "if …Nxe5? dxe5 and Qg4 again" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Nxe5` | dxe5 is sound | dxe5 +3.15, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "if …Nxe5? dxe5 and Qg4 again" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Nxe5 dxe5 Nxe4` | Qg4 is sound | Qg4 +3.31, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (white) | "Against …Qe7, Qd3 holds e4" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7` | Qd3 is sound | Qd3 +0.42, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (black) | "5…Qe7 (the Leonhardt) is best" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5` | Qe7 is sound | Qe7 +0.52, within 0.16 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (black) | "5…Nxe4? and 5…Nxe5? both run into Qg4 tactics" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5` | Nxe4 is a mistake | Nxe4 loses 0.86 (+1.22; best Bxc3+ +0.36) | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit (black) | "5…Nxe4? and 5…Nxe5? both run into Qg4 tactics" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5` | Nxe5 is a mistake | Nxe5 loses 2.74 (+3.10; best Bxc3+ +0.36) | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense (white) | "6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7` | Qd3 is sound | Qd3 +0.42, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense (white) | "6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3 Bxc3+` | Qxc3 is sound | Qxc3 +0.48, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense (white) | "6.Qd3 Bxc3+ 7.Qxc3 Nxe4 8.Qe3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3 Bxc3+ Qxc3 Nxe4` | Qe3 is sound | Qe3 +0.36, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense (black) | "…Bxc3+ and …Nxe4 regain the pawn" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3` | Bxc3+ is sound | Bxc3+ +0.42, within 0.00 of best | ✅ |
| Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense (black) | "…Bxc3+ and …Nxe4 regain the pawn" | `e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7 Qd3 Bxc3+ Qxc3` | Nxe4 is sound | Nxe4 +0.29, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation (white) | "Against the fork trick play 6.Bd3" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5` | Bd3 is sound | Bd3 -0.09, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation (white) | "never 6.Bxd5?" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5` | Bxd5 is a mistake | Bxd5 loses 1.36 (-1.47; best Bd3 -0.11) | ✅ |
| Four Knights Game: Italian Variation (white) | "Against …Bc5, …Bb4 or …Be7, the quiet setup: d3" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Bc5` | d3 is sound | d3 +0.23, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation (white) | "Against …Bc5, …Bb4 or …Be7, the quiet setup: d3" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Bb4` | d3 is playable | d3 loses 0.37 (+0.17; best Nd5 +0.54) | ✅ |
| Four Knights Game: Italian Variation (white) | "Against …Bc5, …Bb4 or …Be7, the quiet setup: d3" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Be7` | d3 is sound | d3 +0.29, within 0.14 of best | ✅ |
| Four Knights Game: Italian Variation (black) | "4…Nxe4! 5.Nxe4 d5 forks bishop and knight" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3` | Nxe4 is sound | Nxe4 -0.18, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation (black) | "4…Nxe4! 5.Nxe4 d5 forks bishop and knight" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4` | d5 is sound | d5 -0.06, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation (black) | "wins the piece back with full equality" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5 Bd3 dxe4 Bxe4` | level | -0.14 (Bd6 d4 exd4 O-O) | ✅ |
| Four Knights Game: Italian Variation (black) | "Against 6.Bxd5? take with the queen" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5 Bxd5` | Qxd5 is sound | Qxd5 -1.54, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation, Noa Gambit (white) | "objectively Black is much better" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Bxf7+ Kxf7 Nxe4` | Black winning | -1.83 (d5 Ng3 e4 Ng1) | ✅ |
| Four Knights Game: Italian Variation, Noa Gambit (black) | "Take with the king" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Bxf7+` | Kxf7 is sound | Kxf7 -1.71, within 0.00 of best | ✅ |
| Four Knights Game: Italian Variation, Noa Gambit (black) | "then …d5 builds a big centre" | `e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Bxf7+ Kxf7 Nxe4` | d5 is sound | d5 -1.62, within 0.00 of best | ✅ |
| Four Knights Game: Glek System (black) | "Strike with …d5 at once" | `e4 e5 Nf3 Nc6 Nc3 Nf6 g3` | d5 is sound | d5 +0.03, within 0.22 of best | ✅ |
| Four Knights Game: Glek System (black) | "swap on c3" | `e4 e5 Nf3 Nc6 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2` | Nxc3 is sound | Nxc3 +0.08, within 0.00 of best | ✅ |
| Four Knights Game: Glek System (black) | "then …Bd6 to guard e5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3` | Bd6 is sound | Bd6 +0.10, within 0.10 of best | ✅ |
| Four Knights Game: Gunsberg Variation (white) | "Against …Bc5, the fork trick works: Nxe5, and d4 forks bishop and knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 a3 Bc5` | Nxe5 is sound | Nxe5 +0.63, within 0.00 of best | ✅ |
| Four Knights Game: Gunsberg Variation (white) | "Against …Bc5, the fork trick works: Nxe5, and d4 forks bishop and knight" | `e4 e5 Nf3 Nc6 Nc3 Nf6 a3 Bc5 Nxe5 Nxe5` | d4 is sound | d4 +0.51, within 0.00 of best | ✅ |
| Four Knights Game: Gunsberg Variation (black) | "hit the centre with …d5" | `e4 e5 Nf3 Nc6 Nc3 Nf6 a3` | d5 is sound | d5 -0.11, within 0.00 of best | ✅ |
| Four Knights Game: Gunsberg Variation (black) | "Avoid …Bc5 unless you have prepared …d6" | `e4 e5 Nf3 Nc6 Nc3 Nf6 a3` | Bc5 is dubious | Bc5 loses 0.55 (+0.42; best d5 -0.13) | ✅ |
| Four Knights Game: Halloween Gambit (idea) | "It is unsound." | `e4 e5 Nf3 Nc6 Nc3 Nf6` | Nxe5 is a mistake | Nxe5 loses 2.02 (-1.90; best d4 +0.12) | ✅ |
| Four Knights Game: Halloween Gambit (white) | "d4, e5 (and often d5 and f4) drive the knights back" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5` | d4 is sound | d4 -2.11, within 0.00 of best | ✅ |
| Four Knights Game: Halloween Gambit (black) | "Take, retreat to g6 and g8" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5` | Nxe5 is sound | Nxe5 -2.62, within 0.00 of best | ✅ |
| Four Knights Game: Halloween Gambit (black) | "Take, retreat to g6 and g8" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4` | Ng6 is sound | Ng6 -2.74, within 0.00 of best | ✅ |
| Four Knights Game: Halloween Gambit (black) | "Take, retreat to g6 and g8" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4 Ng6 e5` | Ng8 is sound | Ng8 -2.78, within 0.00 of best | ✅ |
| Four Knights Game: Halloween Gambit (black) | "a piece for two pawns still wins" | `e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4 Ng6 e5 Ng8 Bc4 d5 Bxd5` | Black winning | -1.80 (N8e7 Be4 c5 d5) | ✅ |
| King's Gambit Declined: Queen's Knight Defense (white) | "Don't play an early fxe5" | `e4 e5 f4 Nc6` | fxe5 is a blunder | fxe5 loses 7.99 (-7.86; best Nf3 +0.13) | ✅ |
| Sicilian Defense (white) | "Either open up with Nf3 and d4" | `e4 c5` | Nf3 is sound | Nf3 +0.31, within 0.00 of best | ✅ |
| Sicilian Defense (white) | "an anti-Sicilian such as 2.c3" | `e4 c5` | c3 is sound | c3 +0.10, within 0.24 of best | ✅ |
| Sicilian Defense (white) | "2.Nc3" | `e4 c5` | Nc3 is sound | Nc3 +0.26, within 0.08 of best | ✅ |
| Sicilian Defense (white) | "or 3.Bb5" | `e4 c5 Nf3 Nc6` | Bb5 is sound | Bb5 +0.32, within 0.00 of best | ✅ |
| Sicilian Defense: Accelerated Dragon (white) | "The critical try is c4 (the Maróczy Bind)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6` | c4 is sound | c4 +0.42, within 0.00 of best | ✅ |
| Sicilian Defense: Accelerated Dragon (white) | "Otherwise Nc3, Be3 and Bc4, but then Black gets …d5 in one go." | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3` | d5 is sound | d5 +0.21, within 0.00 of best | ✅ |
| Sicilian Defense: Accelerated Dragon (black) | "Against the Maróczy Bind, play …d6" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3` | d6 is sound | d6 +0.34, within 0.00 of best | ✅ |
| Sicilian Defense: Accelerated Dragon (black) | "swap knights with …Nxd4" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3 d6 Be2` | Nxd4 is sound | Nxd4 +0.45, within 0.00 of best | ✅ |
| Sicilian Defense: Alapin Variation (white) | "Play d4 and meet …cxd4 with cxd4" | `e4 c5 c3 e6 d4 cxd4` | cxd4 is sound | cxd4 +0.49, within 0.00 of best | ✅ |
| Sicilian Defense: Alapin Variation (black) | "2…d5 (recapturing with the queen)" | `e4 c5 c3` | d5 is sound | d5 +0.15, within 0.05 of best | ✅ |
| Sicilian Defense: Alapin Variation (black) | "2…d5 (recapturing with the queen)" | `e4 c5 c3 d5 exd5` | Qxd5 is sound | Qxd5 +0.15, within 0.00 of best | ✅ |
| Sicilian Defense: Alapin Variation (black) | "2…Nf6 (3.e5 Nd5)" | `e4 c5 c3` | Nf6 is sound | Nf6 +0.15, within 0.00 of best | ✅ |
| Sicilian Defense: Alapin Variation (black) | "2…Nf6 (3.e5 Nd5)" | `e4 c5 c3 Nf6 e5` | Nd5 is sound | Nd5 +0.13, within 0.00 of best | ✅ |
| Sicilian Defense: Bowdler Attack (idea) | "this is an offbeat, slightly toothless sideline" | `e4 c5 Bc4` | level | -0.01 (e6 Nf3 a6 d4) | ✅ |
| Sicilian Defense: Bowdler Attack (black) | "…e6 and …d5 hit the bishop and take the centre" | `e4 c5 Bc4` | e6 is sound | e6 -0.05, within 0.00 of best | ✅ |
| Sicilian Defense: Bowdler Attack (black) | "…e6 and …d5 hit the bishop and take the centre" | `e4 c5 Bc4 e6 Nf3` | d5 is sound | d5 +0.07, within 0.11 of best | ✅ |
| Sicilian Defense: Chekhover Variation (black) | "Gain time on the queen with …Nc6" | `e4 c5 Nf3 d6 d4 cxd4 Qxd4` | Nc6 is sound | Nc6 +0.15, within 0.06 of best | ✅ |
| Sicilian Defense: Chekhover Variation (white) | "After …Nc6, pin with Bb5" | `e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6` | Bb5 is sound | Bb5 +0.12, within 0.00 of best | ✅ |
| Sicilian Defense: Chekhover Variation (black) | "After Bb5 …Bd7" | `e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5` | Bd7 is sound | Bd7 +0.19, within 0.14 of best | ✅ |
| Sicilian Defense: Chekhover Variation (white) | "swap on c6" | `e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5 Bd7` | Bxc6 is sound | Bxc6 +0.13, within 0.06 of best | ✅ |
| Sicilian Defense: Closed (black) | "Develop flexibly with …Nc6" | `e4 c5 Nc3` | Nc6 is sound | Nc6 +0.21, within 0.00 of best | ✅ |
| Sicilian Defense: Closed (black) | "or …e6 and …d5 to hit the centre" | `e4 c5 Nc3` | e6 is sound | e6 +0.36, within 0.14 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with d6 (idea) | "Black usually hits e4 with the knight instead" | `e4 c5 Nf3 d6 c3` | Nf6 is sound | Nf6 -0.03, within 0.00 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with d6 (black) | "If White plays d4 anyway, take the pawn with …Nxe4" | `e4 c5 Nf3 d6 c3 Nf6 d4` | Nxe4 is sound | Nxe4 -0.13, within 0.00 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with d6 (white) | "defend e4 first with Be2 or Bd3" | `e4 c5 Nf3 d6 c3 Nf6` | Be2 is sound | Be2 +0.03, within 0.00 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with d6 (white) | "defend e4 first with Be2 or Bd3" | `e4 c5 Nf3 d6 c3 Nf6` | Bd3 is sound | Bd3 -0.07, within 0.03 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with d6 (white) | "4…Nxe4?? loses the knight to 5.Qa4+" | `e4 c5 Nf3 d6 c3 Nf6 Be2` | Nxe4 is a blunder | Nxe4 loses 5.43 (+5.49; best g6 +0.06) | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with d6 (white) | "4…Nxe4?? loses the knight to 5.Qa4+" | `e4 c5 Nf3 d6 c3 Nf6 Be2 Nxe4 Qa4+` | White winning | +5.44 (Nc6 Qxe4 e5 Bc4) | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with e6 (black) | "3…d5 or 3…Nf6 (4.e5 Nd5) challenge the centre at once" | `e4 c5 Nf3 e6 c3` | d5 is sound | d5 +0.26, within 0.00 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with e6 (black) | "3…d5 or 3…Nf6 (4.e5 Nd5) challenge the centre at once" | `e4 c5 Nf3 e6 c3` | Nf6 is sound | Nf6 +0.30, within 0.00 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with e6 (black) | "3…Nf6 (4.e5 Nd5)" | `e4 c5 Nf3 e6 c3 Nf6 e5` | Nd5 is sound | Nd5 +0.40, within 0.00 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with e6 (white) | "If Black plays …d5, either push e5" | `e4 c5 Nf3 e6 c3 d5` | e5 is sound | e5 +0.22, within 0.06 of best | ✅ |
| Sicilian Defense: Delayed Alapin Variation, with e6 (white) | "or allow exd5 positions" | `e4 c5 Nf3 e6 c3 d5` | exd5 is sound | exd5 +0.26, within 0.00 of best | ✅ |
| Sicilian Defense: Dragon Variation, Accelerated Dragon (white) | "Either 5.c4 (Maróczy Bind)" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6` | c4 is sound | c4 +0.50, within 0.19 of best | ✅ |
| Sicilian Defense: Dragon Variation, Accelerated Dragon (white) | "or Nc3, Be3, f3, Qd2 and 0-0-0" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6` | Nc3 is sound | Nc3 +0.60, within 0.00 of best | ✅ |
| Sicilian Defense: Dragon Variation, Accelerated Dragon (black) | "Against the Bind, trade knights with …Nxd4" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3 Nc6 Be2` | Nxd4 is sound | Nxd4 +0.45, within 0.00 of best | ✅ |
| Sicilian Defense: French Variation (white) | "Usually 3.d4 for an Open Sicilian" | `e4 c5 Nf3 e6` | d4 is sound | d4 +0.47, within 0.00 of best | ✅ |
| Sicilian Defense: French Variation (white) | "Quieter options are 3.c3" | `e4 c5 Nf3 e6` | c3 is sound | c3 +0.27, within 0.27 of best | ✅ |
| Sicilian Defense: French Variation (white) | "a King's Indian Attack set-up with d3, g3 and Bg2" | `e4 c5 Nf3 e6` | d3 is playable | d3 loses 0.45 (+0.09; best d4 +0.54) | ✅ |
| Sicilian Defense: Hyperaccelerated Dragon (white) | "3.c3 followed by d4" | `e4 c5 Nf3 g6` | c3 is sound | c3 +0.37, within 0.00 of best | ✅ |
| Sicilian Defense: Hyperaccelerated Dragon (white) | "After 3.d4 cxd4 4.Qxd4 the queen attacks the rook on h8, gaining time." | `e4 c5 Nf3 g6 d4 cxd4` | Qxd4 is sound | Qxd4 +0.37, within 0.00 of best | ✅ |
| Sicilian Defense: Hyperaccelerated Dragon (black) | "After 3.d4 cxd4 4.Qxd4, play …Nf6" | `e4 c5 Nf3 g6 d4 cxd4 Qxd4` | Nf6 is sound | Nf6 +0.38, within 0.00 of best | ✅ |
| Sicilian Defense: Hyperaccelerated Dragon (black) | "and …Nc6 with gains of time on the queen" | `e4 c5 Nf3 g6 d4 cxd4 Qxd4 Nf6 e5` | Nc6 is sound | Nc6 +0.15, within 0.00 of best | ✅ |
| Sicilian Defense: Hyperaccelerated Dragon (black) | "Against c3 set-ups, …d5 hits the centre." | `e4 c5 Nf3 g6 c3` | d5 is sound | d5 +0.34, within 0.00 of best | ✅ |
| Sicilian Defense: Kramnik Variation (black) | "Develop with …Nc6 and …Nf6" | `e4 c5 Nf3 e6 c4` | Nc6 is sound | Nc6 +0.13, within 0.00 of best | ✅ |
| Sicilian Defense: Löwenthal Variation (white) | "5.Nb5 heads for d6" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5` | Nb5 is sound | Nb5 +0.49, within 0.00 of best | ✅ |
| Sicilian Defense: Löwenthal Variation (black) | "After 5.Nb5, …a6" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5` | a6 is sound | a6 +0.64, within 0.19 of best | ✅ |
| Sicilian Defense: Löwenthal Variation (white) | "After …a6, Nd6+ Bxd6 Qxd6 wins the bishop pair" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 a6` | Nd6+ is sound | Nd6+ +0.73, within 0.00 of best | ✅ |
| Sicilian Defense: Löwenthal Variation (black) | "7.Qxd6 Qf6 offers a queen trade" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 a6 Nd6+ Bxd6 Qxd6` | Qf6 is sound | Qf6 +0.94, within 0.26 of best | ✅ |
| Sicilian Defense: McDonnell Attack (black) | "2…d5 is the principled answer" | `e4 c5 f4` | d5 is sound | d5 -0.05, within 0.00 of best | ✅ |
| Sicilian Defense: McDonnell Attack (black) | "…e6 with …d5, or …Nc6 with …g6, are also good" | `e4 c5 f4` | e6 is sound | e6 +0.01, within 0.00 of best | ✅ |
| Sicilian Defense: McDonnell Attack (black) | "…e6 with …d5, or …Nc6 with …g6, are also good" | `e4 c5 f4` | Nc6 is sound | Nc6 +0.10, within 0.11 of best | ✅ |
| Sicilian Defense: Modern Variations, Main Line (idea) | "asks White to defend it, usually with 5.Nc3" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6` | Nc3 is sound | Nc3 +0.29, within 0.00 of best | ✅ |
| Sicilian Defense: Modern Variations, Main Line (black) | "Choose …a6 (Najdorf)" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3` | a6 is sound | a6 +0.30, within 0.00 of best | ✅ |
| Sicilian Defense: Modern Variations, Main Line (black) | "…g6 (Dragon)" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3` | g6 is playable | g6 +0.57, within 0.28 of best | ✅ |
| Sicilian Defense: Modern Variations, Main Line (black) | "…Nc6 (Classical)" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3` | Nc6 is sound | Nc6 +0.40, within 0.11 of best | ✅ |
| Sicilian Defense: Modern Variations, Main Line (black) | "…e6 (Scheveningen)" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3` | e6 is playable | e6 loses 0.33 (+0.62; best a6 +0.29) | ✅ |
| Sicilian Defense: Modern Variations, Tartakower (black) | "Taking with …dxc3 is fine if you develop carefully" | `e4 c5 Nf3 d6 d4 cxd4 c3` | dxc3 is sound | dxc3 -0.09, within 0.00 of best | ✅ |
| Sicilian Defense: Modern Variations, Tartakower (black) | "simpler is …Nf6, hitting e4" | `e4 c5 Nf3 d6 d4 cxd4 c3` | Nf6 is sound | Nf6 -0.06, within 0.16 of best | ✅ |
| Sicilian Defense: Modern Variations, Tartakower (black) | "Black is comfortable either way." | `e4 c5 Nf3 d6 d4 cxd4 c3` | level | -0.22 (dxc3 Nxc3 Nc6 Bc4) | ✅ |
| Sicilian Defense: Modern Variations, Tartakower (black) | "Black is comfortable either way." | `e4 c5 Nf3 d6 d4 cxd4 c3 dxc3 Nxc3` | level | -0.11 (Nc6 Bc4 a6 O-O) | ✅ |
| Sicilian Defense: Modern Variations (white) | "Usually 3.d4 for the Open Sicilian" | `e4 c5 Nf3 d6` | d4 is sound | d4 +0.36, within 0.00 of best | ✅ |
| Sicilian Defense: Modern Variations (white) | "play 3.Bb5+ (Moscow Variation)" | `e4 c5 Nf3 d6` | Bb5+ is sound | Bb5+ +0.19, within 0.13 of best | ✅ |
| Sicilian Defense: Modern Variations (white) | "or 3.c3 (Delayed Alapin)" | `e4 c5 Nf3 d6` | c3 is sound | c3 +0.13, within 0.19 of best | ✅ |
| Sicilian Defense: Modern Variations (black) | "If White recaptures 4.Qxd4, …Nc6" | `e4 c5 Nf3 d6 d4 cxd4 Qxd4` | Nc6 is sound | Nc6 +0.15, within 0.06 of best | ✅ |
| Sicilian Defense: Modern Variations (black) | "or …a6 with …Nc6 gains time on the queen" | `e4 c5 Nf3 d6 d4 cxd4 Qxd4` | a6 is playable | a6 loses 0.36 (+0.45; best Nf6 +0.09) | ✅ |
| Sicilian Defense: Moscow Variation (black) | "3…Bd7 trades bishops and gives a solid game" | `e4 c5 Nf3 d6 Bb5+` | Bd7 is sound | Bd7 +0.15, within 0.00 of best | ✅ |
| Sicilian Defense: Moscow Variation (black) | "3…Nd7 keeps the bishops for a sharper position" | `e4 c5 Nf3 d6 Bb5+` | Nd7 is sound | Nd7 +0.20, within 0.00 of best | ✅ |
| Sicilian Defense: Moscow Variation (white) | "After 3…Bd7 4.Bxd7+ Qxd7, play c4 and Nc3" | `e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7` | c4 is sound | c4 +0.29, within 0.00 of best | ✅ |
| Sicilian Defense: Moscow Variation (white) | "or 0-0, c3 and d4 for a big centre" | `e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7` | O-O is sound | O-O +0.12, within 0.11 of best | ✅ |
| Sicilian Defense: Moscow Variation (idea) | "White usually trades the light-squared bishops and gets an easy position" | `e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7` | White slightly better | +0.23 (c4 Nc6 Nc3 g6) | ✅ |
| Sicilian Defense: Nyezhmetdinov-Rossolimo Attack (black) | "Either …g6, …Bg7 and …Nf6" | `e4 c5 Nf3 Nc6 Bb5` | g6 is sound | g6 +0.36, within 0.00 of best | ✅ |
| Sicilian Defense: Nyezhmetdinov-Rossolimo Attack (black) | "or …e6 and …Nge7" | `e4 c5 Nf3 Nc6 Bb5` | e6 is sound | e6 +0.31, within 0.00 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (white) | "3.c3 or 3.c4, positions where …a6 is a wasted move" | `e4 c5 Nf3 a6` | c3 is sound | c3 +0.35, within 0.26 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (white) | "3.c3 or 3.c4, positions where …a6 is a wasted move" | `e4 c5 Nf3 a6` | c4 is sound | c4 +0.51, within 0.00 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (idea) | "If White plays the normal 3.d4, Black follows with …Nf6" | `e4 c5 Nf3 a6 d4 cxd4 Nxd4` | Nf6 is sound | Nf6 +0.24, within 0.00 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (black) | "After 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3, play …e5 to hit the knight" | `e4 c5 Nf3 a6 d4 cxd4 Nxd4 Nf6 Nc3` | e5 is sound | e5 +0.09, within 0.00 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (black) | "Against 3.c3, hit e4 with …d5 or …Nf6" | `e4 c5 Nf3 a6 c3` | d5 is sound | d5 +0.36, within 0.00 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (black) | "Against 3.c3, hit e4 with …d5 or …Nf6" | `e4 c5 Nf3 a6 c3` | Nf6 is sound | Nf6 +0.37, within 0.00 of best | ✅ |
| Sicilian Defense: O'Kelly Variation (black) | "Against 3.c4, play …e6" | `e4 c5 Nf3 a6 c4` | e6 is sound | e6 +0.65, within 0.23 of best | ✅ |
| Sicilian Defense: Old Sicilian (white) | "3.d4 for the Open Sicilian" | `e4 c5 Nf3 Nc6` | d4 is sound | d4 +0.23, within 0.04 of best | ✅ |
| Sicilian Defense: Old Sicilian (white) | "avoid it with 3.Bb5 (Rossolimo)" | `e4 c5 Nf3 Nc6` | Bb5 is sound | Bb5 +0.32, within 0.00 of best | ✅ |
| Sicilian Defense: Old Sicilian (white) | "3.Nc3 or 3.c3" | `e4 c5 Nf3 Nc6` | Nc3 is sound | Nc3 +0.32, within 0.00 of best | ✅ |
| Sicilian Defense: Old Sicilian (white) | "3.Nc3 or 3.c3" | `e4 c5 Nf3 Nc6` | c3 is sound | c3 +0.14, within 0.13 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "After 3.d4 cxd4 4.Nxd4, choose …Nf6" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | Nf6 is sound | Nf6 +0.20, within 0.00 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "…e6 (Taimanov)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | e6 is sound | e6 +0.41, within 0.19 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "…g6 (Accelerated Dragon)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | g6 is sound | g6 +0.36, within 0.14 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "…g6 (Accelerated Dragon) or …e5" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | e5 is sound | e5 +0.33, within 0.11 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "…Nf6 (then …e5 or …d6)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3` | e5 is sound | e5 +0.24, within 0.00 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "…Nf6 (then …e5 or …d6)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3` | d6 is sound | d6 +0.34, within 0.10 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "Against 3.Bb5, …g6 or …e6 are solid." | `e4 c5 Nf3 Nc6 Bb5` | g6 is sound | g6 +0.36, within 0.00 of best | ✅ |
| Sicilian Defense: Old Sicilian (black) | "Against 3.Bb5, …g6 or …e6 are solid." | `e4 c5 Nf3 Nc6 Bb5` | e6 is sound | e6 +0.31, within 0.00 of best | ✅ |
| Sicilian Defense: Open (white) | "c4 (Maróczy Bind) is an option against …g6" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6` | c4 is sound | c4 +0.42, within 0.00 of best | ✅ |
| Sicilian Defense: Open (black) | "Choose …Nf6 (Sveshnikov or Classical)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | Nf6 is sound | Nf6 +0.20, within 0.00 of best | ✅ |
| Sicilian Defense: Open (black) | "…e6 (Taimanov)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | e6 is sound | e6 +0.41, within 0.19 of best | ✅ |
| Sicilian Defense: Open (black) | "…g6 (Accelerated Dragon)" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | g6 is sound | g6 +0.36, within 0.14 of best | ✅ |
| Sicilian Defense: Open (black) | "…g6 (Accelerated Dragon) or …e5" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4` | e5 is sound | e5 +0.33, within 0.11 of best | ✅ |
| Sicilian Defense: Prins Variation (black) | "Strike at once with 5…e5, chasing the knight" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3` | e5 is sound | e5 +0.05, within 0.00 of best | ✅ |
| Sicilian Defense: Prins Variation (black) | "with no knight on c3, …d5 becomes possible" | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5 Nb3` | d5 is sound | d5 +0.02, within 0.00 of best | ✅ |
| Sicilian Defense: Smith-Morra Gambit (black) | "Accept and develop carefully" | `e4 c5 d4 cxd4 c3` | dxc3 is sound | dxc3 -0.16, within 0.00 of best | ✅ |
| Sicilian Defense: Smith-Morra Gambit (black) | "Declining with 3…Nf6 or 3…d5" | `e4 c5 d4 cxd4 c3` | Nf6 is playable | Nf6 loses 0.36 (+0.20; best dxc3 -0.16) | ✅ |
| Sicilian Defense: Smith-Morra Gambit (black) | "Declining with 3…Nf6 or 3…d5" | `e4 c5 d4 cxd4 c3` | d5 is playable | d5 loses 0.39 (+0.23; best dxc3 -0.16) | ✅ |
| Sicilian Defense: Taimanov Variation (white) | "5.Nc3 with Be3" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6` | Nc3 is sound | Nc3 +0.32, within 0.00 of best | ✅ |
| Sicilian Defense: Taimanov Variation (white) | "or 5.Nb5 d6 6.c4 for a Maróczy bind" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6` | Nb5 is sound | Nb5 +0.14, within 0.24 of best | ✅ |
| Sicilian Defense: Taimanov Variation (white) | "or 5.Nb5 d6 6.c4 for a Maróczy bind" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nb5 d6` | c4 is sound | c4 +0.15, within 0.00 of best | ✅ |
| Sicilian Defense: Taimanov Variation (black) | "…a6, …Qc7 and …Nf6" | `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nc3` | a6 is sound | a6 +0.39, within 0.00 of best | ✅ |
| French Defense (white) | "Build a centre with d4" | `e4 e6` | d4 is sound | d4 +0.32, within 0.00 of best | ✅ |
| French Defense: Advance Variation (black) | "…c5, …Nc6, …Qb6" | `e4 e6 d4 d5 e5` | c5 is sound | c5 +0.30, within 0.00 of best | ✅ |
| French Defense: Advance Variation (white) | "c3 and Nf3 to hold d4" | `e4 e6 d4 d5 e5 c5` | c3 is sound | c3 +0.28, within 0.00 of best | ✅ |
| French Defense: Advance Variation (black) | "…Nxd4?? Nxd4 Qxd4 loses the queen to Bb5+" | `e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4 Nxd4` | Qxd4 is a blunder | Qxd4 loses 4.14 (+9.52; best Bc5 +5.38) | ✅ |
| French Defense: Advance Variation (black) | "…Nxd4?? Nxd4 Qxd4 loses the queen to Bb5+" | `e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4 Nxd4 Qxd4 Bb5+` | White winning | +9.36 (Bd7 Bxd7+ Kxd7 Qxd4) | ✅ |
| French Defense: Exchange Variation (black) | "The position is level" | `e4 e6 d4 d5 exd5 exd5` | level | +0.21 (Nf3 Nf6 Bd3 c5) | ✅ |
| French Defense: Franco-Sicilian Defense (white) | "3.Nf3 cxd4 4.Nxd4 gives an Open Sicilian" | `e4 c5 d4 e6` | Nf3 is sound | Nf3 +0.51, within 0.12 of best | ✅ |
| French Defense: Franco-Sicilian Defense (white) | "3.d5 grabs space" | `e4 c5 d4 e6` | d5 is sound | d5 +0.64, within 0.00 of best | ✅ |
| French Defense: Franco-Sicilian Defense (black) | "Answer Nf3 with …cxd4" | `e4 c5 d4 e6 Nf3` | cxd4 is sound | cxd4 +0.50, within 0.00 of best | ✅ |
| French Defense: Franco-Sicilian Defense (black) | "or play …d5 for French-type positions" | `e4 c5 d4 e6 Nf3` | d5 is playable | d5 loses 0.36 (+0.83; best cxd4 +0.47) | ✅ |
| French Defense: Franco-Sicilian Defense (black) | "Against 3.d5, …exd5 exd5 and …d6" | `e4 c5 d4 e6 d5` | exd5 is sound | exd5 +0.99, within 0.26 of best | ✅ |
| French Defense: Franco-Sicilian Defense (black) | "Against 3.d5, …exd5 exd5 and …d6" | `e4 c5 d4 e6 d5 exd5 exd5` | d6 is sound | d6 +0.85, within 0.00 of best | ✅ |
| French Defense: King's Indian Attack (black) | "…d5, …c5, …Nc6" | `e4 e6 d3` | d5 is sound | d5 -0.02, within 0.00 of best | ✅ |
| French Defense: Knight Variation (black) | "2…d5 and the normal French plan" | `e4 e6 Nf3` | d5 is sound | d5 +0.23, within 0.00 of best | ✅ |
| French Defense: Knight Variation (white) | "Answer …d5 with 3.Nc3, 3.e5 or 3.exd5" | `e4 e6 Nf3 d5` | Nc3 is sound | Nc3 +0.05, within 0.11 of best | ✅ |
| French Defense: Knight Variation (white) | "Answer …d5 with 3.Nc3, 3.e5 or 3.exd5" | `e4 e6 Nf3 d5` | e5 is sound | e5 +0.31, within 0.00 of best | ✅ |
| French Defense: Knight Variation (white) | "Answer …d5 with 3.Nc3, 3.e5 or 3.exd5" | `e4 e6 Nf3 d5` | exd5 is sound | exd5 +0.30, within 0.00 of best | ✅ |
| French Defense: Knight Variation (black) | "If White pushes e5 without d4, hit it with …c5" | `e4 e6 Nf3 d5 e5` | c5 is sound | c5 +0.27, within 0.00 of best | ✅ |
| French Defense: La Bourdonnais Variation (black) | "2…d5, and if 3.e5" | `e4 e6 f4` | d5 is sound | d5 -0.09, within 0.00 of best | ✅ |
| French Defense: La Bourdonnais Variation (black) | "if 3.e5, then …c5" | `e4 e6 f4 d5 e5` | c5 is sound | c5 -0.04, within 0.22 of best | ✅ |
| French Defense: Paulsen Variation (black) | "Pin with …Bb4" | `e4 e6 d4 d5 Nc3` | Bb4 is sound | Bb4 +0.68, within 0.20 of best | ✅ |
| French Defense: Paulsen Variation (black) | "or play …Nf6 to pressure e4" | `e4 e6 d4 d5 Nc3` | Nf6 is sound | Nf6 +0.44, within 0.00 of best | ✅ |
| French Defense: Paulsen Variation (black) | "…dxe4 gives up the centre for a solid, freer game" | `e4 e6 d4 d5 Nc3` | dxe4 is sound | dxe4 +0.47, within 0.00 of best | ✅ |
| French Defense: Paulsen Variation (white) | "Against …Bb4, e5 and a3 to win the bishop pair" | `e4 e6 d4 d5 Nc3 Bb4` | e5 is sound | e5 +0.60, within 0.00 of best | ✅ |
| French Defense: Paulsen Variation (white) | "Against …Bb4, e5 and a3 to win the bishop pair" | `e4 e6 d4 d5 Nc3 Bb4 e5 c5` | a3 is sound | a3 +0.62, within 0.00 of best | ✅ |
| French Defense: Paulsen Variation (white) | "Against …Nf6, Bg5 or e5" | `e4 e6 d4 d5 Nc3 Nf6` | Bg5 is sound | Bg5 +0.35, within 0.15 of best | ✅ |
| French Defense: Paulsen Variation (white) | "Against …Nf6, Bg5 or e5" | `e4 e6 d4 d5 Nc3 Nf6` | e5 is sound | e5 +0.40, within 0.00 of best | ✅ |
| French Defense: Paulsen Variation (white) | "Against …dxe4, Nxe4" | `e4 e6 d4 d5 Nc3 dxe4` | Nxe4 is sound | Nxe4 +0.45, within 0.00 of best | ✅ |
| French Defense: Queen's Knight (black) | "2…d5 and the normal French plan" | `e4 e6 Nc3` | d5 is sound | d5 +0.44, within 0.00 of best | ✅ |
| French Defense: Queen's Knight (idea) | "After 2…d5, White can transpose with 3.d4 or play 3.Nf3 (Two Knights)" | `e4 e6 Nc3 d5` | d4 is sound | d4 +0.42, within 0.00 of best | ✅ |
| French Defense: Queen's Knight (idea) | "After 2…d5, White can transpose with 3.d4 or play 3.Nf3 (Two Knights)" | `e4 e6 Nc3 d5` | Nf3 is playable | Nf3 loses 0.37 (-0.01; best d4 +0.36) | ✅ |
| French Defense: Queen's Knight (black) | "If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4." | `e4 e6 Nc3 d5 Nf3` | dxe4 is playable | dxe4 loses 0.47 (+0.44; best d4 -0.03) | ✅ |
| French Defense: Queen's Knight (black) | "If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4." | `e4 e6 Nc3 d5 Nf3` | Nf6 is sound | Nf6 +0.17, within 0.20 of best | ✅ |
| French Defense: Queen's Knight (black) | "If White avoids d4, hit e4 with …dxe4 or …Nf6, or grab space with …d4." | `e4 e6 Nc3 d5 Nf3` | d4 is sound | d4 +0.06, within 0.00 of best | ✅ |
| French Defense: Schlechter Variation (idea) | "It is playable but slightly clumsy" | `e4 e6 d4 d5 Bd3` | level | -0.10 (dxe4 Bxe4 Nf6 Bf3) | ✅ |
| French Defense: Schlechter Variation (black) | "3…c5 hits d4 at once" | `e4 e6 d4 d5 Bd3` | c5 is sound | c5 +0.16, within 0.26 of best | ✅ |
| French Defense: Schlechter Variation (black) | "…dxe4 Bxe4 …Nf6 gains time on the bishop" | `e4 e6 d4 d5 Bd3` | dxe4 is sound | dxe4 -0.08, within 0.00 of best | ✅ |
| French Defense: Schlechter Variation (black) | "…dxe4 Bxe4 …Nf6 gains time on the bishop" | `e4 e6 d4 d5 Bd3 dxe4 Bxe4` | Nf6 is sound | Nf6 -0.07, within 0.00 of best | ✅ |
| French Defense: Steiner Variation (black) | "2…d5 opens the position" | `e4 e6 c4` | d5 is sound | d5 -0.03, within 0.00 of best | ✅ |
| French Defense: Steiner Variation (white) | "If …d5 comes, exchange on d5" | `e4 e6 c4 d5` | exd5 is sound | exd5 +0.00, within 0.00 of best | ✅ |
| French Defense: Tarrasch Variation (black) | "3…c5 opens the centre" | `e4 e6 d4 d5 Nd2` | c5 is sound | c5 +0.22, within 0.00 of best | ✅ |
| French Defense: Tarrasch Variation (black) | "3…Nf6 4.e5 Nfd7 gives a locked chain" | `e4 e6 d4 d5 Nd2` | Nf6 is sound | Nf6 +0.48, within 0.27 of best | ✅ |
| French Defense: Tarrasch Variation (black) | "3…Nf6 4.e5 Nfd7 gives a locked chain" | `e4 e6 d4 d5 Nd2 Nf6 e5` | Nfd7 is sound | Nfd7 +0.44, within 0.00 of best | ✅ |
| French Defense: Tarrasch Variation (black) | "then …c5, …Nc6, …Qb6 and …f6" | `e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3` | c5 is sound | c5 +0.42, within 0.00 of best | ✅ |
| French Defense: Two Knights Variation (black) | "3…Nf6 heads for normal French play" | `e4 e6 Nf3 d5 Nc3` | Nf6 is sound | Nf6 +0.17, within 0.20 of best | ✅ |
| French Defense: Two Knights Variation (black) | "if 4.e5, …Nfd7" | `e4 e6 Nf3 d5 Nc3 Nf6 e5` | Nfd7 is sound | Nfd7 +0.09, within 0.00 of best | ✅ |
| French Defense: Two Knights Variation (black) | "3…d4 grabs space and gains time on the c3 knight" | `e4 e6 Nf3 d5 Nc3` | d4 is sound | d4 +0.06, within 0.00 of best | ✅ |
| Caro-Kann Defense (white) | "Build a centre with d4" | `e4 c6` | d4 is sound | d4 +0.28, within 0.00 of best | ✅ |
| Caro-Kann Defense (white) | "e5 (Advance) for space" | `e4 c6 d4 d5` | e5 is sound | e5 +0.30, within 0.00 of best | ✅ |
| Caro-Kann Defense (white) | "Nc3 or Nd2 for quick development" | `e4 c6 d4 d5` | Nc3 is sound | Nc3 +0.38, within 0.00 of best | ✅ |
| Caro-Kann Defense (white) | "Nc3 or Nd2 for quick development" | `e4 c6 d4 d5` | Nd2 is sound | Nd2 +0.45, within 0.00 of best | ✅ |
| Caro-Kann Defense (white) | "or exd5 for a calmer structure" | `e4 c6 d4 d5` | exd5 is sound | exd5 +0.20, within 0.09 of best | ✅ |
| Caro-Kann Defense: Accelerated Panov Attack (black) | "2…d5 3.exd5 cxd5 4.cxd5 Nf6 regains the pawn" | `e4 c6 c4` | d5 is sound | d5 +0.19, within 0.00 of best | ✅ |
| Caro-Kann Defense: Accelerated Panov Attack (black) | "2…d5 3.exd5 cxd5 4.cxd5 Nf6 regains the pawn" | `e4 c6 c4 d5 exd5 cxd5 cxd5` | Nf6 is sound | Nf6 +0.06, within 0.00 of best | ✅ |
| Caro-Kann Defense: Accelerated Panov Attack (black) | "2…e5 is a playable alternative" | `e4 c6 c4` | e5 is playable | e5 loses 0.31 (+0.57; best d5 +0.26) | ✅ |
| Caro-Kann Defense: Advance Variation (black) | "…Bf5, …e6, then …c5 against d4" | `e4 c6 d4 d5 e5` | Bf5 is sound | Bf5 +0.49, within 0.04 of best | ✅ |
| Caro-Kann Defense: Advance Variation (black) | "…Bf5, …e6, then …c5 against d4" | `e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2` | c5 is sound | c5 +0.42, within 0.00 of best | ✅ |
| Caro-Kann Defense: Advance Variation (white) | "Calmly with Nf3, Be2, 0-0 and c3" | `e4 c6 d4 d5 e5 Bf5` | Nf3 is sound | Nf3 +0.40, within 0.00 of best | ✅ |
| Caro-Kann Defense: Advance Variation (white) | "aggressively with Nc3 and g4 or h4" | `e4 c6 d4 d5 e5 Bf5` | Nc3 is playable | Nc3 loses 0.33 (+0.09; best Nf3 +0.42) | ✅ |
| Caro-Kann Defense: Advance Variation (white) | "aggressively with Nc3 and g4 or h4" | `e4 c6 d4 d5 e5 Bf5` | h4 is sound | h4 +0.32, within 0.10 of best | ✅ |
| Caro-Kann Defense: Breyer Variation (black) | "Take the centre with …d5 and …e5" | `e4 c6 d3` | d5 is sound | d5 +0.28, within 0.00 of best | ✅ |
| Caro-Kann Defense: Endgame Offer (black) | "…dxe4 dxe4 Qxd1+ Kxd1 gives a safe, level endgame" | `e4 c6 Nf3 d5 d3` | dxe4 is sound | dxe4 +0.12, within 0.00 of best | ✅ |
| Caro-Kann Defense: Endgame Offer (black) | "…dxe4 dxe4 Qxd1+ Kxd1 gives a safe, level endgame" | `e4 c6 Nf3 d5 d3 dxe4 dxe4 Qxd1+ Kxd1` | level | +0.20 (Nf6 Nbd2 Nbd7 Ne1) | ✅ |
| Caro-Kann Defense: Endgame Offer (white) | "White accepts that …dxe4 and a queen trade leads to a level endgame." | `e4 c6 Nf3 d5 d3 dxe4 dxe4 Qxd1+ Kxd1` | level | +0.20 (Nf6 Nbd2 Nbd7 Ne1) | ✅ |
| Caro-Kann Defense: Endgame Offer (black) | "Or keep queens on with …Bg4" | `e4 c6 Nf3 d5 d3` | Bg4 is sound | Bg4 +0.37, within 0.15 of best | ✅ |
| Caro-Kann Defense: Exchange Variation (white) | "Bd3, c3, Bf4" | `e4 c6 d4 d5 exd5 cxd5` | Bd3 is sound | Bd3 +0.15, within 0.00 of best | ✅ |
| Caro-Kann Defense: Exchange Variation (black) | "…Nc6, …Nf6, …Bg4 and …e6" | `e4 c6 d4 d5 exd5 cxd5 Bd3` | Nc6 is sound | Nc6 +0.16, within 0.00 of best | ✅ |
| Caro-Kann Defense: Hillbilly Attack (black) | "2…d5 gains time on the bishop" | `e4 c6 Bc4` | d5 is sound | d5 -0.16, within 0.00 of best | ✅ |
| Caro-Kann Defense: Hillbilly Attack (white) | "exchange with 3.exd5 cxd5" | `e4 c6 Bc4 d5` | exd5 is sound | exd5 -0.29, within 0.00 of best | ✅ |
| Caro-Kann Defense: Hillbilly Attack (white) | "then retreat the bishop or check on b5" | `e4 c6 Bc4 d5 exd5 cxd5` | Bb3 is sound | Bb3 -0.25, within 0.00 of best | ✅ |
| Caro-Kann Defense: Hillbilly Attack (white) | "then retreat the bishop or check on b5" | `e4 c6 Bc4 d5 exd5 cxd5` | Bb5+ is sound | Bb5+ -0.30, within 0.07 of best | ✅ |
| Caro-Kann Defense: Hillbilly Attack (white) | "Retreating 3.Bb3 at once lets …dxe4 give Black the better game." | `e4 c6 Bc4 d5` | Bb3 is dubious | Bb3 loses 0.55 (-0.80; best exd5 -0.25) | ✅ |
| Caro-Kann Defense: Hillbilly Attack (white) | "Retreating 3.Bb3 at once lets …dxe4 give Black the better game." | `e4 c6 Bc4 d5 Bb3` | dxe4 is sound | dxe4 -0.81, within 0.00 of best | ✅ |
| Caro-Kann Defense: Maróczy Variation (black) | "3…e6 followed by …c5 attacks d4" | `e4 c6 d4 d5 f3` | e6 is sound | e6 +0.33, within 0.00 of best | ✅ |
| Caro-Kann Defense: Maróczy Variation (black) | "or …g6 and …Bg7 aims at d4" | `e4 c6 d4 d5 f3` | g6 is sound | g6 +0.38, within 0.15 of best | ✅ |
| Caro-Kann Defense: Maróczy Variation (white) | "If …dxe4 fxe4, use the half-open f-file" | `e4 c6 d4 d5 f3 dxe4` | fxe4 is sound | fxe4 +0.33, within 0.00 of best | ✅ |
| Caro-Kann Defense: Modern Variation (idea) | "usually leads to 3…dxe4 4.Nxe4" | `e4 c6 d4 d5 Nd2` | dxe4 is sound | dxe4 +0.42, within 0.00 of best | ✅ |
| Caro-Kann Defense: Modern Variation (idea) | "Black chooses …Bf5, …Nd7 or …Nf6" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4` | Bf5 is sound | Bf5 +0.36, within 0.06 of best | ✅ |
| Caro-Kann Defense: Modern Variation (idea) | "Black chooses …Bf5, …Nd7 or …Nf6" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4` | Nd7 is sound | Nd7 +0.48, within 0.18 of best | ✅ |
| Caro-Kann Defense: Modern Variation (idea) | "Black chooses …Bf5, …Nd7 or …Nf6" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4` | Nf6 is sound | Nf6 +0.28, within 0.00 of best | ✅ |
| Caro-Kann Defense: Modern Variation (white) | "Against …Bf5, chase the bishop with Ng3" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5` | Ng3 is sound | Ng3 +0.28, within 0.00 of best | ✅ |
| Caro-Kann Defense: Modern Variation (white) | "chase the bishop with Ng3, h4 and h5" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6` | h4 is sound | h4 +0.24, within 0.00 of best | ✅ |
| Caro-Kann Defense: Modern Variation (white) | "Against …Nd7, develop quickly with Bc4 or Nf3" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7` | Bc4 is sound | Bc4 +0.27, within 0.10 of best | ✅ |
| Caro-Kann Defense: Modern Variation (white) | "Against …Nd7, develop quickly with Bc4 or Nf3" | `e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7` | Nf3 is sound | Nf3 +0.32, within 0.05 of best | ✅ |
| Caro-Kann Defense: Modern Variation (black) | "…Nd7 first prepares …Ngf6 without doubled pawns after a knight swap." | `e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7 Nf3` | Ngf6 is sound | Ngf6 +0.38, within 0.00 of best | ✅ |
| Caro-Kann Defense: Two Knights Attack (idea) | "The usual answer is …Bg4" | `e4 c6 Nf3 d5 Nc3` | Bg4 is sound | Bg4 +0.36, within 0.07 of best | ✅ |
| Caro-Kann Defense: Two Knights Attack (white) | "h3 to ask the g4 bishop to decide" | `e4 c6 Nf3 d5 Nc3 Bg4` | h3 is sound | h3 +0.25, within 0.00 of best | ✅ |
| Caro-Kann Defense: Two Knights Attack (idea) | "after h3 Black often gives up the bishop for the knight" | `e4 c6 Nf3 d5 Nc3 Bg4 h3` | Bxf3 is sound | Bxf3 +0.34, within 0.00 of best | ✅ |
| Caro-Kann Defense: Two Knights Attack (white) | "After …Bxf3, recapture with the queen" | `e4 c6 Nf3 d5 Nc3 Bg4 h3 Bxf3` | Qxf3 is sound | Qxf3 +0.22, within 0.00 of best | ✅ |
| Caro-Kann Defense: Two Knights Attack (black) | "3…Bg4 4.h3 Bxf3 5.Qxf3 e6" | `e4 c6 Nf3 d5 Nc3 Bg4 h3 Bxf3 Qxf3` | e6 is sound | e6 +0.27, within 0.00 of best | ✅ |
| Scandinavian Defense (white) | "2.exd5, then Nc3 to gain time on the queen" | `e4 d5` | exd5 is sound | exd5 +0.62, within 0.00 of best | ✅ |
| Scandinavian Defense (white) | "2.exd5, then Nc3 to gain time on the queen" | `e4 d5 exd5 Qxd5` | Nc3 is sound | Nc3 +0.66, within 0.00 of best | ✅ |
| Scandinavian Defense (idea) | "Black recaptures with the queen (…Qxd5) or the knight (…Nf6)" | `e4 d5 exd5` | Qxd5 is sound | Qxd5 +0.68, within 0.00 of best | ✅ |
| Scandinavian Defense (idea) | "Black recaptures with the queen (…Qxd5) or the knight (…Nf6)" | `e4 d5 exd5` | Nf6 is sound | Nf6 +0.70, within 0.00 of best | ✅ |
| Scandinavian Defense (black) | "Get the queen to safety (a5, d6 or d8)" | `e4 d5 exd5 Qxd5 Nc3` | Qa5 is sound | Qa5 +0.66, within 0.00 of best | ✅ |
| Scandinavian Defense (black) | "Get the queen to safety (a5, d6 or d8)" | `e4 d5 exd5 Qxd5 Nc3` | Qd6 is sound | Qd6 +0.71, within 0.00 of best | ✅ |
| Scandinavian Defense (black) | "Get the queen to safety (a5, d6 or d8)" | `e4 d5 exd5 Qxd5 Nc3` | Qd8 is sound | Qd8 +0.72, within 0.00 of best | ✅ |
| Scandinavian Defense: Blackburne-Kloosterboer Gambit (idea) | "It is dubious" | `e4 d5 exd5 c6` | White clearly better | +0.79 (dxc6 Nxc6 Nc3 a6) | ✅ |
| Scandinavian Defense: Blackburne-Kloosterboer Gambit (white) | "3.dxc6 Nxc6, then Nf3" | `e4 d5 exd5 c6` | dxc6 is sound | dxc6 +0.84, within 0.00 of best | ✅ |
| Scandinavian Defense: Blackburne-Kloosterboer Gambit (white) | "3.dxc6 Nxc6, then Nf3" | `e4 d5 exd5 c6 dxc6 Nxc6` | Nf3 is sound | Nf3 +0.89, within 0.00 of best | ✅ |
| Scandinavian Defense: Blackburne-Kloosterboer Gambit (black) | "After 3.dxc6 Nxc6, develop fast with …e5" | `e4 d5 exd5 c6 dxc6 Nxc6 Nf3` | e5 is sound | e5 +0.86, within 0.00 of best | ✅ |
| Scandinavian Defense: Gubinsky-Melts Defense (white) | "d4, Nf3, and develop" | `e4 d5 exd5 Qxd5 Nc3 Qd6` | d4 is sound | d4 +0.64, within 0.00 of best | ✅ |
| Scandinavian Defense: Gubinsky-Melts Defense (black) | "…Nf6, then …a6 (to stop Nb5) or …c6" | `e4 d5 exd5 Qxd5 Nc3 Qd6 d4` | Nf6 is sound | Nf6 +0.63, within 0.00 of best | ✅ |
| Scandinavian Defense: Gubinsky-Melts Defense (black) | "…Nf6, then …a6 (to stop Nb5) or …c6" | `e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3` | a6 is playable | a6 loses 0.42 (+1.12; best c6 +0.70) | ✅ |
| Scandinavian Defense: Gubinsky-Melts Defense (black) | "…Nf6, then …a6 (to stop Nb5) or …c6" | `e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3` | c6 is sound | c6 +0.64, within 0.00 of best | ✅ |
| Scandinavian Defense: Main Line (white) | "d4, Nf3, Bc4 and Bd2" | `e4 d5 exd5 Qxd5 Nc3 Qa5` | d4 is sound | d4 +0.71, within 0.00 of best | ✅ |
| Scandinavian Defense: Main Line (black) | "…Nf6, …c6 (giving the queen the c7 retreat)" | `e4 d5 exd5 Qxd5 Nc3 Qa5 d4` | Nf6 is sound | Nf6 +0.69, within 0.00 of best | ✅ |
| Scandinavian Defense: Main Line (black) | "…Nf6, …c6 (giving the queen the c7 retreat)" | `e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3` | c6 is sound | c6 +0.64, within 0.03 of best | ✅ |
| Scandinavian Defense: Mieses-Kotrč Variation (white) | "3.Nc3 hits the queen" | `e4 d5 exd5 Qxd5` | Nc3 is sound | Nc3 +0.66, within 0.00 of best | ✅ |
| Scandinavian Defense: Mieses-Kotrč Variation (white) | "3.d4 or 3.Nf3 are calmer alternatives" | `e4 d5 exd5 Qxd5` | d4 is playable | d4 loses 0.36 (+0.21; best Nc3 +0.57) | ✅ |
| Scandinavian Defense: Mieses-Kotrč Variation (white) | "3.d4 or 3.Nf3 are calmer alternatives" | `e4 d5 exd5 Qxd5` | Nf3 is playable | Nf3 +0.33, within 0.24 of best | ✅ |
| Scandinavian Defense: Mieses-Kotrč Variation (black) | "After 3.Nc3, retreat to a5, d6 or d8" | `e4 d5 exd5 Qxd5 Nc3` | Qa5 is sound | Qa5 +0.66, within 0.00 of best | ✅ |
| Scandinavian Defense: Mieses-Kotrč Variation (black) | "After 3.Nc3, retreat to a5, d6 or d8" | `e4 d5 exd5 Qxd5 Nc3` | Qd6 is sound | Qd6 +0.71, within 0.00 of best | ✅ |
| Scandinavian Defense: Mieses-Kotrč Variation (black) | "After 3.Nc3, retreat to a5, d6 or d8" | `e4 d5 exd5 Qxd5 Nc3` | Qd8 is sound | Qd8 +0.72, within 0.00 of best | ✅ |
| Scandinavian Defense: Modern Variation (white) | "3.d4 Nxd5 4.c4 kicks the knight" | `e4 d5 exd5 Nf6` | d4 is sound | d4 +0.62, within 0.00 of best | ✅ |
| Scandinavian Defense: Modern Variation (white) | "3.d4 Nxd5 4.c4 kicks the knight" | `e4 d5 exd5 Nf6 d4 Nxd5` | c4 is sound | c4 +0.53, within 0.16 of best | ✅ |
| Scandinavian Defense: Modern Variation (white) | "Holding the pawn with 3.c4 lets Black open lines with …c6 or …e6" | `e4 d5 exd5 Nf6 c4` | c6 is sound | c6 +0.04, within 0.00 of best | ✅ |
| Scandinavian Defense: Modern Variation (white) | "Holding the pawn with 3.c4 lets Black open lines with …c6 or …e6" | `e4 d5 exd5 Nf6 c4` | e6 is sound | e6 +0.33, within 0.28 of best | ✅ |
| Scandinavian Defense: Modern Variation (black) | "Regain the pawn with …Nxd5" | `e4 d5 exd5 Nf6 d4` | Nxd5 is sound | Nxd5 +0.59, within 0.00 of best | ✅ |
| Scandinavian Defense: Modern Variation (black) | "…Bg4 first is also possible after 3.d4" | `e4 d5 exd5 Nf6 d4` | Bg4 is sound | Bg4 +0.70, within 0.05 of best | ✅ |
| Scandinavian Defense: Valencian Variation (white) | "d4, Nf3, Bc4 or Bd3, and castle" | `e4 d5 exd5 Qxd5 Nc3 Qd8` | d4 is sound | d4 +0.76, within 0.00 of best | ✅ |
| Pirc Defense (white) | "d4 and Nc3, then choose" | `e4 d6` | d4 is sound | d4 +0.55, within 0.00 of best | ✅ |
| Pirc Defense (white) | "d4 and Nc3, then choose" | `e4 d6 d4 Nf6` | Nc3 is sound | Nc3 +0.50, within 0.00 of best | ✅ |
| Pirc Defense (white) | "f4 and e5 (Austrian Attack)" | `e4 d6 d4 Nf6 Nc3 g6` | f4 is sound | f4 +0.47, within 0.18 of best | ✅ |
| Pirc Defense (white) | "Be3, Qd2 and Bh6 with h4–h5 (150 Attack)" | `e4 d6 d4 Nf6 Nc3 g6` | Be3 is sound | Be3 +0.70, within 0.00 of best | ✅ |
| Pirc Defense (white) | "Nf3, Be2 and 0-0 (Classical)" | `e4 d6 d4 Nf6 Nc3 g6` | Nf3 is sound | Nf3 +0.54, within 0.11 of best | ✅ |
| Modern Defense (white) | "A big centre with d4 and Nc3" | `e4 g6` | d4 is sound | d4 +0.58, within 0.00 of best | ✅ |
| Modern Defense (black) | "…Bg7 and …d6, then hit d4" | `e4 g6 d4` | Bg7 is sound | Bg7 +0.51, within 0.00 of best | ✅ |
| Rat Defense: Antal Defense (black) | "…e5, …Ngf6, …Be7, …c6 and …0-0" | `e4 d6 d4 Nd7 Nf3` | e5 is sound | e5 +0.63, within 0.00 of best | ✅ |
| Rat Defense: Harmonist (black) | "Hit e4 with …Nf6" | `e4 d6 f4` | Nf6 is sound | Nf6 +0.07, within 0.00 of best | ✅ |
| Rat Defense: Small Center Defense (white) | "Use the extra space: Nf3, Nc3 and Bd3" | `e4 e6 d4 d6` | Nf3 is sound | Nf3 +0.79, within 0.00 of best | ✅ |
| Rat Defense: Small Center Defense (white) | "Use the extra space: Nf3, Nc3 and Bd3" | `e4 e6 d4 d6` | Bd3 is sound | Bd3 +0.78, within 0.06 of best | ✅ |
| Rat Defense: Small Center Defense (white) | "(c4 is also playable)" | `e4 e6 d4 d6` | c4 is playable | c4 loses 0.47 (+0.37; best Nf3 +0.84) | ✅ |
| Nimzowitsch Defense (white) | "Build a centre with d4" | `e4 Nc6` | d4 is sound | d4 +0.54, within 0.00 of best | ✅ |
| Nimzowitsch Defense (black) | "Challenge the centre with …d5 or …e5 right away" | `e4 Nc6 d4` | d5 is sound | d5 +0.43, within 0.00 of best | ✅ |
| Nimzowitsch Defense (black) | "Challenge the centre with …d5 or …e5 right away" | `e4 Nc6 d4` | e5 is playable | e5 loses 0.40 (+0.78; best d5 +0.38) | ✅ |
| Nimzowitsch Defense (white) | "Against …d5, e5 or Nc3" | `e4 Nc6 d4 d5` | e5 is sound | e5 +0.39, within 0.00 of best | ✅ |
| Nimzowitsch Defense (white) | "Against …d5, e5 or Nc3" | `e4 Nc6 d4 d5` | Nc3 is sound | Nc3 +0.21, within 0.20 of best | ✅ |
| Nimzowitsch Defense (white) | "Against …e5, 3.d5 or 3.dxe5 is stronger than 3.Nf3" | `e4 Nc6 d4 e5` | d5 is sound | d5 +0.79, within 0.00 of best | ✅ |
| Nimzowitsch Defense (white) | "Against …e5, 3.d5 or 3.dxe5 is stronger than 3.Nf3" | `e4 Nc6 d4 e5` | dxe5 is sound | dxe5 +0.58, within 0.23 of best | ✅ |
| Nimzowitsch Defense (white) | "Against …e5, 3.d5 or 3.dxe5 is stronger than 3.Nf3" | `e4 Nc6 d4 e5` | Nf3 is dubious | Nf3 loses 0.73 (+0.08; best d5 +0.81) | ✅ |
| Nimzowitsch Defense (white) | "which only transposes to a level Scotch" | `e4 Nc6 d4 e5 Nf3 exd4 Nxd4` | level | -0.26 (Nf6 Nxc6 bxc6 Nc3) | ✅ |
| Nimzowitsch Defense: Kennedy Variation (white) | "3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight" | `e4 e5 d4 Nc6` | dxe5 is sound | dxe5 +0.58, within 0.23 of best | ✅ |
| Nimzowitsch Defense: Kennedy Variation (white) | "3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight" | `e4 e5 d4 Nc6 dxe5 Nxe5` | f4 is sound | f4 +0.82, within 0.00 of best | ✅ |
| Nimzowitsch Defense: Kennedy Variation (white) | "3.dxe5 Nxe5 4.f4 or Nf3 gains time on the knight" | `e4 e5 d4 Nc6 dxe5 Nxe5` | Nf3 is playable | Nf3 +0.59, within 0.15 of best | ✅ |
| Nimzowitsch Defense: Kennedy Variation (white) | "3.d5 Nce7 gains space" | `e4 e5 d4 Nc6` | d5 is sound | d5 +0.79, within 0.00 of best | ✅ |
| Nimzowitsch Defense: Kennedy Variation (white) | "3.Nf3 exd4 4.Nxd4 is only a level Scotch." | `e4 e5 d4 Nc6` | Nf3 is dubious | Nf3 loses 0.73 (+0.08; best d5 +0.81) | ✅ |
| Nimzowitsch Defense: Kennedy Variation (white) | "3.Nf3 exd4 4.Nxd4 is only a level Scotch." | `e4 e5 d4 Nc6 Nf3 exd4 Nxd4` | level | -0.26 (Nf6 Nxc6 bxc6 Nc3) | ✅ |
| Nimzowitsch Defense: Kennedy Variation (black) | "After d5 …Nce7" | `e4 e5 d4 Nc6 d5` | Nce7 is sound | Nce7 +0.72, within 0.00 of best | ✅ |
| Nimzowitsch Defense: Kennedy Variation (black) | "keep the knight active (it can drop to g6)" | `e4 e5 d4 Nc6 dxe5 Nxe5 f4` | Ng6 is sound | Ng6 +0.67, within 0.03 of best | ✅ |
| Sicilian Defense: Bowdler Attack (black) | "If White already has Nc3 in, prepare …d5" | `e4 c5 Bc4 e6 Nc3` | d5 is dubious | d5 loses 2.08 (+1.93; best a6 -0.15) | ✅ |
| French Defense: Advance Variation (black) | "so …Nxd4 just drops a piece" | `e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4` | Nxd4 is a blunder | Nxd4 loses 5.49 (+5.49; best Bd7 +0.00) | ✅ |
| Queen's Pawn Game (black) | "Either meet it head-on with 1…d5" | `d4` | d5 is sound | d5 +0.23, within 0.00 of best | ✅ |
| Queen's Pawn Game (black) | "or play 1…Nf6" | `d4` | Nf6 is sound | Nf6 +0.27, within 0.00 of best | ✅ |
| Queen's Pawn Game: Zukertort Variation (black) | "…Nf6 and a quick …c5 or …Bf5/…Bg4 develop easily" | `d4 d5 Nf3` | Nf6 is sound | Nf6 +0.26, within 0.00 of best | ✅ |
| Queen's Pawn Game: Symmetrical Variation (black) | "Get the light-squared bishop out with …Bf5 or …Bg4 before …e6" | `d4 d5 Nf3 Nf6 e3` | Bf5 is sound | Bf5 +0.24, within 0.13 of best | ✅ |
| Queen's Pawn Game: Symmetrical Variation (black) | "Get the light-squared bishop out with …Bf5 or …Bg4 before …e6" | `d4 d5 Nf3 Nf6 e3` | Bg4 is sound | Bg4 +0.29, within 0.18 of best | ✅ |
| Queen's Pawn Game: Symmetrical Variation (black) | "Against the Colle, meet e4 with …dxe4" | `d4 d5 Nf3 Nf6 e3 Bg4 c3 e6 Nbd2 Nbd7 Bd3 Bd6 O-O O-O e4` | dxe4 is sound | dxe4 +0.00, within 0.13 of best | ✅ |
| Queen's Pawn Game: Anti-Torre (white) | "Hit the bishop with Ne5" | `d4 d5 Nf3 Bg4` | Ne5 is sound | Ne5 +0.76, within 0.00 of best | ✅ |
| Queen's Pawn Game: Anti-Torre (white) | "play c4 and Qb3 to attack b7 and d5" | `d4 d5 Nf3 Bg4` | c4 is sound | c4 +0.68, within 0.00 of best | ✅ |
| Queen's Pawn Game: Anti-Torre (white) | "play c4 and Qb3 to attack b7 and d5" | `d4 d5 Nf3 Bg4 c4 e6` | Qb3 is playable | Qb3 loses 0.32 (+0.82; best Ne5 +1.14) | ✅ |
| Queen's Pawn Game: Anti-Torre (white) | "A quieter option is e3, Be2 and h3" | `d4 d5 Nf3 Bg4` | e3 is playable | e3 loses 0.40 (+0.28; best Ne5 +0.68) | ✅ |
| Queen's Pawn Game: Krause Variation (white) | "3.c4 gives a sharp, open Queen's Gambit" | `d4 d5 Nf3 c5` | c4 is sound | c4 +0.30, within 0.00 of best | ✅ |
| Queen's Pawn Game: Krause Variation (white) | "3.dxc5 is also fine" | `d4 d5 Nf3 c5` | dxc5 is sound | dxc5 +0.22, within 0.10 of best | ✅ |
| Queen's Pawn Game: Krause Variation (white) | "3.e3 keeps a calm Colle set-up" | `d4 d5 Nf3 c5` | e3 is sound | e3 +0.16, within 0.16 of best | ✅ |
| Queen's Pawn Game: Krause Variation (black) | "After dxc5, play …e6 and …Bxc5" | `d4 d5 Nf3 c5 dxc5` | e6 is sound | e6 +0.19, within 0.00 of best | ✅ |
| Queen's Pawn Game: Krause Variation (black) | "(or …Qa5+)" | `d4 d5 Nf3 c5 dxc5` | Qa5+ is sound | Qa5+ +0.49, within 0.27 of best | ✅ |
| Queen's Pawn Game: Krause Variation (black) | "Otherwise …Nc6 and …Nf6 keep pressure on d4" | `d4 d5 Nf3 c5 e3` | Nc6 is sound | Nc6 +0.16, within 0.10 of best | ✅ |
| Queen's Pawn Game: Chigorin Variation (black) | "Stop e4 with …Nf6 and …Bf5" | `d4 d5 Nc3` | Nf6 is sound | Nf6 -0.03, within 0.00 of best | ✅ |
| Queen's Pawn Game: Chigorin Variation (black) | "or counter with …c5" | `d4 d5 Nc3` | c5 is sound | c5 +0.20, within 0.17 of best | ✅ |
| Queen's Pawn Game: Accelerated London System (black) | "Strike with …c5 and …Qb6 at b2" | `d4 d5 Bf4` | c5 is sound | c5 +0.06, within 0.00 of best | ✅ |
| Queen's Pawn Game: Accelerated London System (black) | "Strike with …c5 and …Qb6 at b2" | `d4 d5 Bf4 c5 e3 Nc6 c3` | Qb6 is sound | Qb6 +0.04, within 0.01 of best | ✅ |
| Queen's Pawn Game: Accelerated London System, Steinitz Countergambit (white) | "e3 and c3 to hold d4" | `d4 d5 Bf4 c5` | e3 is sound | e3 +0.05, within 0.00 of best | ✅ |
| Queen's Pawn Game: Accelerated London System, Steinitz Countergambit (white) | "Meet …Qb6 by covering b2 with Qb3 or Qc1" | `d4 d5 Bf4 c5 e3 Nc6 c3 Qb6` | Qb3 is sound | Qb3 -0.17, within 0.26 of best | ✅ |
| Queen's Pawn Game: Accelerated London System, Steinitz Countergambit (white) | "Meet …Qb6 by covering b2 with Qb3 or Qc1" | `d4 d5 Bf4 c5 e3 Nc6 c3 Qb6` | Qc1 is sound | Qc1 -0.13, within 0.22 of best | ✅ |
| Queen's Pawn Game: Accelerated London System, Steinitz Countergambit (black) | "…Nc6 and …Qb6 against b2 and d4" | `d4 d5 Bf4 c5 e3` | Nc6 is sound | Nc6 +0.06, within 0.02 of best | ✅ |
| Queen's Pawn Game: Accelerated London System, Steinitz Countergambit (black) | "If White takes on c5, regain with …e6 and …Bxc5" | `d4 d5 Bf4 c5 dxc5` | e6 is sound | e6 +0.00, within 0.00 of best | ✅ |
| Queen's Pawn Game: Modern Defense (white) | "Take the centre with c4 and e4 (or e4 alone)" | `d4 g6` | e4 is sound | e4 +0.65, within 0.00 of best | ✅ |
| Queen's Pawn Game: Modern Defense (white) | "Take the centre with c4 and e4 (or e4 alone)" | `d4 g6` | c4 is sound | c4 +0.31, within 0.21 of best | ✅ |
| Blackmar-Diemer Gambit (black) | "Accept and develop safely" | `d4 d5 e4 dxe4 Nc3 Nf6 f3` | exf3 is sound | exf3 -0.70, within 0.00 of best | ✅ |
| Blackmar-Diemer Gambit (black) | "…c6, …g6 or …e6, then castle" | `d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3` | c6 is sound | c6 -0.63, within 0.00 of best | ✅ |
| Blackmar-Diemer Gambit (black) | "…c6, …g6 or …e6, then castle" | `d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3` | e6 is playable | e6 loses 0.36 (-0.29; best c6 -0.65) | ✅ |
| Blackmar-Diemer Gambit (black) | "…c6, …g6 or …e6, then castle" | `d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3` | g6 is sound | g6 -0.51, within 0.14 of best | ✅ |
| Blackmar-Diemer Gambit (black) | "Declining with 4…Bf5 is fine too" | `d4 d5 e4 dxe4 Nc3 Nf6 f3` | Bf5 is sound | Bf5 -0.45, within 0.17 of best | ✅ |
| Queen's Gambit (white) | "play e4 for the ideal centre (or the quieter e3)" | `d4 d5 c4 dxc4` | e3 is sound | e3 +0.29, within 0.05 of best | ✅ |
| Queen's Gambit (white) | "play e4 for the ideal centre (or the quieter e3)" | `d4 d5 c4 dxc4` | e4 is sound | e4 +0.30, within 0.00 of best | ✅ |
| Queen's Gambit (black) | "hold d5 with …e6 (Declined)" | `d4 d5 c4` | e6 is sound | e6 +0.24, within 0.00 of best | ✅ |
| Queen's Gambit (black) | "or …c6 (Slav)" | `d4 d5 c4` | c6 is sound | c6 +0.25, within 0.00 of best | ✅ |
| Queen's Gambit (black) | "or take with …dxc4 (Accepted)" | `d4 d5 c4` | dxc4 is sound | dxc4 +0.28, within 0.01 of best | ✅ |
| Queen's Gambit (black) | "Don't try to hang on to the c4 pawn" | `d4 d5 c4 dxc4 e3` | b5 is dubious | b5 loses 0.68 (+0.91; best c5 +0.23) | ✅ |
| Queen's Gambit Accepted (white) | "e3 or e4, then Bxc4 and Nf3" | `d4 d5 c4 dxc4` | e3 is sound | e3 +0.29, within 0.05 of best | ✅ |
| Queen's Gambit Accepted (white) | "e3 or e4, then Bxc4 and Nf3" | `d4 d5 c4 dxc4` | e4 is sound | e4 +0.30, within 0.00 of best | ✅ |
| Queen's Gambit Accepted (white) | "3.e3 b5?!" | `d4 d5 c4 dxc4 e3` | b5 is dubious | b5 loses 0.68 (+0.91; best c5 +0.23) | ✅ |
| Queen's Gambit Accepted (white) | "5.axb5 cxb5??" | `d4 d5 c4 dxc4 e3 b5 a4 c6 axb5` | cxb5 is a blunder | cxb5 loses 4.04 (+5.90; best e6 +1.86) | ✅ |
| Queen's Gambit Accepted (white) | "6.Qf3 wins material" | `d4 d5 c4 dxc4 e3 b5 a4 c6 axb5 cxb5 Qf3` | White winning | +5.88 (Nc6 Qxc6+ Bd7 Qa6) | ✅ |
| Queen's Gambit Declined: Queen's Knight Variation (white) | "Bg5 to pin a knight on f6" | `d4 d5 c4 e6 Nc3 Nf6` | Bg5 is sound | Bg5 +0.21, within 0.13 of best | ✅ |
| Queen's Gambit Declined: Queen's Knight Variation (white) | "Or cxd5 exd5" | `d4 d5 c4 e6 Nc3 Nf6` | cxd5 is sound | cxd5 +0.23, within 0.11 of best | ✅ |
| Queen's Gambit Declined: Queen's Knight Variation (black) | "…Nf6 and …Be7 is the classical way" | `d4 d5 c4 e6 Nc3` | Nf6 is sound | Nf6 +0.22, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Queen's Knight Variation (black) | "…c6 aims for the Semi-Slav" | `d4 d5 c4 e6 Nc3` | c6 is playable | c6 loses 0.32 (+0.54; best Bb4 +0.22) | ✅ |
| Queen's Gambit Declined: Queen's Knight Variation (black) | "…Bb4 pins the knight" | `d4 d5 c4 e6 Nc3` | Bb4 is sound | Bb4 +0.34, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Albin Countergambit (idea) | "Sharp and objectively dubious" | `d4 d5 c4` | e5 is dubious | e5 loses 0.47 (+0.74; best e6 +0.27) | ✅ |
| Queen's Gambit Declined: Albin Countergambit (white) | "Nf3, g3, Bg2, O-O and Nbd2" | `d4 d5 c4 e5 dxe5 d4` | Nf3 is sound | Nf3 +0.80, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Albin Countergambit (white) | "Avoid 4.e3?" | `d4 d5 c4 e5 dxe5 d4` | e3 is a mistake | e3 loses 0.89 (-0.05; best Nf3 +0.84) | ✅ |
| Queen's Gambit Declined: Albin Countergambit (white) | "6.Bxb4?? exf2+, winning" | `d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2 dxe3` | Bxb4 is a blunder | Bxb4 loses 8.10 (-8.10; best fxe3 +0.00) | ✅ |
| Queen's Gambit Declined: Albin Countergambit (white) | "6.Bxb4?? exf2+, winning" | `d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2 dxe3 Bxb4 exf2+` | Black winning | -8.10 (Ke2 fxg1=N+ Ke1 Qh4+) | ✅ |
| Queen's Gambit Declined: Albin Countergambit (black) | "…Nc6, …Be6 or …Bg4, …Qd7 and long castling" | `d4 d5 c4 e5 dxe5 d4 Nf3` | Nc6 is sound | Nc6 +0.71, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Baltic Defense (white) | "cxd5 and Qb3, or Nc3 and Qb3" | `d4 d5 c4 Bf5` | cxd5 is sound | cxd5 +0.88, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Baltic Defense (white) | "cxd5 and Qb3, or Nc3 and Qb3" | `d4 d5 c4 Bf5` | Nc3 is playable | Nc3 loses 0.55 (+0.41; best cxd5 +0.96) | ✅ |
| Queen's Gambit Declined: Baltic Defense (white) | "cxd5 and Qb3, or Nc3 and Qb3" | `d4 d5 c4 Bf5 Nc3 e6` | Qb3 is sound | Qb3 +0.17, within 0.24 of best | ✅ |
| Queen's Gambit Declined: Chigorin Defense (white) | "Nc3 and Nf3" | `d4 d5 c4 Nc6` | Nc3 is sound | Nc3 +0.49, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Chigorin Defense (white) | "Nc3 and Nf3" | `d4 d5 c4 Nc6` | Nf3 is sound | Nf3 +0.50, within 0.01 of best | ✅ |
| Queen's Gambit Declined: Chigorin Defense (white) | "or cxd5 Qxd5" | `d4 d5 c4 Nc6` | cxd5 is sound | cxd5 +0.44, within 0.07 of best | ✅ |
| Queen's Gambit Declined: Chigorin Defense (white) | "cxd5 Qxd5 4.e3 to guard d4" | `d4 d5 c4 Nc6 cxd5 Qxd5` | e3 is sound | e3 +0.52, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Chigorin Defense (white) | "then Nc3 gains time on the queen" | `d4 d5 c4 Nc6 cxd5 Qxd5 e3 e5` | Nc3 is sound | Nc3 +0.50, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Chigorin Defense (white) | "(4.Nc3? Qxd4)" | `d4 d5 c4 Nc6 cxd5 Qxd5` | Nc3 is a mistake | Nc3 loses 1.42 (-0.95; best e3 +0.47) | ✅ |
| Queen's Gambit Declined: Chigorin Defense (black) | "…Bg4 and …Bxf3" | `d4 d5 c4 Nc6 Nf3` | Bg4 is sound | Bg4 +0.86, within 0.30 of best | ✅ |
| Queen's Gambit Declined: Marshall Defense (idea) | "so it's considered dubious" | `d4 d5 c4` | Nf6 is dubious | Nf6 loses 0.31 (+0.58; best e6 +0.27) | ✅ |
| Queen's Gambit Declined: Marshall Defense (white) | "3.cxd5 Nxd5 4.e4" | `d4 d5 c4 Nf6` | cxd5 is sound | cxd5 +0.60, within 0.00 of best | ✅ |
| Queen's Gambit Declined: Marshall Defense (white) | "3.cxd5 Nxd5 4.e4" | `d4 d5 c4 Nf6 cxd5 Nxd5` | e4 is sound | e4 +0.79, within 0.15 of best | ✅ |
| Queen's Gambit Declined: Marshall Defense (black) | "If allowed, recapture …Nxd5" | `d4 d5 c4 Nf6 cxd5` | Nxd5 is sound | Nxd5 +0.87, within 0.30 of best | ✅ |
| Queen's Gambit Declined: Marshall Defense (black) | "Better to transpose to normal lines with …e6 or …c6" | `d4 d5 c4 Nf6 Nc3` | e6 is sound | e6 +0.20, within 0.03 of best | ✅ |
| Queen's Gambit Declined: Marshall Defense (black) | "Better to transpose to normal lines with …e6 or …c6" | `d4 d5 c4 Nf6 Nc3` | c6 is sound | c6 +0.27, within 0.10 of best | ✅ |
| Slav Defense (white) | "a4 if Black takes on c4, stopping …b5" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4` | a4 is sound | a4 +0.26, within 0.00 of best | ✅ |
| Slav Defense (white) | "target b7 with Qb3 once the bishop leaves c8" | `d4 d5 c4 c6 Nf3 Nf6 e3 Bf5` | Qb3 is sound | Qb3 +0.12, within 0.13 of best | ✅ |
| Slav Defense (black) | "…Nf6, then …Bf5 or …Bg4 before …e6" | `d4 d5 c4 c6 Nf3 Nf6 e3` | Bf5 is sound | Bf5 +0.19, within 0.00 of best | ✅ |
| Slav Defense (black) | "…Nf6, then …Bf5 or …Bg4 before …e6" | `d4 d5 c4 c6 Nf3 Nf6 e3` | Bg4 is sound | Bg4 +0.28, within 0.04 of best | ✅ |
| Slav Defense (black) | "…dxc4 with …b5 or …Bf5 is the main line" | `d4 d5 c4 c6 Nf3 Nf6 Nc3` | dxc4 is sound | dxc4 +0.27, within 0.00 of best | ✅ |
| Slav Defense (black) | "…dxc4 with …b5 or …Bf5 is the main line" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4` | Bf5 is sound | Bf5 +0.45, within 0.19 of best | ✅ |
| Slav Defense (black) | "…dxc4 with …b5 or …Bf5 is the main line" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 e3` | b5 is sound | b5 -0.07, within 0.00 of best | ✅ |
| Slav Defense: Exchange Variation (idea) | "White is a tempo up and plays for small, risk-free pressure" | `d4 d5 c4 c6 cxd5 cxd5` | White slightly better | +0.17 (Nc3 Nf6 Bf4 Nc6) | ✅ |
| Slav Defense: Exchange Variation (white) | "Ne5 can be awkward for Black if they copy White move for move" | `d4 d5 c4 c6 cxd5 cxd5 Nc3 Nc6 Nf3 Nf6 Bf4 Bf5 e3 e6` | Ne5 is sound | Ne5 +0.24, within 0.00 of best | ✅ |
| Slav Defense: Exchange Variation (white) | "8.Ne5 Ne4? 9.g4 hits the f5 bishop" | `d4 d5 c4 c6 cxd5 cxd5 Nc3 Nc6 Nf3 Nf6 Bf4 Bf5 e3 e6 Ne5` | Ne4 is a mistake | Ne4 loses 0.85 (+1.05; best Bb4 +0.20) | ✅ |
| Slav Defense: Exchange Variation (white) | "8.Ne5 Ne4? 9.g4 hits the f5 bishop" | `d4 d5 c4 c6 cxd5 cxd5 Nc3 Nc6 Nf3 Nf6 Bf4 Bf5 e3 e6 Ne5 Ne4` | g4 is sound | g4 +1.38, within 0.00 of best | ✅ |
| Slav Defense: Exchange Variation (black) | "check White's Ne5 and Qb3 ideas" | `d4 d5 c4 c6 cxd5 cxd5 Nc3 Nc6 Nf3 Nf6 Bf4 Bf5 e3 e6` | Qb3 is sound | Qb3 +0.06, within 0.00 of best | ✅ |
| Slav Defense: Modern Line (white) | "Nc3 next for the main line" | `d4 d5 c4 c6 Nf3 Nf6` | Nc3 is sound | Nc3 +0.29, within 0.00 of best | ✅ |
| Slav Defense: Modern Line (white) | "or e3 and Qb3 if Black plays …Bf5 early, hitting b7" | `d4 d5 c4 c6 Nf3 Nf6 e3 Bf5` | Qb3 is sound | Qb3 +0.12, within 0.13 of best | ✅ |
| Slav Defense: Modern Line (white) | "After …dxc4, a4 stops …b5" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4` | a4 is sound | a4 +0.26, within 0.00 of best | ✅ |
| Slav Defense: Modern Line (white) | "and e3 (or Ne5) regains the pawn" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5` | e3 is sound | e3 +0.40, within 0.00 of best | ✅ |
| Slav Defense: Modern Line (black) | "then …dxc4 and …Bf5 (main line)" | `d4 d5 c4 c6 Nf3 Nf6 Nc3` | dxc4 is sound | dxc4 +0.27, within 0.00 of best | ✅ |
| Slav Defense: Modern Line (black) | "then …dxc4 and …Bf5 (main line)" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4` | Bf5 is sound | Bf5 +0.45, within 0.19 of best | ✅ |
| Slav Defense: Modern Line (black) | "…e6 for the Semi-Slav" | `d4 d5 c4 c6 Nf3 Nf6 Nc3` | e6 is sound | e6 +0.27, within 0.00 of best | ✅ |
| Slav Defense: Modern Line (black) | "or …a6 with …b5" | `d4 d5 c4 c6 Nf3 Nf6 Nc3` | a6 is sound | a6 +0.31, within 0.03 of best | ✅ |
| Catalan Opening (white) | "then Qc2 or Qa4 to regain c4 if taken" | `d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O` | Qc2 is sound | Qc2 +0.13, within 0.00 of best | ✅ |
| Catalan Opening (white) | "then Qc2 or Qa4 to regain c4 if taken" | `d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O` | Qa4 is sound | Qa4 +0.09, within 0.10 of best | ✅ |
| Catalan Opening (black) | "Take on c4" | `d4 Nf6 c4 e6 g3 d5 Bg2` | dxc4 is sound | dxc4 +0.27, within 0.19 of best | ✅ |
| Catalan Opening (black) | "or stay solid with …Be7" | `d4 Nf6 c4 e6 g3 d5 Bg2` | Be7 is sound | Be7 +0.12, within 0.00 of best | ✅ |
| Indian Defense (white) | "c4 and Nc3 to fight for e4" | `d4 Nf6` | c4 is sound | c4 +0.20, within 0.00 of best | ✅ |
| Indian Defense (white) | "(London, Torre, Trompowsky)" | `d4 Nf6` | Bg5 is sound | Bg5 +0.09, within 0.08 of best | ✅ |
| Indian Defense: Normal Variation (black) | "…e6 (Nimzo or Queen's Indian)" | `d4 Nf6 c4` | e6 is sound | e6 +0.20, within 0.00 of best | ✅ |
| Indian Defense: Normal Variation (black) | "…g6 (King's Indian or Grünfeld)" | `d4 Nf6 c4` | g6 is sound | g6 +0.29, within 0.13 of best | ✅ |
| Indian Defense: Normal Variation (black) | "…c5 (Benoni)" | `d4 Nf6 c4` | c5 is playable | c5 loses 0.43 (+0.59; best e6 +0.16) | ✅ |
| Indian Defense: Normal Variation (black) | "the dubious but tricky …e5 (Budapest)" | `d4 Nf6 c4` | e5 is dubious | e5 loses 0.62 (+0.78; best e6 +0.16) | ✅ |
| Indian Defense: Knights Variation (black) | "…g6, …e6, …d5 or …c5 all work" | `d4 Nf6 Nf3` | g6 is sound | g6 +0.24, within 0.11 of best | ✅ |
| Indian Defense: Knights Variation (black) | "…g6, …e6, …d5 or …c5 all work" | `d4 Nf6 Nf3` | e6 is sound | e6 +0.19, within 0.06 of best | ✅ |
| Indian Defense: Knights Variation (black) | "…g6, …e6, …d5 or …c5 all work" | `d4 Nf6 Nf3` | d5 is sound | d5 +0.18, within 0.00 of best | ✅ |
| Indian Defense: Knights Variation (black) | "…g6, …e6, …d5 or …c5 all work" | `d4 Nf6 Nf3` | c5 is sound | c5 +0.35, within 0.22 of best | ✅ |
| Indian Defense: Knights Variation (black) | "an early …c5 and …Qb6 at b2 is a good way to test White" | `d4 Nf6 Nf3 e6 Bf4` | c5 is sound | c5 +0.15, within 0.00 of best | ✅ |
| Indian Defense: Knights Variation (black) | "an early …c5 and …Qb6 at b2 is a good way to test White" | `d4 Nf6 Nf3 e6 Bf4 c5 e3` | Qb6 is sound | Qb6 +0.39, within 0.25 of best | ✅ |
| Indian Defense: Accelerated London System (black) | "…c5 and …Qb6 targets b2" | `d4 Nf6 Bf4` | c5 is sound | c5 +0.23, within 0.13 of best | ✅ |
| Indian Defense: Accelerated London System (black) | "…c5 and …Qb6 targets b2" | `d4 Nf6 Bf4 c5 e3` | Qb6 is sound | Qb6 +0.17, within 0.05 of best | ✅ |
| Indian Defense: Accelerated London System (black) | "…d5 with …e6 and …Bd6 to challenge the bishop is also good" | `d4 Nf6 Bf4 d5 e3 e6 Nf3` | Bd6 is sound | Bd6 +0.18, within 0.02 of best | ✅ |
| Indian Defense: Accelerated London System (black) | "…d5 with …e6 and …Bd6 to challenge the bishop is also good" | `d4 Nf6 Bf4` | d5 is sound | d5 +0.16, within 0.06 of best | ✅ |
| Indian Defense: Anti-Nimzo-Indian (black) | "…b6 and …Bb7 or …Ba6 (Queen's Indian)" | `d4 Nf6 c4 e6 Nf3` | b6 is sound | b6 +0.23, within 0.00 of best | ✅ |
| Indian Defense: Anti-Nimzo-Indian (black) | "…Bb4+ (Bogo-Indian)" | `d4 Nf6 c4 e6 Nf3` | Bb4+ is sound | Bb4+ +0.40, within 0.12 of best | ✅ |
| Indian Defense: Anti-Nimzo-Indian (black) | "or …d5 for a Queen's Gambit Declined" | `d4 Nf6 c4 e6 Nf3` | d5 is sound | d5 +0.25, within 0.00 of best | ✅ |
| Indian Defense: Anti-Nimzo-Indian (white) | "g3 and Bg2 against …b6" | `d4 Nf6 c4 e6 Nf3 b6` | g3 is sound | g3 +0.32, within 0.00 of best | ✅ |
| Indian Defense: Budapest Gambit (white) | "Bf4, Nf3, e3" | `d4 Nf6 c4 e5 dxe5 Ng4` | Bf4 is sound | Bf4 +0.56, within 0.21 of best | ✅ |
| Indian Defense: Budapest Gambit (white) | "with e2 pinned, …Nd3 can be mate" | `d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3 Ngxe5` | axb4 is a blunder | axb4 loses 1000.35 (#-1; best Nxe5 +0.36) | ✅ |
| Indian Defense: Budapest Gambit (black) | "…Nc6, …Bb4+, …Qe7 and …Ngxe5 to regain the pawn" | `d4 Nf6 c4 e5 dxe5 Ng4 Bf4` | Nc6 is sound | Nc6 +0.47, within 0.00 of best | ✅ |
| Indian Defense: Seirawan Attack (black) | "Ask the bishop with …h6" | `d4 Nf6 c4 e6 Bg5` | h6 is sound | h6 -0.07, within 0.00 of best | ✅ |
| Indian Defense: Seirawan Attack (black) | "hit d4 with …c5" | `d4 Nf6 c4 e6 Bg5` | c5 is sound | c5 +0.00, within 0.03 of best | ✅ |
| Indian Defense: Seirawan Attack (black) | "or play …Bb4+" | `d4 Nf6 c4 e6 Bg5` | Bb4+ is sound | Bb4+ +0.04, within 0.07 of best | ✅ |
| Indian Defense: Seirawan Attack (black) | "Normal development with …Be7 and …d5 is solid too" | `d4 Nf6 c4 e6 Bg5` | Be7 is sound | Be7 +0.01, within 0.04 of best | ✅ |
| Indian Defense: Seirawan Attack (black) | "Normal development with …Be7 and …d5 is solid too" | `d4 Nf6 c4 e6 Bg5` | d5 is sound | d5 +0.25, within 0.28 of best | ✅ |
| Indian Defense: Spielmann-Indian (white) | "3.d5 grabs space" | `d4 Nf6 Nf3 c5` | d5 is sound | d5 +0.50, within 0.00 of best | ✅ |
| Indian Defense: Spielmann-Indian (white) | "3.c3 or 3.e3 to hold d4" | `d4 Nf6 Nf3 c5` | c3 is playable | c3 loses 0.50 (+0.02; best d5 +0.52) | ✅ |
| Indian Defense: Spielmann-Indian (white) | "3.c3 or 3.e3 to hold d4" | `d4 Nf6 Nf3 c5` | e3 is playable | e3 loses 0.52 (+0.00; best d5 +0.52) | ✅ |
| Indian Defense: Spielmann-Indian (black) | "If d5, undermine it with …e6, or play …b5 for queenside space, or …g6 and …d6" | `d4 Nf6 Nf3 c5 d5` | e6 is sound | e6 +0.61, within 0.07 of best | ✅ |
| Indian Defense: Spielmann-Indian (black) | "If d5, undermine it with …e6, or play …b5 for queenside space, or …g6 and …d6" | `d4 Nf6 Nf3 c5 d5` | b5 is sound | b5 +0.52, within 0.00 of best | ✅ |
| Indian Defense: Spielmann-Indian (black) | "If d5, undermine it with …e6, or play …b5 for queenside space, or …g6 and …d6" | `d4 Nf6 Nf3 c5 d5` | g6 is sound | g6 +0.66, within 0.12 of best | ✅ |
| Indian Defense: Spielmann-Indian (black) | "Otherwise …cxd4, …e6 or …d5 give easy development" | `d4 Nf6 Nf3 c5 e3` | cxd4 is sound | cxd4 +0.17, within 0.11 of best | ✅ |
| Indian Defense: Spielmann-Indian (black) | "Otherwise …cxd4, …e6 or …d5 give easy development" | `d4 Nf6 Nf3 c5 e3` | e6 is sound | e6 +0.27, within 0.21 of best | ✅ |
| Indian Defense: Spielmann-Indian (black) | "Otherwise …cxd4, …e6 or …d5 give easy development" | `d4 Nf6 Nf3 c5 e3` | d5 is sound | d5 +0.12, within 0.00 of best | ✅ |
| Indian Defense: Wade-Tartakower Defense (white) | "c4 transposes to Old or King's Indian lines" | `d4 Nf6 Nf3 d6` | c4 is sound | c4 +0.47, within 0.00 of best | ✅ |
| Indian Defense: Wade-Tartakower Defense (white) | "g3 or Bg5 set-ups are solid" | `d4 Nf6 Nf3 d6` | g3 is sound | g3 +0.41, within 0.15 of best | ✅ |
| Indian Defense: Wade-Tartakower Defense (white) | "g3 or Bg5 set-ups are solid" | `d4 Nf6 Nf3 d6` | Bg5 is playable | Bg5 loses 0.42 (+0.14; best c4 +0.56) | ✅ |
| Indian Defense: Wade-Tartakower Defense (black) | "…Bg4 against the f3 knight" | `d4 Nf6 Nf3 d6 g3` | Bg4 is sound | Bg4 +0.56, within 0.14 of best | ✅ |
| Indian Defense: West Indian Defense (white) | "Nc3 and e4 for a big centre" | `d4 Nf6 c4 g6` | Nc3 is sound | Nc3 +0.24, within 0.04 of best | ✅ |
| Indian Defense: West Indian Defense (white) | "Against …d5, cxd5 and e4" | `d4 Nf6 c4 g6 Nc3 d5` | cxd5 is sound | cxd5 +0.20, within 0.00 of best | ✅ |
| Indian Defense: West Indian Defense (white) | "Against …d5, cxd5 and e4" | `d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5` | e4 is sound | e4 +0.20, within 0.00 of best | ✅ |
| Indian Defense: West Indian Defense (black) | "King's Indian: …Bg7" | `d4 Nf6 c4 g6 Nc3` | Bg7 is sound | Bg7 +0.49, within 0.23 of best | ✅ |
| Indian Defense: West Indian Defense (black) | "Grünfeld: …d5" | `d4 Nf6 c4 g6 Nc3` | d5 is sound | d5 +0.23, within 0.00 of best | ✅ |
| East Indian Defense (white) | "c4 transposes to main lines" | `d4 Nf6 Nf3 g6` | c4 is sound | c4 +0.25, within 0.00 of best | ✅ |
| East Indian Defense (white) | "Otherwise Bf4 or Bg5 with e3, or g3 and Bg2" | `d4 Nf6 Nf3 g6` | Bf4 is sound | Bf4 +0.16, within 0.12 of best | ✅ |
| East Indian Defense (white) | "Otherwise Bf4 or Bg5 with e3, or g3 and Bg2" | `d4 Nf6 Nf3 g6` | Bg5 is sound | Bg5 +0.06, within 0.22 of best | ✅ |
| East Indian Defense (white) | "Otherwise Bf4 or Bg5 with e3, or g3 and Bg2" | `d4 Nf6 Nf3 g6` | g3 is sound | g3 +0.22, within 0.06 of best | ✅ |
| East Indian Defense (black) | "an early …c5 is often the best test" | `d4 Nf6 Nf3 g6 Bf4 Bg7 e3` | c5 is sound | c5 +0.16, within 0.09 of best | ✅ |
| Old Indian Defense (white) | "Nc3, e4, Nf3" | `d4 Nf6 c4 d6` | Nc3 is sound | Nc3 +0.61, within 0.00 of best | ✅ |
| Old Indian Defense (black) | "…Nbd7, …e5" | `d4 Nf6 c4 d6 Nc3` | Nbd7 is sound | Nbd7 +0.65, within 0.07 of best | ✅ |
| Old Indian Defense (black) | "…Nbd7, …e5" | `d4 Nf6 c4 d6 Nc3` | e5 is sound | e5 +0.68, within 0.10 of best | ✅ |
| Pseudo Queen's Indian Defense (white) | "g3 and Bg2 to oppose the b7 bishop" | `d4 Nf6 Nf3 b6` | g3 is sound | g3 +0.32, within 0.00 of best | ✅ |
| Pseudo Queen's Indian Defense (white) | "or e3, Bd3, O-O and c4/e4" | `d4 Nf6 Nf3 b6` | e3 is sound | e3 +0.08, within 0.22 of best | ✅ |
| Trompowsky Attack (white) | "Take on f6 to damage Black's structure" | `d4 Nf6 Bg5 d5` | Bxf6 is sound | Bxf6 +0.00, within 0.04 of best | ✅ |
| Trompowsky Attack (white) | "Or meet …Ne4 with Bf4 or h4" | `d4 Nf6 Bg5 Ne4` | Bf4 is sound | Bf4 +0.22, within 0.00 of best | ✅ |
| Trompowsky Attack (white) | "Or meet …Ne4 with Bf4 or h4" | `d4 Nf6 Bg5 Ne4` | h4 is sound | h4 +0.02, within 0.24 of best | ✅ |
| Trompowsky Attack (black) | "…Ne4 to chase the bishop" | `d4 Nf6 Bg5` | Ne4 is sound | Ne4 +0.29, within 0.29 of best | ✅ |
| Trompowsky Attack (black) | "and then …c5 and …Qb6 hitting b2" | `d4 Nf6 Bg5 Ne4 Bf4` | c5 is sound | c5 +0.39, within 0.20 of best | ✅ |
| Trompowsky Attack (black) | "and then …c5 and …Qb6 hitting b2" | `d4 Nf6 Bg5 Ne4 Bf4 c5 d5` | Qb6 is sound | Qb6 +0.25, within 0.00 of best | ✅ |
| Trompowsky Attack (black) | "…e6 (so the queen can recapture on f6) or …d5 is also solid" | `d4 Nf6 Bg5` | e6 is sound | e6 +0.14, within 0.14 of best | ✅ |
| Trompowsky Attack (black) | "…e6 (so the queen can recapture on f6) or …d5 is also solid" | `d4 Nf6 Bg5` | d5 is sound | d5 +0.00, within 0.00 of best | ✅ |
| Benoni Defense (black) | "…e6, …exd5" | `d4 Nf6 c4 c5 d5` | e6 is sound | e6 +0.79, within 0.23 of best | ✅ |
| Benoni Defense (black) | "…e6, …exd5" | `d4 Nf6 c4 c5 d5 e6 Nc3` | exd5 is sound | exd5 +0.93, within 0.27 of best | ✅ |
| Benoni Defense: Old Benoni (white) | "2.d5 for space" | `d4 c5` | d5 is sound | d5 +0.63, within 0.00 of best | ✅ |
| Benoni Defense: Old Benoni (black) | "…Nf6, …d6, …g6 and …Bg7" | `d4 c5 d5` | Nf6 is sound | Nf6 +0.73, within 0.00 of best | ✅ |
| Benoni Defense: Old Benoni (black) | "…Nf6, …d6, …g6 and …Bg7" | `d4 c5 d5` | d6 is sound | d6 +0.70, within 0.02 of best | ✅ |
| Benoni Defense: Old Benoni (black) | "or …e6 to hit d5" | `d4 c5 d5` | e6 is sound | e6 +0.67, within 0.00 of best | ✅ |
| Benoni Defense: Old Benoni (black) | "Blocking with …e5 (and …f5 later) is passive" | `d4 c5 d5` | e5 is dubious | e5 loses 0.65 (+1.33; best Nf6 +0.68) | ✅ |
| Benoni Defense: Benoni Gambit Accepted (black) | "…e6 and …Bxc5" | `d4 c5 dxc5` | e6 is sound | e6 +0.15, within 0.00 of best | ✅ |
| Benoni Defense: Benoni Gambit Accepted (black) | "or …Qa5+ to take back at once" | `d4 c5 dxc5` | Qa5+ is playable | Qa5+ loses 0.51 (+0.57; best e6 +0.06) | ✅ |
| Englund Gambit (idea) | "It's dubious" | `d4` | e5 is dubious | e5 loses 0.93 (+1.23; best Nf6 +0.30) | ✅ |
| Englund Gambit (white) | "6.Bc3?? is a trap" | `d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2` | Bc3 is a blunder | Bc3 loses 10.44 (-7.06; best Nc3 +3.38) | ✅ |
| Englund Gambit (white) | "…Bb4 and …Qc1 mate" | `d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2 Bc3 Bb4` | Black winning | -7.13 (Bxb4 Nxb4 Na3 Qc3+) | ✅ |
| Englund Gambit (white) | "Play 6.Nc3 instead" | `d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2` | Nc3 is sound | Nc3 +3.59, within 0.00 of best | ✅ |
| Englund Gambit (white) | "or keep it simple with 4.Nc3" | `d4 e5 dxe5 Nc6 Nf3 Qe7` | Nc3 is sound | Nc3 +1.51, within 0.27 of best | ✅ |
| Englund Gambit (black) | "…Qb4+ hitting b2" | `d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4` | Qb4+ is playable | Qb4+ loses 0.40 (+2.27; best d6 +1.87) | ✅ |
| Englund Gambit Declined: Reversed Alekhine (white) | "After 2…e4, Nfd2 or Ne5" | `d4 e5 Nf3 e4` | Nfd2 is sound | Nfd2 -0.20, within 0.00 of best | ✅ |
| Englund Gambit Declined: Reversed Alekhine (white) | "After 2…e4, Nfd2 or Ne5" | `d4 e5 Nf3 e4` | Ne5 is playable | Ne5 loses 0.42 (-0.71; best Nfd2 -0.29) | ✅ |
| Englund Gambit Declined: Reversed Alekhine (black) | "Push …e4" | `d4 e5 Nf3` | e4 is sound | e4 -0.21, within 0.00 of best | ✅ |
| Englund Gambit Declined: Reversed Alekhine (black) | "or play …exd4" | `d4 e5 Nf3` | exd4 is sound | exd4 +0.02, within 0.21 of best | ✅ |
| Englund Gambit Declined: Reversed Alekhine (black) | "support it with …d5 or …f5" | `d4 e5 Nf3 e4 Nfd2` | d5 is sound | d5 -0.25, within 0.00 of best | ✅ |
| Englund Gambit Declined: Reversed Alekhine (black) | "support it with …d5 or …f5" | `d4 e5 Nf3 e4 Nfd2` | f5 is sound | f5 -0.18, within 0.10 of best | ✅ |
| Englund Gambit Declined: Reversed French (white) | "Recapture exd4" | `d4 e5 e3 exd4` | exd4 is sound | exd4 +0.19, within 0.00 of best | ✅ |
| Englund Gambit Declined: Reversed French (black) | "…exd4 and …d5" | `d4 e5 e3` | exd4 is sound | exd4 +0.18, within 0.00 of best | ✅ |
| Englund Gambit Declined: Reversed French (black) | "…exd4 and …d5" | `d4 e5 e3 exd4 exd4` | d5 is sound | d5 +0.20, within 0.00 of best | ✅ |
| Englund Gambit Declined: Reversed French (black) | "or …Nc6 and …Nf6" | `d4 e5 e3` | Nc6 is sound | Nc6 +0.44, within 0.23 of best | ✅ |
| Englund Gambit Declined: Reversed French (black) | "Black has an equal but calm game" | `d4 e5 e3 exd4 exd4 d5` | level | +0.21 (Nf3 Nf6 Bd3 c5) | ✅ |
| Horwitz Defense (white) | "2.c4 or 2.Nf3 heads for d4 lines" | `d4 e6` | c4 is sound | c4 +0.22, within 0.19 of best | ✅ |
| Horwitz Defense (white) | "2.c4 or 2.Nf3 heads for d4 lines" | `d4 e6` | Nf3 is sound | Nf3 +0.25, within 0.16 of best | ✅ |
| Horwitz Defense (white) | "2.e4 invites a French" | `d4 e6` | e4 is sound | e4 +0.41, within 0.00 of best | ✅ |
| Horwitz Defense (black) | "2.c4 Bb4+ is also possible" | `d4 e6 c4` | Bb4+ is sound | Bb4+ +0.36, within 0.08 of best | ✅ |
| English Opening (black) | "…e5 (reversed Sicilian), …c5 (Symmetrical), …Nf6, or …e6 with …d5" | `c4` | e5 is sound | e5 +0.09, within 0.00 of best | ✅ |
| English Opening (black) | "…e5 (reversed Sicilian), …c5 (Symmetrical), …Nf6, or …e6 with …d5" | `c4` | c5 is sound | c5 +0.32, within 0.20 of best | ✅ |
| English Opening (black) | "…e5 (reversed Sicilian), …c5 (Symmetrical), …Nf6, or …e6 with …d5" | `c4` | Nf6 is sound | Nf6 +0.23, within 0.11 of best | ✅ |
| English Opening (black) | "…e5 (reversed Sicilian), …c5 (Symmetrical), …Nf6, or …e6 with …d5" | `c4` | e6 is sound | e6 +0.25, within 0.13 of best | ✅ |
| English Opening: King's English Variation, Reversed Sicilian (white) | "g3, Bg2 and Nf3" | `c4 e5 Nc3 Nf6` | g3 is sound | g3 +0.11, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Reversed Sicilian (black) | "…Nf6, …Nc6 and …Bb4 to pin" | `c4 e5 Nc3 Nf6 Nf3 Nc6 g3` | Bb4 is sound | Bb4 +0.17, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Reversed Sicilian (black) | "or …d5 for an open reversed Dragon" | `c4 e5 Nc3 Nf6 g3` | d5 is sound | d5 +0.16, within 0.09 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "If …e4, Nd4" | `c4 e5 Nf3 e4` | Nd4 is sound | Nd4 +0.00, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "then hit the e4 pawn with Nc3 or d3" | `c4 e5 Nf3 e4 Nd4 Nc6 e3 Nf6` | Nc3 is sound | Nc3 +0.00, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "then hit the e4 pawn with Nc3 or d3" | `c4 e5 Nf3 e4 Nd4 Nc6 e3 Nf6` | d3 is sound | d3 -0.02, within 0.02 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "then hit the e4 pawn with Nc3 or d3" | `c4 e5 Nf3 e4 Nd4 Nc6 Nxc6 dxc6` | Nc3 is sound | Nc3 -0.26, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "then hit the e4 pawn with Nc3 or d3" | `c4 e5 Nf3 e4 Nd4 Nc6 Nxc6 dxc6` | d3 is sound | d3 -0.44, within 0.25 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "Against …Nc6, Nc3 leads to normal English structures" | `c4 e5 Nf3 Nc6` | Nc3 is sound | Nc3 +0.10, within 0.05 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (black) | "…Nc6 is solid" | `c4 e5 Nf3` | Nc6 is sound | Nc6 +0.17, within 0.17 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (black) | "…e4 gains space and kicks the knight" | `c4 e5 Nf3` | e4 is sound | e4 +0.00, within 0.00 of best | ✅ |
| English Opening: Anglo-Indian Defense (white) | "Nc3 and g3, or Nf3, or d4 to transpose" | `c4 Nf6` | Nc3 is sound | Nc3 +0.11, within 0.12 of best | ✅ |
| English Opening: Anglo-Indian Defense (white) | "Nc3 and g3, or Nf3, or d4 to transpose" | `c4 Nf6` | Nf3 is sound | Nf3 +0.31, within 0.00 of best | ✅ |
| English Opening: Anglo-Indian Defense (white) | "Nc3 and g3, or Nf3, or d4 to transpose" | `c4 Nf6` | d4 is sound | d4 +0.32, within 0.00 of best | ✅ |
| English Opening: Anglo-Indian Defense (white) | "Nc3 with e4 is a direct try against …e6" | `c4 Nf6 Nc3 e6` | e4 is sound | e4 +0.27, within 0.00 of best | ✅ |
| English Opening: Anglo-Indian Defense (black) | "…e5, …g6, …e6 or …c5 all work" | `c4 Nf6 Nc3` | e5 is sound | e5 +0.11, within 0.00 of best | ✅ |
| English Opening: Anglo-Indian Defense (black) | "…e5, …g6, …e6 or …c5 all work" | `c4 Nf6 Nc3` | g6 is playable | g6 loses 0.38 (+0.47; best e5 +0.09) | ✅ |
| English Opening: Anglo-Indian Defense (black) | "…e5, …g6, …e6 or …c5 all work" | `c4 Nf6 Nc3` | e6 is sound | e6 +0.29, within 0.20 of best | ✅ |
| English Opening: Anglo-Indian Defense (black) | "…e5, …g6, …e6 or …c5 all work" | `c4 Nf6 Nc3` | c5 is sound | c5 +0.31, within 0.22 of best | ✅ |
| English Opening: Agincourt Defense (white) | "Nc3 and e4 for a big centre if Black delays …d5" | `c4 e6 Nc3 Nf6` | e4 is sound | e4 +0.27, within 0.00 of best | ✅ |
| English Opening: Agincourt Defense (black) | "…d5 and …Nf6" | `c4 e6 Nf3` | d5 is sound | d5 +0.22, within 0.00 of best | ✅ |
| English Opening: Agincourt Defense (black) | "…Bb4 against Nc3" | `c4 e6 Nc3` | Bb4 is sound | Bb4 +0.32, within 0.12 of best | ✅ |
| English Opening: Anglo-Scandinavian Defense (white) | "2.cxd5, then Nc3 or Nf3 to gain time on the recapturing piece" | `c4 d5` | cxd5 is sound | cxd5 +0.63, within 0.00 of best | ✅ |
| English Opening: Anglo-Scandinavian Defense (white) | "2.cxd5, then Nc3 or Nf3 to gain time on the recapturing piece" | `c4 d5 cxd5 Qxd5` | Nc3 is sound | Nc3 +0.65, within 0.00 of best | ✅ |
| English Opening: Anglo-Scandinavian Defense (black) | "…Nf6 and …Nxd5" | `c4 d5 cxd5` | Nf6 is sound | Nf6 +0.64, within 0.05 of best | ✅ |
| English Opening: Anglo-Scandinavian Defense (black) | "or …Qxd5 and move the queen to a5 or d8" | `c4 d5 cxd5` | Qxd5 is sound | Qxd5 +0.63, within 0.00 of best | ✅ |
| English Opening: Anglo-Scandinavian Defense (black) | "or …Qxd5 and move the queen to a5 or d8" | `c4 d5 cxd5 Qxd5 Nc3` | Qa5 is sound | Qa5 +0.79, within 0.09 of best | ✅ |
| English Opening: Anglo-Scandinavian Defense (black) | "or …Qxd5 and move the queen to a5 or d8" | `c4 d5 cxd5 Qxd5 Nc3` | Qd8 is sound | Qd8 +0.97, within 0.27 of best | ✅ |
| English Opening: Caro-Kann Defensive System (white) | "Nf3, g3 or b3 and a fianchetto" | `c4 c6` | Nf3 is sound | Nf3 +0.28, within 0.00 of best | ✅ |
| English Opening: Caro-Kann Defensive System (white) | "or e4 for Caro-Kann positions" | `c4 c6` | e4 is sound | e4 +0.22, within 0.06 of best | ✅ |
| English Opening: Caro-Kann Defensive System (white) | "or d4 to transpose to the Slav" | `c4 c6` | d4 is sound | d4 +0.28, within 0.00 of best | ✅ |
| English Opening: Caro-Kann Defensive System (black) | "…d5, then …Bf5 or …Bg4 before …e6, as in the Slav" | `c4 c6 Nf3` | d5 is sound | d5 +0.28, within 0.00 of best | ✅ |
| English Opening: Caro-Kann Defensive System (black) | "…d5, then …Bf5 or …Bg4 before …e6, as in the Slav" | `c4 c6 Nf3 d5 g3` | Bf5 is sound | Bf5 +0.33, within 0.11 of best | ✅ |
| English Opening: Caro-Kann Defensive System (black) | "…d5, then …Bf5 or …Bg4 before …e6, as in the Slav" | `c4 c6 Nf3 d5 g3` | Bg4 is sound | Bg4 +0.29, within 0.07 of best | ✅ |
| English Opening: Great Snake Variation (white) | "Nc3 and g3, or e4 and d4" | `c4 g6` | Nc3 is sound | Nc3 +0.19, within 0.06 of best | ✅ |
| English Opening: Great Snake Variation (white) | "Nc3 and g3, or e4 and d4" | `c4 g6` | e4 is sound | e4 +0.30, within 0.00 of best | ✅ |
| Zukertort Opening (black) | "…d5, …Nf6, …c5 or …g6" | `Nf3` | d5 is sound | d5 +0.13, within 0.00 of best | ✅ |
| Zukertort Opening (black) | "…d5, …Nf6, …c5 or …g6" | `Nf3` | Nf6 is sound | Nf6 +0.25, within 0.07 of best | ✅ |
| Zukertort Opening (black) | "…d5, …Nf6, …c5 or …g6" | `Nf3` | c5 is sound | c5 +0.28, within 0.10 of best | ✅ |
| Zukertort Opening (black) | "…d5, …Nf6, …c5 or …g6" | `Nf3` | g6 is sound | g6 +0.41, within 0.23 of best | ✅ |
| Zukertort Opening: Black Mustang Defense (white) | "2.d4 stops …e5" | `Nf3 Nc6` | d4 is sound | d4 +0.52, within 0.00 of best | ✅ |
| Zukertort Opening: Black Mustang Defense (white) | "2.e4 heads for the open games you know" | `Nf3 Nc6` | e4 is sound | e4 +0.29, within 0.21 of best | ✅ |
| Zukertort Opening: Black Mustang Defense (black) | "…e5 if allowed" | `Nf3 Nc6 e4` | e5 is sound | e5 +0.17, within 0.00 of best | ✅ |
| Zukertort Opening: Black Mustang Defense (black) | "otherwise …d5 and …Bg4 to put pressure on d4" | `Nf3 Nc6 d4` | d5 is sound | d5 +0.55, within 0.00 of best | ✅ |
| Zukertort Opening: Black Mustang Defense (black) | "otherwise …d5 and …Bg4 to put pressure on d4" | `Nf3 Nc6 d4 d5 c4` | Bg4 is sound | Bg4 +0.86, within 0.30 of best | ✅ |
| Zukertort Opening: Kingside Fianchetto (white) | "d4 and c4 or e4 for a big centre, or g3 to mirror Black" | `Nf3 g6` | d4 is playable | d4 loses 0.34 (+0.21; best e4 +0.55) | ✅ |
| Zukertort Opening: Kingside Fianchetto (white) | "d4 and c4 or e4 for a big centre, or g3 to mirror Black" | `Nf3 g6` | e4 is sound | e4 +0.49, within 0.00 of best | ✅ |
| Zukertort Opening: Kingside Fianchetto (white) | "d4 and c4 or e4 for a big centre, or g3 to mirror Black" | `Nf3 g6` | g3 is playable | g3 loses 0.38 (+0.17; best e4 +0.55) | ✅ |
| Zukertort Opening: Old Indian Attack (black) | "…Nf6, …c5" | `Nf3 d5 d3` | Nf6 is sound | Nf6 -0.08, within 0.00 of best | ✅ |
| Zukertort Opening: Old Indian Attack (black) | "…Nf6, …c5" | `Nf3 d5 d3` | c5 is sound | c5 +0.13, within 0.23 of best | ✅ |
| Zukertort Opening: Old Indian Attack (black) | "or take the centre with …Nc6 and …e5" | `Nf3 d5 d3` | Nc6 is sound | Nc6 +0.02, within 0.12 of best | ✅ |
| Zukertort Opening: Old Indian Attack (black) | "or take the centre with …Nc6 and …e5" | `Nf3 d5 d3 Nc6 g3` | e5 is sound | e5 -0.05, within 0.00 of best | ✅ |
| Zukertort Opening: Old Indian Attack (black) | "not …e5 at once: Nxe5" | `Nf3 d5 d3` | e5 is a mistake | e5 loses 1.10 (+1.00; best Nf6 -0.10) | ✅ |
| Zukertort Opening: Pirc Invitation (white) | "2.e4 for a Pirc" | `Nf3 d6` | e4 is sound | e4 +0.38, within 0.24 of best | ✅ |
| Zukertort Opening: Pirc Invitation (white) | "or d4 and c4" | `Nf3 d6` | d4 is sound | d4 +0.54, within 0.00 of best | ✅ |
| Zukertort Opening: Pirc Invitation (black) | "…Nf6, …g6 and …Bg7, or …e5" | `Nf3 d6 e4` | Nf6 is sound | Nf6 +0.25, within 0.00 of best | ✅ |
| Zukertort Opening: Pirc Invitation (black) | "…Nf6, …g6 and …Bg7, or …e5" | `Nf3 d6 e4` | e5 is playable | e5 loses 0.31 (+0.65; best c5 +0.34) | ✅ |
| Zukertort Opening: Pirc Invitation (black) | "…Bg4 hits the knight if White is slow" | `Nf3 d6 g3` | Bg4 is playable | Bg4 loses 0.31 (+0.53; best e5 +0.22) | ✅ |
| Zukertort Opening: Queen's Gambit Invitation (white) | "d4 and c4 for a QGD" | `Nf3 e6` | d4 is sound | d4 +0.23, within 0.00 of best | ✅ |
| Zukertort Opening: Queen's Gambit Invitation (white) | "g3 for a Catalan" | `Nf3 e6` | g3 is sound | g3 +0.21, within 0.00 of best | ✅ |
| Zukertort Opening: Queen's Gambit Invitation (white) | "or e4 heading for French-like play" | `Nf3 e6` | e4 is sound | e4 +0.23, within 0.00 of best | ✅ |
| Zukertort Opening: Queen's Gambit Invitation (black) | "…d5 and …Nf6, or …f5 for a Dutch" | `Nf3 e6 d4` | d5 is sound | d5 +0.14, within 0.00 of best | ✅ |
| Zukertort Opening: Queen's Gambit Invitation (black) | "…d5 and …Nf6, or …f5 for a Dutch" | `Nf3 e6 d4` | Nf6 is sound | Nf6 +0.23, within 0.03 of best | ✅ |
| Zukertort Opening: Queen's Gambit Invitation (black) | "…d5 and …Nf6, or …f5 for a Dutch" | `Nf3 e6 d4` | f5 is playable | f5 loses 0.33 (+0.53; best d5 +0.20) | ✅ |
| Zukertort Opening: Sicilian Invitation (white) | "2.e4 for a Sicilian, 2.c4 for the Symmetrical English, or 2.g3 for a quieter game" | `Nf3 c5` | e4 is sound | e4 +0.32, within 0.00 of best | ✅ |
| Zukertort Opening: Sicilian Invitation (white) | "2.e4 for a Sicilian, 2.c4 for the Symmetrical English, or 2.g3 for a quieter game" | `Nf3 c5` | c4 is sound | c4 +0.26, within 0.01 of best | ✅ |
| Zukertort Opening: Sicilian Invitation (white) | "2.e4 for a Sicilian, 2.c4 for the Symmetrical English, or 2.g3 for a quieter game" | `Nf3 c5` | g3 is sound | g3 +0.07, within 0.20 of best | ✅ |
| Zukertort Opening: Slav Invitation (white) | "d4 and c4 for a Slav, e4 for a Caro-Kann, or a fianchetto with g3 or b3" | `Nf3 c6` | d4 is sound | d4 +0.31, within 0.00 of best | ✅ |
| Zukertort Opening: Slav Invitation (white) | "d4 and c4 for a Slav, e4 for a Caro-Kann, or a fianchetto with g3 or b3" | `Nf3 c6` | e4 is sound | e4 +0.29, within 0.00 of best | ✅ |
| Zukertort Opening: Slav Invitation (white) | "d4 and c4 for a Slav, e4 for a Caro-Kann, or a fianchetto with g3 or b3" | `Nf3 c6` | g3 is sound | g3 +0.29, within 0.00 of best | ✅ |
| Zukertort Opening: Slav Invitation (black) | "…d5, then …Bf5 or …Bg4 before …e6" | `Nf3 c6 g3` | d5 is sound | d5 +0.21, within 0.00 of best | ✅ |
| Zukertort Opening: Slav Invitation (black) | "…d5, then …Bf5 or …Bg4 before …e6" | `Nf3 c6 g3 d5 Bg2` | Bf5 is sound | Bf5 +0.28, within 0.12 of best | ✅ |
| Zukertort Opening: Slav Invitation (black) | "…d5, then …Bf5 or …Bg4 before …e6" | `Nf3 c6 g3 d5 Bg2` | Bg4 is sound | Bg4 +0.17, within 0.00 of best | ✅ |
| Zukertort Opening: Tennison Gambit (idea) | "Considered dubious" | `e4 d5` | Nf3 is dubious | Nf3 loses 1.83 (-1.17; best exd5 +0.66) | ✅ |
| Zukertort Opening: Tennison Gambit (black) | "Take and develop carefully" | `e4 d5 Nf3` | dxe4 is sound | dxe4 -1.14, within 0.00 of best | ✅ |
| Zukertort Opening: Tennison Gambit (white) | "After …dxe4, Ng5" | `e4 d5 Nf3 dxe4` | Ng5 is sound | Ng5 -1.29, within 0.00 of best | ✅ |
| Zukertort Opening: Tennison Gambit (white) | "5.Bxd3 h6??" | `e4 d5 Nf3 dxe4 Ng5 Nf6 d3 exd3 Bxd3` | h6 is a blunder | h6 loses 5.52 (+4.53; best Nc6 -0.99) | ✅ |
| Zukertort Opening: Tennison Gambit (white) | "6.Nxf7 Kxf7 7.Bg6+ wins the queen" | `e4 d5 Nf3 dxe4 Ng5 Nf6 d3 exd3 Bxd3 h6 Nxf7 Kxf7 Bg6+` | White winning | +4.46 (Kxg6 Qxd8 Nc6 Qd1) | ✅ |
| Réti Opening (black) | "…c6 with …Bf5 or …Bg4 (Slav style), …e6 (QGD style), or …d4 to grab space" | `Nf3 d5 c4` | c6 is sound | c6 +0.25, within 0.13 of best | ✅ |
| Réti Opening (black) | "…c6 with …Bf5 or …Bg4 (Slav style), …e6 (QGD style), or …d4 to grab space" | `Nf3 d5 c4` | e6 is sound | e6 +0.25, within 0.13 of best | ✅ |
| Réti Opening (black) | "…c6 with …Bf5 or …Bg4 (Slav style), …e6 (QGD style), or …d4 to grab space" | `Nf3 d5 c4` | d4 is sound | d4 -0.02, within 0.00 of best | ✅ |
| Nimzo-Larsen Attack (black) | "Build a central pawn presence with …e5 or …d5" | `b3` | e5 is sound | e5 -0.03, within 0.00 of best | ✅ |
| Nimzo-Larsen Attack (black) | "Build a central pawn presence with …e5 or …d5" | `b3` | d5 is sound | d5 +0.03, within 0.01 of best | ✅ |
| Nimzo-Larsen Attack: Classical Variation (black) | "…Nf6, …c5" | `Nf3 d5 b3` | Nf6 is sound | Nf6 +0.12, within 0.08 of best | ✅ |
| Nimzo-Larsen Attack: Classical Variation (black) | "or …Bg4 or …Bf5" | `Nf3 d5 b3` | Bg4 is sound | Bg4 +0.05, within 0.01 of best | ✅ |
| Nimzo-Larsen Attack: Classical Variation (black) | "or …Bg4 or …Bf5" | `Nf3 d5 b3` | Bf5 is sound | Bf5 +0.00, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "against 3…Nc6 play e3" | `c4 e5 Nf3 e4 Nd4 Nc6` | e3 is sound | e3 +0.00, within 0.00 of best | ✅ |
| English Opening: King's English Variation, Nimzowitsch Variation (white) | "(or swap with Nxc6)" | `c4 e5 Nf3 e4 Nd4 Nc6` | Nxc6 is playable | Nxc6 loses 0.34 (-0.31; best e3 +0.03) | ✅ |
| Slav Defense: Modern Line (white) | "and e3 (or Ne5) regains the pawn" | `d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5` | Ne5 is sound | Ne5 +0.42, within 0.00 of best | ✅ |
