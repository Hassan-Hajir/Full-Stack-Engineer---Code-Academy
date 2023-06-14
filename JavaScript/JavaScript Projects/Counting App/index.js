let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;
let resetCount = count - count;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  // let countStr = count + " - ";
  saveEl.textContent += count + " - ";
  countEl.textContent = 0; //reseting
  count = 0;
}
