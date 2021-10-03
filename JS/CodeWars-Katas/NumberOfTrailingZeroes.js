function zeros (n) {
//   let counter = 0;
//   for( let i = 0; i < n; i*=5){
//     counter += (5+i)
//   }
//   return counter;
// }

function zeros(n){
  let counter = 0;
  for( let i = 0; i < n; i *= 5 ){
    counter += ~~( n / i );
  }
  return counter;
}

return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);