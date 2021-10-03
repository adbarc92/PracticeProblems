// https://www.codewars.com/kata/sum-of-pairs/train/javascript

var sum_pairs = function (ints, s) {
	for (let i = 0; i < ints.length; i++) {
		for (let j = i + 1; j < ints.length; j++) {
			if (ints[i] + ints[j] === s) {
				console.log([ints[i], ints[j]]);
				return [ints[i], ints[j]];
			}
		}
	}
	return undefined;
}

var sum_pairs2 = function (ints, s) {
	let diff = Infinity;
	let ret = [];
	for (let i = 0; i < ints.length; i++) {
		let match = ints.indexOf((s - ints[i]), i + 1);
		if (match !== -1) {
			if (Math.abs(match - i) < diff) {
				diff = Math.abs(match - i);
				ret = [ints[i], ints[match]];
			}
		}
	}
	console.log('ret:', ret, 'diff:', diff);
	return diff === Infinity ? undefined : ret;
}

var sum_pairsCopied = function (arr, target) { // arr = ints, target = s
	let map = {},
		results = [];
	for (let i = 0; i < ints.length; i++) {
		if (map[arr[i]] !== undefined) { // Contingency for zero
			results.push([map[arr[i]]], arr[i]);
		}
		map[target - arr[i]] = arr[i]; // Key is difference between target and value
	}
	return results;
}

// https://stackoverflow.com/questions/42270462/optimizing-solution-of-sum-of-pairs-codewars

var sum_pairs = function (ints, s) {
	if (ints.length < 2) return undefined;
	let intSet = new Set();
	for (let i = 0; i < ints.length; i++) {
		let target = s - ints[i];
		if (intSet.has(target)) {
			return [target, ints[i]];
		}
		intSet.add(ints[i]);
	}
	return undefined;
}
