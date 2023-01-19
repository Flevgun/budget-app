import { Expenses } from "./modules/expenses.js";
import { OptionalExpenses } from "./modules/optionalExpenses.js";
import { CountBudget } from "./modules/countBudget.js";
import { Saving } from "./modules/saving.js";
import { Sum } from "./modules/sum.js";
import { Start } from "./modules/start.js";
import { ChooseIncome } from "./modules/chooseIncome.js";

("use strict");

window.addEventListener("DOMContentLoaded", () => {
  Expenses();
  OptionalExpenses();
  CountBudget();
  Saving();
  Sum();
  Start();
  ChooseIncome();
});
