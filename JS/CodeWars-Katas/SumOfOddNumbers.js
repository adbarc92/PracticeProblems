function rowSumOddNumbers(n) {
	// TODO
  let min = n * ( n - 1 ) + 1;
  let max = min + ( 2 * ( n - 1 ) );
  var num = 0;
  for( let i = min; i < max + 1; i += 2 ){
    num += i;
  }
return num;
}