

function createArray(width, height) {
	return Array.apply(null, Array(width * height)).map(Number.prototype.valueOf, 0);
}

function splitArray(arr, width) {
	let ret = [];
	for (let i = 0; i < arr.length; i += width) {
		ret.push(arr.slice(i, i + width));
	}
	return ret;
}

function createSpiral(width, height) {
	let temp = Array.apply(null, Array(width * height)).map(Number.prototype.valueOf, 0);
	let ret = [];
	for (let i = 0; i < temp.length; i += width) {
		ret.push(temp.slice(i, i + width));
	}
	console.log(ret);
}

function printSpiral(mat, width, height) {
	let xSteps = width,
		ySteps = height,
		y = 0,
		x = 0,
		curSteps = 0;
	let dir = 'r';
	for (let i = 1; i <= width * height; i++) {
		mat[x][y] = i;
		console.log(x, y);
		switch (dir) {
			case 'r':
				curSteps++;
				x++;
				break;
			case 'l':
				curSteps++;
				x--;
				break;
			case 'u':
				curSteps++;
				y++;
				break;
			case 'd':
				curSteps++;
				y--;
				break;
		}
		if (dir === 'r' && curSteps === xSteps) {
			dir = 'd';
			xSteps--;
			curSteps = 0;
		}
		if (dir === 'd' && curSteps === ySteps) {
			dir = 'l';
			ySteps--;
			curSteps = 0;
		}
		if (dir === 'l' && curSteps === xSteps) {
			dir = 'u';
			--xSteps;
			curSteps = 0;
		}
		if (dir === 'u' && curSteps === ySteps) {
			dir = 'r';
			--ySteps;
			curSteps = 0;
		}
	}
	console.log(mat);
}

let matrix = createSpiral(5, 5);

printSpiral(matrix, 5, 5);
