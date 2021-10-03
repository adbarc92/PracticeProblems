#include "Header.h"

int main(){
	string str = "Hello,World!";
	int index = 0;
	while (index < str.length()){
		if (index%3 == 2)
			cout << str[index] << " ";
		index = index + 1;
	}
	cout << endl;
}