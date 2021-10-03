/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

// * https://en.wikipedia.org/wiki/Permutation
// * The number of permutations of distinct objects is n!

const rockPaperScissors = function (n = 3) {
  const combos = [];
  const options = ['R', 'P', 'S'];
  for (let i = 0; i < n; i++) {
    const first = options[i];
    for (let j = 0; j < n; j++) {
      const second = options[j];
      for (let k = 0; k < n; k++) {
        const newCombo = first + second + options[k];
        if (!combos.includes(newCombo)) {
          combos.push(newCombo);
        }
      }
    }
  }
  return combos;
};

// const combos = rockPaperScissors(3);
// console.log(combos);

try {
  module.exports = rockPaperScissors;
} catch (err) {
  console.error(err);
}
