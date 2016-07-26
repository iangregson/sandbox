const y = [1,5,4,8,9,7,6,3,2]

function quicksort(arr) {
    //end recursion
    if (arr.length <=1) return arr

    let l = arr.length,
        pivotPosition = Math.floor(l / 2),
        pivotValue = arr[pivotPosition],
        less = [],
        same = [],
        more = []

    for (var i = 0; i < l; i++) {
        if (arr[i] === pivotValue) {
            same.push(arr[i])
        } else if (arr[i] < pivotValue) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }

    return quicksort(less).concat(same, quicksort(more))
}

console.log(quicksort(y));