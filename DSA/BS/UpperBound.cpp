//smallest index such that arr[index] > x.


#include<iostream>
using namespace std;

int getUpperBound(int* arr , int n , int x)
{
    int s = 0;
    int e = n-1;
    int ub = n;

    while(s <= e)
    {
        int m = s + (e-s)/2;
        if(arr[m] == x)
        {
            s = m+1;
        }
        else if(arr[m] > x)
        {
            ub = m;
            e = m-1;
        }
        else
        {
            s = m+1;
        }
    }
    return ub;
}

int main()
{
    int arr[] = {1, 2, 3, 3, 4, 5, 5 , 6 , 7, 7, 7, 8};
    int n = sizeof(arr)/sizeof(int);
    int x = 7;
    cout<<getUpperBound(arr , n , x);
}