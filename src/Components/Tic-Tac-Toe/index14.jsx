import { useState } from "react";
import "./styles14.css";
import Square from "./squares";
import { handleSquareClick, handleReset } from "./utlis/gameLogic";
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState("player 1");
  const [value, setValue] = useState("O");
  const [progress, setProgress] = useState("in progress");
  const [gameOver, setGameOver] = useState(false);
  const [counter, setCounter] = useState(0);
  console.log(progress, counter);

  return (
    <>
      <div className="tic-tac-toe_container">
        {squares.map((square, index) => {
          return (
            <div className="row">
              <Square
                index={index}
                value={square}
                currentValue={value}
                setValue={setValue}
                squares={squares}
                setSquares={setSquares}
                setProgress={setProgress}
                setGameOver={setGameOver}
                gameOver={gameOver}
                counter={counter}
                setCounter={setCounter}
                handleSquareClick={handleSquareClick}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
              />
            </div>
          );
        })}
      </div>
      <div className="player-turn_wrapper">
        {!gameOver && <h2>{playerTurn} Turn</h2>}
        {gameOver && <h2>{progress}</h2>}
        <button
          className="reset-btn"
          onClick={() => {
            handleReset(
              setSquares,
              setPlayerTurn,
              setValue,
              setProgress,
              setGameOver,
              setCounter
            );
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
