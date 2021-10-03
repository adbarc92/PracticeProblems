/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

// * https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

var toFraction = function (number) {
  const d = number.toString().split('.')[1];
  const dL = d ? d.length : 1;
  const divisor = 10 ** dL;
  const fixedNumber = number * divisor;
  const gcd = getGcd(fixedNumber, divisor);
  return `${fixedNumber / gcd}/${divisor / gcd || 1}`;
};

try {
  module.exports = toFraction;
} catch (err) {
  console.error(err);
}
