import { useState } from "react";
import { Board } from "./components/Board";

export const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return;
    }

    const newBoard = [...board];

    newBoard[i] = xIsNext ? "X" : "O";

    setBoard(newBoard);

    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(`Winner ${squares[a]}`);
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner is ${winner}`
    : `Next player ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <h1>{status}</h1>
    </>
  );
};
