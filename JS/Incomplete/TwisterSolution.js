var matrix = [[1, 2, 3, 4], [14, 15, 16, 5], [13, 20, 17, 6], [12, 19, 18, 7], [11, 10, 9, 8]];

function spiralTraversal(matrix) {
	var row = currentRow = matrix.length,
		column = currentColumn = matrix[0].length;

	while (currentRow > row / 2) {

		// traverse row forward
		for (var i = (column - currentColumn); i < currentColumn; i++) { console.log(matrix[row - currentRow][i]); }

		// traverse column downward
		for (var i = (row - currentRow + 1); i < currentRow; i++) { console.log(matrix[i][currentColumn - 1]) }

		// traverse row backward
		for (var i = currentColumn - 1; i > (column - currentColumn); i--) { console.log(matrix[currentRow - 1][i - 1]); }

		// traverse column upward
		for (var i = currentRow - 1; i > (row - currentRow + 1); i--) { console.log(matrix[i - 1][column - currentColumn]) }

		currentRow--;
		currentColumn--;
	}
}

function spiral(matrix) {
	const arr = [];

	while (matrix.length) {
		arr.push(
			...matrix.shift(),
			...matrix.map(a => a.pop()),
			...matrix.pop().reverse(),
			...matrix.map(a => a.shift()).reverse()
		);
	}
	return arr;
}

