const repeatString = function(string, num) {
    let wordChain = "";
    if (num >= 0) {
        for (let runs = num; runs > 0; runs--) {
            wordChain += string;
        }
        return wordChain;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
