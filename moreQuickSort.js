function parseInput(_input = '') {
    _input = _input.split('\n')

    const n = _input[0],
          a = _input[1].split(' ').map(i => parseInt(i))

    return { a, n }
}

function stringy(...a) {
    return a.toString().replace(/,/g, ' ')
}

function quickSort(a) {

    if (a <= 1) return a

    const pivot = a.shift()

    let left = [],
        right = [],
        same = []

    a.forEach(function(e) {
        if (e < pivot) left.push(e)
        if (e > pivot) right.push(e)
        if (e === pivot) same.push(e)
    });
    
    return quickSort(left).concat(pivot, same, quickSort(right))
}

function partition(a) {
    if (a.length <= 1 ) return a

    let pivot = a[0],
        left = []
        right = []
        same = []
    
    a.forEach(function(e) {
        if (e < pivot) left.push(e)
    })

    return left
}

input = `7
5 8 1 3 7 9 2
`
let { a, n } = parseInput(input)

for (var i = 0; i < n; i++) {
    console.log(partition(a));
}
