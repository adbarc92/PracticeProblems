// Assignment: Given a random set of numbers, print them in sorted order
#include <iostream>
#include <utility>
#include <string>

// Function to print an array
void printArray(int arr[], int size)
{
	for (int i = 0; i < size; ++i)
	{
		std::cout << arr[i] << std::endl;
	}
}


void bubbleSort(int array[],int n) // Takes array size n, 
{
	for (int i = 0; i < n; ++i)
	{
		for (int j = 0; j < n+1; ++i)
		{
			if (array[i] > array[j])
				{
					int temp = array[j];
					array[i] = array[j];
					array[j] = temp;
					asdf
				}
			else
			{
				continue;
			}
		}
	}
	printArray(array,n);
}

// Main function, used for testing
int main()
{
	int n = 5;
	int array[5] = {99,6,2,44,80};
	bubbleSort(array,n);
	return 0;
}