import { createElement } from "../../utils/dom/createElement.js";
import { Header } from "./Header/Header.js";
import { ResultList } from "./Body/ResultLits.js";
import { Footer } from "./Footer/Footer.js";

export const LottoResultModal = (rankCounts, profitRate) => {
  const lottoResultModal = createElement("div", {
    className: "lotto-result-modal",
  });

  const modalBackground = createElement("div", {
    className: "modal-background",
  });

  const modalContent = createElement("div", {
    className: "modal-content",
  });

  modalContent.append(Header(), ResultList(rankCounts), Footer(profitRate));
  modalBackground.append(modalContent);

  lottoResultModal.appendChild(modalBackground);

  const appContainer = document.querySelector("#app");
  appContainer.append(lottoResultModal);

  return lottoResultModal;
};
