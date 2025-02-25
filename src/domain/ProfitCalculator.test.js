import ProfitCalculator from "./ProfitCalculator.js";

describe("ProfitCalculator 테스트", () => {
  test("3000원으로 30,000,000원의 수익을 벌면 수익률은 1000000.0%이다.", () => {
    const rankCounts = {
      second: 1,
      none: 2,
    };

    const profit = new ProfitCalculator();

    const ticketCount = 3;
    const result = profit.calculateProfitStats(rankCounts, ticketCount);

    expect(result.profitRate).toBe("1000000.0");
  });
});
