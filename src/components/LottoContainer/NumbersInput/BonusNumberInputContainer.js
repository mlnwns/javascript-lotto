import { BonusNumberInput } from "./BonusNumberInput.js";
import { BonusNumberLabel } from "./BonusNumberLabel.js";

export const BonusNumberInputContainer = () => {
  const bonusNumberInputContainer = document.querySelector(
    ".bonus-number-input-container"
  );

  bonusNumberInputContainer.append(BonusNumberLabel(), BonusNumberInput());

  return bonusNumberInputContainer;
};
