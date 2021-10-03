/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

let steps = 0;

var rotatedArraySearch = function (rotated, target) {
  steps += 1;
  const midIndex = Math.floor(rotated.length / 2);
  if (rotated[midIndex] !== target) {
    if (rotated[midIndex] > target) {
    } else {
      rotatedArraySearch(rotated.slice(midIndex), target);
    }
  } else {
    return midIndex;
  }
};

try {
  module.exports = rotatedArraySearch;
} catch (err) {
  console.error(err);
}
