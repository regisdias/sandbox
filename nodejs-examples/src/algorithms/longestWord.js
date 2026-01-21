function LongestWord(sen) {
    // 1. Remove punctuation using regex, keeping only letters and numbers
    // 2. Split into array of words
    // 3. Sort by length (descending)
    // 4. Return the first one
    const arr = sen.replace(/[^\w\s]/gi, '').split(' ');

    let longest = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

module.exports = LongestWord;
