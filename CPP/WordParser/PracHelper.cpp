#include "Header.h"
#define METext "The Milky Way is inhabited by a variety of unique characters from many different sapient species, most of whom base their technological achievements on that of an ancient civilization called the Protheans. The advanced technology left by the Protheans includes quantities of a substance called Element Zero, which can be used to alter the mass of anything near it. By utilizing this mass effect, the galaxys many races are able to develop technologies such as faster-than-light travel, force fields and artificial gravity. Roughly three-thousand years before the start of the series, a galactic community was formed from the remnants of the Prothean civilization. This community is headed by the Citadel Council, a bureaucratic association led by three unique species: the Asari, a race of monogendered beings closely resembling blue-skinned human women; the Salarians, an amphibious species with considerable technological prowess; and the Turians, a heavily militaristic race of bird-like humanoids. Over the centuries, the Council has encountered many other species that have become close political associates, while others remain independent."

std::string lowerCase(std::string str) // Removes capitalization
{
	int length = str.length();
	for (int i = 0; i < length; ++i)
	{
		if ( (int) str[i] >= 'A' && (int) str[i] < 'a')
		{
			int num = str[i]+32;
			str[i] = num;
		}
	}
	return str;
}

std::string clearPunc( std::string str ) // Removes punctuation
{
    int length = str.length();
    for ( int i = 0; i < length; ++i )
    {
        int c = str[ i ];
        if ( (c < 'A' && c!= 32) || c > 'z' )
        {
            str.erase( i, 1 );
            length = str.length();
        }
    }
    return str;
}

int countWords(std::string str) // Returns an integer count of ALL words in a string
{
	int count = 1;
	int length = str.size();
	for (int i = 0; i < length; ++i)
	{
		if (str[i] == ' '){
			count = count + 1;
		}
	}
	return count;
}

int countArray(std::string array[], int index)
{
	int arrayCount = 0;
	for (int i = 0; i < index; ++i)
	{
		std::string str = array[i];
		if ( !( str[0] >= 'a' && str[0] <= 'z') )
		{
			break;
		}
		else
		{
			arrayCount = arrayCount + 1;
		}
	}
	return arrayCount;
}