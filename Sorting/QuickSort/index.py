def partition(arr, low, high):
    pivot, i, j = arr[low], low, high

    while i < j:
        while arr[i] <= pivot and i <= high - 1:
            i += 1
        while arr[j] > pivot and j >= low + 1:
            j -= 1
        
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[low], arr[j] = arr[j], arr[low]
    return j

def qs(arr, low, high):
    if low < high:
        pIndex = partition(arr, low, high)
        qs(arr, low, pIndex - 1)
        qs(arr, pIndex + 1, high)

def QuickSort():
    initial_values = [13, 46, 24, 52, 20, 9]
    print("Before Sorting")
    for a in initial_values:
        print(a, end=" ")
    print()
    
    qs(initial_values, 0, len(initial_values) - 1)

    print("After Sorting")
    for a in initial_values:
        print(a, end=" ")

if __name__ == "__main__":
    QuickSort()
