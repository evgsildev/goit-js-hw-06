const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
    if (Number(textInput.value) == 0) {
        textOutput.textContent = "Anonymous";
    } else
    textOutput.textContent = textInput.value;
}
);