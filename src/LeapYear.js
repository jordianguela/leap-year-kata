function LeapYear() {
};

LeapYear.prototype.calculate = function(year) {
  return isDivisibleBy(year, 4) && !isDivisibleBy(year, 100);
};

function isDivisibleBy(number, divisibleBy) {
  var mod = number % divisibleBy;
  return mod == 0;
};

module.exports = LeapYear;