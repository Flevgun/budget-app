import { appData } from '../appData.js';

export function chooseIncome() {
  const incomeValue = document.querySelector(".income-value"),
    chooseIncomeInput = document.querySelector(".choose-income");

  chooseIncomeInput.addEventListener("input", () => {
    const items = chooseIncomeInput.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
  });
}
