function testBuffer(code) { // Takes in a string, base 64,
	const buff = Buffer.from(code, 'base64');
	console.log('Test Buffer:', buff.toString('ascii'));
}

function reverseBuffer(code) {
	const buff = Buffer.from(code, 'ascii');
	console.log('Reversed Buffer:', buff.toString('base64'));
}

// testBuffer('test'); // 5k-

// var arr = [1, 2, 3] + [3] + [3, 4, 5, 6, 7, 8];
// console.log(arr); // 1,2,333,4,5,6,7,8

// let addString = (str) => {
// 	let ret = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (!isNaN(parseInt(str[i]))) {
// 			ret += parseInt(str[i]);
// 		}
// 	}
// 	console.log(ret); //42
// };

// addString(arr);

// reverseBuffer('addString([1, 2, 3] + [3] + [3, 4, 5, 6, 7, 8])'); // YWRkU3RyaW5nKFsxLCAyLCAzXSArIFszXSArIFszLCA0LCA1LCA2LCA3LCA4XSk=
// testBuffer('YWRkU3RyaW5nKFsxLCAyLCAzXSArIFszXSArIFszLCA0LCA1LCA2LCA3LCA4XSk='); // addString([1, 2, 3] + [3] + [3, 4, 5, 6, 7, 8])
// reverseBuffer('[ 1, 2, 3 ] + [ 3 ] + [ 3, 4, 5, 6, 7, 8 ] == 42'); //WyAxLCAyLCAzIF0gKyBbIDMgXSArIFsgMywgNCwgNSwgNiwgNywgOCBdID09IDQy
// testBuffer('WyAxLCAyLCAzIF0gKyBbIDMgXSArIFsgMywgNCwgNSwgNiwgNywgOCBdID09IDQy'); // [ 1, 2, 3 ] + [ 3 ] + [ 3, 4, 5, 6, 7, 8 ] == 42
let str = 'Did you enjoy this little challenge?';
testBuffer('RGlkIHlvdSBlbmpveSB0aGlzIGxpdHRsZSBjaGFsbGVuZ2U/'); //Did you enjoy this little challenge? 
// reverseBuffer('Did you enjoy this little challenge?'); // RGlkIHlvdSBlbmpveSB0aGlzIGxpdHRsZSBjaGFsbGVuZ2U/
reverseBuffer('yes');
// Involves toString() - which is invoked--String.prototype.toString() or Object.prototype.toString()--when an array is added to another?