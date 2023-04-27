const getPercents = require("./index");

describe("tests 0, 30 and 100 percents", () => {
  it("show 30 percent of the number 200 to equal 60", () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  it("should be 0 when the number is 0, and the percentage is 30", () => {
    expect(getPercents(30, 0)).toBe(0);
  });

  it("should be equal to 200 if 100 percent and the number is 200", () => {
    expect(getPercents(100, 200)).toBe(200);
  });
});
