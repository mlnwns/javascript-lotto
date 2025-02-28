import { createElement } from "../../../utils/dom/createElement.js";
import { WinningNumberInput } from "./WinningNumberInput.js";
import { WinningNumberLabel } from "./WinningNumberLabel.js";
import { SETTINGS } from "../../../constants/index.js";

export const WinningNumberInputContainer = () => {
  const winningNumberInputContainer = createElement("div", {
    className: "winning-number-input-container",
  });

  winningNumberInputContainer.append(WinningNumberLabel());

  const winningNumberWrapper = createElement("div", {
    className: "winning-number-wrapper",
  });

  for (let i = 0; i < SETTINGS.numberCount; i++) {
    winningNumberWrapper.appendChild(WinningNumberInput());
  }

  winningNumberInputContainer.append(winningNumberWrapper);

  return winningNumberInputContainer;
};
