const palindromes = function (str) {
    let regex = /[\W_]/g;
    let lowerCaseRegexString = str.toLowerCase().replace(regex, "");
    let reversedString = lowerCaseRegexString.split("").reverse().join("");
    return reversedString === lowerCaseRegexString;

};

// Do not edit below this line
module.exports = palindromes;
