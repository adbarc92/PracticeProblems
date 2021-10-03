#include <iostream>
#include <string>
#define Text "the sentence is important for some completely unknown reason"

int countWords(std::string str)
{
	short count = 1;
	for (int i = 0; i < (str.length()); ++i)
	{
		if (str[i] == ' ')
		{
			count = count + 1;
		}
	}
	return count;
}

void loadwords(std::string arr[], std::string str)
{
	int length = str.length(), counter;
	for (int i = 0; i < length; ++i)
	{
		if (str[i] == ' ')
		{
			counter = counter + 1;
		}
		else 
		{
			arr[counter] += str[i];
		}
	}
}

int main()
{
	std::string arr[15];
	std::string str = Text;
	int count = countWords(str);
	loadwords(arr,str);
	for (int i = 0; i < count; ++i)
	{
		std::cout << arr[i] << std::endl;
	}
	return 0;
}