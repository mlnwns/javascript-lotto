import { SETTINGS } from "../constants/index.js";
import { sortNumbersAscending } from "../utils/sortNumbersAscending.js";

const lottoGenerator = {
  generate(amount) {
    const ticketCount = Math.floor(amount / SETTINGS.priceUnit);
    const tickets = [];

    for (let i = 0; i < ticketCount; i++) {
      tickets.push(this.createLottoNumbers());
    }

    return tickets;
  },

  createLottoNumbers() {
    const numbers = new Set();

    while (numbers.size < SETTINGS.numberCount) {
      const randomNumber =
        Math.floor(
          Math.random() *
            (SETTINGS.numberRange.max - SETTINGS.numberRange.min + 1)
        ) + SETTINGS.numberRange.min;
      numbers.add(randomNumber);
    }

    return sortNumbersAscending(Array.from(numbers));
  },
};

export default lottoGenerator;
