#include<iostream>
using namespace std;

bool binarySearch(int* arr , int s , int e , int target)
{
    //base case
    if(s>e)
    {
        return false;
    }

    //recursive case
    int m = s + (e-s)/2;
    if(arr[m] == target)
    {
        return true;
    }
    else if(arr[m] > target)
    {
        return binarySearch(arr , s , m-1 , target);
    }
    else
    {
        return binarySearch(arr , m+1 , e , target);
    }
}

int main()
{
    int arr[] = {3,4,6,7,9,12,16,17};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 17;
    cout<<binarySearch(arr , 0 , n-1 , target);
}