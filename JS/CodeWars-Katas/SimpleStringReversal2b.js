function solve( st, a, b ){
	var a1 = st.substring( 0, a );
	var a2 = st.substring( a, b + 1 ).split('').reverse();
  	a2 = a2.join('')
	var a3 = st.substring( b + 1, st. length );
	return a1+a2+a3;
}