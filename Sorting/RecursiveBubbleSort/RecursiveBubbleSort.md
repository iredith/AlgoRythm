## Recursive Bubble Sort

**Problem Statement:** Given an array of **N integers**, write a program to implement the Recursive Bubble sorting algorithm.

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

In the oterative method, we usually select a  range(using a loop), and each range, we repeatedly swap(using another loop) the adjacent elements(`if arr[i] > arr[i + 1]`) until maximum element in that range reaches the end.

The flow of the algorithm goes like this: in the first iteration, we select the range 0 to n - 1 and swap adjacent elements(`if arr[i] > arr[i + 1]`) until the maximum element reaches the (n - 1)th index. Similarly, in the second iteration, the second maximum element reaches the (n - 2)th index. So, the sorting basically occurs in the backward direction. After (n - 1) such iterations we eget the sorted array.

Now, in the recursive approach, we will just select the range recursively instead of usingany loop. This is the only change we will do the recursive bubble sort algorithm and the rest of the part will be completely the same it was in the case of iterative bubble sort.

The approach will be the following:

1. First, call the recursive function with the given array and ghe range of n (size of the array).
2. Inside that recursive function, repeatedly swap 2 adjacent elements if `arr[i] > arr[i + 1]`. Here, the maximum element of the unsorted array reaches the end if the unsorted array after each recursive call.
3. Each time after step 2, call the recursive again decreasing the range by 1.
4. The recursion will continue until the range (i.e. the size) of the array is reduced to 1. **Base Case:** `if (n == 1) return;`

```cpp
#include <bits/stdc++.h>

using namespace std;

void BubbleSort(int arr[], int n) {
  if (n == 1) return;

  for (int j = 0; j <= n - 2; j++) {
    if (arr[j] > arr[j + 1]) {
      int temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }

  BubbleSort(arr, n - 1);
}

int main() {
  int arr[] = {13, 46, 24, 52, 20, 9};
  int size = sizeof(arr) / sizeof(arr[0]);
  cout << "Before Using Bubble Sort: " << endl;
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;

  BubbleSort(arr, n);

  cout << "After Using Bubble Sort: " << endl;
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
}
```

**Time Complexity:** O(N<sup>2</sup>), (Where N = size of the array), for the worst, and average cases.

**Reason:**
If we carefully observe, we can notice that the recursive call, is occurring for n times, and inner loop runs n - 1 times, for the range of size n - 1, the inner loop runs n - 2 times, and so on. SO, the total steps will be approximately the following: (n - 1) + (n - 2) + (n - 3) + .... + 3 + 2 + 1. The summation is approximatiely the sun of the first natural numbers i.e. (n * (n + 2))/2. The precise time complexity will be O(n<sup>2</sup>/2 + n/2). Previously, we have learned that we can ignore the lower values as well as the constant coefficients. So, the time complexity is O(n<sup>2</sup>). Here the value of n is N i.e. the size of the array.

**Space Complexity:** O(N) auxiliary stact space.

### Optimized approach (Reducing time complexity for the best case):

The best case occurs if the given array is already sorted. We can rreduce the time complexity to O(N) by just adding a small check inside the recursive function.

- We will check in the first recursive call if any swao is taken place. If the array is already sorted no swap will occur and we will return from the recursion call.
- Thus the number of recursions will be just 1. And our overall time complexity will be O(N).

```cpp
#include <bits/stdc++.h>
using namespace std;

void bubble_sort(int arr[], int n) {
    // Base Case: range == 1.
    if (n == 1) return;

    int didSwap = 0;
    for (int j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            int temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            didSwap = 1;
        }
    }

    // if no swapping happens.
    if (didSwap == 0) return;

    //Range reduced after recursion:
    bubble_sort(arr, n - 1);
}

int main()
{
    int arr[] = {13, 46, 24, 52, 20, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Before Using Bubble Sort: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    bubble_sort(arr, n);
    cout << "After Using bubble sort: " << "\n";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
    return 0;
}
```

**Time Complexity:** O(N<sup>2</sup>) for the worst and average cases and O(N) for the best case. Here, N = size of the array.

**Space Complexity:** O(N) auxiliary stack space.