const _ = require('lodash');
const sinon = require('sinon');

const rockPaperScissors = require('./rockPaperScissors/rockPaperScissors');
const evenOccurrence = require('./evenOccurrence/evenOccurrence');
const makeHashTable = require('./hashTableResizing/hashTableResizing');
const Stack = require('./constantTimeStackMin/constantTimeStackMin');
const bubbleSort = require('./bubbleSort/bubbleSort');
const quickSort = require('./quickSort/quickSort');
const {
  insertionSort,
  testingTransform,
} = require('./insertionSort/insertionSort');
const mergeSort = require('./mergeSort/mergeSort.js');
const {
  orderedDeck,
  shuffleDeck,
} = require('./shuffleDeck/shuffleDeck.js');
const makeChange = require('./coinSums/coinSums.js');
const powerSet = require('./powerSet/powerSet.js');
const dFtree = require('./treeDFSelect/treeDFSelect.js');
const binarySearch = require('./binarySearchArray/binarySearchArray.js');
const countTree = require('./treeCountLeaves/treeCountLeaves.js');
const deepEquals = require('./deepEquality/deepEquality.js');
const bFtree = require('./treeBFSelect/treeBFSelect.js');
const asyncMap = require('./asyncMap/asyncMap.js');
const { compose, pipe } = require('./composePipe/composePipe.js');
const superBind = require('./functionBind/functionBind.js');
const commonCharacters = require('./commonCharacters/commonCharacters.js');
const mixEvents = require('./eventingLibrary/eventingLibrary.js');
const BinaryHeap = require('./binaryHeap/binaryHeap.js');
const Range = require('./rangeClass/rangeClass.js');
const LRUCache = require('./lruCache/lruCache.js');
const {
  Node,
  LinkedList,
  linkedListIntersection,
} = require('./linkedListIntersection/linkedListIntersection.js');
const translateRomanNumeral = require('./romanNumeralTranslator/romanNumeralTranslator.js');
const largestProductOfThree = require('./largestProductOfThree/largestProductOfThree.js');
const reverseInteger = require('./integerReverse/integerReverse.js');
const sudokuChecker = require('./sudokuChecker/sudokuChecker.js');
const toFraction = require('./fractionConverter/fractionConverter.js');
const makeHT = require('./hashTable/hashTable.js');
const Number = require('./numberToEnglish/numberToEnglish.js');
const editDistance = require('./editDistance/editDistance.js');
const longestPalindrome = require('./longestPalindrome/longestPalindrome.js');
const rotatedArraySearch = require('./rotatedArraySearch/rotatedArraySearch.js');
const rotateMatrix = require('./rotateMatrix/rotateMatrix.js');
const spiralTraversal = require('./spiralTraversal/spiralTraversal.js');
const islandCount = require('./islandCount/islandCount.js');
const commonAncestor = require('./commonAncestor/commonAncestor.js');
// isSubsetOf
// longestRun
// nthFibonacci

describe('Rock Paper Scissors', function () {
  it('should produce only unique combinations', function () {
    const combos = rockPaperScissors();
    const uniqueCombos = _.uniq(combos);
    expect(uniqueCombos.length).toBe(combos.length);
  });
});

describe('Even Occurrence', function () {
  it('should return null for an empty array', function () {
    const testArr = [];
    const result = evenOccurrence(testArr);
    expect(result).toBeNull();
  });
  it('should return null when there are no evenly-occurring items', function () {
    const testArr = [1, 2, 3, 4, 5, 6];
    const result = evenOccurrence(testArr);
    expect(result).toBeNull();
  });
  it('should return the first evenly-occurring item if there are many', function () {
    const testArr = [4, 4, 5, 5];
    const result = evenOccurrence(testArr);
    expect(result).toBe(4);
  });
});

describe('le Hash Table', function () {
  let hashTable;
  const people = [
    ['Steven', 'Tyler'],
    ['George', 'Harrison'],
    ['Mr.', 'Doob'],
    ['Dr.', 'Sunshine'],
    ['John', 'Resig'],
    ['Brendan', 'Eich'],
    ['Alan', 'Turing'],
  ];

  beforeEach(function () {
    hashTable = makeHashTable();
  });

  it('should store and retrieve values', function () {});
});

describe('Constant Time Stack', function () {
  var aStack, vals;
  beforeEach(function () {
    aStack = new Stack();
    vals = [5, 69, 87, 91, 156, 456, 35, 6, 3];
    vals.forEach((val) => {
      aStack.push(val);
    });
  });

  it('should store and retrieve values in order', function () {
    const a = [];
    while (aStack.size()) {
      a.push(aStack.pop());
    }

    expect(a[0]).toBe(3);
    expect(a[a.length - 1]).toBe(5);
  });

  it('should store and retrieve values in order', function () {
    vals.forEach((val) => {
      aStack.push(val);
    });
  });

  it('should return the minimum value', function () {
    expect(aStack.min()).toBe(3);
  });

  it('should return the minimum value in constant time', function () {});
});

describe('bubbleSort', function () {
  it('should sort bubbles', function () {
    const input = [2, 1];
    const output = bubbleSort(input);
    const expected = [1, 2];
    expect(output).toEqual(expected);
  });
});

xdescribe('quickSort', function () {
  it('should sort an array successfully', function () {
    const arr = [502, 39, 874, 79, 625, 63, 12, 47, 69];
    const expected = arr.sort((a, b) => a - b);

    const result = quickSort(arr);
    expect(result).toEqual(expected);
  });
});

xdescribe('insertionSort', function () {
  it('should sort an array successfully', function () {
    const arr = [2, 1, 3];
    const testArray = testingTransform(arr);
    const expected = testingTransform(testArray);
    const result = insertionSort(testArray);

    expect(result).toEqual(expected);
  });

  it('should sort a more complex array successfully', function () {
    const inputArray = [502, 39, 874, 79, 625, 63, 12, 47, 69];
    const testArray = [12, 39, 47, 63, 69, 79, 502, 625, 874];

    const expected = testingTransform(testArray);
    const result = insertionSort(inputArray);

    expect(result).toEqual(expected);
  });
});

describe('mergeSort', function () {
  let mergeSpy;
  beforeEach(function () {
    mergeSpy = sinon.spy(mergeSort);
  });

  it('should sort an array successfully', function () {
    const arr = [502, 39, 874, 79, 625, 63, 12, 47, 69];
    const expected = [12, 39, 47, 63, 69, 79, 502, 625, 874];
    const result = mergeSort(arr);
    expect(result).toEqual(expected);
  });

  xit('should call itself recursively', function () {
    expect(mergeSpy.callCount).toBeGreaterThan(1);
  });
});

describe('shuffleDesk', function () {
  it('should shuffle a deck', function () {
    expect(orderedDeck()).not.toEqual(shuffleDeck(orderedDeck()));
  });

  // Todo: Add more interesting tests
});

xdescribe('allAnagrams', function () {
  it('should calculate the correct number of anagrams', function () {
    // const factorial = (n) => {
    //   if (n === 0) {
    //     return 1;
    //   }
    //   return n * factorial(n - 1);
    // };
    // const testWord = 'shadows';
    // const expected = factorial(testWord.length);
    // const result = allAnagrams(testWord).length;
    // expect(result).toEqual(expected);
    // * Incorrect: if word contains duplicate letters, the answer will not be a factorial of the length
  });
});

describe('telephoneWords', function () {
  // it('')
});

xdescribe('coinSums', function () {
  it('should work for 5p', function () {
    const expected = 4; // Ways to make 5p: 5, 2+2+1, 2+1+1+1, 1+1+1+1+1
    const result = makeChange(5);
    expect(result).toBe(expected);
  });
});

xdescribe('powerSet', function () {
  // The Power Set will contain one element for each individual letter...
  // Plus one for each pairing of letters
});

describe('treeDFSelect', function () {
  let root1, branch2, branch3, leaf4, leaf5, leaf6, leaf7;

  beforeEach(function () {
    root1 = new dFtree(1);
    branch2 = root1.addChild(2);
    branch3 = root1.addChild(3);
    leaf4 = branch2.addChild(4);
    leaf5 = branch2.addChild(5);
    leaf6 = branch3.addChild(6);
    leaf7 = branch3.addChild(7);
  });

  it('should apply a function to each member of a tree', function () {
    const result = root1.DFSelect(function (value, depth) {
      return value % 2;
    });
    const expected = [1, 5, 3, 7];

    expect(result).toEqual(expected);
  });

  it('should apply a function to each member of a tree using depth', function () {
    const result = root1.DFSelect(function (value, depth) {
      return depth === 1;
    });

    const expected = [2, 3];

    expect(result).toEqual(expected);
  });
});

xdescribe('binarySearchArray', function () {
  it('should correctly search an array', function () {});
});

describe('treeCountLeaves', function () {
  let root;

  beforeEach(function () {
    root = new countTree();
  });

  it('should count one node correctly', function () {
    const result = root.countLeaves();
    const expected = 1;
    expect(result).toBe(expected);
  });

  it('should count one leaf correctly', function () {
    root.addChild(new countTree());
    const result = root.countLeaves();
    const expected = 1;
    expect(result).toBe(expected);
  });
  it('should count several leaf correctly', function () {
    root.addChild(new countTree());
    root.addChild(new countTree());
    root.children[0].addChild(new countTree());
    root.children[0].addChild(new countTree());
    root.children[0].children[0].addChild(new countTree());
    const result = root.countLeaves();
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe('deepEquals', function () {
  it('should return false when objects are not deeply equal', function () {
    const obj1 = {
      a: 1,
      b: {
        c:
          'Pass through the prism, maintain position, knock over everything, walk away whistling',
      },
    };

    const obj2 = {
      a: 1,
      b: {
        c: 'Not an Aesop Rock lyric',
      },
    };

    const result = deepEquals(obj1, obj2);
    const expected = false;

    expect(result).toEqual(expected);
  });

  it('should return true when objects are deeply equal', function () {
    const obj1 = { a: 1, b: 2, c: 'pizza' };
    const obj2 = { a: 1, b: 2, c: 'pizza' };

    const result = deepEquals(obj1, obj2);
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return true when nested objects are deeply equal', function () {
    const obj1 = { a: 1, b: { c: 'pizza' } };
    const obj2 = { a: 1, b: { c: 'pizza' } };

    const result = deepEquals(obj1, obj2);
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return true when deeply nested objects are deeply equal', function () {
    const obj1 = {
      a: 1,
      b: {
        c: { d: { e: 'ay lmao', f: { g: 'truth > consensus' } } },
      },
    };
    const obj2 = {
      a: 1,
      b: {
        c: { d: { e: 'ay lmao', f: { g: 'truth > consensus' } } },
      },
    };

    const result = deepEquals(obj1, obj2);
    const expected = true;

    expect(result).toEqual(expected);
  });
});

describe('treeBFSelect', function () {
  let root;

  beforeEach(() => {
    root = new bFtree(1);
  });

  it('should select nodes in a breadth-first order', function () {
    var branch2 = root.addChild(2);
    var branch3 = root.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);

    const result = root.BFSelect(() => {
      return true;
    });
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(result).toEqual(expected);
  });

  it('should filter according to the value', function () {
    var branch2 = root.addChild(2);
    var branch3 = root.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);

    const result = root.BFSelect((value, depth) => {
      return value % 2;
    });
    const expected = [1, 3, 5, 7];
    expect(result).toEqual(expected);
  });

  it('should filter according to the depth', function () {
    var branch2 = root.addChild(2);
    var branch3 = root.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);

    const result = root.BFSelect((value, depth) => {
      return depth === 1;
    });
    const expected = [2, 3];
    expect(result).toEqual(expected);
  });
});

describe('asyncMap', function () {
  it('should return an array of values according to the callbacks passed in', function () {
    const result = asyncMap(
      [
        (cb) => {
          setTimeout(() => {
            cb('one'), 200;
          });
        },
        (cb) => {
          setTimeout(() => {
            cb('two'), 100;
          });
        },
      ],
      (results) => {
        return results;
      }
    );

    const expected = ['one', 'two'];

    setTimeout(() => {
      expect(result).toEqual(expected);
    }, 0);
  });
});

describe('composePipe', function () {
  it('should compose properly', function () {
    debugger;
    const greet = (name) => {
      return 'hi: ' + name;
    };
    const exclaim = (statement) => {
      return statement.toUpperCase() + '!';
    };

    const welcome = compose(greet, exclaim);

    const result = welcome('philip');
    const expected = 'hi: PHILIP!';

    expect(result).toBe(expected);
  });

  it('should pipe correctly', function () {
    const add2 = (number) => {
      return number + 2;
    };
    const multiplyBy3 = (number) => {
      return number * 3;
    };
    const result = pipe(add2, multiplyBy3)(5);
    const expected = 21;
    expect(result).toBe(expected);
  });

  it('should pipe even more correctly', function () {
    const add2 = (number) => {
      return number + 2;
    };
    const multiplyBy3 = (number) => {
      return number * 3;
    };
    const result = pipe(add2, multiplyBy3, multiplyBy3)(5);
    const expected = 63;
    expect(result).toBe(expected);
  });
});

describe('superBind', function () {
  it('should always call its bound function in the context of its first argument', function () {
    const aesop = {
      name: 'Aesop',
      invokeKen: function () {
        return `${this.name}: Architect of my Kodokushi`;
      },
    };

    const boundStatement = aesop.invokeKen.superBind({
      name: 'Alex',
    });

    const result = boundStatement();
    const expected = 'Alex: Architect of my Kodokushi';

    expect(result).toBe(expected);
  });

  it('should always calls its bound function with its second argument', function () {
    const fn = function (a, b) {
      return a + b;
    };
    const boundFn = fn.superBind(null, 'foo');
    const result = boundFn('bar');
    const expected = 'foobar';

    expect(result).toBe(expected);
  });

  it('should work with many, many arguments', function () {
    const sum = (...args) => {
      let total = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }
      return total;
    };

    const boundSum = sum.superBind(null, 1, 2, 3, 4, 5, 6);
    const result = boundSum(7);
    const expected = 28;
    expect(result).toBe(expected);
  });
});

describe('commonCharacters', function () {
  it('should return a string of characters shared by at least two input strings', function () {
    const str1 = 'door';
    const str2 = 'dogs';

    const result = commonCharacters(str1, str2);
    const expected = 'do';
    expect(result).toBe(expected);
  });

  it('should return shared characters in the same order as they were discovered', function () {
    // Todo: refine this and prev into more specific tests
    const str1 = 'door';
    const str2 = 'dogs';

    const result = commonCharacters(str1, str2);
    const expected = 'do';
    expect(result).toBe(expected);
  });

  it('should not return spaces or duplicate characters', function () {
    const str1 = 'ay lmao';
    const str2 = 'literal lmao';

    const result = commonCharacters(str1, str2);
    // const expected = 'lmao';
    expect(result).toEqual(expect.not.stringContaining(' '));
  });

  it('should handle an undetermined number of strings', function () {
    const str1 = 'a';
    const str2 = 'ab';
    const str3 = 'abc';
    const str4 = 'abcd';
    const str5 = 'abcde';

    const result = commonCharacters(str1, str2, str3, str4, str5);
    const expected = 'a';
    expect(result).toBe(expected);
  });
});

describe('eventingLibrary', function () {
  it('should add `trigger` and `on` to an input', function () {
    const convergence = {
      struggle: 'am I a game or a novel?',
      resolution: 'both, obviously. a gavel.',
    };

    const eventC = mixEvents(convergence);
    expect(eventC.on).toBeDefined();
    expect(eventC.trigger).toBeDefined();

    expect();
  });

  it('should add `trigger` and `on` to an input as functions', function () {
    const convergence = {
      struggle: 'am I a game or a novel?',
      resolution: 'both, obviously. a gavel.',
    };
    const eventC = mixEvents(convergence);
    expect(eventC.on).toBeInstanceOf(Function);
    expect(eventC.trigger).toBeInstanceOf(Function);
    expect();
  });

  it('should call the associated function when `trigger is called`', function () {
    const doTheThing = jest.fn();
    const convergence = {
      struggle: 'am I a game or a novel?',
      resolution: 'both, obviously. a gavel.',
    };
    const eventC = mixEvents(convergence);
    eventC.on('doet', () => {
      doTheThing();
    });
    eventC.trigger('doet');
    expect(doTheThing).toBeCalled();
  });

  it('should trigger correctly', function () {
    var obj = mixEvents({ name: 'Alice', age: 30 });
    obj.on('ageChange', function () {
      // On takes an event name and a callback function
      console.log('Age changed');
      obj.age += 1;
    });
    obj.trigger('ageChange');
    expect(obj.age).toBe(31);
  });

  it('should pass subsequent arguments to the function being triggered', function () {
    const a = mixEvents({ b: 1, c: 2 });
    a.on('incrementB', function (num) {
      a.b += num;
    });
    a.trigger('incrementB', 5000);
    expect(a.b).toBe(5001);
  });
});

xdescribe('binaryHeap', function () {
  it('should add to the end of the array and then reshuffle', function () {});
  it('should maintain its property following insertion of a new node', function () {});
  it('should have a primary property which is variable', function () {});
  it('should remove correctly', function () {});
});

describe('rangeClass', function () {
  let aRange;
  it('should build a range with a start', function () {
    aRange = new Range(1);
    const result = [];
    aRange.each((num) => {
      result.push(num);
    });
    const expected = [1];
    expect(result).toEqual(expected);
  });
  it('should build a range with a start and end', () => {
    aRange = new Range(1, 2);
    const result = [];
    aRange.each((num) => {
      result.push(num);
    });
    const expected = [1, 2];
    expect(result).toEqual(expected);
  });
  it('should build a range with a start, end, and step', () => {
    aRange = new Range(2, 8, 2);
    const result = [];
    aRange.each((num) => {
      result.push(num);
    });
    const expected = [2, 4, 6, 8];
    expect(result).toEqual(expected);
  });
  xit('should use constant space', () => {});
  it('should calculate the size correctly', () => {
    aRange = new Range(2, 8, 2);
    const result = aRange.size();
    const expected = 4;
    expect(result).toBe(expected);
  });
  it('should call a given function on each number in the range', () => {
    aRange = new Range(2, 8, 2);
    const result = [];
    aRange.each((num) => {
      result.push(num);
    });
    const expected = [2, 4, 6, 8];
    expect(result).toEqual(expected);
  });
  it('should determine that a number is included in the range', () => {
    aRange = new Range(2, 8, 2);
    const result = aRange.includes(6);
    const expected = true;
    expect(result).toBe(expected);
  });
  it('should determine that a number is not included in the range', () => {
    aRange = new Range(2, 8, 2);
    const result = aRange.includes(7);
    const expected = false;
    expect(result).toBe(expected);
  });

  xit('should handle negative steps', () => {});
});

describe('LRUCache', () => {
  let cache;

  beforeEach(() => {
    cache = new LRUCache(3);
    cache.set('item1', 1);
    cache.set('item2', 2);
    cache.set('item3', 3);
  });

  it('should store a limited number of items', () => {
    cache.set('item4', 4);
    const result = cache.size();
    const expected = 3;
    expect(result).toBe(expected);
  });

  it('should retrieve an existing item', () => {
    const result = cache.get(2);
    const expected = 'item2';
    expect(result).toBe(expected);
  });

  it('should delete the oldest unused item when an item above the max is added', () => {
    cache.set('item4', 4);
    const result = cache.get('item1');
    expect(result).toBeNull();
  });

  it('should pass the tests of spectator bot', () => {
    const cache2 = new LRUCache(10);

    for (var i = 0; i < 8; i++) {
      cache2.set(i, i);
    }

    cache2.get(0);

    for (i = 8; i < 14; i++) {
      cache2.set(i, i);
    }

    expect(cache2.get(0)).toBe(0);
    expect(cache2.get(1)).toBeNull();
  });
});

xdescribe('linkedListIntersection', () => {
  it('should find the point of intersection correctly', () => {
    const ll1 = new LinkedList();
    ll1.addNodeToList(1);
    ll1.addNodeToList(2);
    ll1.addNodeToList(3);
    ll1.addNodeToList(4);
    ll1.addNodeToList('A');
    ll1.addNodeToList('B');
    ll1.addNodeToList('C');
    ll1.addNodeToList('D');

    const ll2 = new LinkedList();
    ll2.addNodeToList(7);
    ll2.addNodeToList(6);
    ll2.addNodeToList(5);
    ll2.addNodeToList(4);
    ll2.addNodeToList('A');
    ll2.addNodeToList('B');
    ll2.addNodeToList('C');
    ll2.addNodeToList('D');

    const result = linkedListIntersection(ll1, ll2);
    const expected = 4;
    expect(result).toBe(expected);
  });

  it('should return null if there is no intersection', () => {
    const ll1 = new LinkedList();
    ll1.addNodeToList(1);
    ll1.addNodeToList(2);
    ll1.addNodeToList(3);

    const ll2 = new LinkedList();
    ll2.addNodeToList(7);
    ll2.addNodeToList(6);
    ll2.addNodeToList(5);

    const result = linkedListIntersection(ll1, ll2);
    expect(result).toBeNull();
  });

  it('should defeat the spectator bot, soundly and in a humiliating manner', () => {
    var list1 = Node('A');
    var nodeB = (list1.next = Node('B'));
    var nodeC = (nodeB.next = Node('C'));
    var nodeD = (nodeC.next = Node('D'));
    var nodeE = (nodeD.next = Node('E'));
    var nodeF = (nodeE.next = Node('F'));
    var list2 = Node('X');
    var nodeY = (list2.next = Node('Y'));
    var nodeZ = (nodeY.next = Node('Z'));
    nodeZ.next = nodeD;
    var expected = 'DEF';
    const result = linkedListIntersection(list1, list2);
    expect(result).toBe(expected);
  });
});

describe('translateRomanNumerals', () => {
  it('translates a single digit correctly', () => {
    const input = 'X';
    const result = translateRomanNumeral(input);
    const expected = 10;
    expect(result).toBe(expected);
  });

  it('translates a two-digit sum correctly', () => {
    const input = 'XI';
    const result = translateRomanNumeral(input);
    const expected = 11;
    expect(result).toBe(expected);
  });

  it('translates a two-digit difference correctly', () => {
    const input = 'IX';
    const result = translateRomanNumeral(input);
    const expected = 9;
    expect(result).toBe(expected);
  });
});

describe('largestProductOfThree', () => {
  it('calculates a product of three correctly', () => {
    const input = [10, 9, 8, 9];

    const result = largestProductOfThree(input);
    const expected = 10 * 9 * 9;
    expect(result).toBe(expected);
  });

  // it('handles negative numbers', () => {

  // });
});

xdescribe('integerReverse', () => {
  it('reverses an integer correctly', () => {
    const input = 345;
    const result = reverseInteger(input);
    const expected = 543;
    expect(result).toBe(expected);
  });
});

describe('sudokuChecker', () => {
  it('identifies a correct solution', () => {
    const input =
      '735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
    const result = sudokuChecker(input);
    const expected = 'solved';
    expect(result).toBe(expected);
  });
  it('identifies an incorrect solution', () => {
    const input =
      '775814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
    const result = sudokuChecker(input);
    const expected = 'invalid';
    expect(result).toBe(expected);
  });
  it('handles a nonsense solution', () => {
    const input =
      '7A5814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
    const result = sudokuChecker(input);
    const expected = 'invalid';
    expect(result).toBe(expected);
  });
});

describe('fraction converter', () => {
  it('works', () => {
    const input = 0.5;
    const result = toFraction(input);
    const expected = '1/2';
    expect(result).toBe(expected);
  });

  it('still works', () => {
    const input = 3.0;
    const result = toFraction(input);
    const expected = '3/1';
    expect(result).toBe(expected);
  });

  it('still, still works', () => {
    const input = 2.5;
    const result = toFraction(input);
    const expected = '5/2';
    expect(result).toBe(expected);
  });
});

describe('Hash Table', () => {
  let ht;
  beforeEach(() => {
    ht = makeHT();
    for (let i = 0; i < 50; i++) {
      ht.insert(i.toString(), i);
    }
  });
  it('inserts values and retrieves them', () => {
    ht.insert('HELLO', 525600);
    const result = ht.retrieve('HELLO');
    const expected = 525600;
    expect(result).toBe(expected);
  });
  it('removes values', () => {
    ht.insert('HELLO', 525600);
    ht.remove('HELLO');
    const result = ht.valueExists(525600);
    const expected = false;
    expect(result).toBe(expected);
  });
  xit('distributes values relatively-evenly', () => {});
});

xdescribe('Number.toEnglish', () => {
  it('converts a single-digit number', () => {
    const result = (7).toEnglish();
    const expected = 'seven';

    expect(result).toBe(expected);
  });

  it('converts a three-digit number', () => {
    const result = (575).toEnglish();
    const expected = 'five hundred seventy-five';

    expect(result).toBe(expected);
  });

  it('converts a three-digit number', () => {
    const result = (78193512).toEnglish();
    const expected =
      'seventy-eight million one hundred ninety-three thousand five hundred twelve';

    expect(result).toBe(expected);
  });
});

describe('editDistance', () => {
  it('works, at least', () => {
    const input1 = 'count';
    const input2 = 'countess';

    const result = editDistance(input1, input2);
    const expected = 3;

    expect(result).toBe(expected);
  });
});

xdescribe('longestPalindrome', () => {});
xdescribe('rotatedArraySearch', () => {});

xdescribe('rotateMatrix', () => {
  it('rotates a matrix', () => {
    var matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    ];

    expect(matrix[0][0]).toBe(1);
    expect(matrix[3][2]).toBe('F');

    var rotatedMatrix = rotateMatrix(matrix);

    expect(rotatedMatrix[0][0]).toBe('D');
    expect(rotatedMatrix[3][2]).toBe(8);
  });
});

describe('spiralTraversal', () => {
  it('traverses a matrix in a spiral', () => {
    const result = spiralTraversal([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(result).toEqual(expected);
  });
});
