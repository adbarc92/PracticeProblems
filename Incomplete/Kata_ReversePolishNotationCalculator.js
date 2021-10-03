// https://www.codeproject.com/Questions/385901/how-can-i-find-out-the-difference-between-two-stri

var math = {
  '*': function( x, y ) { return x * y; },
  '/': function( x, y ) { return x / y; },
  '-': function( x, y ) { return x - y; },
  '+': function( x, y ) { return x + y; },
};

function calc(expr) {
  // TODO: Your awesome code here
  if( expr === '' ){
    return 0;
  }
  var stack = [];
  var arr = expr.split('');
  for( let i = 0; i < arr.length; i++ ){
    if( parseInt( arr[i] ) > 0 && parseInt( arr[i] ) < 9 ){
      stack.push( parseInt( arr[i] ) );
    }
    else{
      math[arr[i]]( stack.pop(), stack.pop() );
    }
  }
  return 0;
}
