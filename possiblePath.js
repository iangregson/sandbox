function parseInput(_input) {
    _input = _input.split('\n')
    let n = parseInt(_input.shift()),
        tests = _input.map(
            (test) => test.split(' ').map(
                (i) => Math.abs(parseInt(i))
            ))
    
    return { n, tests }
}

// Find the Greatest Common Divisor
// This finds GCD using Euclidian algorithm
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b)
}

function possiblePath(test) {
    console.log(test);
    if (gcd(test[0], test[1]) == gcd(test[2], test[3])){
        return true
    } else {
        return false
    }
}

var input = `3
1 1 2 3
2 1 2 3
3 3 1 1`

let { n, tests } = parseInput(input),
    [test1, test2, test3] = tests

tests.forEach(
    (e) => console.log(possiblePath(e) ? 'YES' : 'NO')
)
