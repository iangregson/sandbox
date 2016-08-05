const input = `4
6
1 4 5 7 9 12`

let _input = input.split('\n'),
    V = _input[0],
    n = _input[1],
    a = _input[2].split(' ').map((i) => parseInt(i))

function findPosition(value, arr) {
    let position
    arr.forEach(function(v, i, a) {
        if (v == value) position = i
    });

    return position
}

console.log(findPosition(V, a));