// https://www.codewars.com/kata/52fa7b5704bc8f7c85000d32/train/javascript

String.prototype.indexOf = function (value, fromIndex = 0) {
  //   console.log("indexOf")
  // ...
  const substr = this.slice(fromIndex);
  const ret = substr.search(value);
  return ret === -1 ? ret : ret + fromIndex;
};

String.prototype.lastIndexOf = function (value, fromIndex) {
  fromIndex = fromIndex || this.length;
  for (let i = fromIndex; i >= 0; i--) {
    const subStr = this.substring(i); // fromIndex inclusive
    console.log('Sub String:', subStr);
    const valMatch = subStr.search(value);
    if (valMatch !== -1) {
      return i;
    }
  }
  return -1;
};

// String.prototype.lastIndexOf = function (value, fromIndex = 0) {
//   const that = this;
//   for (let i = that.length - 1 - fromIndex; i >= 0; i--) {
//     const subStr = that.substring(i, that.length - fromIndex);
//     // console.log('Substring:', subStr);
//     const matchVal = subStr.search(value);
//     if (matchVal !== -1) {
//       return i;
//     }
//   }
//   return -1;
// };

// String.prototype.lastIndexOf = function (value, fromIndex = 0) {
//   const that = this;
//   for (let i = that.length - fromIndex; i >= 0; i--) {
//     const subStr = that.substring(i);
//     const matchVal = subStr.search(value);
//     if (matchVal !== -1) {
//       return i;
//     }
//   }
//   return -1;
// };

// String.prototype.lastIndexOf = function (value, fromIndex) {
//   fromIndex = fromIndex || this.length - 1;
//   for (let i = fromIndex; i >= 0; i--) {
//     const subStr = this.substring(i);
//     const valMatch = subStr.search(value);
//     if (valMatch !== -1) {
//       return valMatch;
//     }
//   }
//   return -1;
// };
