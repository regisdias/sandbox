const LongestWord = require('../src/algorithms/longestWord');
const BracketMatcher = require('../src/algorithms/bracketMatcher');

describe('Algorithms', () => {
    describe('LongestWord', () => {
        test('should return the longest word', () => {
            expect(LongestWord("fun&!! time")).toBe("time");
            expect(LongestWord("I love dogs")).toBe("love");
        });
    });

    describe('BracketMatcher', () => {
        test('should return 1 for correct brackets', () => {
            expect(BracketMatcher("(coder)(byte))")).toBe(0);
            expect(BracketMatcher("(c(oder)) b(yte)")).toBe(1);
        });
    });
});
