
function createSpiral(width, height) {
	let temp = Array.apply(null, Array(width * height)).map(Number.prototype.valueOf, 0);
	let ret = [];
	for (let i = 0; i < temp.length; i += width) {
		ret.push(temp.slice(i, i + width));
	}
	return ret;
}

function displayMatrix(mat) {
	for (let y = 0; y < mat.length; y++) {
		for (let x = 0; x < mat[0].length; x++) {
			setTimeout(() => {
				console.log(mat[y][x]);
			}, 1000);
		}
	}
}

function printTwister(mat, w = mat[0].length, h = mat.length) {

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
	console.log('Complete:', mat);
	return mat;
}

var w = 5,
	h = 5;

var mat = createSpiral(w, h);
mat = printTwister(mat, w, h);

displayMatrix(mat);

