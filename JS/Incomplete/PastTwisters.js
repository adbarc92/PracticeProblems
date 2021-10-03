
let matrix1 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];

let matrix2 = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25]
];

function createSpiral(width, height) {
	let temp = Array.apply(null, Array(width * height)).map(Number.prototype.valueOf, 0);
	let ret = [];
	for (let i = 0; i < temp.length; i += width) {
		ret.push(temp.slice(i, i + width));
	}
	console.log(ret);
	return ret;
}

function printSpiral1(mat, w, h) {
	let l = mat.flat().length;
	let ret = Array([]).fill(h);
	let side = Math.ceil(l ** (1 / 2));
	let fx = 0, fy = 0;
	for (let x = 0, y = 0; x < l && y < l; i++) {
		(i < w && i < ) ? 
	}
}

function printSpiral2(mat, w, h) {

	let n = mat.flat().length; // 25
	let cycles = Math.ceil(n ** (1 / 2)) - 1; // 5
	let ret = [l];
	let change = [1, side, -1, -side];
	let changeIndex = 0, index = 0, number = 1;

	while (number < n) {
		cycles--;
		changeIndex++;
	}
	console.log(ret);
}

function printSpiral3(mat, w, h) {
	let l = Math.max(mat.flat());
	for (let i = 1; i < l + 1; i++) {
		console.log(i);
	}
}

function printSpiral1(mat, w, h) { // Closer
	console.log('mat:', mat);
	let xSteps = w - 1,
		ySteps = h - 1,
		x = 0,
		y = 0,
		curSteps = 0,
		dir = 'r';
	console.log('Print matXY:', mat[x][y]);

	for (let i = 1; i <= (h * w); i++) {
		console.log(x, y);
		mat[y][x] = i;
		switch (dir) {
			case 'r':
				x++;
				curSteps++;
				break;
			case 'd':
				y++;
				curSteps++;
				break;
			case 'l':
				x--;
				curSteps++;
				break;
			case 'u':
				y--;
				curSteps++;
				break;
		}
		if (dir === 'r' && curSteps === xSteps) {
			dir = 'd';
			curSteps = 0;
		}
		if (dir === 'd' && curSteps === ySteps) {
			dir = 'l';
			curSteps = 0;
			ySteps--;
		}
		if (dir === 'l' && curSteps === xSteps) {
			dir = 'u';
			curSteps = 0;
			xSteps--;
		}
		if (dir === 'u' && curSteps === ySteps) {
			dir = 'r';
			curSteps = 0;
			ySteps--;
		}
	}
	for (let i = 0; i < mat.length; i++) {
		console.log(mat[i]);
	}
}