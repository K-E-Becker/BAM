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
