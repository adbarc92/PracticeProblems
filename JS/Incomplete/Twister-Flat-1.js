// For Squares

function createArray(width, height) {
	return Array.apply(null, Array(width * height)).map(Number.prototype.valueOf, 0);
}

// function fillArray(arr) {
// 	let side = Math.ceil(arr.length ** (1 / 2));
// 	let index = 0; // starting insertion position
// 	let mod = [1, side, -1, -side]; // index increment collection
// 	let modIndex = 0; // governs which increment is used
// 	let cycles = side - 1; // governs mod application
// 	let curCycle = 0; // governs turns spent on each cycle
// 	for (let i = 1; i <= arr.length; i++) {
// 		arr[index] = i;
// 		index += mod[modIndex];
// 		if (curCycle < cycles) {
// 			curCycle++;
// 		}
// 		else {
// 			modIndex++;
// 			curCycle = 0;
// 		}
// 		if (modIndex >= mod.size) modIndex = 0;
// 	}
// 	return arr;
// }

function fillArray(arr) {
	let side = Math.ceil(arr.length ** (1 / 2));
	let index = 0,
		mod = [1, side, -1, -side],
		modIndex = 0,
		cycles = side - 1,
		curCycle = 0;
	for (let i = 1; i <= arr.length; i++) {
		arr[index] = i;
		index += mod[modIndex];
		if (curCycle < cycles) {
			curCycle++;
		}
		else {
			modIndex++;
			curCycle = 0;
		}
		if (modIndex >= mod.size) modIndex = 0;
	}
	return arr;
}

// https://stackoverflow.com/questions/8495687/split-array-into-chunks#8495740
function splitArray(arr, width) {
	let ret = [];
	for (let i = 0; i < arr.length; i += width) {
		ret.push(arr.slice(i, i + width))
	}
	return ret;
}

function twister(matrix, width, height) {
	let arr = createArray(width, height);
}

// https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
// https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array#13735425