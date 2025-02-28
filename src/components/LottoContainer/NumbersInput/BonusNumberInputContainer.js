import { BonusNumberInput } from "./BonusNumberInput.js";
import { BonusNumberLabel } from "./BonusNumberLabel.js";
import { createElement } from "../../../utils/dom/createElement.js";

export const BonusNumberInputContainer = () => {
  const bonusNumberInputContainer = createElement("div", {
    className: "bonus-number-input-container",
  });

  bonusNumberInputContainer.append(BonusNumberLabel(), BonusNumberInput());

  return bonusNumberInputContainer;
};
