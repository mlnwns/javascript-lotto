import { InputGuideText } from "./InputGuideText.js";
import { InputContainer } from "./InputContainer.js";
import { ResultButton } from "./ResultButton.js";
import { createElement } from "../../../utils/dom/createElement.js";

export const NumbersInputContainer = () => {
  const numbersInputContainer = createElement("form", {
    className: "numbers-input-container",
  });

  const resultButton = ResultButton();

  const handleInputChange = (event) => {
    event.preventDefault();
    const inputs = numbersInputContainer.querySelectorAll("input");
    const allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );

    resultButton.disabled = !allFilled;
  };

  numbersInputContainer.append(
    InputGuideText("지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요."),
    InputContainer(),
    resultButton
  );

  const handleInputSubmit = (event) => {
    event.preventDefault();
  };

  numbersInputContainer.addEventListener("input", handleInputChange);
  numbersInputContainer.addEventListener("submit", handleInputSubmit);

  return numbersInputContainer;
};
