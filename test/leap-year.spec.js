var LeapYear = require('../src/LeapYear');

describe("Leap Year calculator", function() {

  it("returns true when the year is divisible by 4 (i.e: 1996)", function() {
    var leapYearCalc = new LeapYear();
    expect(leapYearCalc.calculate(1996)).toBe(true);
  });

  it("returns false when it is not a leap year (i.e: 2001)", function() {
    var leapYearCalc = new LeapYear();
    expect(leapYearCalc.calculate(2001)).toBe(false);
  });

});