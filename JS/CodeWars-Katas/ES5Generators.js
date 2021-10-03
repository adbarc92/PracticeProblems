//www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript

function generator(sequencer) {
  let nextIndex = 1;
  let iterationCount = 0;
  const end = Infinity;

  return {
    next: function () {
      let result;
      if (nextIndex < end) {
        nextIndex += sequencer(nextIndex);
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
}

function dummySeq() {
  return function () {
    return 'dummy';
  };
}

// const factorial = (n) => {
//   let ret = 1;
//   if (n === 0) {
//     return 1;
//   }
//   for (let i = n; i > 0; i--) {
//     ret *= i;
//   }
//   return ret;
// };

function factorialSeq() {
  let i = 0;
  const factorial = (n) => {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  return function () {
    const result = factorial(i);
    i++;
    return result;
  };
}

function fibonacciSeq() {}

function rangeSeq(start, step) {}

function primeSeq() {}

function partialSumSeq() {}
