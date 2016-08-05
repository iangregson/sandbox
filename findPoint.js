function parseInput(_input) {
    _input = _input.split('\n')
    const t = _input[0],
          test1 = {
              p: _input[1].split(' ').slice(0,2),
              q: _input[1].split(' ').slice(2,4)
          },
          test2 = {
              p: _input[2].split(' ').slice(0,2),
              q: _input[2].split(' ').slice(2,4)
          }

    let tests = []

    for (var i = 1; i <= t; i++) {
        tests.push({ p: _input[i].split(' ').slice(0,2), q: _input[i].split(' ').slice(2,4) })
    }

    return { t, tests }
}

function stringy(...a) {
    return a.toString().replace(/,/g, ' ')
}

function findPoint(test) {
    let x = test.q[0] * 2 - test.p[0],
        y = test.q[1] * 2 - test.p[1]

    return [x, y]
}

const input = `2
0 0 1 1
1 1 2 2`

let { t, tests } = parseInput(input)

tests.forEach(function(e) {
    console.log(stringy(findPoint(e)))
})

