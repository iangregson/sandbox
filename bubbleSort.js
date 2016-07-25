const arr = [1,5,4,9,7,6,8,3,2]

function bubbleSort(arr) {
    let i, j, limit, temp

    limit = arr.length; while (limit--) {
        for (i = 0, j = 1; i < limit; ++i, ++j) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSort(arr));
