const leapYears = function(year) {

/* Leap Years are divisble by 4
Leap Years divisible by 100 are not leap years
Leap years that are divisible by 400 are leap years */


// year remaider 4 = 0 leap year and year remainder 100 does not equal 0 or year remainder 400 does equal 0
 return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
