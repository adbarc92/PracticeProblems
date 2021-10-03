/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
var allAnagrams = function (string) {
  // Your code here.
  const letters = [...string];
  const anagrams = [];

  // Declare a function that takes in an existing string, remaining letters
  // This function will check if there are any letters remaining
  // If not
  const getAnagram = (curStr, letters) => {
    if (!letters.length && !anagrams.includes(curStr)) {
      anagrams.push(curStr);
      return;
    }
    for (let i = 0; i < letters.length; i++) {
      const a = [...letters];
      a.splice(i, 1);
      getAnagram(curStr + letters[i], a, i);
      // Todo Add backtracking
    }
  };

  getAnagram('', letters, 0);
  return anagrams;
};

// const anagrams = allAnagrams('pizza');
// const alexA = allAnagrams('alex');

// console.log('anagrams:', anagrams);
// console.log('alexA:', alexA);

try {
  module.exports = allAnagrams;
} catch (err) {
  console.error(err);
}
