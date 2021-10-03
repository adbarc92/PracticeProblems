// https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript

function decompose1(n) {
	if (n <= 2) return null;
	let ret = [];
	let num = n - 1,
		total = n ** 2;
	while (total > 1) {
		console.log(total);
		let num2 = num ** 2;
		if (num2 < total) {
			total = total - num2;
			ret.push(num);
		}
		num--;
	}
	if (total === 1) {
		ret.push(1);
		return ret;
	}
	else {
		return ret;
	}
}

function decompose(n) {
	if (n < 3) return null;
	let ret = [],
		num = n - 1,
		total = n ** 2;
	while (total) {
		let num2 = num ** 2;
		if (num2 <= total) {
			total = total - num2;
			ret.push(num2);
		}
	}
	return ret;
}

