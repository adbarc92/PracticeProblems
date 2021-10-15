/**
 * Printing Pyramid
 *
 * A function is given with positive number N.
 * Then the function needs to print pyramid to the console using '*' as characters.
 * Make sure to have spaces around '*' to unify the length of each pyramid layers.
 *
 * ex)
 * printPyramid(2);
 * ' * '
 * '***'
 *
 * printPyramid(3);
 * '  *  '
 * ' *** '
 * '*****'
 *
 * printPyramid(4);
 * '   *   '
 * '  ***  '
 * ' ***** '
 * '*******'

* Assume positive integer
* Strategy:
	* Determine the length of the bottom line (N*2-1)
	* Keep track of the spaces before the stars, as well as the stars per line
	* Create a new string;
		* Append the current number of spaces
		* Append the current number of stars; add two to the currentStarCount
		* Append the current number of spaces; deduct two from the currentSpaceCount
 */

const setCharAt = (str, index, newChar) => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + newChar + str.substring(index + 1);
};

const makeStarPyramid = (n) => {
  const maxLength = n * 2 - 1;
  let str = ''.padStart(maxLength, ' ');
  for (let i = 0; i < n; i++) {
    str = setCharAt(str, Math.floor(n / 2) + i, '*');
    str = setCharAt(str, Math.floor(n / 2) - i, '*');
    console.log(str);
  }
};

makeStarPyramid(1);
makeStarPyramid(7);
