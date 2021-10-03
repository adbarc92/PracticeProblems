/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

const getLargestNumInArr = (arr) => {
  return Math.max(...arr);
};

// const getLargeAbsNumIndInArr = (arr) => {
//   return Math.max(...arr.map((a) => Math.abs(a)));
// };

var largestProductOfThree = function (array) {
  const arr = [...array];
  const l1 = arr.splice(arr.indexOf(getLargestNumInArr(arr)), 1);
  const l2 = arr.splice(arr.indexOf(getLargestNumInArr(arr)), 1);
  const l3 = arr.splice(arr.indexOf(getLargestNumInArr(arr)), 1);
  return l1 * l2 * l3;
};

try {
  module.exports = largestProductOfThree;
} catch (err) {
  console.error(err);
}
