/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

// Start with nothing
// Rotate in every letter, pushing to sets and then removing it
// Leave the last, remove the last from the letters array
// Viola.

const getUniqueLetters = (str) => {
  const ret = new Set();
  for (const i of str) {
    ret.add(i);
  }
  return ret;
};

const getPowerSet = function (str) {
  const letters = getUniqueLetters(str);
  const powerSet = new Set();

  const helpPowerSet = (str) => {
    if (str.length === 1) {
      powerSet.add(str);
    }
  };

  // Base case:

  return powerSet;
};

try {
  module.exports = getPowerSet;
} catch (err) {
  console.error(err);
}
