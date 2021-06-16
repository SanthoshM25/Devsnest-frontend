const input = document.querySelector(".input");
const output = document.querySelector(".outputValue");
const keypad = document.querySelector(".keypad");
const equalsBtn = document.querySelector(".equals");
const clear = document.querySelector(".clear");

keypad.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (isButton) {
    if (e.target.innerHTML !== "=") {
      input.value = input.value + e.target.innerHTML;
    }
  }
});

equalsBtn.addEventListener("click", () => {
  const val = eval(input.value);
  output.innerHTML = val;
});

input.addEventListener("keyup", (e) => {
  if (e.which === 13) {
    const val = eval(input.value);
    output.innerHTML = val;
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
  input.focus();
});
