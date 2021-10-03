// https://www.codewars.com/kata/xd-arrays-for-dimmies/train/javascript

https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript

function dim(...args) {
  let val = args[args.length - 1];
  for (let i = args.length - 1; i > 0; i--) {
    var arr = Array(args[i - 1]).fill(JSON.parse(JSON.stringify(...val)));
    val = arr;
  }
  console.log(val);
  return val;
}

// var copy = JSON.parse(JSON.stringify(val))

// const objCopy = {
// 	...arr
// }

toDo = Object.assign({}, copy)
