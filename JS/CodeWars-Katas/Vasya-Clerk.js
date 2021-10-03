function tickets(peopleInLine){
  // ...
  let clerk = {
    '25': 0,
    '50': 0,
    '100': 0
  };
  for( let i = 0; i < peopleInLine.length; ++i ){
    if( peopleInLine[ i ] == 25 ){
      clerk['25']++;
      continue;
    }
    else if( peopleInLine[ i ] == 50  ){
      if( clerk['25'] >= 1 ){
        clerk['50']++;
        clerk['25']--;
        continue;
      }
      else{
        return 'NO';
      }
    }
    else if( peopleInLine[ i ] == 100 ){
      if( clerk['25'] >= 1 && clerk['50'] >= 1 ){
        clerk['25']--;
        clerk['50']--;
        clerk['100']++;
        continue;
      }
      else if( clerk['25'] >= 3 ){
        clerk['25'] -= 3;
        continue;
      }
      else{
        return 'NO';
      }
    }
  }
  return 'YES';
}