#include <iostream>
#include <string>
#define METext "The Milky Way is inhabited by a variety of unique characters from many different sapient species, most of whom base their technological achievements on that of an ancient civilization called the Protheans. The advanced technology left by the Protheans includes quantities of a substance called Element Zero, which can be used to alter the mass of anything near it. By utilizing this mass effect, the galaxys many races are able to develop technologies such as faster-than-light travel, force fields and artificial gravity. Roughly three-thousand years before the start of the series, a galactic community was formed from the remnants of the Prothean civilization. This community is headed by the Citadel Council, a bureaucratic association led by three unique species: the Asari, a race of monogendered beings closely resembling blue-skinned human women; the Salarians, an amphibious species with considerable technological prowess; and the Turians, a heavily militaristic race of bird-like humanoids. Over the centuries, the Council has encountered many other species that have become close political associates, while others remain independent."

std::string lowerCase(std::string str) // Helper; Removes capitalization
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

std::string clearPunc( std::string str ) // Helper; Removes punctuation
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

int countWords( std::string str ) // Helper; Returns an integer count of ALL words in a string
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

int countArray( std::string array[], int index ) // Helper; Input: array of unique words, cor. index; Output: # of elements
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

void wordCompare( std::string textWords[], std::string trimWords[], int wordCount, int arrayElements ) // Puts everything together.
{
	int instanceCount[arrayElements];
	for (int i = 0; i < arrayElements; ++i)
	{
		instanceCount[i] = 0;
		for (int j = 0; j < wordCount; ++j)
		{
			if (trimWords[i] == textWords[j])
			{
				instanceCount[i] = instanceCount[i] + 1;
			}
		}
	}
	for (int i = 0; i < arrayElements; ++i)
	{
		std::cout << trimWords[i] << ": " << instanceCount[i] << std::endl;
	}
}

void trimArray( std::string textWords[], std::string uniqueWords[], int wordCount ) // Input: excessively-sized array; "Output:"" (different) properly-sized array;
{
	int arrayElements = countArray(uniqueWords,wordCount);
	std::string trimWords[arrayElements];
	for (int i = 0; i < arrayElements; ++i)
	{
		trimWords[i] = uniqueWords[i];
	}
	wordCompare(textWords, trimWords, wordCount, arrayElements);
}

void uniqueWordsArray( std::string textWords[], int wordCount )  // Creates an index of the unique words with the same number of elements as the original array
{
	std::string uniqueWords[wordCount];
	uniqueWords[0] = "__";
	int slot = 0;
	for (int i = 0; i < wordCount; ++i)
	{
		for (int j = 0; j < wordCount; ++j)
		{
			if (uniqueWords[j] == textWords[i])
			{ break; }
			else if (uniqueWords[j] == "__")
			{ 
				uniqueWords[slot] = textWords[i];
				slot = slot + 1;
				uniqueWords[j+1] = "__";
				break;
			}
		}
	}
	trimArray(textWords, uniqueWords, wordCount);
}

void wordBreak(std::string MEstr) // Takes String, swaps upper-case letters to lower-case, removes punctuation; creates index;
{
	MEstr = lowerCase(MEstr); // Change upper case letters to lower case letters
	MEstr = clearPunc(MEstr); // Remove punctuation
	int wordCount = (countWords(MEstr));
	int length = MEstr.length();
	std::string textWords[wordCount]; // Creates an array with an index equal to the number of words - NOT unique words
	short counter = 0;
	for (int i = 0; i < length; ++i) // Assigns each word to an array index
	{
		if (MEstr[i] == ' ')
		{
			counter++;
		}
		else {
			textWords[counter] += MEstr[i];
		}
	}
	uniqueWordsArray(textWords, wordCount);
}

int main()
{
	std::string MEstr = METext;
	int count = countWords(MEstr);
	std::string textWords[count], trimWords[count];
	wordBreak(MEstr);
	return 0;
}