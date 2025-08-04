import { useState } from "react";

export const Square = ({ onClick, value }) => {
  //   const [clicked, setClicked] = useState(false);

  //   const onClickTurn = () => {
  //     if (clicked === false) {
  //       onTurn();
  //       setClicked(true);
  //     }
  //   };
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
