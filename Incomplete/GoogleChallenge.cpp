

void test(char *str)
{
    std::cout << "Pointer" << str << std::endl;
    std::cout << "Dereferenced" << *str << std::endl;
}

int main()
{
    char *a = 'Soda';
    test(a);
}
