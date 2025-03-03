import { LottoTicketItem } from "./LottoTicketItem.js";

export const LottoTicketList = (lottoNumbersData) => {
  const lottoTicketList = document.querySelector(".lotto-ticket-list");

  lottoNumbersData.forEach((lottoNumbers) => {
    lottoTicketList.append(LottoTicketItem({ lottoNumbers }));
  });

  return lottoTicketList;
};
