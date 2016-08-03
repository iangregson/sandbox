const input = `5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB`

let counter = 0

function parseInput(_input) {
    _input = _input.split(/\n/g)

    let T = _input.shift(),
        tests = _input

    return { T, tests }
}

function setCharAt(s = '', i, c) {
    if (i > s.length - 1) return s
    return s.substr(0,i) + c + s.substr(i + 1)
}

function deleteCharAt(s = '', i) {
    if (i > s.length - 1) return s
    return s.substr(0,i) + s.substr(i + 1)
}

function count() {
    counter++
    return counter
}

function beautifyA(s, c = 0) {
    let i = s.search('AA') 
    if (i < 0) return s
    count()
    return beautifyA(deleteCharAt(s, i), c)
}

function beautifyB(s, c = 0) {
    let i = s.search('BB') 
    if (i < 0) return s
    count()
    return beautifyB(deleteCharAt(s, i), c)
}

let { T, tests } = parseInput(input)

tests.forEach(
    (e) => {
        counter = 0
        check(e)
        console.log(counter);
    }
)

function check(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] == s[i+1]) {
            counter++
        }
    }
    return
}