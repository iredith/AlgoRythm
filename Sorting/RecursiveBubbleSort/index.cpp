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