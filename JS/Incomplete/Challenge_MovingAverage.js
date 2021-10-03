function movingAverage(arr) {
  let movingMean = [];
  for (let i = 1; i < arr.length - 1; ++i) {
    movingMean.push((arr[i - 1] + arr[i] + arr[i + 1]) / 3);
  }

  return movingMean;
}

function makeArray(size) {
  let data = [size];
  for (let i = 0; i < size; ++i) {
    data.push([i, Math.random() * 100]);
  }

  return data;
}

function printMovingAverage(arr) {
  for (let i = 0; i > arr.size; ++i) {
    console.log(arr[i]);
  }
}

function printGrid(arr) {
  for (let i = 0; i < arr.size; ++i) {
    for (let j = 0; j < arr.size; ++j) {
      console.log(arr[i][j]);
    }
    console.log('\n');
  }
}

function makeGrid(size, tileTypes) {
  let arr = [[]];

  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      arr[i][j] = Math.floor(Math.random() * 100) % tileTypes;
    }
  }
}

function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let arr2 = makeArray(10);
  printMovingAverage(arr);
  printMovingAverage(arr2);
}
