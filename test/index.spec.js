const { expect } = require("chai");
const {
  addBinaryNumbers,
  subtractBinaryNumbers,
  multiplyBinaryNumbers,
  divideBinaryNumbers,
} = require("./index");

describe("Add Binary Numbers", () => {
  it("adds two binary numbers together resulting in a new binary number", () => {
    const switchValue1 = "1010";
    const switchValue2 = "110";
    const solutionBinary = addBinaryNumbers(switchValue1, switchValue2);
    expect(solutionBinary).to.equal("10000");
  });
});

describe("Subtract Binary Numbers", () => {
  it("should subtract one binary number from another resulting in a new binary number", () => {
    const switchValue1 = "1010";
    const switchValue2 = "110";
    const subtractBinary = subtractBinaryNumbers(switchValue1, switchValue2);
    expect(subtractBinary).to.equal("100");
  });
});

describe("Multiply Binary Numbers", () => {
  it("should multiply two binary numbers together resulting in a new binary number", () => {
    const switchValue1 = "1010";
    const switchValue2 = "110";
    const multiplyBinary = multiplyBinaryNumbers(switchValue1, switchValue2);
    expect(multiplyBinary).to.equal("111100");
  });
});
