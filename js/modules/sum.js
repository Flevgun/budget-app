import { appData } from '../appData.js';

export function sum() {
  let monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    sumInput = document.querySelector("#sum"),
    percentInput = document.querySelector("#percent");

  sumInput.addEventListener("input", () => {
    if (appData.saving == true) {
      let currentSum = +sumInput.value,
        currentPercent = +percentInput.value;
      appData.monthIncome = (currentSum / 100 / 12) * currentPercent;
      appData.yearIncome = (currentSum / 100) * currentPercent;
      monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  });
  percentInput.addEventListener("input", () => {
    if (appData.saving == true) {
      let currentSum = +sumInput.value,
        currentPercent = +percentInput.value;
      appData.monthIncome = (currentSum / 100 / 12) * currentPercent;
      appData.yearIncome = (currentSum / 100) * currentPercent;
      monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  });
}
