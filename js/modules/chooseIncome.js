import { appData } from '../appData.js';

export function ChooseIncome() {
  let incomeValue = document.querySelector(".income-value"),
    chooseIncomeInput = document.querySelector(".choose-income");

  chooseIncomeInput.addEventListener("input", () => {
    let items = chooseIncomeInput.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
  });
}
