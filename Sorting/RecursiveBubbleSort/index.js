let initial_array = [13, 46, 24, 52, 20, 9];

console.log("Before Sorting");
console.log(initial_array);

function BubbleSort(arr, n) {
  if (n === 1) return;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }

  BubbleSort(arr, n - 1);
}

function RecursiveBubbleSort(arr) {
  const arr_length = arr.length;

  BubbleSort(arr, arr_length);

  console.log("After Sorting");
  console.log(arr);
}

RecursiveBubbleSort(initial_array);
