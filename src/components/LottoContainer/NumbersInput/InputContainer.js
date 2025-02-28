import { createElement } from "../../../utils/dom/createElement.js";
import { WinningNumberInputContainer } from "./WinningNumberInputContainer.js";
import { BonusNumberInputContainer } from "./BonusNumberInputContainer.js";

export const InputContainer = () => {
  const inputContainer = createElement("div", {
    className: "input-container",
  });

  inputContainer.append(
    WinningNumberInputContainer(),
    BonusNumberInputContainer()
  );

  return inputContainer;
};
