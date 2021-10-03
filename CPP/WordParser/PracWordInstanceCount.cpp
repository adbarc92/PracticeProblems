#include "Header.h"
#define METext "The Milky Way is inhabited by a variety of unique characters from many different sapient species, most of whom base their technological achievements on that of an ancient civilization called the Protheans. The advanced technology left by the Protheans includes quantities of a substance called Element Zero, which can be used to alter the mass of anything near it. By utilizing this mass effect, the galaxys many races are able to develop technologies such as faster-than-light travel, force fields and artificial gravity. Roughly three-thousand years before the start of the series, a galactic community was formed from the remnants of the Prothean civilization. This community is headed by the Citadel Council, a bureaucratic association led by three unique species: the Asari, a race of monogendered beings closely resembling blue-skinned human women; the Salarians, an amphibious species with considerable technological prowess; and the Turians, a heavily militaristic race of bird-like humanoids. Over the centuries, the Council has encountered many other species that have become close political associates, while others remain independent."

// For Reference: 'A' = 65, 'Z' = 90, 'a' = 97, 'z' = 122;

// NEXT STEP: count number of unique words, create an array for unique words; otherwise, number index will not correspond to word index



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
	for (int i = 0; i < (int)str.size(); ++i)
	{
		if (str[i] == ' '){
			count = count + 1;
		}
	}
	return count;
}

int countArray(std::string str[], int index) // Input: Array and its index; Output: number of elements - use for uniqueWords
{
	int count;
	for (int i = 0; i < index; ++i) // Count words in array
	{
		if (str[i] != "__")
		{
			count = count + 1;
		}
		else if (str[i] == "__") {
			break;
		}
	}
	return count;
}



void trimArray(std::string bigStr[], int index) // Input: excessively-sized array; "Output:"" (different) properly-sized array;
{
	
	std::string trimWords[(countArray(bigStr,index))];
	for (int i = 0; i < (countArray(bigStr,index)); ++i)
	{
		trimWords[i] = bigStr[i];
		cout << trimWords[i] << endl; // For debugging
	}
}

void uniqueWordsArray(std::string str[], int index)  // Creates an index of the unique words with the same number of elements as the original array
{
	std::string uniqueWords[index];
	uniqueWords[0] = "__";
	int slot = 0;
	for (int i = 0; i < index; ++i)
	{
		for (int j = 0; j < index; ++j)
		{
			if (uniqueWords[j] == str[i])
			{ break; }
			else if (uniqueWords[j] == "__")
			{
				uniqueWords[slot] = str[i];
				slot = slot + 1;
				uniqueWords[j+1] = "__";
				break;
			}
		}
	}
	 trimArray(uniqueWords, index);
}

void wordBreak(std::string str) // Takes String, swaps upper-case letters to lower-case, removes punctuation; creates index;
{ 
	str = lowerCase(str); // Change upper case letters to lower case letters
	str = clearPunc(str); // Remove punctuation
	std::string strWords[(countWords(str))]; // Creates an array with an index equal to the number of words - NOT unique words
	int length = str.length();
	short counter = 0;
	for (int i = 0; i < length; ++i) // Assigns each word to an array index
	{
		if (str[i] == ' ')
		{
			counter++;
		}
		else {
			strWords[counter] += str[i];
		}
	}
	uniqueWordsArray(strWords, countWords(str));
}

void uniqueCount(std::string str, std::string textWords[], std::string uniqueWords[], int unique) // Input: 
{
	int textlength = countWords(str);
	int wordCount[unique];
	for (int i = 0; i < unique; ++i)
	{
		wordCount[i] = 0;
	}
	for (int i = 0; i < unique; ++i)
	{
		for (int j = 0; j < textlength; ++j)
		{
			if (uniqueWords[i] == textWords[j])
			{
				wordCount[i] = wordCount[i] + 1;
			}
		}
	}
	for (int i = 0; i < unique; ++i) // Print words and counts
	{
		cout << uniqueWords[i] << ": " << wordCount[i] << endl;
	}
}

int main()
{
	// Include "read file as text"
	cout << "Begin program." << endl;
	string MEstr = METext; // Creates string that is a modifiable version
	wordBreak(MEstr);
	return 0;
}