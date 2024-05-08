import React, { useState } from 'react';

function TicTacToe() {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O');

  const handleCellClick = (index) => {
    if (board[index] || checkWin()) return;

    setBoard(board.map((cell, cellIndex) => cellIndex === index ? currentPlayer : cell));

    setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
  };

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (board[a] && (board[a] === board[b]) && (board[a] === board[c])) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWin();

  return (
    <div>
      <div className="board">
        {board.map((cell, index) => (
          <div className="cell" onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && <div className="winner">Player {winner} wins!</div>}
    </div>
  );
}

export default TicTacToe;