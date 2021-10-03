var isPP = function(n){
  for(let k = 2; k < n; k++){
    let m = Math.ceil(n**(1/k));
    if(m % 1 === 0 && m**k === n ){ 
      return[m,k];
    }
  }
  return null;
}

var isPP = function(n){
  for(let k = 2; k < n; k++){
    let m = +(n**(1/k)).toFixed(2);
    if(m % 1 === 0 && m**k === n ){ 
      return[m,k];
    }
  }
  return null;
}