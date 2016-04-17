var LeapYear = require('../src/LeapYear');

describe("Leap Year calculator", function() {

  var leapYearCalc;

  beforeEach(function() {
    leapYearCalc = new LeapYear();
  });

  it("returns true when the year is divisible by 4 (i.e: 1996)", function() {
    expect(leapYearCalc.calculate(1996)).toBe(true);
  });

  it("returns false when it is not a leap year (i.e: 2001)", function() {
    expect(leapYearCalc.calculate(2001)).toBe(false);
  });

});