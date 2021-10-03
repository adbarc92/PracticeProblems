// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

function getSum(n) {
  return ((n) * (n + 1) / 2);
}

function removeNb1(n) {
  let sum = getSum(n);
  let ret = [];
  for (let i = 2; i < n; i++) {
    let match = [];
    for (let j = 2; j < n; j++) {
      if (i * j === sum - (i + j)) {
        match.push(i);
        match.push(j);
        ret.push(match);
      }
    }
  }
  return ret;
}

function removeNb2(n) {
  let sum = getSum(n);
  let ret = [];
  for (let i = 2; i < n; i++) {
    let match = [];
    for (let j = 2; j < n; j++) {
      if (i * j === sum - (i + j)) {
        match.push(i);
        match.push(j);
        ret.push(match);
        match = [];
        match.push(j);
        match.push(i);
        ret.push(match);
      }
    }
  }
  return ret;
}

function removeNb3(n) {
  let sum = getSum(n);
  let ret = [];
  for (let i = 2; i < n; i++) {
    let match = [];
    for (let j = 2; j < n; j++) {
      if (i * j === sum - (i + j)) {
        match.push(i);
        match.push(j);
        ret.push(match);
        match = [];
        match.push(j);
        match.push(i);
        ret.push(match);
        return ret;
      }
    }
  }
}

function removeNb(n) {
  let sum = getSum(n);

  for (let i = 2; i <= n; i++) {
    let j = (sum - i) / (i + 1);
    if (j < n && j % 1 === 0) {
      return ([[i, j], [j, i]]);
    }
  }
  return [];
}