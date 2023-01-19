"use strict";

let startBtn = document.getElementById("start"),
  budgetValue = document.querySelector(".budget-value"),
  dayBudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
  incomeValue = document.querySelector(".income-value"),
  monthsavingsValue = document.querySelector(".monthsavings-value"),
  yearsavingsValue = document.querySelector(".yearsavings-value"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value"),
  expensesInputs = document.querySelectorAll(".expenses-item"),
  optionalExpensesInputs = document.querySelectorAll(".optionalexpenses-item"),
  chooseIncomeInput = document.querySelector(".choose-income"),
  savingsCheckbox = document.querySelector("#savings"),
  sumInput = document.querySelector("#sum"),
  percentInput = document.querySelector("#percent"),
  buttons = document.getElementsByTagName("button"),
  expensesBtn = document.querySelector(".expenses-item-btn"),
  optionalExpensesBtn = document.querySelector(".optionalexpenses-btn"),
  countBtn = document.querySelector(".count-budget-btn");
let money, time;

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
optionalExpensesBtn.addEventListener("click", () => {
  for (let i = 0; i < optionalExpensesInputs.length; i++) {
    let optAnswer = optionalExpensesInputs[i].value;
    appData.optionalExpenses[i] = optAnswer;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

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

chooseIncomeInput.addEventListener("input", () => {
  let items = chooseIncomeInput.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', () => {
  if (appData.saving == true){
    appData.saving = false;
  } else {
    appData.saving = true;
  }
})

sumInput.addEventListener('input', () => {
  if(appData.saving == true){
    let currentSum = +sumInput.value,
        currentPercent = +percentInput.value;
        appData.monthIncome = (currentSum / 100 / 12) * currentPercent;
        appData.yearIncome = (currentSum / 100) * currentPercent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
})
percentInput.addEventListener('input', () => {
  if(appData.saving == true){
    let currentSum = +sumInput.value,
        currentPercent = +percentInput.value;
        appData.monthIncome = (currentSum / 100 / 12) * currentPercent;
        appData.yearIncome = (currentSum / 100) * currentPercent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
})

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving: false
};
