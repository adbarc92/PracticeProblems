// http://www.codewars.com/kata/simple-equation-reversal/train/javascript

// Mine

function solve(eq){
    var eqArr = eq.split('').reverse();
    var ret = [];
    for( let i = 0; i < eqArr.length; ++i ){
      var num = [];
      var val = eqArr[ i ].valueOf();
      if( val >= 0 && val <= 9 ){
        var j = i;
        while( eqArr[ j ] >= '0' && eqArr[ j ] <= '9' ){
          num.push( eqArr[j] );
          j++;
        }
        ret.push( num.reverse().join('') );
        i = j;
      }
      if( i < eqArr.length ) ret.push(eqArr[i]);
    }
    return ret.join('');
}

i < eqArr.length ? ret.push(eqArr[i]) : undefined;

// Steve, Robert, Mine

function solve(eq){
  var reverseEq = eq.split('').reverse();
  var newEq = [];
  var newNum = [];
  for (let i = 0; i < reverseEq.length; i++) {
    if(!isNaN(reverseEq[i])) { // if num
      newNum.push( reverseEq[i] );
    }
    else{
      newEq.push( newNum.reverse().join('') );
      newNum = [];
      newEq.push(reverseEq[i])
    }
  }
  newEq.push( newNum.reverse().join('') );
  return newEq.join('')
}

// Robert

function solve(eq){
	var reverseEq = eq.split('').reverse();
	var newEq = [];
	var newNum = [];
	for (let i = 0; i < reverseEq.length; i++) {
	  if(!isNaN(reverseEq[i])) newNum.push(reverseEq[i]);
	  if(isNaN(reverseEq[i]) && newNum.length === 0) newEq.push(reverseEq[i]);
	  if(isNaN(reverseEq[i]) && newNum.length !== 0) {
		newEq.push( newNum.reverse().join('') );
		newNum = [];
		newEq.push(reverseEq[i])
	  }
	}
	newEq.push( newNum.reverse().join('') );
	console.log('newEq: ', newEq);
	return newEq.join('')
  }

  // Top

  const solve = eq => eq.match(/\w+|[*+/-]/g).reverse``.join``
  