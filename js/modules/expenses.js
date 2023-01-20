import { appData } from '../appData.js';

export function expenses() {
  const expensesInputs = document.querySelectorAll(".expenses-item"),
    expensesValue = document.querySelector(".expenses-value"),
    expensesBtn = document.querySelector(".expenses-item-btn");

  expensesBtn.addEventListener("click", () => {
    let sum = 0;

    for (let i = 0; i < expensesInputs.length; i++) {
      const nameExpenses = expensesInputs[i].value;
      const sumExpenses = expensesInputs[++i].value;

      if (
        typeof nameExpenses === "string" &&
        typeof nameExpenses != null &&
        typeof sumExpenses != null &&
        nameExpenses != "" &&
        sumExpenses != "" &&
        nameExpenses.length < 50
      ) {
        appData.expenses[nameExpenses] = sumExpenses;
        sum += +sumExpenses;
      } else {
        i = i - 1;
      }
    }
    expensesValue.textContent = sum;
  });
}
