
compare = (a,b) => {
	return a - b;
  }
  
  function scramble(str1, str2) {
   var arr1 = str1.split('').sort( (a,b) => {
	 return a - b
   });
   var arr2 = str2.split('').sort( (a,b) => {
	 return a - b
   });
   for( let i = 0, j = 0; i < arr1.length; ++i ){
	 if( arr1[j] === arr2[i] ){
	   i = 0;
	   j++;
	   continue;
	 }
   }
   
  }
  

function scramble(str1, str2) {
	var min = Math.min( str1.length, str2.length)
	for( let i = 0; i < min; i++ ){
		let index = str1.indexOf( str2.charAt(i) );
		if( index === -1 ){
		  return false;
		}
		str1 = str1.slice(0, index) + str1.slice(index + 1);
	}
	return true;
  }
  

// Anthony's

function scramble(str1, str2) {

	for( let i = 0; i < str2.length; i++ ){
		let index = str1.indexOf( str2[i] );
		if (index === -1 ) return false;
		else str1 = str1.slice(0, index) + str1.slice(index + 1);
		//arr1.splice( index, 1);
	}
	return true;
  }
  