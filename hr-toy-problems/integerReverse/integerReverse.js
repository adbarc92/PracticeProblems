/*
 *
 * Integer Reverse
 *
 * Given a positive integer, return its digits reversed.
 *
 * - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
 * - Only use integers and math in your solution.
 *
 */

function reverseInteger(number) {
  // TODO: Implement this function!
  let num = number;
  let fixedNum = 0;

  let place = 1;
  for (let i = 1; i < Infinity; i *= 10) {
    if (num / i < 0) {
      place = i / 10;
      break;
    }
    if (num > 10000000) {
      return false;
    }
  }

  for (
    let i = 0, currentPlace = place;
    i < 10;
    i += 1, currentPlace = currentPlace / 10
  ) {}
}

try {
  module.exports = reverseInteger;
} catch (err) {
  console.error(err);
}
