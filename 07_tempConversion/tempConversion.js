const ftoc = function(num) {
f = (num - 32) * .5556;

fhr = Number(f.toFixed(1));

return fhr;

};

const ctof = function(num) {
c = (num * 1.8) + 32;

cls = Number(c.toFixed(1));

return cls;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
