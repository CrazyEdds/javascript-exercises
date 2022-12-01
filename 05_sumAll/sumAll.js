const sumAll = function(num1, num2) {
    if (num1 >= 0 && num2 >= 0 && typeof num1 === "number" && typeof num2 === "number") {

        let sum = 0;
        let currentNum = num1;
        while (currentNum) {
            sum += currentNum;
            if (currentNum < num2) {
                currentNum++;
            }
            else if (currentNum > num2) {
                currentNum--;
            }
            else if (currentNum == num2) {
                break;
            }
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
