function LeapYear() {
};

LeapYear.prototype.calculate = function(year) {
  var mod = year % 4
  return mod == 0;
};

module.exports = LeapYear;