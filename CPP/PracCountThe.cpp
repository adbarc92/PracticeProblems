#include "Header.h"
#define METext "The Milky Way is inhabited by a variety of unique characters from many different sapient species, most of whom base their technological achievements on that of an ancient civilization called the Protheans. The advanced technology left by the Protheans includes quantities of a substance called Element Zero, which can be used to alter the mass of anything near it. By utilizing this mass effect, the galaxys many races are able to develop technologies such as faster-than-light travel, force fields and artificial gravity. Roughly three-thousand years before the start of the series, a galactic community was formed from the remnants of the Prothean civilization. This community is headed by the Citadel Council, a bureaucratic association led by three unique species: the Asari, a race of monogendered beings closely resembling blue-skinned human women; the Salarians, an amphibious species with considerable technological prowess; and the Turians, a heavily militaristic race of bird-like humanoids. Over the centuries, the Council has encountered many other species that have become close political associates, while others remain independent."


// string str = "The Milky Way is inhabited by a variety of unique characters from many different sapient species, most of whom base their technological achievements on that of an ancient civilization called the Protheans. The advanced technology left by the Protheans includes quantities of a substance called Element Zero, which can be used to alter the mass of anything near it. By utilizing this mass effect, the galaxys many races are able to develop technologies such as faster-than-light travel, force fields and artificial gravity. Roughly three-thousand years before the start of the series, a galactic community was formed from the remnants of the Prothean civilization. This community is headed by the Citadel Council, a bureaucratic association led by three unique species: the Asari, a race of monogendered beings closely resembling blue-skinned human women; the Salarians, an amphibious species with considerable technological prowess; and the Turians, a heavily militaristic race of bird-like humanoids. Over the centuries, the Council has encountered many other species that have become close political associates, while others remain independent.";
//cout << countThe(str) << endl;
// string makeString(){
// 	int length = str.length();
// 	for (int i = 0; i < length; ++i)
// 	{
// 		/* code */
// 	}
// }

int count_the2( std::string text )
{
 int count = 0;
 for( int i = 0; i < (int)text.size() - 5; i++ )
 {
  std::string sub = text.substr( i, 5 );
  if( sub == " the " || sub == " The " )
  {
   count++;
  }
 }
 return count;
}

int countThe(string str){
	int length = str.length();
	int count = 0;
	for (int i = 0; i < length; ++i)
	{
		if (str[i] == ' ' && str[i+1] == 'T' && str[i+2] == 'h' && str[i+3] == 'e' && str[i+4] == ' ')
		{ count = count + 1; }
		if (str[i] == ' ' && str[i+1] == 't' && str[i+2] == 'h' && str[i+3] == 'e' && str[i+4] == ' ')
		{ count = count + 1; }
	}
	return count;
}

int main (){
	
	cout << countThe(METext) << endl;
	return 0;
}