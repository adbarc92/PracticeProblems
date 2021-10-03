// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

const editDistance = (str1, str2) => {
  let count = 0;
  const l1 = str1.length;
  const l2 = str2.length;
  count += Math.abs(l1 - l2);
  for (let i = 0, l = Math.max(l1, l2); i < l; i++) {
    if (str1[i] !== undefined && str1[i] !== str2[i]) {
      count += 1;
    }
  }
  return count;
};

try {
  module.exports = editDistance;
} catch (err) {
  console.error(err);
}
