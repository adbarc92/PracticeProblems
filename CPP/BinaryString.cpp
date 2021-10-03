#include <iostream>
#include <sstream>

// Function:
	// Argument: positive int or 0, convert to binary string
		// Convert to binary string
		// Return string
	// Limitations: no use of mathematical functions (sq. root, exponents)

std::string reverseString( std::string str ){
	std::string str2 = "";

	for (int i = int( str.length() ) - 1; i > -1; --i)
	{
		str2 += str[ i ];
	}

	return str2;
}

std::string binaryStringConverter( int i ){
	std::string ret = "";
	std::stringstream ss;

	while( i/2 != 0 && i >= 2 ){
		ss << i % 2;
		// ret += std::to_string(i % 2);
		i = i/2;
	}

	ss >> ret;

	if ( i == 1 )
	{
		ret += "1";
	}

	ret = reverseString( ret );
	return ret;
}

int main(){
	std::string result = binaryStringConverter( 0 );
	std::cout << result << std::endl;
	std::cout << "Decimal: " <<
}