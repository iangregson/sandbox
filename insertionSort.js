const ar = [1,5,4,9,7,6,8,3,2]

function insertionSort(arr) {
    let i, j, k, val, lim = arr.length

    for (i = 0; i < lim; i++) {
        val = arr[j = i]
        k = j - 1
        while (j && arr[k] > val) {
            arr[j--] = arr[k--];
        }
        arr[j] = val
    }

    return arr
}

console.log(insertionSort(ar));
