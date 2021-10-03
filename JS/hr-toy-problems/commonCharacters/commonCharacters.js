/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// const fixString = (str) => {
//   return str.replace(/\s/g, '');
// };

var commonCharacters = function (string1, string2, ...strArr) {
  const ret = [];
  const strings = [string2, ...strArr];
  for (const char of string1) {
    let match = true;
    for (const string of strings) {
      if (!string.includes(char)) {
        match = false;
      }
    }
    if (match && !ret.includes(char) && char !== ' ') {
      ret.push(char);
    }
  }
  return ret.join('');
};

try {
  module.exports = commonCharacters;
} catch (err) {
  console.error(err);
}
