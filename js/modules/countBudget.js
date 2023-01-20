import { start } from "./start.js";
import { appData } from "../appData.js";
export function countBudget() {
  window.addEventListener("DOMContentLoaded", () => {
    start();
  });
  let dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    countBtn = document.querySelector(".count-budget-btn");

  countBtn.addEventListener("click", () => {
    if (appData.budget != undefined) {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      dayBudgetValue.textContent = appData.moneyPerDay;
      if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Низкий уровень дохода";
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень дохода";
      } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень дохода";
      } else {
        levelValue.textContent = "Произошла ошибка";
      }
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  });
}
