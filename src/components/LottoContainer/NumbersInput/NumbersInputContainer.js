import { InputGuideText } from "./InputGuideText.js";
import { InputContainer } from "./InputContainer.js";
import { ResultButton } from "./ResultButton.js";
import { LottoResultModal } from "../../LottoResultModal/LottoResultModal.js";
import { createElement } from "../../../utils/dom/createElement.js";
import LottoController from "../../../controller/LottoController.js";
import ProfitCalculator from "../../../domain/ProfitCalculator.js";
import bonusNumberValidator from "../../../validators/bonusNumberValidator.js";
import lottoNumberValidator from "../../../validators/lottoNumberValidator.js";

export const NumbersInputContainer = (purchaseAmount, lottos) => {
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

    try {
      const winningNumberInputs = numbersInputContainer.querySelectorAll(
        ".winning-number-input"
      );
      const winningNumbers = Array.from(winningNumberInputs).map((input) =>
        Number(input.value.trim())
      );

      const bonusNumberInput = numbersInputContainer.querySelector(
        ".bonus-number-input"
      );
      const bonusNumber = Number(bonusNumberInput.value.trim());

      lottoNumberValidator(winningNumbers);
      bonusNumberValidator(bonusNumber, winningNumbers);

      const lottoController = new LottoController();
      lottoController.setContext(lottos, winningNumbers, bonusNumber);

      const { rankCounts } = lottoController.calculateMatchResults();

      const profitCalculator = new ProfitCalculator();
      const { profitRate } = profitCalculator.getProfitStats(
        rankCounts,
        purchaseAmount
      );

      LottoResultModal(rankCounts, profitRate);
    } catch (error) {
      window.alert(error.message);
    }
  };

  numbersInputContainer.addEventListener("input", handleInputChange);
  numbersInputContainer.addEventListener("submit", handleInputSubmit);

  return numbersInputContainer;
};
