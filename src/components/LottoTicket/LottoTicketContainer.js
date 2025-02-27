import { createElement } from "../../utils/dom/createElement.js";
import { LottoTicketList } from "./LottoTicketList.js";
import { LottoCountText } from "./LottoCountText.js";

export const LottoTicketContainer = (lottoNumbersData) => {
  const lottoTicketContainer = createElement("div", {
    className: "lotto-ticket-container",
  });

  lottoTicketContainer.append(LottoCountText(lottoNumbersData.length));
  lottoTicketContainer.append(LottoTicketList(lottoNumbersData));

  return lottoTicketContainer;
};
