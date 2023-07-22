"use strict";

const addBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = parseInt(switchValue1, 2);
  const decimal2 = parseInt(switchValue2, 2);
  const decimalSum = decimal1 + decimal2;
  const binarySum = decimalSum.toString(2);

  return binarySum;
};

const subtractBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = parseInt(switchValue1, 2);
  const decimal2 = parseInt(switchValue2, 2);
  const decimalSum = decimal1 - decimal2;
  const binarySum = decimalSum.toString(2);

  return binarySum;
};

const multiplyBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = BigInt(parseInt(switchValue1, 2));
  const decimal2 = BigInt(parseInt(switchValue2, 2));
  const decimalProduct = decimal1 * decimal2;
  const binaryProduct = decimalProduct.toString(2);

  return binaryProduct;
};

const divideBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = parseInt(switchValue1, 2);
  const decimal2 = parseInt(switchValue2, 2);

  if (decimal2 === 0) {
    return "Division by zero";
  }

  const decimalQuotient = Math.floor(decimal1 / decimal2);
  const binaryQuotient = decimalQuotient.toString(2);

  return binaryQuotient;
};

module.exports = {
  addBinaryNumbers,
  subtractBinaryNumbers,
  multiplyBinaryNumbers,
  divideBinaryNumbers,
};
