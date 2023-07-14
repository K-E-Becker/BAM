"use strict";

let switch1 = false;
let switch2 = false;
let switch3 = false;
let switch4 = false;
let switch5 = false;
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

const handleAddition = () => {
  // add switch values
  let sum =
    (switch1 ? 1 : 0) +
    (switch2 ? 1 : 0) +
    (switch3 ? 1 : 0) +
    (switch4 ? 1 : 0) +
    (switch5 ? 1 : 0);

  // is there a carry
  let newCarry = sum > 1;

  // decides the new Sum and keeping it in binary
  let newSum = sum % 2;

  carry = newCarry;
  result = newSum;

  // this fixed a performance issue
  setTimeout(updateDom, 0);
};

document.querySelector("#switch1").addEventListener("change", handleSwitch1);
document.querySelector("#switch2").addEventListener("change", handleSwitch2);
document.querySelector("#switch3").addEventListener("change", handleSwitch3);
document.querySelector("#switch4").addEventListener("change", handleSwitch4);
document.querySelector("#switch5").addEventListener("change", handleSwitch5);
document.querySelector("#addButton").addEventListener("click", handleAddition);

function updateDom() {
  document.querySelector("#result").textContent = result;
}
