/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */

const sortAlg = (a, b) => a - b;

const arraysAreEqual = (arr1, arr2) => {
  if (arr1 === arr2) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arr1s = arr1.sort(sortAlg);
  const arr2s = arr2.sort(sortAlg);

  for (let i = 0; i < arr1s.length; i++) {
    if (arr1s[i] !== arr2s[i]) {
      return false;
    }
  }
  return true;
};

var deepEquals = function (apple, orange) {
  const keysA = Object.keys(apple).sort(sortAlg);
  const keysO = Object.keys(orange).sort(sortAlg);

  if (!arraysAreEqual(keysA, keysO)) {
    return false;
  }

  // debugger;

  for (let i = 0; i < keysA.length; i++) {
    const val1 = apple[keysA[i]];
    const val2 = orange[keysO[i]];
    if (typeof val1 === 'object' && !deepEquals(val1, val2)) {
      return false;
    } else if (typeof val1 !== 'object' && val1 !== val2) {
      return false;
    }
  }
  return true;
};

try {
  module.exports = deepEquals;
} catch (err) {
  console.error(err);
}

// const obj1 = {
//   a: 1,
//   b: {
//     c: { d: { e: 'ay lmao', f: { g: 'truth > consensus' } } },
//   },
// };
// const obj2 = {
//   a: 1,
//   b: {
//     c: { d: { e: 'ay lmao', f: { g: 'truth > consensus' } } },
//   },
// };

// const result = deepEquals(obj1, obj2);
// const expected = true;

// console.log('outcome:', result === expected);
