import { useState } from "react";
import { Square } from "./Square";

export const Board = ({ squares, onClick }) => {
  //   const turns = ["X", "O"];
  //   const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //   const [turn, setTurn] = useState(turns[0]);
  //   const [value, setValue] = useState("");

  //   const onToggleTurn = () => {
  //     if (turn === turns[0]) {
  //       setTurn(turns[1]);
  //     } else {
  //       setTurn(turns[0]);
  //     }
  //   };

  //   const onTurn = () => {
  //     console.log(turn);
  //     onToggleTurn();
  //     setValue(turn);
  //   };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
