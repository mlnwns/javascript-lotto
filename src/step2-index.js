/**
 * step 2의 시작점이 되는 파일입니다.
 * 노드 환경에서 사용하는 readline 등을 불러올 경우 정상적으로 빌드할 수 없습니다.
 */
import purchaseAmountValidator from "./validators/purchaseAmountValidator.js";
import lottoGenerator from "./domain/lottoGenerator.js";
import { LottoTicketContainer } from "./components/LottoContainer/LottoTicket/LottoTicketContainer.js";
import { NumbersInputContainer } from "./components/LottoContainer/NumbersInput/NumbersInputContainer.js";
import { $ } from "./utils/querySelector.js";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = $("#app");
  window.initialAppState = appContainer.cloneNode(true);
  initializeEventListeners();
});

export const initializeEventListeners = () => {
  const lottoPurchaseForm = $(".lotto-purchase-form");
  const purchaseAmountInput = $(".purchase-amount-input");
  const purchaseButton = $(".lotto-purchase-submit-button");

  if (!lottoPurchaseForm) return;

  lottoPurchaseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const purchaseAmount = Number(purchaseAmountInput.value);
      purchaseAmountValidator(purchaseAmount);

      const lottos = lottoGenerator.generate(purchaseAmount);

      LottoTicketContainer(lottos);

      const lottoContainer = $(".lotto-container");
      lottoContainer.append(NumbersInputContainer(purchaseAmount, lottos));

      purchaseButton.disabled = true;
    } catch (error) {
      window.alert(error.message);
    }
  });
};

export const resetApp = () => {
  const appContainer = $("#app");

  if (!window.initialAppState) return;

  appContainer.replaceChildren();

  const newAppState = window.initialAppState.cloneNode(true);
  appContainer.appendChild(newAppState);

  initializeEventListeners();
};
