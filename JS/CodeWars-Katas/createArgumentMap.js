// function createArgumentMap(func) {
// 	// create an argument map and return it
// 	let map = [];

// 	let names = [];
// 	for (let i = 0; i < )
// 	for(let i = 1; i < arguments.length; i++){
// 		map[`arg${i}`] = arguments[i];
// 	}
// 	console.log(map);
// 	return map;
// }

const createArgumentMap = (func) => {
  const map = [];
  const funcStr = func.toString().replace(/\s/g, ''); // get rid of spaces
  const argNames = funcStr
    .slice(funcStr.indexOf('(') + 1, funcStr.indexOf(')'))
    .split(',');
  for (let i = 1; i < arguments.length; i++) {
    const index = argNames[i - 1];
    map[index] = arguments[i];
  }
  return map;
};
