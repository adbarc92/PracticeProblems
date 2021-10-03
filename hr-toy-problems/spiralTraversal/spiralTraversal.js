/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function (matrix) {
  debugger;
  const result = [];
  const dir = {
    right: [1, 0],
    down: [0, 1],
    left: [-1, 0],
    up: [0, -1],
  };
  let heading = 'right';

  const width = matrix[0].length;
  const height = matrix.length;
  for (
    let x = 0, y = 0, l = matrix.flat().length;
    x + y < l;
    x += dir[heading][0], y += dir[heading][1]
  ) {
    result.push(matrix[y][x]);
    if (heading === 'right' && x === width - 1) {
      heading = 'down';
    } else if (heading === 'down' && y === height - 1) {
      heading = 'left';
    } else if (heading === 'left' && x === 0) {
      heading = 'up';
    } else if (heading === 'up' && y === 0) {
      heading = 'right';
    }
  }
  return result;
};

const input = spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

const output = [1, 2, 3, 6, 9, 8, 7, 4, 5];

try {
  module.exports = spiralTraversal;
} catch (err) {
  console.error(err);
}
