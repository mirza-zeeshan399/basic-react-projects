export const checkWinner = (
  setProgress,
  setGameOver,
  squares,
  counter,
  setCounter
) => {
  for (const [a, b, c] of winningCombinations) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      setProgress(
        `PLAYER ${
          squares[a] === "O" ? "1" : squares[a] === "X" ? "2" : null
        } HAS WON`
      );
      setGameOver(true);
    } else if (
      counter === 9 &&
      squares[a] !== squares[b] &&
      squares[a] !== squares[c]
    ) {
      setCounter(0);
      setProgress("DRAW");
      setGameOver(true);
    }
  }
};

export const handleSquareClick = (
  index,
  squares,
  setSquares,
  value,
  setValue,
  setPlayerTurn,
  playerTurn
) => {
  if (playerTurn === "player 1") {
    setValue("X");
    setPlayerTurn("player 2");
  } else {
    setValue("O");
    setPlayerTurn("player 1");
  }
  const newSquares = [...squares];
  newSquares[index] = value;
  setSquares(newSquares);
};

export const resetGame = (
  setSquares,
  setPlayerTurn,
  setValue,
  setProgress,
  setGameOver,
  setCounter
) => {
  setSquares(Array(9).fill(""));
  setPlayerTurn("player 1");
  setValue("O");
  setProgress("in progress");
  setGameOver(false);
  setCounter(0);
};

export const handleReset = (
  setSquares,
  setPlayerTurn,
  setValue,
  setProgress,
  setGameOver,
  setCounter
) => {
  setSquares(Array(9).fill(""));
  setPlayerTurn("player 1");
  setValue("O");
  setProgress("in progress");
  setGameOver(false);
  setCounter(0);
  console.clear();
};

export const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
];
