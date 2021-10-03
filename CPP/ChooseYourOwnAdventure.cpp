#include <iostream>
#include <string>
using namespace std;

/*
int main(){
	cout << "You are the hero. You have three options: " << endl;
	cout << "a. Fight the villain" << endl;
	cout << "b. Save the citizen" << endl; 
	cout << "c. Return to secret base" << endl;
	char choice = 'd';
	while (choice == 'd'){}
		cout << "What would you like to do?"
		cin << choice;
		if (choice = 'a' || choice == 'b' || choice == 'c')
		{
			if (choice == 'a'){}
			if (choice == 'b'){}
			if (choice == 'c'){}
		}
		else {
			cout << "Invalid answer. Try again."
	}
}

*/

int main(){
	char action;
	int resolution = 1;
	
	while (resolution == 1){
		cout << "You have three choices:" << endl;
		cout << "a. Fight the villain" << endl;
		cout << "b. Save the citizen" << endl;
		cout << "c. Return to secret base" << endl;
		cin >> action;
		
		if ( action == 'a' ){
			cout << "You win!" << endl;
		} else if (action == 'b'){
			cout << "You saved the citizen." << endl;
		} else if (action == 'c'){
			cout << "Who will save the world?" << endl;
			break;
		} else {
			cout << "Invalid option. Please choose another." << endl;
		}

	}
	return 0;
}