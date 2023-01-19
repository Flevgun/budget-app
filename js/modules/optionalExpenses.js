import { appData } from "../appData.js";
export function OptionalExpenses() {
  let optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    optionalExpensesInputs = document.querySelectorAll(
      ".optionalexpenses-item"
    ),
    optionalExpensesBtn = document.querySelector(".optionalexpenses-btn");

  optionalExpensesBtn.addEventListener("click", () => {
    for (let i = 0; i < optionalExpensesInputs.length; i++) {
      let optAnswer = optionalExpensesInputs[i].value;
      appData.optionalExpenses[i] = optAnswer;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
  });
}
