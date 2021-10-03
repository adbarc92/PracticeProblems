#include <iostream>

void draw_square( int x, int y ){ // Double-lines
	
	std::cout << char(201); // Top-left corner
	
	for (int i = 0; i < x - 2; ++i)
	{
		std::cout << char(205); // Straight
	}
	std::cout << char(187) << std::endl; // Top-right corner

	for (int i = 0; i < y - 2; ++i)
	{
		std::cout << char(186); // Edge
		
		for (int i = 0; i < x - 2; ++i)
		{
			std::cout << char(219); // Solid blocks
		}
		
		std::cout << char(186) << std::endl; // Edge
	}

	std::cout << char(201); // Bottom-left corner

	for (int i = 0; i < x - 2; ++i)
	{
		std::cout << char(205);
	}

	std::cout << char(188); // Bottom-right corner
}

// Right Corners: 187/188
// Left Corners: 200/201
// Vertical Walls: 186/205

void draw_checkerboard( int size ){
	std::string color1, color2;

	for (int y = 0; y < size; ++y)
	{
		for (int x = 0; x < size; ++x)
		{
			draw_square() // X, Y
		}
		draw_square( size, size, color1 );
	}
}

int main(){
	draw_square( 5, 5 );
}