import { expenses } from "./modules/expenses.js";
import { optionalExpenses } from "./modules/optionalExpenses.js";
import { countBudget } from "./modules/countBudget.js";
import { saving } from "./modules/saving.js";
import { sum } from "./modules/sum.js";
import { start } from "./modules/start.js";
import { chooseIncome } from "./modules/chooseIncome.js";

("use strict");

window.addEventListener("DOMContentLoaded", () => {
  expenses();
  optionalExpenses();
  countBudget();
  saving();
  sum();
  start();
  chooseIncome();
});
