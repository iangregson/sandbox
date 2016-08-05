const input = `SOSSPSSQSSOR`

function parseInput(_input) {
    _input = _input.split('')

    let l = _input.length / 3,
        b = []

    for (var i = 0; i < l; i++) {
        b.push(_input.splice(0,3).join(''))
    }

    return b
}

function check(s) {
    let count = 0
    if (s === 'SOS') return 0
    if (s[0] !== 'S') count++
    if (s[1] !== 'O') count++
    if (s[2] !== 'S') count++

    return count
}

let count = 0,
    a = parseInput(input)

a.forEach(
    e => {
        count += check(e)
    }
)

console.log(count);