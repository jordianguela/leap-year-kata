var LeapYear = require('../src/LeapYear');

describe("Leap Year calculator", function() {

  var leapYearCalc;

  beforeEach(function() {
    leapYearCalc = new LeapYear();
  });

  it("returns true when the year is divisible by 4 (i.e: 1996)", function() {
    expect(leapYearCalc.calculate(1996)).toBe(true);
  });

  it("returns true when the year is divisible by 400 (i.e: 2000)", function() {
    expect(leapYearCalc.calculate(2000)).toBe(true);
  });

  it("returns false when the year is divisible by 100 but not 400 (i.e: 1900)", function() {
    expect(leapYearCalc.calculate(1900)).toBe(false);
  });

  it("returns false when the year is not a leap year (i.e: 2001)", function() {
    expect(leapYearCalc.calculate(2001)).toBe(false);
  });

});