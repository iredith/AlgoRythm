let initial_array = [13, 46, 24, 52, 20, 9];

console.log("Before Sorting");
console.log(initial_array);

function partition(arr, low, high) {
  let pivot = arr[low], i = low, j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && i >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function qs(arr, low, high) {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    qs(arr, low, pIndex - 1);
    qs(arr, pIndex + 1, high);
  }
}

function QuickSort(arr) {
  const arr_length = arr.length;

  qs(arr, 0, arr_length - 1);

  console.log("After Sorting");
  console.log(arr);
}

QuickSort(initial_array);
