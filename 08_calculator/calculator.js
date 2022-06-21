const add = function(num, num2) {
  let result = num + num2;
  return result;
};

const subtract = function(num, num2) {
  let result = num - num2;
  return result;
};

const sum = function(array) {
	let result = array.reduce((partialSum, a) => partialSum + a, 0);
  return result;
};

const multiply = function(array) {
  let result = array.reduce( (a, b) => a * b);
  return result;
};

const power = function(a, b) {
  let result = Math.pow(a, b);
  return result;
}

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  };
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
