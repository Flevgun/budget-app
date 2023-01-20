import { appData } from '../appData.js';

export function saving() {
  let savingsCheckbox = document.querySelector("#savings");

  savingsCheckbox.addEventListener("click", () => {
    if (appData.saving) {
      appData.saving = false;
    } else {
      appData.saving = true;
    }
  });
}
