const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn"); //document.getElementById("btn");
const color = document.querySelector(".color");
const text = document.querySelector("#text");

btn.addEventListener("click", changeColor);

// To change the colours

function changeColor() {
  let randomNumber1 = Math.floor(Math.random() * hex.length);
  let randomNumber2 = Math.floor(Math.random() * hex.length);
  let randomNumber3 = Math.floor(Math.random() * hex.length);
  let randomNumber4 = Math.floor(Math.random() * hex.length);
  let randomNumber5 = Math.floor(Math.random() * hex.length);
  let randomNumber6 = Math.floor(Math.random() * hex.length);

  let hexColor = "#";
  let hex1 = hex[randomNumber1];
  let hex2 = hex[randomNumber2];
  let hex3 = hex[randomNumber3];
  let hex4 = hex[randomNumber4];
  let hex5 = hex[randomNumber5];
  let hex6 = hex[randomNumber6];

  let finalHex = hexColor + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;

  document.body.style.backgroundColor = finalHex;
  color.textContent = finalHex;
  sameColor(finalHex);
}

//If class container is same color as the random color

function sameColor(finalHex) {
  if (finalHex == "#000000") {
    text.style.color = "#FFFFFF";
  }
}
