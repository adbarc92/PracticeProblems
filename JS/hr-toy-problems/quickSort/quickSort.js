/**
 * quickSort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

const quickSort = function (array) {
  if (array.length === 1) {
    return array;
  }
  const pivot = array[Math.floor(array.length / 2)];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  return [].concat(quickSort(leftArr), pivot, quickSort(rightArr));
};

// const arr = [502, 39, 874, 79, 625, 63, 12, 47, 69];

// const expected = arr.sort((a, b) => a - b);

// const result = quickSort(arr);

try {
  module.exports = quickSort;
} catch (err) {
  console.error(err);
}
