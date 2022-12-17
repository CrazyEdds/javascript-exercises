const fibonacci = function(pos) {
    if (pos < 0) {
        return "OOPS";
    }
    else {
        let fib = [1, 1];
        while (fib.length < pos) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
        return fib[pos - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
