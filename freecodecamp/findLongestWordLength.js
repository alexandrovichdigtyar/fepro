function findLongestWordLength(str) {
    str = str.split(" ");
    return str.reduce((currentValue, str) => (str.length > currentValue ? currentValue = str.length : currentValue), 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");