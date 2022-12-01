const removeFromArray = function(numbers, ...oddNumbers) {
    return numbers.filter((num) => {
        return !(oddNumbers.includes(num));
    });
};

// Do not edit below this line
module.exports = removeFromArray;
