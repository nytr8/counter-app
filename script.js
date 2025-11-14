let plus = document.querySelector("#plus-div");
let minus = document.querySelector("#minus-div");
let numberr = document.querySelector("#number");
let btn = document.querySelector("button");

let counter = 0;

plus.addEventListener("click", function () {
  if (counter < 100) {
    counter++;
    numberr.innerHTML = counter;
  }
});
minus.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    numberr.innerHTML = counter;
  }
});

btn.addEventListener("click", function () {
  counter = 0;
  numberr.innerHTML = counter;
});
