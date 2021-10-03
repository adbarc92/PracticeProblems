// https://www.codewars.com/kata/conways-game-of-life-unlimited-edition/train/javascript

function print(mat) { // for testing
	for (let y = 0; y < mat.length; y++) {
		let str = '';
		for (let x = 0; x < mat[y].length; x++) {
			str += mat[y][x] ? 'X' : '.';
		}
		console.log(str);
	}
}

function createMatrix(w, h) {
	const mat = [];
	for (let y = 0; y < h; y++) {
		let row = [];
		for (let x = 0; x < w; x++) {
			row.push(0);
		}
		mat.push(row);
	}
	return mat;
}

function getNumAdjacent(x, y, mat) { // x/y greater matrix, mat is smaller matrix
	[[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [0, -1], [-1, -1]].reduce((sum, [xOff, yOff]) => {
		return sum + getValue(x + xOff, y + yOff, mat);
	}, 0);
}

function getValue(x, y, mat) { // Check existence
	const w = mat[0].length;
	const h = mat.length;
	if (x < 1 || x >= w - 1 || y < 1 || y >= h - 1) {
		return 0;
	} else {
		return mat[y - 1][x - 1];
	}
}

function trimMatrix(mat) {
	if (!mat[0].includes(1)) {
		mat.unshift();
	}
	if (!mat[mat.length - 1].includes(1)) {
		mat.splice(-1);
	}
	if (mat.map(row => row[0]).includes(1)) {
		mat.forEach(row => row.unshift());
	}
	if (mat.map(row => row[mat.length - 1]).includes(1)) {
		mat.forEach(row => row.splice(-1));
	}
}

function getGeneration(cells, generations) {
	print(cells); // visualize a matrix - how do we see it
	let newMat = null;
	for (let gens = 0; gens < generations; gens++) {
		const cellsWidth = cells[0].length + 2;
		const cellsHeight = cells.length + 2;
		const newMat = createMatrix(cellsWidth, cellsHeight);
		for (let y = 0; y < cellsHeight; y++) {
			for (let x = 0; x < cellsWidth; x++) {
				const n = getNumAdjacent(y, x, cells);
				if (getValue(x, y, cells)) {
					if (n === 2 || n === 3) {
						newMat[y][x] = 1;
					} else if (n === 3) {
						newMat[y][x] = 1;
					}
					cells = newMat;
				}
			}
		}
		trimMatrix(newMat);
	}
	print(newMat);
	return newMat;
}
