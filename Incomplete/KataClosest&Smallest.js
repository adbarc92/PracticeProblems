// https://www.codewars.com/kata/5868b2de442e3fb2bb000119

function closest(strng) {
	console.log(strng);
	if (strng.length === 0) {
		return [];
	}
	let split = strng.split('');
	console.log(split);
	let arr = [];
	let num = 0;
	var lowest = Math.max(split);
	var secondLowest = Math.max(split);

	for (let i = 0; i < split.length; i++) {
		if (split[i] === ' ') {
			arr.push(num);
			num = 0;
		}
		else {
			num += parseInt(split[i]);
		}
	}

	console.log(arr);
	console.log(arr2);
}

function AnthonyClosest(str) {
    if (!str.length) return [];
    
    let min = Infinity;
    const n = str.split(' ');
    const o = n.map((e,i) => [ n[i].split('').reduce((a, e) => a += +e, 0), i, +e ])
               .sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
    return o.reduce((a, e, i) => {
              if (!o[i+1]) return a;
              const diff = Math.abs(e[0] - o[i+1][0]);
              return diff < min ? (min = diff, [e, o[i+1]]) : a;
            }, []);
}