import { InputGuideText } from "./InputGuideText.js";
import { InputContainer } from "./InputContainer.js";
import { ResultButton } from "./ResultButton.js";
import { createElement } from "../../../utils/dom/createElement.js";

export const NumbersInputContainer = () => {
  const numbersInputContainer = createElement("div", {
    className: "numbers-input-container",
  });

  numbersInputContainer.append(
    InputGuideText("지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요."),
    InputContainer(),
    ResultButton()
  );

  return numbersInputContainer;
};
