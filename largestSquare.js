const input = `11
38 751
344 734
165 635
297 667
917 264
544 642
254 914
612 50`

function parseInput(_input) {
    _input = _input.split('\n')
    
    let T = _input.shift(),
        tests = _input.map(
            (test) => test.split(' ').map(i => parseInt(i))
        )

    return { T, tests } 
}

function divide(area, l) {
    if (area / (l*l) < 2) return l
    l++
    return divide(area, l)
}

function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b)
}

const { T, tests } = parseInput(input)

tests.forEach(
    test => {
        console.log((test[0] / gcd(test[0], test[1])) * (test[1] / gcd(test[0], test[1])))
    }
)
