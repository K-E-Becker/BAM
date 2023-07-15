"use strict";

const switchesArr = Array.from({ length: 20 }, () => false);

const handleSwitch = (index) => {
  switchesArr[index] = !switchesArr[index];
};

const getSwitchValue1 = () => {
  let output = "";

  for (let i = 0; i < 10; i++) {
    output += switchesArr[i] ? "1" : "0";
  }

  return output;
};

const getSwitchValue2 = () => {
  let output = "";

  for (let i = 10; i < 20; i++) {
    output += switchesArr[i] ? "1" : "0";
  }

  return output;
};

const addBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = parseInt(switchValue1, 2);
  const decimal2 = parseInt(switchValue2, 2);
  const decimalSum = decimal1 + decimal2;
  const binarySum = decimalSum.toString(2);

  return binarySum;
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
};

document
  .querySelectorAll(".switch input[type='checkbox']")
  .forEach((element, index) => {
    element.addEventListener("change", () => handleSwitch(index));
  });

document.querySelector("#addButton").addEventListener("click", () => {
  const switchValue1 = getSwitchValue1();
  const switchValue2 = getSwitchValue2();
  const totalBinary = addBinaryNumbers(switchValue1, switchValue2);
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
});

document.querySelector("#resetButton").addEventListener("click", () => {
  handleReset();
});

function updateDom(
  switchValue1,
  switchValue2,
  totalBinary,
  decimalNumber1,
  decimalNumber2,
  totalDecimal
) {
  document.querySelector("#resultRow1").textContent = switchValue1;
  document.querySelector("#resultRow2").textContent = switchValue2;
  document.querySelector("#totalBinary").textContent = totalBinary;
  document.querySelector("#decimalResult1").textContent = decimalNumber1;
  document.querySelector("#decimalResult2").textContent = decimalNumber2;
  document.querySelector("#totalDecimal").textContent = totalDecimal;
}
