const input = `3
abcdde
baccd
eeabg`

let set = new Set(
    input.split('\n')
         .splice(1)
         .map(rock => rock.split(''))
         .reduce(
             (previous, current) => current.filter(
                 e => previous.includes(e)
             )
         )
).size

console.log(set);
