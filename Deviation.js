function findMax(a) {
    return a.reduce((prev, curr) => (curr > prev) ? curr : prev, 0)
}

function findMin(a) {
    return a.reduce((prev, curr) => (curr < prev) ? curr : prev, findMax(a))
}

function medians(v, d) {
    let median = []
    v.forEach((e, i) => median.push(findMax(v.slice(i, d + i)) - findMin(v.slice(i, d + i))))
    return median
}

const v = [6, 9, 4, 7, 4, 1],
      d = 3

console.log(findMax(medians(v, d)));