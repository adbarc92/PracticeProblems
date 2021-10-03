#include <iostream>

struct Robot{
	int bearing; // N = 1, E = 2, S = 3, W = 4
	int xPos;
	int yPos;

	Robot(){
		bearing = 2;
		xPos = 0;
		yPos = 0;
	}

	Robot( int direction, int x, int y ): bearing(direction), xPos(x), yPos(y)
	{}
};

void move_robot( int steps, Robot& subj ){ // Off-grid functionality needed
	if ( subj.bearing == 1 )
	{
		for (int i = 0; i < steps; ++i)
		{
			subj.yPos++;
		}
	}
	else if ( subj.bearing == 3 )
	{
		for (int i = 0; i < steps; ++i)
		{
			subj.yPos--;
		}
	}
	else if ( subj.bearing == 2 )
	{
		for (int i = 0; i < steps; ++i)
		{
			subj.xPos++;
		}
	}
	else if ( subj.bearing == 4 )
	{
		for (int i = 0; i < steps; ++i)
		{
			subj.xPos--;
		}
	}
}

void turn_robot( int choice, Robot& subj ){
	// if ( choice != 1 || choice != 2 )
	// {
	// 	std::cout << "Invalid direction" << std::endl;
	// 	return;
	// }

	if ( choice == 1 )
	{
		if ( subj.bearing == 1 )
		{
			subj.bearing = 4;
		}
		else if ( subj.bearing == 2 )
		{
			subj.bearing = 1;
		}
		else if ( subj.bearing == 3 )
		{
			subj.bearing = 2;
		}
		else if ( subj.bearing == 4 )
		{
			subj.bearing = 3;
		}
	}

	else if ( choice == 2 )
	{
		if ( subj.bearing == 1 )
		{
			subj.bearing = 2;
		}
		else if ( subj.bearing == 2 )
		{
			subj.bearing = 3;
		}
		else if ( subj.bearing == 3 )
		{
			subj.bearing = 4;
		}
		else if ( subj.bearing == 4 )
		{
			subj.bearing = 1;
		}
	}
}

void print_robot( Robot subj ){
	std::string bearing;
	if ( subj.bearing == 1 )
	{
		bearing = "North";
	}
	else if ( subj.bearing == 2 )
	{
		bearing = "East";
	}
	else if ( subj.bearing == 3 )
	{
		bearing = "South";
	}
	else if ( subj.bearing == 4 )
	{
		bearing = "West";
	}

	std::cout << "Robot is facing " << bearing << " at position: " << subj.xPos << ", " << subj.yPos << std::endl << std::endl;
}

int main(){
	std::string menu[ 3 ] = {"Move Robot", "Turn Robot", "Quit" };
	bool running = true;
	int choice = 0;
	Robot subj;

	while( running ){
		print_robot( subj );

		std::cout << "What would you like to do?" << std::endl;
		for (int i = 0; i < 3; ++i)
		{
			std::cout << (i + 1) << ". " << menu[ i ] << std::endl;
		}

		std::cin >> choice;

		if ( choice == 1 )
		{
				std::cout << "How many spaces?" << std::endl;
				int steps;
				std::cin >> steps;
				move_robot( steps, subj );
		}
		else if ( choice == 2 )
		{
			std::cout << "Left or right?" << std::endl;
			std::cout << "1. Left" << std::endl << "2. Right" << std::endl;
			int choice2;
			std::cin >> choice2;
			turn_robot( choice2, subj );
		}
		else if ( choice == 3 )
		{
			return 0;
		}

		// switch( choice ){
		// 	case 1:
		// 		std::cout << "How many spaces?" << std::endl;
		// 		int steps;
		// 		std::cin >> steps;
		// 		move_robot( steps, subj );
		// 	case 2:
		// 		std::cout << "Left or right? (l/r)" << std::endl;
		// 		char direction;
		// 		std::cin >> direction;
		// 		turn_robot( direction, subj );
		// 	case 3:
		// 		return 0;
		// }
	}
}