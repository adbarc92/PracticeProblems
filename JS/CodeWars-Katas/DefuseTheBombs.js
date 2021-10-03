// Defuse all of the Bombs!
console.log('Bomb10:', Bomb);
Bomb.diffuse(42);
console.log('Bomb9:', Bomb);
// console.log(Bomb.diffuse.toString());
for (let i = 0; i < 5; i++) {
	Bomb.diffuse();
}
console.log('Bomb8:', Bomb);
// console.log('global:',global);
Bomb.diffuse(BombKey);
console.log('Bomb7:', Bomb);
console.log(Bomb.diffuse.toString());
var diffuseTheBomb = () => { return true };
Bomb.diffuse();
console.log('Bomb6:', Bomb);
console.log(Bomb.diffuse.toString());
Bomb.diffuse(3.14159);
console.log('Bomb5:', Bomb);
console.log(Bomb.diffuse.toString());
var date = new Date();
date.setYear(date.getFullYear() - 4);
Bomb.diffuse(date);
console.log('Bomb4:', Bomb);
console.log(Bomb.diffuse.toString());
var code = {
	key: 0,
	get key() {
		return 43;
	}
};
Bomb.diffuse(code);
console.log('Bomb3:', Bomb);
console.log(Bomb.diffuse.toString());
var obj = {
	x2: false,
	valueOf() {
		if (this.x2) {
			return 11;
		}
		this.x2 = true;
		return 9;
	}
};
Bomb.diffuse(obj);
console.log('Bomb3:', Bomb);
console.log(Bomb.diffuse.toString());
Math = {
	first: true,
	second: false,
	third: false,
	random: function () {
		if (this.first) {
			this.first = false;
			this.second = true;
			return 1;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
			return 1;
		}
		if (this.third) {
			return 0.5;
		}
	}
}
Bomb.diffuse(42);
console.log('Bomb1:', Bomb);
console.log(Bomb.diffuse.toString());
let str = 'eWVz';
Array.prototype.toString = function () {
	return 14;
}
Bomb.diffuse(str);

// function (code) {
// 	check(
// 		/* Did you enjoy this little challenge? */
// 		new Buffer(42, 'base64').toString('ascii')
// 		, [1, 2, 3] + [3] + [3, 4, 5, 6, 7, 8] == 42
// 	);
// }

// var diffuse1 = function (code) {
// 	check(
// 		/* Did you enjoy this little challenge? */
// 		new Buffer(code, 'base64').toString('ascii')
// 		, [1, 2, 3] + [3] + [3, 4, 5, 6, 7, 8] == 42 // Values sum to 42; array concatenation appends elements together in string
// 	);
// }

// function testBuffer(code) {
// 	const buff = Buffer.from(code, 'base 64');
// 	console.log('Buffer:', buff.toString('ascii'));
// }

// testBuffer('test');
