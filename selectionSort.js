const a = [1,5,4,9,7,6,8,3,2]

function selectionSort(arr) {
    let i, j, minIx, minVal, temp

    for (i = 0; i < arr.length; i++) {
        minVal = arr[minIx = i]
        for (j = i + 1; j <arr.length; j++) {
            (arr[j] < minVal) && (minVal = arr[minIx = j])
            temp = arr[i]
            arr[i] = arr[minIx]
            arr[minIx] = temp
        }
    }

    return arr
}

console.log(selectionSort(a));
