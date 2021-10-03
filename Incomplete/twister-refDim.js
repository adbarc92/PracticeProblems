function dim() {
	const args = Array.prototype.slice.call(arguments);
	const d = args.shift();
	const arr = [];
	if (args.length === 1) {
		const value = args.shift();
		for (let i = 0; i < d; i++) {
			arr.push(typeof value === 'function' ? value() : value);
		}
		return arr;
	}
	for (let i = 0; i < d; i++) {
		arr.push(dim.apply(null, args));
	}
	return arr;
}

console.log(dim(3, 3, 'x'));
console.log(dim(2, 2, 2, 0));
console.log(dim(2, 5, () => {
	return 'xX';
}));
console.log(dim(3, 2, () => {
	return ~~(Math.random() * 3);
}));