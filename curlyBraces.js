function checkBalanced(s) {
    const parens = '[]{}()'

    let stack = [],
        i, c, bracePosition

    for (i = 0; c = s.charAt(i); i++) {
        bracePosition = parens.indexOf(c)

        // Get out of this iteration of the loop if this characer isn't a brace
        if (bracePosition === -1) continue

        // If the brace has an even numbered position, let's track the position + 1        
        if (bracePosition % 2 === 0) stack.push(bracePosition + 1)
        // All the odd numbered bracePositions should close a brace that's been added to the tracker 
        // If it doesn't, we can escape the function returning false to indicate the string doesn't have balanced parens
        else if (stack.pop() !== bracePosition) return false
    }
    // if there's nothing in our tracker when we're done, the string can be called balanced
    return stack.length === 0
}

const expressions = [')(){}', '[]({})', '([])', '{()[]}', '([)]']

expressions.forEach(
    string => console.log(checkBalanced(string) ? 1 : 0) 
)
