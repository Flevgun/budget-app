import { appData } from '../appData.js';

export function Start() {
    let money, time;

  let startBtn = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


  startBtn.addEventListener("click", () => {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет", "");
    }
    appData.budget = money;
    budgetValue.textContent = money.toFixed();
    appData.timeData = time;
    time = time.split("-");
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
  });
}
