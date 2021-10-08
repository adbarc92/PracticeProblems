/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, target) => {
  if (nums.length === 1 && nums[0] !== target) {
    return -1;
  }
  const midIndex = Math.floor(nums.length / 2);
  const mid = nums[midIndex];
  if (target > mid) {
    return binarySearch(nums.slice(midIndex), target);
  } else if (target < mid) {
    return binarySearch(nums.slice(0, midIndex), target);
  } else {
    return midIndex;
  }
};

var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }

  const matchIndex = binarySearch(nums, target);

  if (matchIndex === -1) {
    return [-1, -1];
  }

  let tempIndex = matchIndex;

  while (nums[tempIndex] === target) {
    if (nums[tempIndex - 1] === target) {
      tempIndex--;
    } else if (nums[tempIndex + 1] === target) {
      tempIndex++;
    } else {
      break;
    }
  }
  if (tempIndex !== matchIndex) {
    if (tempIndex < matchIndex) {
      return [tempIndex, matchIndex];
    } else {
      return [matchIndex, tempIndex];
    }
  }
  return [matchIndex, matchIndex];
};

debugger;

const a = searchRange([5, 7, 7, 8, 8, 10], 8); // [3,4]
const b = searchRange([5, 7, 7, 8, 8, 10], 6); // [-1,-1]
const c = searchRange([], 0); // [-1, -1]

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
