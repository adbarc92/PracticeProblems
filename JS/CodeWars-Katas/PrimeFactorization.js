function getAllPrimeFactors(n) {
	if (isNan(n) || n % 1 != 0 || n <= 0) {
		return [];
	} else if (n === 1) {
		return [1];
	} else if (n === 2) {
		return [2];
	}

	let arr = [];
	let num = 2;
	while (n > 1) {
		if (!(n % num)) {
			arr.push(num);
			n /= num;
		} else {
			num++;
		}
	}
	return arr;
}

function getUniquePrimeFactorsWithCount(n) {
	if (isNan(n) || n % 1 != 0 || n <= 0) {
		return [[], []];
	} else if (n === 1) {
		return [[1], [1]];
	} else if (n === 2) {
		return [[2], [2]];
	}

	let arr = [];
	let arr2 = [];
	let num = 2,
		index = 0;
	while (n > 1) {
		if (!(n % num)) {
			arr[index] = num;
			arr2[index] = 1;
			n /= num;
			while (!(n % num)) {
				arr2[index]++;
				n /= num;
			}
			index++;
		} else {
			num++;
		}
	}

	return [arr, arr2];
}

function getUniquePrimeFactorsWithProducts(n) {
	if (isNan(n) || n % 1 != 0 || n <= 0) {
		return [];
	} else if (n === 1) {
		return [1];
	} else if (n === 2) {
		return [2];
	}

	let arr = getUniquePrimeFactorsWithCount(n);
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2[i] = arr[0][i] ** arr[1][i];
	}
	return arr2;
}
