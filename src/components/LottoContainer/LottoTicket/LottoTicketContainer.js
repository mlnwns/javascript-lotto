import { LottoTicketList } from "./LottoTicketList.js";
import { LottoCountText } from "./LottoCountText.js";

export const LottoTicketContainer = (lottoNumbersData) => {
  const lottoTicketContainer = document.querySelector(
    ".lotto-ticket-container"
  );

  lottoTicketContainer.append(
    LottoCountText(lottoNumbersData.length),
    LottoTicketList(lottoNumbersData)
  );

  return lottoTicketContainer;
};
