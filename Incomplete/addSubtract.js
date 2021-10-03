function addSubtract(x) {
	var numbers = [];
	var inner = function (y) {
		numbers.push(y);
		return inner;
	}
	inner.valueOf = function () {
		return numbers.reduce((a, c, i, s) => {
			if (i % 2 == 1 || i == 0) {
				return a + c;
			} else {
				return a - c;
			}
		}, 0);
	};
	inner.view = () => numbers;
	return inner(x);
}

console.log(addSubtract(1)(2)(3) + 0);

addSubtract(1)(2)(3) + 0