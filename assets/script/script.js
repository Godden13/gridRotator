const grid = [1, 4, 7, 8, 9, 6, 3, 2];
const rotateButton = document.getElementById("num5");
const antiRotateButton = document.querySelectorAll(".num");
const button1 = document.getElementById("num1");
const button2 = document.getElementById("num2");
const button3 = document.getElementById("num3");
const button4 = document.getElementById("num4");
const button6 = document.getElementById("num6");
const button7 = document.getElementById("num7");
const button8 = document.getElementById("num8");
const button9 = document.getElementById("num9");
let changedValue;

function clockwise() {
  changedValue = grid.shift();
  grid.push(changedValue);
  paint();
}

function anticlockwise() {
  changedValue = grid.pop();
  console.log(changedValue);
  grid.unshift(changedValue);
  paint();
}

function paint() {
  button1.innerHTML = grid[0];
  button2.innerHTML = grid[7];
  button3.innerHTML = grid[6];
  button4.innerHTML = grid[1];
  button6.innerHTML = grid[5];
  button7.innerHTML = grid[2];
  button8.innerHTML = grid[3];
  button9.innerHTML = grid[4];
}

rotateButton.addEventListener("click", clockwise);
for (const i of antiRotateButton) {
  i.addEventListener("click", anticlockwise);
}
// map filter reduce
