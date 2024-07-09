const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calcBtn = document.getElementById("calc-btn");
const resultDiv = document.getElementById("result");

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  const result = num1 + num2; // default operation is addition
  resultDiv.innerText = `Result: ${result}`;
});
