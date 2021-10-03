
//Takes a string, then returns the reverse version

#include <iostream>
#include <string>
using namespace std;

string strRev(string str)
{

	string str2;
	int length = str.length();
	str2.resize(length);
	
	for (int i = 0; i < length; ++i)
	{
		str2[i] = str[length - 1 - i];
	}

	return str2;
}

string insertB(string str)
{
	string str2;
	int length = (str.length());
	char ch = 'B';
	str2.resize(length*2);

	for (int i = 0; i < length; ++i)
	{
		str2[i*2] = str[i];
		str2[i*2+1]=ch;
	}
	return str2;
}

string genString(char ch1, char ch2, int n)
{
	//Generate a string that alternates the two chars for n length (ex: ch1='a', ch2='b', n=5, result="ababa")
	string str;
	str.resize(n);
	//str[0] = ch1, str[1] = ch2, str[3] = ch1...
	for (int i = 0; i < n; ++i)
	{
		//i=0 str[0] = 'a'
		//i=1 str[2] = 'a'
		str[i*2] = ch1;
		//i=0 str[1] = 'b'
		//i=1 str[3] = 'b'
		str[i*2+1] = ch2;
	}
	return str;
}

 string swapCase(string str)
{
	// Make every letter's case the opposite of what it is
	int length = str.length();
	// Iterate over the string, evaluating every character individually
	for (int i = 0; i < length; ++i)
	{
		// Compare individual char
		// a = 97, A = 65
		// str[i] = a = 97;
		// If Uppercase
		if ( (int) str[i] >= 65 && (int) str[i] < 97)
		{
			int num = str[i]+32;
			str[i] = num;
		}
		// If Lowercase
		else if ( (int) str[i] >= 97 && (int) str[i] < 123)
		{
			int num = str[i]-32;
			str[i] = num;
		}
	}
	return str;
	//Second Step: ignore punctuation
}

void printCheckerboard(char ch1, char ch2, int n)
{
	// ch1 = black; ch2 = red; n = one side of square checkerboard

	//using two characters, create an array that alternates
	int x = n,y=n;
	string str[y][x];
	// str[0][0] = 'a'; str[1][0] = 'b'; 

	for (int i = 0; i < n; ++i)
	{
		str[i*2][x] = ch1;
		str[i*2+1][x] = ch2;
		for (int j = 0; j < n; ++j)
		{
			str[y][j*2] = ch1;
			str[y][j*2+1] = ch2;
		}
	}
}

int main()
{
	cout << "Program start." << endl;
	// string str = "ThIs Is FuN."; //Length = 15
	char ch1='a',ch2='b';
	int n=5,x=n,y=n;
	string str2[y][x];
	// cout << swapCase(str) << endl;
	printCheckerboard(ch1,ch2,n);
	cout << str2[y][x] << endl;
	return 0;
}

	// char ch = 'A'; // 65
	// int i = ch+('a'-'A');
	// char ch2 = i;
	// cout << ch2 << endl;