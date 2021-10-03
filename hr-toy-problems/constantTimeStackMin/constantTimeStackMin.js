/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
 * Stack Class
 */
var Stack = function () {
  let min = Infinity;
  const stack = [];

  // add an item to the top of the stack
  this.push = function (value, ...values) {
    if (value < min) {
      min = value;
    }

    stack.push(value);

    if (values) {
      for (let i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
        stack.push(values[i]);
      }
    }
  };

  // remove an item from the top of the stack
  this.pop = function () {
    const val = stack.pop();
    if (val === min) {
      min = Infinity;
      for (let i = 0; i < stack.length; i++) {
        if (stack[i] < min) {
          min = stack[i];
        }
      }
    }
    return val;
  };

  // return the number of items in the stack
  this.size = function () {
    return stack.length;
  };

  // return the minimum value in the stack
  this.min = function () {
    return min;
  };
};

try {
  module.exports = Stack;
} catch (err) {
  console.error(err);
}
