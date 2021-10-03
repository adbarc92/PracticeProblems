// ES6 Generator - Basic

function* generator(i) {
  yield i;
  yield i + 10;
  yield i;
}

// const gen = generator(10);

// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 20
// console.log(gen.next().value); // 10

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

function add1(a) {
  return a + 1;
}

function* generator2(func) {
  let val = 1;
  while (val < Infinity) {
    yield (val = func(val));
  }
}

const gen2 = generator2(add1);

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
