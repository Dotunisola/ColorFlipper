const colors = ["green", "#123454", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn"); //document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", changeColor);

// To change Colors.
function changeColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  console.log(randomIndex);
  console.log(colors[randomIndex]);
  color.textContent = colors[randomIndex];
  return (document.body.style.backgroundColor = colors[randomIndex]);
}
