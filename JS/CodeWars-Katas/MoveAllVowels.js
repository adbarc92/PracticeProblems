// http://www.codewars.com/kata/move-all-vowels

function moveVowel(input) {
	let arr = input.split('');
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'a') {
			arr2.push(arr.splice(i, 1, ''));
		}
		else if (arr[i] === 'e') {
			arr2.push(arr.splice(i, 1, ''));
			i--;
		}
		else if (arr[i] === 'i') {
			arr2.push(arr.splice(i, 1, ''));
		}
		else if (arr[i] === 'o') {
			arr2.push(arr.splice(i, 1, ''));
		}
		else if (arr[i] === 'u') {
			arr2.push(arr.splice(i, 1, ''));
		}
	}
	return arr.join('') + arr2.join('');
}

function moveVowelBetter(s) {
	return (k = '', s = s.replace(/[aeuoi]/g, m => (k += m, '')), s + k)
}