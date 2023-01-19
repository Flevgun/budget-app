"use strict";
let money, time;
function start() {
  time = prompt("Введите дату в формате YYYY-MM-DD", 0);

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет на месяц?", 0);
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Обязательная статья на расходов в этом месяце?", "");
      let b = prompt("Во сколько это обойдется?", 0);

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("minimun lvl money");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("medium lvl money");
    } else if (appData.moneyPerDay > 2000) {
      console.log("high lvl money");
    } else {
      console.log("Error");
    }
  },
  checkSavings: function () {
    if (appData.saving == true) {
      let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let optAnswer = prompt("Статья необязательных расходов?", "");
      appData.optionalExpenses[i] = optAnswer;
    }
  },
  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt(
        "Что принесет дополнительный доход? (Перечислите через запятую)",
        ""
      );
      if (typeof items === "string" && typeof items != null && items != "") {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach((item) => {
          let n = i + 1;
          console.log("Способы доп. заработка: " + item);
        });
      } else {
        i--;
      }
    }
  },
};

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + ": " + appData[key]
  );
}
