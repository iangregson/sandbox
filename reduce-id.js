// const ids =
//     [
//         '7eacaad4-6841-11e6-8b77-86f30ca893d3',
//         '7eacad86-6841-11e6-8b77-86f30ca893d3',
//         '7eacaebc-6841-11e6-8b77-86f30ca893d3',
//         '7eacaebc-6841-11e6-8b77-86f30ca893d3',
//         '7eacaebc-6841-11e6-8b77-86f30ca893d3',
//         '7eacafa2-6841-11e6-8b77-86f30ca893d3',
//         '7eacb07e-6841-11e6-8b77-86f30ca893d3',
//         '7eacb07e-6841-11e6-8b77-86f30ca893d3',
//         '7eacb07e-6841-11e6-8b77-86f30ca893d3',
//         '7eacb07e-6841-11e6-8b77-86f30ca893d3',
//         '7eacb07e-6841-11e6-8b77-86f30ca893d3',
//         '7eacb07e-6841-11e6-8b77-86f30ca893d3',
//         '7eacb15a-6841-11e6-8b77-86f30ca893d3',
//         '7eacb416-6841-11e6-8b77-86f30ca893d3',
//         '7eacb4fc-6841-11e6-8b77-86f30ca893d3',
//         '7eacb5c4-6841-11e6-8b77-86f30ca893d3',
//         '7eacb68c-6841-11e6-8b77-86f30ca893d3'
//     ]

const ids = [
    'jim',
    'jim',
    'jim',
    'jim',
    'jim',
    'sue',
    'sue',    
    'bob',
    'bob',
    'bob',
    'bob',
    'sue',
    'sue',
    'sue',
    'sue',
    'jim',
    'jim',
    'jim',
    'sue',
    'sue'
]

let unique = new Set(ids),
    a = []

unique.forEach(uid => a.push(ids.filter(id => id === uid)));

console.log(a);