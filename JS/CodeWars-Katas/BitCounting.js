var countBits = function(n) {
  // Program Me
  let arrStr = ( n >>> 0 ).toString( 2 ).split( '' );
  let ret = 0;
  for( let i = 0; i < arrStr.length; ++i ){
    if( arrStr[ i ] == '1' ){
      ret++;
    }
  }
  return ret;
};