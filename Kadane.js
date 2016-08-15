// Find two unique, contiguous arrays in a larger integer arrays
// that have the maximum difference

// 1. Parse the input
// 2. Find the largest sub array and remove it (kadane algorithm)
// 3. Find the smallest sub array in what's left and take it 
// 4. Sum each array
// 5. Calculate the difference

function maximumDifference(v) {
    let { largest, remainingArray } = kadaneAlgorithm(v, 3, 'largest'),
        { smallest } = kadaneAlgorithm(remainingArray, 3, 'smallest')
    return Math.abs(sumOf(largest) - sumOf(smallest))
}

function kadaneAlgorithm(arr, subArrayLength, smallOrLarge) {
    
}

function sumOf(arr) {
    let total
    arr.forEach(e => total += e)
    return total
}

const v = [3, -5, 1, -2, 8, -2, 3, -2, 1];

