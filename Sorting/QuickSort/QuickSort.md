## Quick Sort

**Problem Statement:** Given an array of **N integers**, write a program to implement the Quick sort algorithm.

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

Now let's understand how we are going to implement the logic of the above steps. In the intuition, we have seen that the given array should be broken down into subarrays. But while implementing, we are not going break down and create any new arrays. Instead, we will specify the range of the subarrays using two indices or pointers (i.e. low pointer and high pointer) each time while breaking down the array.

The algorithm steps are the followwing for the quickSort() function:

1. Initially, the low points to the first index and the high index points to thr last index (as the range is n i.e. the size of the array).

2. After that, we will get the index (where the pivot should be placed after sorting) while shifting the maller elements on the left and the larger ones on the right using a partition() function. Now, this index can be called the partition index as it creates a partition between the left and right unsorted subarrays.

3. After placing the pivot in the partition index (within the partition() function specified), we need to call the function quickSort() for the left and the right subarray recursively. So, the range of the left subarray will be [low to (partition index - 1)] and the range of the right subarray will be[(partition index + 1) to high].

4. This is how the recursion will continue until the range becomes 1.


```cpp
#include <bits/stdc++.h>

using namespace std;

void partition(vector<int> &arr, int low, int high) {
  int pivot = arr[low], i = low, j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) swap(arr[i], arr[j]);
  }
  swap(arr[low], arr[j]);
  return j;
}

void qs(vector<int> &arr, int low, int high) {
  if (low < high) {
    int pIndex = partition(arr, low, high);
    qs(arr, low, pIndex - 1);
    qs(arr, pIndex + 1, high);
  }
}

vector<int> QuickSort(vector<int> arr) {
  qs(arr, 0, arr.size() - 1);
  return arr;
}

int main() {
  vector<int> arr = {4, 6, 2, 5, 7, 9, 1, 3};
  int n = arr.size();
  cout << "Before Using quick sort:" << endl;
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;

  arr = QuickSort(arr);

  cout << "After Using Quick Sort:" << endl;
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  return 0;
}
```

**Time Complexity:** O(N*logN), where N = size of the array.

**Reason:** At each step, we divide the whole array, for that logN and n steps are taken for the partition() function, so overall time complexity will be n*logN.

The following recurrence relation can be written for Quick Sort:

F(n) = F(k) + F(n - 1 - k)

Here k is the number of the elements smaller or equal to the pivot and n - 1 - k denotes elements greater than the pivot.

There can be 2 cases:

**Worst Case --** This case occurs when the pivot is greater or smaller element of the array. If the partition is done and the last element is pivot, then the worst case would be either in the increasing order of the array or in the decreasing order of the array.

**Recurrence:**

F(n) = F(0) + F(n - 1) or F(n - 1) + F(0)

Worst Case Time complexity: O(n<sup>2</sup>)

**Best Case --** This case occurs when the pivot is the middle element or near to middle element of the array.

**Recurrence:**

F(n) = 2F(n/2)

Time Complexity for the best and average case: O(N*logN)

**Space Complexity:** O(1) + O(N) auxiliary stack space.