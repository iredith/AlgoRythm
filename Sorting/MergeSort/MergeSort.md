## Bubble Sort

**Problem Statement:** Given an array of **N integers**, write a program to implement the Merge sort.

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

**Solution:**

**Intuition:**

1. Merge Sort is a divide and conquers algorithm, it divides the given array into equal parts and then merges the 2 sorted parts.
2. There are 2 main functions :
    **merge():** This function is used to merge the 2 halves of the array. It assumes that both parts of the array are sorted and merges both of them.
    **mergeSort():** This function divides the array into 2 parts. low to mid and mid + 1 to high where

    ```
    low = leftmost index of the array
    high = rightmost index of the array
    mid = Middle index of the array
    ```
3. We recursively split the array, and go from top-down until all sub-arrays size becomes 1.

**Approach:**

- We will be creating 2 functions mergeSort() and merge().
- MergeSort(arr[], low, high):
    1. In otder to implement merge sort we need to first divide the given array into two halves. Now, if we carefully observe, we need to divide the array and create a seperate array, but we will divide the array's range into halves every time. For example, the given range of the array is 0 to 4(0-based indexing). Now on the first go, we will divide the range into half like (0+4)/2 = 2. So, the range of the left half rangebe 0 to 2 and for the right half, the range will be 3 to 4. Similarly, if the given range is low to high, the range of the two halves will be low to mid and mid + 1 to high, where mid = (low + high)/2. This process will continue until the range size becomes.

    2. So, in mergeSort(), we will divide the array around the middle index(rather than creating a seperate array) by making the recursive call :
        1. mergeSort(arr, low, mid) [*Left half of the array*]
        2. mergeSort(arr, mid + 1, high) [*Right half of the array*]
        where low = leftmost index of the array, high = rightmost index of the array, and mid = middle index of the array.
    
    3. Now, in order to complete the recursive function, we need to write the base as well. We know from Step 2.1, that our recursion ends when thae array has only 1 element left. So, the leftmost index, low, and rightmost index high become the same as they are pointing to a single element.

    **Base Case:** if (low >= high) return;

- merge(arr[], low, mid, high):
    1. In the merge function, we will use a temp array to store the elements of the two sorted arrays after merging. Here, the range of the left array is low to mid and the range for the right half is mid + 1 to high

    2. Now we will take two pointers left and right, where left starts from low and right starts from mid + 1.

    3. Using a while loop(while (left <= mid && right <= high)), we will select two elements, one from each half, and will consider the smallest one among the two. Then we will insert the smallest element in the temp arary.

    4. After that, the left-out elements in both halves will be copied as it is into the temp array.

    5. Now, we iwll just transfer the elements of the temp array to the range low to high in the original array.

```cpp
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int> &arr, int low, int mid, int high) {
    vector<int> temp; // temporary array
    int left = low;      // starting index of left half of arr
    int right = mid + 1;   // starting index of right half of arr

    //storing elements in the temporary array in a sorted manner//

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left]);
            left++;
        }
        else {
            temp.push_back(arr[right]);
            right++;
        }
    }

    // if elements on the left half are still left //

    while (left <= mid) {
        temp.push_back(arr[left]);
        left++;
    }

    //  if elements on the right half are still left //
    while (right <= high) {
        temp.push_back(arr[right]);
        right++;
    }

    // transfering all elements from temporary to arr //
    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

void mergeSort(vector<int> &arr, int low, int high) {
    if (low >= high) return;
    int mid = (low + high) / 2 ;
    mergeSort(arr, low, mid);  // left half
    mergeSort(arr, mid + 1, high); // right half
    merge(arr, low, mid, high);  // merging sorted halves
}

int main() {

    vector<int> arr = {9, 4, 7, 6, 3, 1, 5}  ;
    int n = 7;

    cout << "Before Sorting Array: " << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " "  ;
    }
    cout << endl;
    mergeSort(arr, 0, n - 1);
    cout << "After Sorting Array: " << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " "  ;
    }
    cout << endl;
    return 0 ;
}
```

**Time Complexity:** O(nlogn)

Reason: At each step, we divide the whole array, for that logn and we assume n steps are taken to get sorted array, so overall time complexity will be nlogn

**Space Complexity:** O(n)

Reason: We are using a temporary array to store elements in sorted order

**Auxiliary Space Complexity:** O(n)