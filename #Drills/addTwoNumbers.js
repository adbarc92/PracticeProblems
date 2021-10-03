const addTwoNumbers = (l1, l2) => {
  // Inputs: two arrays representing numbers in reverse order
  // Output: a single array representing the sum
  // Constraints: lengths vary; will not be empty, the number will have no leading zeros
  // Edge Cases: ?

  const getNum = (l) => {
    return parseInt(l.reverse.join());
  };

  const num1 = getNum(l1);
  const num2 = getNum(l2);

  const sum = num1 + num2;

  return [...sum.toString().reverse()];
};
