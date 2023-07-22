const { expect } = require("chai");
const {
  addBinaryNumbers,
  subtractBinaryNumbers,
  multiplyBinaryNumbers,
  divideBinaryNumbers,
} = require("./index");

describe("Add Binary Numbers", () => {
  it("adds two binary numbers together resulting in a new binary number", () => {
    const switchValue1 = "110011";
    const switchValue2 = "111000";
    const solutionBinary = addBinaryNumbers(switchValue1, switchValue2);
    expect(solutionBinary).to.equal("1101011");
  });
});

describe("Subtract Binary Numbers", () => {
  it("should subtract one binary number from another resulting in a new binary number", () => {
    const testCases = [
      { switchValue1: "1010", switchValue2: "110", expected: "100" },
    ];

    testCases.forEach(({ switchValue1, switchValue2, expected }) => {
      const result = subtractBinaryNumbers(switchValue1, switchValue2);
      expect(result).to.equal(expected);
    });
  });
});
