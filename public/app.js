const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input");

const resetBtn = document.querySelector(".reset");

const formatError = document.querySelector(".format-error");
formatError.style.display = "none";

const convert = (number, base) => {
  /* if (isNaN(number) || number == "") {
    formatError.style.display = "block";
    formatError.classList.add("shake");
    formatError.style.backgroundColor = "#FFD523";
    formatError.innerHTML =
      "<i class='fas fa-times'></i> Please enter a valid number";
    return "";
  } */
  // TODO:Handle hex inputs
  return parseInt(number).toString(base);
};

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    const formData = new FormData(form);
    let value;
    switch (form.id) {
      case "decimal":
        value = formData.get("decimal");
        inputs[0].value = parseInt(value); // decimal input
        inputs[1].value = convert(value, 2); // binary input
        inputs[2].value = convert(value, 8); // octal input
        inputs[3].value = convert(value, 16); // hexadecimal input

        console.log(inputs);
        break;
      case "binary":
        value = formData.get("binary");
        inputs[0].value = convert(value, 10); // decimal input
        inputs[1].value = parseInt(value); // binary input
        inputs[2].value = convert(value, 8); // octal input
        inputs[3].value = convert(value, 16); // hexadecimal input
        break;
      case "hex":
        value = formData.get("hex");
        inputs[0].value = parseInt(value).toString(10); // decimal input
        inputs[1].value = parseInt(value).toString(2); // binary input
        inputs[2].value = convert(value, 8); // octal input
        inputs[3].value = parseInt(value); // hexadecimal input
        break;
      case "octal":
        value = formData.get("octal");
        inputs[0].value = convert(value, 10); // decimal input
        inputs[1].value = convert(value, 2); // binary input
        inputs[2].value = parseInt(value); // octal input
        inputs[3].value = convert(value, 16); // hexadecimal input
    }
    e.preventDefault();
  });
});

resetBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    formatError.style.display = "none";
    input.value = "";
  });
});
