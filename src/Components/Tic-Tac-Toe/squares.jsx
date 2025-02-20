import { useEffect } from "react";
import { checkWinner, winningCombinations } from "./utlis/gameLogic";

const Square = ({
  value,
  setValue,
  currentValue,
  index,
  squares,
  setSquares,
  handleSquareClick,
  setProgress,
  setGameOver,
  gameOver,
  counter,
  setCounter,
  playerTurn,
  setPlayerTurn,
}) => {
  useEffect(() => {
    checkWinner(
      setProgress,
      setGameOver,
      squares,
      counter,
      setCounter,
      winningCombinations
    );
  }, [counter]);

  return (
    <button
      onClick={() => {
        if (gameOver) {
          return;
        }
        setCounter(counter + 1);
        handleSquareClick(
          index,
          squares,
          setSquares,
          currentValue,
          setValue,
          setPlayerTurn,
          playerTurn
        );
      }}
    >
      {value}
    </button>
  );
};

export default Square;
