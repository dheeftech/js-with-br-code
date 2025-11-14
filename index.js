// const min = 50;
// const max = 100;
// let rundomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(rundomNum);
//grabbing variables

const roll = document.getElementById("roll");
const my_label1 = document.getElementById("my_label1");
const my_label2 = document.getElementById("my_label2");
const my_label3 = document.getElementById("my_label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

roll.addEventListener("click", () => {
  randomNum1 = Math.floor(Math.random() * max + min);
  randomNum2 = Math.floor(Math.random() * max + min);
  randomNum3 = Math.floor(Math.random() * max + min);
  my_label1.textContent = randomNum1;
  my_label2.textContent = randomNum2;
  my_label3.textContent = randomNum3;
});
