// Fix and improve upon the toString() method for arrays here :)

Array.prototype.toString = function(){
  // Numerical
  var str = "[";
  for( let i = 0; i < this.length; i++ ){
    if( typeof this[i] === 'string' ){
      str += "'"+this[i]+"'";
      continue;
    }
    function addArray( index ){
      
    }
  }
  // Strings
  // Arr
  // Booleans
}