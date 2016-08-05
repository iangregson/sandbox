let input = `10 2 5
1 2 3 5 8 7 6 5 4 3
0
1
2
3
4
5`

let x = input.split('\n'),
    nkq = x[0].split(' '),
    n = parseInt(nkq[0]),
    k = parseInt(nkq[1]),
    q = parseInt(nkq[2]),
    a = x[1].split(' '),
    m = x.slice(2, (2 + q)).map((i) => parseInt(i)),
    rotation = k %= n

// console.log(x);
// console.log(n, k, q);
// console.log(a);
// console.log(m);
// console.log(rotation);

for (var i = 0; i < q; i++) {
    if (m[i] - rotation >= 0) {
        console.log(a[m[i] - rotation]);
    } else {
        console.log(a[m[i] - rotation + n]);
    }
}
