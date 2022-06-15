/* Repeat a string x amount of times
*/

const repeatString = function(string, num) {
    let repeatedString = ``;
    if (num < 0) {
        repeatedString = "ERROR"
        return repeatedString;
    }
    while (num > 0) {
        repeatedString += string;
        num--
    }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
