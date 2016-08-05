const input = `2
acxz
bcxz`

function parseInput(_input) {
    _input = _input.split(/\n/g)

    const T = _input.shift(),
          tests = _input
    
    return { T, tests }
}

function isFunny(N, S, R) {
    let successfulComparison = 0
    for (var i = 0; i < N - 1; i++) {
        if (Math.abs(S.charCodeAt(i + 1) - S.charCodeAt(i)) === Math.abs(R.charCodeAt(i + 1) - R.charCodeAt(i))) {
            successfulComparison++
        } else {
            break
        }
    }

    return successfulComparison === N - 1 ? true : false
}

function reverse(s) {
    return s.split('').reverse().join('')
}

function splitString(s) {
    const N = s.length,
          S = s,
          R = reverse(s)

    return { N, S, R }
}

const { T, tests } = parseInput(input)

tests.forEach(
   (test, i) => {
    let { N, S, R } = splitString(tests[i])
    console.log(isFunny(N, S, R) ? 'Funny' : 'Not Funny')
   }
)
