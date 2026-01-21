function BracketMatcher(str) {
    let stack = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack++;
        } else if (str[i] === ')') {
            if (stack === 0) return 0;
            stack--;
        }
    }

    return stack === 0 ? 1 : 0;
}

module.exports = BracketMatcher;
