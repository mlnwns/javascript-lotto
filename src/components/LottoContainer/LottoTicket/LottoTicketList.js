import { createElement } from "../../../utils/dom/createElement.js";
import { LottoTicketItem } from "./LottoTicketItem.js";

export const LottoTicketList = (lottoNumbersData) => {
  const lottoTicketList = createElement("ul", {
    className: "lotto-ticket-list",
  });

  lottoNumbersData.forEach((lottoNumbers) => {
    lottoTicketList.append(LottoTicketItem({ lottoNumbers }));
  });

  return lottoTicketList;
};
