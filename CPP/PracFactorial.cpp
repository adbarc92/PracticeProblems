#include "Header.h"

// // #2 - Array-based solution
// int factorial(int n){
// 	int array[n]; //3
// 	// Begin with n; then, multiply n by n-1 as long as n>0
// 	for (int i = 0; i < n; ++i)
// 	{
// 		array[i] = n-i;
// 	}
// 	return array[n];
// }

// #1 - Basic multiplication

int factorial2( int n )
{
 int product = n;
 for ( int i = n - 1; i > 0; i-- )
 {
  product = product * i;
 }
 return product;
}

int recursive_factorial( int n )
{
 if ( n == 1 )
 {
  return n;
 }
 else
 {
  return n * recursive_factorial( n - 1 );
 }
}

int factorial(int n){
	int product = 1;
	for (int i = 0; i < n; ++i)
	{
		product = product*(i+1);
	}
	return product;
}

int main(){
	int n = 5;
	cout << factorial(n) << endl;
	return 0;
}