import { SETTINGS } from "../constants/index.js";

class ProfitCalculator {
  calculateTotalPrize(rankCounts) {
    return Object.entries(rankCounts).reduce((total, [rank, count]) => {
      if (rank === "none") return total;
      return total + SETTINGS.rewards[rank].amount * count;
    }, 0);
  }

  calculateProfitRate(totalPrize, ticketCount) {
    const totalPurchaseAmount = ticketCount * SETTINGS.priceUnit;
    const profitRate = (totalPrize / totalPurchaseAmount) * 100;
    return profitRate.toFixed(1);
  }

  calculateProfitStats(rankCounts, ticketCount) {
    const totalPrize = this.calculateTotalPrize(rankCounts);
    const profitRate = this.calculateProfitRate(totalPrize, ticketCount);

    return {
      totalPrize,
      profitRate,
    };
  }
}

export default ProfitCalculator;
