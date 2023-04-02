const h1Element = document.querySelector(".logata");

let numberValue = parseInt(h1Element.textContent);


inputElement.addEventListener("input", function (event) {
  const inputValue = parseInt(event.target.value);

  const operator = document.querySelector("select").value;

  if (operator === "+") {
    numberValue += inputValue;
  } else if (operator === "-") {
    numberValue -= inputValue;
  } else if (operator === "/") {
    numberValue /= inputValue;
  } else {
    console.error("Invalid operator");
  }

  h1Element.textContent = numberValue;
});

const result = numberValue * 2;

console.log(result);
