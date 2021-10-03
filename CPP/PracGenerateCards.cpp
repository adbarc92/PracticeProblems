#include <iostream>
#include <string>
#include <cmath>
#include <cstdlib>
#include <ctime>
using namespace std;

// Cmnd+? will comment out highlighted code

string str_card(int i){
	if (i == 1){
		return "A";
	}
	else if (i == 11){
		return "Jack";
	}
	else if (i == 12){
		return "Queen";
	}
	else if (i == 13){
		return "King";
	}
	else {
		return to_string (i);
	}
}

//Prints results of an array of strings deck[] of length integer x
void card_print(string deck[], int x){
	for (int i = 0; i < x; ++i)
	{
		cout << deck[i] << endl;	
	}
}

//Altered arrays are always altered; altered variables are only altered within the function unless value is returned
void draw_n_cards(string hand[], int handsize){
	for (int i = 0; i < handsize; i++){
		hand[i] = str_card(rand()%13+1);
	}
}

int main(){
	
	srand( time(0) );

	string hand1[2];
	string hand2[2];

	draw_n_cards (hand1, 2);
	draw_n_cards (hand2, 2);

	cout << "HAND 1: " << endl;
	card_print(hand1,2);
	cout << "HAND 2: " << endl;
	card_print(hand2,2);

	return 0;
}

	card_print(deck, 13);

	// string example = "A" + to_string(1);
	// cout << example << endl;

//Generates one suit of cards
int main2(){

	string deck[13];
	for (int i = 0; i < 13; i++){
	deck[i] = "Hearts: " +  str_card(i+1);
}
	return 0;
}