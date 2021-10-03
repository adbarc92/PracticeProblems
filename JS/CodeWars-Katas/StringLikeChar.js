//Add the methods to String.prototype

String.prototype.map = function (fn) {
  let agg = '';
  for (let i = 0; i < this.length; i++) {
    agg += fn(this[i], i, String(this));
  }
  return agg;
};

String.prototype.join = function (sep) {
  return this.split('').join(sep);
};

String.prototype.filter = function (fn) {
  let agg = '';
  for (let i = 0; i < this.length; i++) {
    agg += fn(this[i], i, this) ? this[i] : '';
  }
  return agg;
};

String.prototype.forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

String.prototype.some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

String.prototype.every = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

String.prototype.reduce = function (fn, initVal) {
  let prevVal = initVal === undefined ? this[0] : initVal;
  console.log('initValue:', initVal);
  console.log('prevVal:', prevVal);
  for (let i = 0; i < this.length; i++) {
    prevVal = fn(prevVal, this[i], i, this);
  }
  return prevVal;
};

String.prototype.reduceRight = function (fn, initVal) {
  let prevVal =
    initVal === undefined ? this[this.length - 1] : initVal;
  for (let i = this.length - 1; i >= 0; i--) {
    prevVal = fn(prevVal, this[i], i, this);
  }
  return prevVal;
};

String.prototype.sort = function (fn) {
  return this.split('').sort(fn).join('');
};

String.prototype.reverse = function () {
  let ret = '';
  for (let i = this.length - 1; i >= 0; i--) {
    ret += this[i];
  }
  return ret;
};

String.prototype.push = function (...a) {
  let str = this;
  for (let i = 0; i < a.length; i++) {
    str += a[i];
  }
  return str;
};

String.prototype.pop = function () {
  let str = this;
  return str.slice(0, -1);
};

String.prototype.shift = function () {
  let str = this;
  return str.slice(1);
};

String.prototype.unshift = function (...a) {
  let str = this;
  for (let i = 0; i < a.length; i++) {
    str = a[i] + str;
  }
  return str;
};

// String.prototype.splice = function(start, deleteCount, ...items) {
//   const strArr = this.split('');
//   strArr.splice(start, deleteCount, ...items);
//   return strArr.join('');
// };

String.prototype.splice = function (start, deleteCount, ...items) {
  let str = this;
  if (start > str.length) {
    start = str.length;
  } else if (start < 0) {
    start = str.length + start;
    if (start < 0) {
      start = 0;
    }
  }
  let remainingLength = str.length - start;
  if (deleteCount === undefined || deleteCount >= remainingLength) {
    deleteCount = remainingLength;
  } else if (deleteCount < 0) {
    deleteCount = 0;
  }

  str = str.slice(0, start) + str.slice(start + deleteCount);

  const strEnd = str.slice(start);
  let strStart = str.slice(0, start);
  for (let i = 0; i < items.length; i++) {
    strStart += items[i];
  }
  return strStart + strEnd;
};

// Test Cases

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require('chai');
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe('Solution', function () {
  it('should map correctly', function () {
    const testStr = 'asdf';
    Test.assertEquals(
      testStr.map((a) => a.toUpperCase()),
      testStr.toUpperCase()
    );
    testStr.map((a, i, str) => {
      Test.assertEquals(str, testStr);
      Test.assertEquals(str[i], a);
    });
    Test.assertEquals(testStr.join(','), 'a,s,d,f');
    Test.assertEquals(testStr.join(' '), 'a s d f');
    Test.assertEquals(
      testStr.filter((a) => {
        return a != 'a';
      }),
      'sdf'
    );
    testStr.forEach((a, i, str) => {
      Test.assertEquals(a, str[i]);
      Test.assertEquals(a, testStr[i]);
    });
    Test.assertEquals(
      '11101'.some((ch) => ch === '0'),
      true
    );
    Test.assertEquals(
      '11111'.some((ch) => ch === '0'),
      false
    );
    Test.assertEquals(
      '11111'.every((ch) => ch === '1'),
      true
    );
    Test.assertEquals(
      '11101'.every((ch) => ch === '1'),
      false
    );
    Test.assertEquals(
      testStr
        .reduce((prev, cur) => {
          prev.push(cur);
          return prev;
        }, [])
        .join(),
      ['a', 's', 'd', 'f'].join()
    );
    Test.assertEquals(
      testStr
        .reduceRight((prev, cur) => {
          prev.push(cur);
          return prev;
        }, [])
        .join(),
      ['f', 'd', 's', 'a'].join()
    );
    Test.assertEquals(
      testStr.sort((a, b) => a > b),
      'adfs'
    );
    Test.assertEquals(testStr.reverse(), 'fdsa');
    //     let pushStr = 'asdf';
    Test.assertEquals(testStr.push('asdf'), 'asdfasdf');
    Test.assertEquals(testStr.push('asdf', '1111'), 'asdfasdf1111');
    Test.assertEquals(
      testStr.push('asdf', '10', '01'),
      'asdfasdf1001'
    );
    Test.assertEquals(testStr.pop(), 'asd');
    Test.assertEquals(testStr.shift(), 'sdf');
    Test.assertEquals(testStr.unshift('lol'), 'lolasdf');
    Test.assertEquals(testStr.splice(0, 1), 'sdf');
    Test.assertEquals(testStr.splice(0, 1, 'b'), 'bsdf');
    Test.assertEquals(testStr.splice(0, 2, 'bc'), 'bcdf');
    Test.assertEquals(testStr.splice(0, 1, 'b', 'o'), 'bosdf');
    Test.assertEquals('benjamin'.splice(6, 1, 'I'), 'benjamIn');
    Test.assertEquals('pizza'.splice(-50), '');
    Test.assertEquals(
      'pizza'.splice(-50, 1, 'pepperoni'),
      'pepperoniizza'
    );
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});

// Neatest Solution:

var returns = [
  'join',
  'forEach',
  'some',
  'every',
  'reduce',
  'reduceRight',
];
returns.forEach(function (a) {
  String.prototype[a] = function () {
    return Array.prototype[a].apply(this.split(''), arguments);
  };
});

var joins = ['map', 'filter', 'sort', 'reverse'];
joins.forEach(function (a) {
  String.prototype[a] = function () {
    return Array.prototype[a]
      .apply(this.split(''), arguments)
      .join('');
  };
});

var modifies = ['push', 'pop', 'shift', 'unshift', 'splice'];
modifies.forEach(function (a) {
  String.prototype[a] = function () {
    var arr = this.split('');
    Array.prototype[a].apply(arr, arguments);
    return arr.join('');
  };
});
