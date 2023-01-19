import { appData } from '../appData.js';

export function Expenses() {
  let expensesInputs = document.querySelectorAll(".expenses-item"),
    expensesValue = document.querySelector(".expenses-value"),
    expensesBtn = document.querySelector(".expenses-item-btn");

  expensesBtn.addEventListener("click", () => {
    let sum = 0;

    for (let i = 0; i < expensesInputs.length; i++) {
      let a = expensesInputs[i].value;
      let b = expensesInputs[++i].value;

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        appData.expenses[a] = b;
        sum += +b;
      } else {
        i = i - 1;
      }
    }
    expensesValue.textContent = sum;
  });
}
