int QueenCheck( std::pair<int,int> king, std::pair<int,int> queen)
{
	int longLiveTheKing = 0;
	// Check if Queen is threatening King
	for (int i = 0; i < 7; ++i)
	{
		if (king.first == queen.first || king.second == queen.second)
		{
			cout << "King is in check" << endl;
		}
		else if (!(queen.first == king.first && queen.second == king.second) && (queen.first >= 7 && queen.second >= 7))
		{
			queen.first = queen.first + 1;
			queen.second = queen.second + 1;
			continue;
		}
		else if (!(queen.first == king.first && queen.second == king.second) && (queen.first >= 7 && queen.second >= 7))
		{
			queen.first = queen.first + 1;
			queen.second = queen.second - 1;
			continue;
		}
		else if (!(queen.first == king.first && queen.second == king.second) && (queen.first >= 7 && queen.second >= 7))
		{
			queen.first = queen.first - 1;
			queen.second = queen.second + 1;
			continue;
		}
		else if (!(queen.first == king.first && queen.second == king.second) && (queen.first >= 7 && queen.second >= 7))
		{
			queen.first = queen.first - 1;
			queen.second = queen.second - 1;
		}
		else
		{
			longLiveTheKing = -1;
		}
	}

// int countTextArray(std::string str[], int index) // Input: Array and its index; Output: number of elements - use for uniqueWords
// {
// 	int count;
// 	for (int i = 0; i < index; ++i) // Count words in array
// 	{
// 		if (str[i] != "__")
// 		{
// 			count = count + 1;
// 		}
// 		else if (str[i] == "__") {
// 			break;
// 		}
// 	}
// 	return count;
// }

// int countArray(std::string array[], int index)
// {
// 	int arrayCount = -1;
// 	std::string str;
// 	for (int i = 0; i < index; ++i)
// 	{
// 		if (array[i+1] == "__")
// 		{
// 			break;
// 		}
// 		else
// 		{
// 		str = str + array[i] + ' ';
// 		}
// 	}
// 	cout << str << endl;
// 	arrayCount = arrayCount + (countWords(str));
// 	cout << arrayCount << endl;
// 	return arrayCount;
// }