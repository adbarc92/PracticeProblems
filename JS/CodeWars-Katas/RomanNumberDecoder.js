
// Jake and Mine

function solution(roman){
 // complete the solution by transforming the
 // string roman numeral into an integer
 var arr = roman.split(‘’);
 console.log(arr);
 var res = [];
 var count=0;


 for( let i = 0; i < arr.length; i++ ){
   if (‘I’===arr[i]) {
     res.push(1)
   } else if (‘V’===arr[i]) {
     res.push(5)
   } else if (‘X’===arr[i]) {
     res.push(10)
   } else if (‘L’===arr[i]) {
     res.push(50)
   } else if (‘C’===arr[i]) {
     res.push(100)
   } else if (‘D’===arr[i]) {
     res.push(500)
   } else if(‘M’ === arr[i] ){
     res.push(1000)
   }
   if( arr.length === 1 ){
     return arr.length;
   }
 }
 for( let j = 0; j < res.length; j++ ){
   if( j + 1 >= res.length ){
     break;
   }
   else if( res[ j + 1 ] > res[ j ] ){
     count += (res[ j + 1 ] - res[ j ]);
   }
   else if( res[ j + 1 ] <= res[ j ] ){
     count += res[ j + 1 ];
     if( j === 0 ){
       count += res[ j ];
     }
   }
 }
 console.log( count );
 return count;
}
Message Input

Message @Jake

// Google Archives

function romanize (num) {
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

function deromanize (str) {
	var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && validator.test(str)))
		return false;
	while (m = token.exec(str))
		num += key[m[0]];
	return num;
}