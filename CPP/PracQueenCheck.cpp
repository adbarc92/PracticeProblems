#include <iostream>
#include <string>
#include <utility>

bool IsInCheck(std::pair< int,int > king,std::pair< int,int > queen) // First Solution
{
	int kx = king.first, ky = king.second, qx = queen.first, qy = queen.second;
	if (kx == qx || ky == qy) // The Rook Case
	{
		return true;
	}
	std::cout << "KX: " << kx << ", KY: " << ky << std::endl;
	for (int i = 1; i < 16; ++i) // The Bishop Case - Backslash
	{
		std::cout << "QX: " << qx + 7 - i << " , QY: " << qy + 7 - i << std::endl;
		if ((kx == qx + 7 - i) && (ky == qy + 7 - i))
		{
			return true;
		}
	}
	std::cout << "KX: " << kx << ", KY: " << ky << std::endl;
	for (int i = 1; i < 16; ++i) // The Bishop Case - Forwardslash
	{
		std::cout << "QX: " << qx - 7 + i << " , QY: " << qy + 7 - i << std::endl;
		if ((kx == qx - 7 + i) && (ky == qy + 7 - i))
		{
			return true;
		}
	}
	return false;
}

bool IsInCheck2 (std::pair<int,int>king, std::pair<int,int>queen) // Second Solution
{
	int kx = king.first, ky = king.second, qx = queen.first, qy = queen.second;
	if (kx == qx || ky == qy) // The Rook Case
	{
		return true;
	}
	for (int i = 0; i < 8; ++i) // Revised Bishop Case
	{
		if (abs((qy-ky)/(qx-kx)) == 1)
		{
			return true;
		}
	}
	return false;
}

int KingMove(std::pair<int,int>king, std::pair<int,int>queen)
{
	int viableMoves = 10;
	int kx = king.first, ky = king.second, qx = queen.first, qy = queen.second;
	for (int i = 0; i < 8; ++i) //kx = 2, ky = 1;
	{
		int chx = i%3 - 1 + kx;
		int chy = (i/3) - 1 + ky;

	}
}

int KingMove2 (std::pair<int,int>king,std::pair<int,int>queen)
{
	int kx = king.first, ky = king.second, qx = queen.first, qy = queen.second;
	for (int y = -1; y < 1; ++y)
	{
		for (int x = -1; x < 1; ++x)
		{
		chx = kx + x;
		chy = ky + y;

		}
	}
}


0 1 2
3 4 5
6 7 8

Ex: (2,1) = 4;



i=0 x=0 y=0;
i=1 x=1 y=0;
i=2 x=2 y=0;
i=3 x=0 y=1;
i=4 x=1 y=1;
i=5 x=2 y=1;
i=6 x=0 y=2;
i=7 x=1 y=2;
i=8 x=2 y=2;

int main()
{
	std::cout << "Begin Program." << std::endl;
	std::pair<int,int> king;
	std::pair<int,int> queen;
	// Check if coordinates are both less than 8
	king = std::make_pair (0,0);
	queen = std::make_pair (7,7);
	std::cout << "Check: " << IsInCheck2(std::make_pair (7,7), std::make_pair (0,0)) << std::endl;
	if (IsInCheck2(std::make_pair (7,7), std::make_pair (0,0)) == true)
	{
		std::cout << KingMove(std::make_pair (7,7), std::make_pair (0,0)) << std::endl;
	}
}