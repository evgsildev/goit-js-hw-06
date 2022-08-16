const getBody = document.querySelector("body");
const getButton = document.querySelector("button");
const textSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

getButton.addEventListener("click", () => {
  getBody.style.backgroundColor = getRandomHexColor();
  textSpan.textContent = getRandomHexColor();
});



