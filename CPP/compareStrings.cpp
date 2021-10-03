#include <iostream>

std::string replace_with_periods( std::string str ){
	for (int i = 0; i < int( str.length() ); ++i)
	{
		if ( str[ i ] == '-' || str[ i ] == '_' || str[ i ] == int('\\') || str[ i ] == '/')
		{
			str[ i ] = '.';
		}
	}

	return str;
}

bool compare_strings( std::string str1, std::string str2 ){

	std::string fixedStr1 = replace_with_periods( str1 );
	std::string fixedStr2 = replace_with_periods( str2 );

	for (int i = 0; i < int( str1.size() ); ++i)
	{
		if ( fixedStr1[ i ] > fixedStr2[ i ] )
		{
			return true;
		}
	}

	return false;
}

bool compare_strings2( std::string str1, std::string str2 ){
	
	std::string fixedStr1 = replace_with_periods( str1 );
	std::string fixedStr2 = replace_with_periods( str2 );

	if ( fixedStr1.compare( fixedStr2 ) > 0 )
	{
		return true;
	}
	else{
		return false;
	}
}

bool compare_strings3( std::string str1, std::string str2 ){

	std::string fixedStr1 = replace_with_periods( str1 );
	std::cout << fixedStr1 << std::endl;
	std::string fixedStr2 = replace_with_periods( str2 );
	std::cout << fixedStr2 << std::endl;

	int length = fixedStr1.length();
	int length2 = fixedStr2.length();

	if ( length >= length2 )
	{
		for (int i = 0; i < length; ++i)
		{
			if ( fixedStr1[ i ] > fixedStr2[ i ] )
			{
				return true;
			}
			else if ( fixedStr1[ i ] < fixedStr2[ i ] ){
				return false;
			}
		}
		return true;
	}
	else{
		for (int i = 0; i < length2; ++i)
		{
			if ( fixedStr1[ i ] > fixedStr2[ i ] )
			{
				return true;
			}
			else if ( fixedStr1[ i ] < fixedStr2[ i ] )
			{
				return false;
			}
		}
		return false;
	}
}

int main(){ //
	std::string str1 ("1.43.0"); // 
	std::string str2 ("1.5.2.1.1");

	if ( compare_strings3( str1, str2 ) )
	{
		std::cout << "First string is more recent" << std::endl;
	}
	else{
		std::cout << "Second string is more recent" << std::endl;
	}
}