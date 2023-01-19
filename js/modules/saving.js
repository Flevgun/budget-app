import { appData } from '../appData.js';

export function Saving() {
  let savingsCheckbox = document.querySelector("#savings");

  savingsCheckbox.addEventListener("click", () => {
    if (appData.saving == true) {
      appData.saving = false;
    } else {
      appData.saving = true;
    }
  });
}
