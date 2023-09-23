def BubbleSort(arr, n):
    if n == 1: return
    for i in range(n-1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
    
    BubbleSort(arr, n - 1)

def RecursiveBubbleSort():
    initial_values = [13, 46, 24, 52, 20, 9]
    print("Before Sorting")
    for a in initial_values:
        print(a, end=" ")
    print()
    
    BubbleSort(initial_values, len(initial_values))

    print("After Sorting")
    for a in initial_values:
        print(a, end=" ")

if __name__ == "__main__":
    RecursiveBubbleSort()
