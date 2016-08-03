const firstWords = ['cinema', 'host', 'aba', 'train', 'czrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldl'],
      secondWords = ['iceman', 'shot', 'bab', 'rain', 'czrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldlczrxgwfqumjvbowdyldl']

function processData(firstWords, secondWords) {
    firstWords.forEach(
       (e, i) => console.log(isAnagram(e, secondWords[i]) ? 1 : 0)
    )
}

function isAnagram(...words) {
    [ s1, s2 ] = words
    if (sort(s1) === sort(s2)) return true
    else return false
}

function sort(word) {
    return word.split('').sort().toString()
}

/////////////////////////////////

processData(firstWords, secondWords)
