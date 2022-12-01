const reverseString = function(string) {
    let letterArray = string.split("");
    let reversedArray = letterArray.reverse();
    let resultString = reversedArray.join("");
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
