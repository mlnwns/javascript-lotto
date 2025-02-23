import { SETTINGS } from "../constants/index.js";
import { sortNumbersAscending } from "../utils/array/sort.js";
import { getRandomNumber } from "../utils/numbers/getRandomNumber.js";
import { calculateTicketCount } from "../utils/numbers/calculateTicketCount.js";

const lottoGenerator = {
  generate(amount) {
    const ticketCount = calculateTicketCount(amount, SETTINGS.priceUnit);
    const tickets = [];

    for (let i = 0; i < ticketCount; i++) {
      tickets.push(this.createLottoNumbers());
    }

    return tickets;
  },

  createLottoNumbers() {
    const numbers = new Set();

    while (numbers.size < SETTINGS.numberCount) {
      numbers.add(
        getRandomNumber(SETTINGS.numberRange.min, SETTINGS.numberRange.max)
      );
    }

    return sortNumbersAscending(Array.from(numbers));
  },
};

export default lottoGenerator;
