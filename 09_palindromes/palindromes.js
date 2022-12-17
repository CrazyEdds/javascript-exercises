const palindromes = function(string) {
    let filteredArray = string.toLowerCase()
    .split("")
    .filter((char) => {
        return /[a-z]/i.test(char);
    });
    return filteredArray.every((letter, index, arr) => {
        if (letter != arr[arr.length - index - 1]) {
            return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = palindromes;
