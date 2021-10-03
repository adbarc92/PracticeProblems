// TODO: do backtracking first
// TODO: do dynamic programming first

/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function (total) {
  // const denoms = {
  //   '£2': 200,
  //   '£1': 100,
  //   '50p': 50,
  //   '20p': 20,
  //   '10p': 10,
  //   '5p': 5,
  //   '2p': 2,
  //   '1p': 1,
  // };

  const denoms = [200, 100, 50, 20, 10, 5, 2, 1];
  const ret = {
    combinations: 0,
    sets: [],
  };

  const getChange = (currentChange, total, maxDenomIndex) => {
    const set = {};
  };
};

try {
  module.exports = makeChange;
} catch (err) {
  console.error(err);
}
