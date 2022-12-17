const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
};

const multiply = function(numbers) {
  let product = numbers.reduce((total, num) => {
    return total * num;
  });
  return product;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
  let result = 1;

  if (num !== 0 ) {
    for (let currentNum = num; currentNum > 0; currentNum--) {
      result *= currentNum;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
