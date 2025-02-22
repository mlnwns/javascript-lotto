import { SETTINGS } from "../constants/index.js";

class LottoMatcher {
  constructor(numbers, winningNumbers, bonusNumber) {
    this.numbers = numbers;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  countMatches() {
    return this.numbers.filter((number) => this.winningNumbers.includes(number))
      .length;
  }

  hasBonusMatch() {
    return this.numbers.includes(this.bonusNumber);
  }

  calculateRank() {
    const matchCount = this.countMatches();

    const rank = Object.keys(SETTINGS.rewards).find((key) => {
      const reward = SETTINGS.rewards[key];
      return (
        reward.matchCount === matchCount &&
        (reward.bonusMatch === undefined ||
          reward.bonusMatch === this.hasBonusMatch())
      );
    });

    return rank || "none";
  }
}

export default LottoMatcher;
