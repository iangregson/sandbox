function insertionSort(items = []) {
    const len = items.length
    let value,      // value being compared
        i,          // index for the unsorted section
        j           // index for the sorted section

    for (i = 0; i < len; i++) {     // iterate over the length of the collection

        value = items[i]        // store the current value for the iteration 

        // When value in the sorted index is great than the value
        // in the unsorted section, shift all the items in the sorted
        // section over by one. This creates a gap for the inserted value.
        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j]        
        }
        // drop the current value into the gap
        items[j+1] = value
    }
    return items
}

function rightInsertionSort(items = []) {
    const len = items.length
    let value,      // value being compared
        i,          // index for the unsorted section
        j           // index for the sorted section

    for (i = len - 1; i >= 0; i--) {     // iterate over the length of the collection

        value = items[i]        // store the current value for the iteration 

        // When value in the sorted index is great than the value
        // in the unsorted section, shift all the items in the sorted
        // section over by one. This creates a gap for the inserted value.
        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j]        
        }
        // drop the current value into the gap
        items[j+1] = value
    }
    return items
}

function parseInput(_input = []) {
    _input = _input.split('\n')

    let n = _input[0],
        a = _input[1].split(' ').map((i) => parseInt(i))
    
    return {a, n}
}

function stringy(a) {
    return a.toString().replace(/,/g, ' ')
}

const input = `6
1 4 3 5 6 2`

let { a, n } = parseInput(input)

console.log(stringy(insertionSort(a)))

