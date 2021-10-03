/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function (string) {
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length - i; j++) {
      // code here
    }
  }
  return longest;
};

try {
  module.exports = longestPalindrome;
} catch (err) {
  console.error(err);
}
