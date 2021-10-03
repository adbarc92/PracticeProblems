// Given a matrix of any size, where numbers are either 0/1/2, given a position and movement range, return all available - 1: NO WALKING,2: OCCUPIED, CAN WALK THROUGH
// function setChildren1(graph) { // Original Implementation
// 	for (let y = 0; y < graph.length; y++) {
// 		for (let x = 0; x < graph[y].length; x++) {
// 			(graph[y][x + 1] === 1 || graph[y][x + 1] === 0) && graph[y][x].children.push(graph[y][x + 1]); // If right sibling exists, push to children
// 			(graph[y][x - 1] === 1 || graph[y][x - 1] === 0) && graph[y][x].children.push(graph[y][x - 1]); // If left sibling exists, push to children
// 			(graph[y + 1][x] === 1 || graph[y + 1][x] === 0) && graph[y][x].children.push(graph[y + 1][x]); // If bottom sibling exists, push to children
// 			(graph[y - 1][x] === 1 || graph[y - 1][x] === 0) && graph[y][x].children.push(graph[y - 1][x]); // If top sibling exists, push to children
// 		}
// 	}
// }

// function setChildren2(graph) {
// 	for (let y = 0; y < graph.length; y++) {
// 		for (let x = 0; x < graph.length; x++) {
// 			let a = graph[y][x + 1],
// 				b = graph[y][x - 1],
// 				c = graph[y + 1][x],
// 				d = graph[y - 1][x];
// 			if (a === 0 || a === 1) {
// 				graph[y][x].children.push(a);
// 			}
// 			if (b === 0 || b === 1) {
// 				graph[y][x].children.push(b);
// 			}
// 			if (c === 0 || c === 1) {
// 				graph[y][x].children.push(c);
// 			}
// 			if (d === 0 || d === 1) {
// 				graph[y][x].children.push(d);
// 			}
// 		}
// 	}
// }

function fixChildren(graph, children, x, y) {
	if (graph[y] !== undefined) {
		if (graph[y][x] !== undefined) {
			if (graph[y][x].key === 0) {
				children.push(graph[y][x]);
			}
		}
	}
}

// function setChildren3(graph) { // Ben's
// 	for (let y = 0; y < graph.length; y++) {
// 		for (let x = 0; x < graph[y].length; x++) {
// 			if (graph[y][x + 1]) {
// 				if (graph[y][x + 1] !== 1) { }
// 				graph[y][x].children.push(graph[y][x + 1]);
// 			}
// 			if (graph[y][x - 1]) {
// 				graph[y][x].children.push(graph[y][x - 1]);
// 			}
// 			if (graph[y + 1]) {
// 				const node = graph[y + 1][x];
// 				if (node) {
// 					graph[y][x].children.push(node);
// 				}
// 			}
// 			if (graph[y - 1]) {
// 				const node = graph[y - 1][x];
// 				if (node) {
// 					graph[y][x].children.push(node);
// 				}
// 			}
// 		}
// 	}
// }

function setChildren(graph) {
	for (let y = 0; y < graph.length; y++) {
		for (let x = 0; x < graph[y].length; x++) {
			fixChildren(graph, graph[y][x].children, x + 1, y);
			fixChildren(graph, graph[y][x].children, x - 1, y);
			fixChildren(graph, graph[y][x].children, x, y + 1);
			fixChildren(graph, graph[y][x].children, x, y - 1);
		}
	}
}

function createGraphArr(mat) {
	let graph = [];
	for (let y = 0; y < mat.length; y++) {
		let row = [];
		for (let x = 0; x < mat[y].length; x++) {
			row.push({
				key: mat[y][x],
				x: x,
				y: y,
				visited: false,
				parent: null,
				children: []
			});
		}
		graph.push(row);
	}
	setChildren(graph);
	return graph;
}

function dijkstra(startX, startY, endX, endY, mat) {
	if (endY > mat.length || endY < 0 || endX >= mat[0].length || endX < 0) {
		return false;
	}
	if (startY > mat.length || startY < 0 || startX >= mat[0].length || startX < 0) {
		return false;
	}
	let graph = createGraphArr(mat);
	let start = graph[startY][startX];
	let end = graph[endY][endX];
	start.visited = true;
	let q = [start];
	while (q) {
		let v = q.shift();
		if (v === end || !v) {
			break;
		}
		v.children.forEach((child) => {
			if (!child.visited) {
				child.parent = v;
				child.visited = true;
				q.push(child);
			}
		})
	}
	let path = [];
	let v = end;
	if (!v.parent) {
		return false;
	}
	while (v.parent) {
		path.push({ x: v.x, y: v.y });
		v = v.parent;
	}
	path.push({ x: v.x, y: v.y });
	return (path);
}

function getMoveArea(mat, x, y, mov) {
	if (x < 0 || x > mat[0].length || y < 0 || y > mat.length) return null;
	let ret = [];
	for (let i = - mov; i <= mov; i++) {
		for (let j = - mov; j <= mov; j++) {
			const path = dijkstra(x, y, x + j, y + i, mat);
			// console.log(x, y, x + j, y + i, path);
			if (path) {
				if (path.length - 1 <= mov) {
					ret.push({ x: x + j, y: y + i });
				}
			}
		}
	}
	return ret;
}

// let mat2 = [
// 	[0, 0, 1, 0, 1],
// 	[0, 0, 1, 0, 1],
// 	[0, 0, 1, 0, 1],
// 	[0, 0, 1, 0, 1],
// 	[0, 0, 1, 0, 1]
// ];

let mat = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
];

let ret = getMoveArea(mat, 1, 1, 1);
