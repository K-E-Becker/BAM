"use strict";

let switch1 = false;
let switch2 = false;
let switch3 = false;
let switch4 = false;
let switch5 = false;
let switch6 = false;
let switch7 = false;
let switch8 = false;
let switch9 = false;
let switch10 = false;
let carry = false;
let result = 0;

//handle the switch between on and off for switch 1

const handleSwitch1 = () => {
  switch1 = !switch1;
};

const handleSwitch2 = () => {
  switch2 = !switch2;
};

const handleSwitch3 = () => {
  switch3 = !switch3;
};

const handleSwitch4 = () => {
  switch4 = !switch4;
};

const handleSwitch5 = () => {
  switch5 = !switch5;
};

const handleSwitch6 = () => {
  switch6 = !switch6;
};

const handleSwitch7 = () => {
  switch7 = !switch7;
};

const handleSwitch8 = () => {
  switch8 = !switch8;
};

const handleSwitch9 = () => {
  switch9 = !switch9;
};

const handleSwitch10 = () => {
  switch10 = !switch10;
};

const getSwitchValue1 = () => {
  let output = "";

  if (switch1) output += "1";
  else output += "0";

  if (switch2) output += "1";
  else output += "0";

  if (switch3) output += "1";
  else output += "0";

  if (switch4) output += "1";
  else output += "0";

  if (switch5) output += "1";
  else output += "0";

  return output;
};

const getSwitchValue2 = () => {
  let output = "";

  if (switch6) output += "1";
  else output += "0";

  if (switch7) output += "1";
  else output += "0";

  if (switch8) output += "1";
  else output += "0";

  if (switch9) output += "1";
  else output += "0";

  if (switch10) output += "1";
  else output += "0";

  return output;
};

const addBinaryNumbers = (switchValue1, switchValue2) => {
  const decimal1 = parseInt(switchValue1, 2);
  const decimal2 = parseInt(switchValue2, 2);
  const decimalSum = decimal1 + decimal2;
  const binarySum = decimalSum.toString(2);

  return binarySum;
};

document.querySelector("#switch1").addEventListener("change", handleSwitch1);
document.querySelector("#switch2").addEventListener("change", handleSwitch2);
document.querySelector("#switch3").addEventListener("change", handleSwitch3);
document.querySelector("#switch4").addEventListener("change", handleSwitch4);
document.querySelector("#switch5").addEventListener("change", handleSwitch5);
document.querySelector("#switch6").addEventListener("change", handleSwitch6);
document.querySelector("#switch7").addEventListener("change", handleSwitch7);
document.querySelector("#switch8").addEventListener("change", handleSwitch8);
document.querySelector("#switch9").addEventListener("change", handleSwitch9);
document.querySelector("#switch10").addEventListener("change", handleSwitch10);
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
