const rangeInput = document.querySelector("input");
const textSpan = document.querySelector("#text")

rangeInput.addEventListener("input", () => {
    textSpan.style.fontSize = `${rangeInput.value}px`;
})

