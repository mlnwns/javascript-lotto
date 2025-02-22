import lottoGenerator from "../domain/lottoGenerator.js";
import { sortNumbersAscending } from "../utils/sortNumbersAscending.js";
import { SETTINGS } from "../constants/index.js";

describe("lottoGenerator 테스트", () => {
  test(`구입금액이 ${
    8 * SETTINGS.priceUnit
  }원이면 8개의 로또를 생성해야 한다`, () => {
    const amount = 8 * SETTINGS.priceUnit;
    const tickets = lottoGenerator.generate(amount);

    expect(tickets.length).toBe(amount / SETTINGS.priceUnit);
  });

  test(`각 로또 번호는 ${SETTINGS.numberCount}개여야 한다`, () => {
    const tickets = lottoGenerator.generate(SETTINGS.priceUnit);

    tickets.forEach((ticket) => {
      expect(ticket.length).toBe(SETTINGS.numberCount);
    });
  });

  test(`각 로또 번호는 ${SETTINGS.numberRange.min}~${SETTINGS.numberRange.max} 사이의 숫자여야 한다`, () => {
    const tickets = lottoGenerator.generate(SETTINGS.priceUnit);

    tickets.forEach((ticket) => {
      ticket.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(SETTINGS.numberRange.min);
        expect(number).toBeLessThanOrEqual(SETTINGS.numberRange.max);
      });
    });
  });

  test("각 로또 번호는 중복되지 않아야 한다", () => {
    const tickets = lottoGenerator.generate(SETTINGS.priceUnit);

    tickets.forEach((ticket) => {
      const uniqueNumbers = new Set(ticket);
      expect(uniqueNumbers.size).toBe(SETTINGS.numberCount);
    });
  });

  test("로또 번호는 오름차순으로 정렬되어야 한다", () => {
    const tickets = lottoGenerator.generate(SETTINGS.priceUnit);

    tickets.forEach((ticket) => {
      const sorted = sortNumbersAscending([...ticket]);
      expect(ticket).toEqual(sorted);
    });
  });
});
