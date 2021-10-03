// https://www.codewars.com/kata/a-rule-of-divisibility-by-13/train/javascript

function thirt(n) {
	const arr = [1, 10, 9, 12, 3, 4];
	var sum = 0;
	var str = n.toString(); while
    for (let i = str.length - 1; i >= 0; i--) {
			sum += (parseInt(str.charAt(i)) * arr[i % 6]);
		}
	if (n === sum) {
		return sum;
	}
	else {
		return thirt(sum);
	}
}

function thirt(n) {
	const arr = [1, 10, 9, 12, 3, 4];
	var str = n.toString();
	var sum = 0;
	var curVal = n;
	var running = true;
	while (running) {
		for (let i = 0; i < str.length; i++) {
			sum += (parseInt(str[i]) * arr[i % 6]);
		}
		if (sum === curVal) {
			running = false;
			break;
		}
		str = curVal.toString();
		sum = 0;
	}
	return sum;
}