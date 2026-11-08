import { useEffect, useRef } from 'react';
import { Chessground } from 'chessground';
import type { Api } from 'chessground/api';
import type { DrawShape } from 'chessground/draw';
import type { Key } from 'chessground/types';
import { Chess, SQUARES } from 'chess.js';
import type { ArrowSpec, Side } from '../data/types';
import 'chessground/assets/chessground.base.css';
import 'chessground/assets/chessground.brown.css';
import 'chessground/assets/chessground.cburnett.css';

interface BoardProps {
  fen: string;
  orientation: Side;
  lastMove?: [string, string];
  arrows?: ArrowSpec[];
  /** When set, the side to move can move pieces and each move is reported here. */
  onMove?: (from: string, to: string) => void;
  /** Bump to force the board back to `fen` (e.g. after rejecting a move). */
  resetToken?: number;
}

const BRUSHES: Record<string, string> = { g: 'green', r: 'red', b: 'blue', y: 'yellow' };

export function toShapes(arrows: ArrowSpec[] = []): DrawShape[] {
  return arrows.map((a) => {
    const [squares, colour = 'g'] = a.split(':');
    const brush = BRUSHES[colour] ?? 'green';
    const orig = squares.slice(0, 2) as Key;
    const dest = squares.length === 4 ? (squares.slice(2) as Key) : undefined;
    return dest && dest !== orig ? { orig, dest, brush } : { orig, brush };
  });
}

function legalDests(chess: Chess): Map<Key, Key[]> {
  const dests = new Map<Key, Key[]>();
  for (const s of SQUARES) {
    const moves = chess.moves({ square: s, verbose: true });
    if (moves.length) dests.set(s, moves.map((m) => m.to));
  }
  return dests;
}

export function Board({ fen, orientation, lastMove, arrows, onMove, resetToken }: BoardProps) {
  const el = useRef<HTMLDivElement>(null);
  const api = useRef<Api | null>(null);
  const onMoveRef = useRef(onMove);
  onMoveRef.current = onMove;

  useEffect(() => {
    if (!el.current) return;
    api.current = Chessground(el.current, {
      animation: { enabled: true, duration: 220 },
      highlight: { lastMove: true, check: true },
      movable: {
        free: false,
        showDests: true,
        events: { after: (from, to) => onMoveRef.current?.(from, to) },
      },
      premovable: { enabled: false },
      drawable: { enabled: true, eraseOnClick: true },
    });
    const observer = new ResizeObserver(() => api.current?.redrawAll());
    observer.observe(el.current);
    return () => {
      observer.disconnect();
      api.current?.destroy();
      api.current = null;
    };
  }, []);

  const interactive = Boolean(onMove);
  const arrowKey = (arrows ?? []).join(',');
  const lastKey = lastMove?.join('');

  useEffect(() => {
    if (!api.current) return;
    const chess = new Chess(fen);
    const turn: Side = chess.turn() === 'w' ? 'white' : 'black';
    api.current.set({
      fen,
      orientation,
      turnColor: turn,
      check: chess.inCheck() ? turn : false,
      lastMove: lastMove as Key[] | undefined,
      movable: {
        color: interactive ? turn : undefined,
        dests: interactive ? legalDests(chess) : new Map(),
      },
    });
    api.current.setAutoShapes(toShapes(arrows));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen, orientation, lastKey, arrowKey, interactive, resetToken]);

  return (
    <div className="board-frame">
      <div ref={el} className="board" />
    </div>
  );
}
