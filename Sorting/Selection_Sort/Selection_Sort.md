## Selection Sort

**Problem Statement:** Given an array of **N integers**, write a program to implement the Selection sorting algorithm.

**Example**

```
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5
```

#### Solution

**Approach:**

The algorithm seteps are as follows:

1. First, we will select the range of the unsorted arrayusing a loop (say `i`) that indicates the starting index of range. The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i=1 means the range is from 1 to n-1, and so on.
2. Now, in each iteration, we will select the minimum element from the range of the sorted array an inner loop.
3. After that, we will swap the minimum element with the first element of the selected range (*in step 1*).
4. Finally, after each iteration, we will find that the array is sorted up to the index of the range.

**Note:** *Here,after each iteration, the array becomes sorted up to the first index of the range. That is why the starting index of the range increases by 1 after each iteration. This increment is achieved by the outer loop and the starting index is represented by variable i in the following code. And the inner loop(i.e. j) helps to find the minimum element of the range [i....n-1].*

```c++
#include<bits/stdc++.h>

using namespace std;
void selection_sort(int arr[], int n) {
  // selection sort
  for (int i = 0; i < n - 1; i++) {
    int mini = i;
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    int temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }

  cout << "After selection sort: " << "\n";
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << "\n";

}
int main() {
  int arr[] = {13,46,24,52,20,9};
  int n = sizeof(arr) / sizeof(arr[0]);
   cout << "Before selection sort: " << "\n";
   for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << "\n";
  selection_sort(arr, n);
  return 0;
}
```