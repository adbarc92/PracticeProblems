function solve(st,a,b){
 //..
 let i = 0;
 let arrStr = st.split('');
 var ret = "";
 while( i < a ){
  console.log( 'W1 Adding:', arrStr[ i ] );
   ret += arrStr[ i ];
   i++;
 }
 if( b > st.length - 1 ){
   b = st.length - 1;
 }
 for( let j = b; j >= a; j-- ){
   console.log( 'F Adding:', arrStr[ j ] );
   ret += arrStr[ j ];
 }
 i = b + 1;
 while( i < arrStr.length ){
   console.log( 'W2 Adding:', arrStr[ i ] );
   ret += arrStr[ i ];
   i++
 }
 return ret;
}
  