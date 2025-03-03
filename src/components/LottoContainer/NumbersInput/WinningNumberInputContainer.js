import { WinningNumberInput } from "./WinningNumberInput.js";
import { WinningNumberLabel } from "./WinningNumberLabel.js";
import { SETTINGS } from "../../../constants/index.js";

export const WinningNumberInputContainer = () => {
  const winningNumberInputContainer = document.querySelector(
    ".winning-number-input-container"
  );

  winningNumberInputContainer.append(WinningNumberLabel());

  const winningNumberWrapper = document.querySelector(
    ".winning-number-wrapper"
  );

  for (let i = 0; i < SETTINGS.numberCount; i++) {
    winningNumberWrapper.appendChild(WinningNumberInput());
  }

  winningNumberInputContainer.append(winningNumberWrapper);

  return winningNumberInputContainer;
};
