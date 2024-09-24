#include<iostream>
using namespace std;

bool binarySearch(int* arr , int n , int target)
{
    int low = 0;
    int high = n-1;
    while(low <= high)
    {
        int mid = low + (high-low)/2;
        if(arr[mid] == target)
        {
            return true;
        }
        else if(arr[mid] < target)
        {
            low = mid+1;
        }
        else
        {
            high = mid-1;
        }
    }
    return false;
}

int main()
{
    int arr[] = {3,4,6,7,9,12,16,17};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 18;
    cout<<binarySearch(arr , n , target);
}