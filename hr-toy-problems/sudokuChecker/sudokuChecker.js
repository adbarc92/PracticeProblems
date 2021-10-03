/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

// const firstSquare =
//   arrBoard[0].slice(0, 3) +
//   arrBoard[1].slice(0, 3) +
//   arrBoard[2].slice(0, 3);

// const secondSquare =
//   arrBoard[0].slice(3, 6) +
//   arrBoard[1].slice(3, 6) +
//   arrBoard[2].slice(3, 6);

// const thirdSquare =
//   arrBoard[0].slice(6) + arrBoard[1].slice(6) + arrBoard[2].slice(6);

// const fourthSquare =
//   arrBoard[3].slice(0, 3) +
//   arrBoard[4].slice(0, 3) +
//   arrBoard[5].slice(0, 3);

// const fifthSquare =
//   arrBoard[3].slice(3, 6) +
//   arrBoard[4].slice(3, 6) +
//   arrBoard[5].slice(3, 6);

// const sixthSquare =
//   arrBoard[3].slice(6) + arrBoard[4].slice(6) + arrBoard[5].slice(6);

// const seventhSquare =
//   arrBoard[6].slice(0, 3) +
//   arrBoard[7].slice(0, 3) +
//   arrBoard[8].slice(0, 3);

// const eighthSquare =
//   arrBoard[6].slice(3, 6) +
//   arrBoard[7].slice(3, 6) +
//   arrBoard[8].slice(3, 6);

// const ninthSquare =
//   arrBoard[6].slice(6) + arrBoard[7].slice(6) + arrBoard[8].slice(6);

const numStrValid = (numStr) => {
  if (numStr.length !== 9) {
    return false;
  }
  for (let i = 1; i < 10; i++) {
    if (!numStr.includes(i)) {
      return false;
    }
  }
  return true;
};

const allRowsValid = (arrBoard) => {
  for (let i = 0; i < arrBoard.length; i++) {
    if (!numStrValid(arrBoard[i])) {
      return false;
    }
  }
  return true;
};
const allColumnsValid = (arrBoard) => {
  for (let i = 0; i < arrBoard[0].length; i++) {
    const column = arrBoard
      .map((row) => row[i])
      .flat()
      .join('');
    if (!numStrValid(column)) {
      return false;
    }
  }
  return true;
};

const allSquaresValid = (arrBoard) => {
  let xOffset = 0;
  let yOffset = 0;

  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      const square =
        arrBoard[i].slice(j, j + 3) +
        arrBoard[i + 1].slice(j, j + 3) +
        arrBoard[i + 2].slice(j, j + 3);
      if (!numStrValid(square)) {
        return false;
      }
    }
  }
  return true;
};

const sudokuChecker = (board) => {
  const arrBoard = board.split('\n');

  if (
    allColumnsValid(arrBoard) &&
    allRowsValid(arrBoard) &&
    allSquaresValid(arrBoard)
  ) {
    return 'solved';
  } else {
    return 'invalid';
  }
};

try {
  module.exports = sudokuChecker;
} catch (err) {
  console.error(err);
}
