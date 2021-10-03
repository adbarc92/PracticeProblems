function longestConsec(strarr, k) {
    // your code
    var ret = '';
    if( k > strarr.length ){
      return ret;
    }
    let newWord = '';
    for( let i = 0; i < strarr.length - k ; ++i ){
      for( let j = i; j < k + i; ++j ){
        newWord += strarr[ j ];
      }
      if( newWord.length > ret.length  ){
        ret = newWord;
        console.log( 'ret replaced:',ret );
      }
      newWord = '';
    }
    return ret;
}