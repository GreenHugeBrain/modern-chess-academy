import { useEffect, useState } from 'react';

const PIECES: Record<string, string> = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟'
};

const POSITIONS: string[][] = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', 'P', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', '', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const ITALIAN: string[][] = [
  ['r', '', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', '', 'p', 'p', 'p'],
  ['', '', 'n', '', '', '', '', ''],
  ['', '', 'B', '', 'p', '', '', ''],
  ['', '', '', '', 'P', '', '', ''],
  ['', '', '', '', '', 'N', '', ''],
  ['P', 'P', 'P', 'P', '', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', '', '', 'R']
];

export default function ChessBoard({ animated = true, className = '' }: { animated?: boolean; className?: string }) {
  const [board, setBoard] = useState<string[][]>(POSITIONS);
  const [highlight, setHighlight] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!animated) return;
    const t1 = setTimeout(() => { setBoard(ITALIAN); setHighlight([3, 2]); }, 1800);
    const t2 = setTimeout(() => { setBoard(POSITIONS); setHighlight(null); }, 4200);
    const interval = setInterval(() => {
      setBoard(b => (b === POSITIONS ? ITALIAN : POSITIONS));
      setHighlight(b => (b ? null : [3, 2]));
    }, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval); };
  }, [animated]);

  return (
    <div className={`grid grid-cols-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/40 ${className}`}>
      {board.map((row, r) =>
        row.map((piece, c) => {
          const dark = (r + c) % 2 === 1;
          const isHi = highlight && highlight[0] === r && highlight[1] === c;
          return (
            <div
              key={`${r}-${c}`}
              className={`aspect-square flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-500 ${
                dark ? 'bg-emerald-700' : 'bg-ivory'
              } ${isHi ? 'ring-4 ring-inset ring-amber-400 bg-amber-300' : ''}`}
            >
              <span className={`transition-all duration-700 ${piece ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} ${
                piece && piece === piece.toUpperCase() ? 'text-ink drop-shadow-lg' : 'text-ink'
              }`}>
                {PIECES[piece] || ''}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}