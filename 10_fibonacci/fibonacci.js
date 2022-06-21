const fibonacci = function(num) {
    let fib = [0, 1];
    if (num <= 0) {
        return "OOPS"
    }

    if (typeof(num) == `string`) {
        num = parseInt(num);
    }
    

    for (i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    result = fib[num];
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
