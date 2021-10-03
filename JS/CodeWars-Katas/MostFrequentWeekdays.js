function getStartDay(year) {
  let dayIndex = 0;
  for (let curYear = 1; curYear <= year; curYear++) {
    if (curYear % 4 === 0) {
      // If year is evenly divisible by four, it's a leap year
      if (curYear % 400 === 0) {
        // If year is evenly divisible by 400, it's a leap year
        dayIndex += 2;
        dayIndex %= 7;
        continue;
      } else if (curYear % 100 === 0) {
        // If year is evenly divisible by 100, it's not a leap year
        continue;
      }
    } else {
      dayIndex++;
      dayIndex %= 7;
    }
  }
  console.log('dayIndex:', dayIndex);
  switch (dayIndex) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Error';
  }
}

function getMaxFrom2dArray(arr) {
  let ret = [['Day', 0]],
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > max) {
      ret[0][0] = arr[i][0];
      ret[0][1] = arr[i][1];
      max = arr[i][1];
    } else if (arr[i][0] === max) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

function mostFrequentDays(year) {
  //your code here
  const weekDays = [
    ['Monday', 0],
    ['Tuesday', 0],
    ['Wednesday', 0],
    ['Thursday', 0],
    ['Friday', 0],
    ['Saturday', 0],
    ['Sunday', 0]
  ];
  console.log(getStartDay(year));
  const startIndex = weekDays.indexOf([getStartDay(year), 0]); // Problem Line; indexOf returning -1
  console.log('startIndex:', startIndex);
  for (let i = startIndex; i < 365 + startIndex; i++) {
    console.log(i % weekDays.length);
    console.log(weekDays[i % weekDays.length][1]);
    weekDays[i % weekDays.length][1]++;
    // weekDays[i][1]++;
  }
  console.log(weekDays);
  return getMaxFrom2dArray(weekDays);
}

console.log(mostFrequentDays(1));

// Approach 1: Straightforward
// Determine year starting day
// Count through the years
// Track

// Approach 2: Create massive array, push, sort, reduce

// 01/01 moves one day forward between normal years
// 01/01/2014 => Wednesday
// 01/01/2015 => Thursday
// After leap years, 01/01 moves one additional day forward
// 01/01/2016 => Friday
// 01/01/2017 => Sunday
