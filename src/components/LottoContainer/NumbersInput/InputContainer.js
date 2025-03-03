import { WinningNumberInputContainer } from "./WinningNumberInputContainer.js";
import { BonusNumberInputContainer } from "./BonusNumberInputContainer.js";

export const InputContainer = () => {
  const inputContainer = document.querySelector(".input-container");

  inputContainer.append(
    WinningNumberInputContainer(),
    BonusNumberInputContainer()
  );

  return inputContainer;
};
