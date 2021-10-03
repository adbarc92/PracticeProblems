// Given a matrix 'mat', with width and height 'w' and 'h', print the matrix in a clockwise
// spiral.  Example test cases are given below.
const printSpiral = function (mat, w, h) {
	console.log('Printing Spiral');
	let dir = 'r',
		x = -1,
		y = 0,
		xMax = w,
		yMax = h - 1,
		curSteps = 0;

	for (let i = 1; i <= (h * w); i++) { // mat.flat is not a function
		switch (dir) {
			case 'r':
				curSteps++;
				x++;
				break;
			case 'd':
				curSteps++;
				y++;
				break;
			case 'l':
				curSteps++;
				x--;
				break;
			case 'u':
				curSteps++;
				y--;
				break;
		}
		mat[y][x] = i;
		if (curSteps === xMax && dir === 'r') {
			dir = 'd';
			xMax--;
			curSteps = 0;
		}
		if (curSteps === yMax && dir === 'd') {
			dir = 'l';
			yMax--;
			curSteps = 0;
		}
		if (curSteps === xMax && dir === 'l') {
			dir = 'u';
			xMax--;
			curSteps = 0;
		}
		if (curSteps === yMax && dir === 'u') {
			dir = 'r';
			yMax--;
			curSteps = 0;
		}
	}
	for (let y = 0; y < mat.length; y++) {
		console.log(mat[y].join(', '));
	}
	return mat;
};

// This function is what you should use to test your 'printSpiral' function.  It prints
// the given matrix 'mat', and then calls 'printSpiral' with correct params.
const testPrintSpiral = function (mat) {
	console.log('-----');
	const w = mat[0].length;
	const h = mat.length;
	for (let i = 0; i < mat.length; i++) {
		let line = '';
		for (let j = 0; j < mat[0].length; j++) {
			const n = mat[i][j];
			if (j) {
				line += ',';
			}
			if (n < 10) {
				line += ' ';
			}
			line += n;
		}
		console.log(' ', line);
	}
	printSpiral(mat, w, h);
	console.log('-----');
};

// Each of thes test cases should print the numbers 1,2,3,4,5...n in ascending order.
testPrintSpiral([
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7]
]);
testPrintSpiral([
	[1, 2, 3],
	[10, 11, 4],
	[9, 12, 5],
	[8, 7, 6]
]);
testPrintSpiral([
	[1, 2, 3, 4],
	[10, 11, 12, 5],
	[9, 8, 7, 6]
]);
testPrintSpiral([
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
]);
testPrintSpiral([
	[1],
	[2],
	[3],
	[4],
	[5]
]);