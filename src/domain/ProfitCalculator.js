import LottoMatcher from "./LottoMatcher.js";
import { SETTINGS } from "../constants/index.js";

class ProfitCalculator {
  constructor() {
    this.rankCounts = this.initializeRankCounts();
  }

  initializeRankCounts() {
    return {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      none: 0,
    };
  }

  calculateResults(winningNumbers, bonusNumber, lottoTickets) {
    lottoTickets.forEach((ticket) => {
      const matchResult = new LottoMatcher();
      const rank = matchResult.calculateRank(
        ticket,
        winningNumbers,
        bonusNumber
      );
      this.rankCounts[rank]++;
    });
  }

  calculateTotalPrize() {
    return Object.entries(this.rankCounts).reduce((total, [rank, count]) => {
      if (rank === "none") return total;
      return total + SETTINGS.rewards[rank].amount * count;
    }, 0);
  }

  calculateProfitRate(lottoTickets) {
    const totalPurchaseAmount = lottoTickets.length * SETTINGS.priceUnit;
    const totalPrize = this.calculateTotalPrize();
    const profitRate = (totalPrize / totalPurchaseAmount) * 100;
    return profitRate.toFixed(1);
  }

  getResults(winningNumbers, bonusNumber, lottoTickets) {
    this.calculateResults(winningNumbers, bonusNumber, lottoTickets);
    return {
      rankCounts: this.rankCounts,
      totalPrize: this.calculateTotalPrize(),
      profitRate: this.calculateProfitRate(lottoTickets),
    };
  }
}

export default ProfitCalculator;
