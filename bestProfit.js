var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// console.log(getMaxProfit(stockPricesYesterday))
// returns 6 (buying for $5 and selling for $11)

function getMaxProfit(a) {
    return findMax(a) - findMin(a)
}

function findMax(a) {
    let max = a.reduce((prev, curr) => (curr > prev) ? curr : prev, 0),
        index = a.indexOf(max)
    a.splice(index, 1)
    return { max, index, a }
}

function findMin(a) {
    let min = a.reduce((prev, curr) => (curr < prev) ? curr : prev, findMax(a).max),
        index = a.indexOf(min)
    a.splice(index, 1)
    return { min, index, a }
}

console.log(findMax(stockPricesYesterday))
console.log(stockPricesYesterday)
console.log(findMin(stockPricesYesterday))
console.log(stockPricesYesterday)
