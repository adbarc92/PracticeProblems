/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  let index = 0; // should be set to last mid

  // const doBinary = (array, target) => {
  // 	const newIndex = Math.floor(array.length / 2);
  //   if (array[newIndex] === target) {
  // 		index += newIndex;
  // 		return;
  //   }else if (array[newIndex] < target) {

  // 	}
  // };
  // Track current index
  // If value at current midpoint is less than value, reset index and call recursively
  // If value at current midpoint is greater than value, reset index and call recursively
  // If value at current midpoint is equal to value, offset index and return
};

try {
  module.exports = binarySearch;
} catch (err) {
  console.error(err);
}
