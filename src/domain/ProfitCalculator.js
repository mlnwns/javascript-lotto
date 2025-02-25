import { SETTINGS } from "../constants/index.js";

class ProfitCalculator {
  calculateTotalPrize(rankCounts) {
    return Object.entries(rankCounts).reduce((total, [rank, count]) => {
      if (rank === "none") return total;
      return total + SETTINGS.rewards[rank].amount * count;
    }, 0);
  }

  calculateProfitRate(totalPrize, purchaseAmount) {
    const profitRate = (totalPrize / purchaseAmount) * 100;
    return profitRate.toFixed(1);
  }

  getProfitStats(rankCounts, purchaseAmount) {
    const totalPrize = this.calculateTotalPrize(rankCounts);
    const profitRate = this.calculateProfitRate(totalPrize, purchaseAmount);

    return {
      totalPrize,
      profitRate,
    };
  }
}

export default ProfitCalculator;
