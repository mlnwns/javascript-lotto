/**
 * step 2의 시작점이 되는 파일입니다.
 * 노드 환경에서 사용하는 readline 등을 불러올 경우 정상적으로 빌드할 수 없습니다.
 */
import purchaseAmountValidator from "./validators/purchaseAmountValidator.js";
import lottoGenerator from "./domain/lottoGenerator.js";
import { LottoTicketContainer } from "./components/LottoTicket/LottoTicketContainer.js";

const lottoPurchaseForm = document.querySelector(".lotto-purchase-form");
const purchaseAmountInput = document.querySelector(".purchase-amount-input");

lottoPurchaseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const purchaseAmount = Number(purchaseAmountInput.value);
    purchaseAmountValidator(purchaseAmount);
    const lottos = lottoGenerator.generate(purchaseAmount);
    console.log(lottos);

    const lottoTicketContainer = document.querySelector(".lotto-container");
    lottoTicketContainer.append(LottoTicketContainer(lottos));
  } catch (error) {
    alert(error.message);
  }
});
