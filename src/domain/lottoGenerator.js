import { SETTINGS } from "../constants/index.js";
import { sortNumbersAscending } from "../utils/array/sort.js";
import { getRandomNumber } from "../utils/numbers/getRandomNumber.js";

const lottoGenerator = {
  generate(amount) {
    const ticketCount = this.calculateTicketCount(amount, SETTINGS.priceUnit);
    return Array.from({ length: ticketCount }, () => this.createLottoNumbers());
  },

  calculateTicketCount(amount, priceUnit) {
    return Math.floor(amount / priceUnit);
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
