function countToYear(year) {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = 0;
  for (let i = 1; i < year; i++) {
    if (i % 4 === 0) {
      if (i % 100 === 0) {
        day++;
        day %= week.length;
        continue;
      } else if (i % 400 === 0) {
        day += 2;
        day %= week.length;
        continue;
      }
    }
    day++;
    day %= week.length;
  }
  return week[day];
}

function countDays(year) {
  const startDay = countToYear(year);
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayArr = [
    ['Monday', 0],
    ['Tuesday', 0],
    ['Wednesday', 0],
    ['Thursday', 0],
    ['Friday', 0],
    ['Saturday', 0],
    ['Sunday', 0]
  ];

  const dayObj = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0
  };
  if (i % 4 === 0) {
    if (i % 100 === 0) {
      const yearLength = 365;
    } else if (i % 400 === 0) {
      const yearLength = 366;
    } else {
      const yearLength = 366;
    }
  }
}

console.log(countToYear(1));
console.log(countToYear(5));
console.log(countToYear(1998));
console.log(countToYear(2010));
console.log(countToYear(4032));
