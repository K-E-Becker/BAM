"use strict";

let switch1 = false;
let switch2 = false;
let carry = false;
let result = 0;

//handle the switch between on and off for switch 1
const handleSwitch1 = () => {
  switch1 = !switch1;
};
//handle the switch between on and off for switch 2
const handleSwitch2 = () => {
  switch2 = !switch2;
};

const handleAddition = () => {
  //add switch1, switch2, and if those are over 1...then a carry
  let sum = (switch1 ? 1 : 0) + (switch2 ? 1 : 0) + (carry ? 1 : 0);

  //is there a carry
  let newCarry = sum > 1;

  //decides the new Sum and keeping it in binary
  let newSum = sum % 2;

  carry = newCarry;
  result = newSum;

  updateDom();
};

document.querySelector("#switch1").addEventListener("change", handleSwitch1);
document.querySelector("#switch2").addEventListener("change", handleSwitch2);
document.querySelector("#addButton").addEventListener("click", handleAddition);

function updateDom() {
  document.querySelector("#result").textContent = result.toString();
}
