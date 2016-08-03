function checkBalanced(s) {
    const parens = '[]{}()'

    let stack = [],
        i, c, bracePosition

    for (i = 0; c = s.charAt(i); i++) {
        bracePosition = parens.indexOf(c)

        if (bracePosition === -1) continue
        
        if (bracePosition % 2 === 0) stack.push(bracePosition + 1)
        else if (stack.pop() !== bracePosition) return false
    }
    return stack.length === 0
}

const expressions = [')(){}', '[]({})', '([])', '{()[]}', '([)]']

expressions.forEach(
    string => console.log(checkBalanced(string) ? 1 : 0) 
)
