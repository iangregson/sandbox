const family = 
    [
        {
            user: 'Ian',
            age: 29
        },
        {
            user: 'SJ',
            age: 33
        },
        {
            user: 'Alfie',
            age: 7
        },
        {
            user: 'Lily',
            age: 6
        },
        {
            user: 'Lola',
            age: 2
        },
        {
            user: 'Chip',
            age: 4
        },
        {
            user: 'Scruffy',
            age: 3
        },
        {
            user: 'Bella',
            age: 1
        }
    ]

function byAge(familyMember,nextFamilyMember) {
    return familyMember.age > nextFamilyMember.age
}

function sortFamily(family, sortFn) {
    return family.sort(sortFn) 
}

let sortedFamily = sortFamily(family, byAge)

console.log(sortedFamily);