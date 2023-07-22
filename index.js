"use strict";

const switchesArr = Array.from({ length: 16 }, () => false);

const handleSwitch = (index) => {
  switchesArr[index] = !switchesArr[index];
};

const getSwitchValue1 = () => {
  let output = "";

  for (let i = 0; i < 8; i++) {
    output += switchesArr[i] ? "1" : "0";
  }

  return output;
};

const getSwitchValue2 = () => {
  let output = "";

  for (let i = 8; i < 16; i++) {
    output += switchesArr[i] ? "1" : "0";
  }

  return output;
};

const addBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = BigInt(parseInt(switchValue1, 2));
  const decimal2 = BigInt(parseInt(switchValue2, 2));
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

const updateLightBulbs = (totalBinary) => {
  const bulbsContainer = document.querySelector(".bulbs");
  bulbsContainer.innerHTML = "";

  for (let i = 0; i < totalBinary.length; i++) {
    const bulbValue = totalBinary[i];
    const bulbContainer = document.createElement("div");
    bulbContainer.classList.add("bulb-container");

    const bulbImage = document.createElement("img");
    bulbImage.src = bulbValue === "1" ? "lit.png" : "unlit.png";

    const bulbText = document.createElement("span");
    bulbText.classList.add("bulb-text");
    bulbText.textContent = bulbValue;

    bulbContainer.appendChild(bulbImage);
    bulbContainer.appendChild(bulbText);
    bulbsContainer.appendChild(bulbContainer);
  }
};

const handleReset = () => {
  switchesArr.fill(false);

  const switchElements = document.querySelectorAll(
    ".switch input[type='checkbox']"
  );
  switchElements.forEach((element) => (element.checked = false));

  const resetElements = [
    "#resultRow1",
    "#resultRow2",
    "#totalBinary",
    "#decimalResult1",
    "#decimalResult2",
    "#totalDecimal",
  ].map((selector) => document.querySelector(selector));

  resetElements.forEach((element) => (element.textContent = ""));

  updateLightBulbs("00000000");
  const bulbTextElements = document.querySelectorAll(".bulb-text");
  bulbTextElements.forEach((element) => (element.textContent = ""));
};

document
  .querySelectorAll(".switch input[type='checkbox']")
  .forEach((element, index) => {
    element.addEventListener("change", () => handleSwitch(index));
  });

document.querySelector("#addButton").addEventListener("click", () => {
  const switchValue1 = getSwitchValue1();
  const switchValue2 = getSwitchValue2();
  const operation = document.querySelector(".plus-symbol").value;

  let totalBinary;
  if (operation === "+") {
    totalBinary = addBinaryNumbers(switchValue1, switchValue2);
  } else if (operation === "-") {
    totalBinary = subtractBinaryNumbers(switchValue1, switchValue2);
  } else if (operation === "*") {
    totalBinary = multiplyBinaryNumbers(switchValue1, switchValue2);
  } else if (operation === "/") {
    totalBinary = divideBinaryNumbers(switchValue1, switchValue2);
  } else {
    // Handle invalid operation
    return;
  }

  const decimalNumber1 = parseInt(switchValue1, 2);
  const decimalNumber2 = parseInt(switchValue2, 2);
  const totalDecimal = parseInt(totalBinary, 2);

  updateDom(
    switchValue1,
    switchValue2,
    totalBinary,
    decimalNumber1,
    decimalNumber2,
    totalDecimal
  );
  updateLightBulbs(totalBinary);
});

document.querySelector("#resetButton").addEventListener("click", () => {
  handleReset();
});

const updateDom = (
  switchValue1,
  switchValue2,
  totalBinary,
  decimalNumber1,
  decimalNumber2,
  totalDecimal
) => {
  document.querySelector("#resultRow1").textContent = switchValue1;
  document.querySelector("#resultRow2").textContent = switchValue2;
  document.querySelector("#totalBinary").textContent = totalBinary;
  document.querySelector("#decimalResult1").textContent = decimalNumber1;
  document.querySelector("#decimalResult2").textContent = decimalNumber2;
  document.querySelector("#totalDecimal").textContent = totalDecimal;
};

module.exports = {
  addBinaryNumbers,
  subtractBinaryNumbers,
  multiplyBinaryNumbers,
  divideBinaryNumbers,
};
