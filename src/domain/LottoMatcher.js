import { SETTINGS } from "../constants/index.js";
import { containsElement, countArrayMatches } from "../utils/array/match.js";

class LottoMatcher {
  countMatches(ticket, winningNumbers) {
    return countArrayMatches(ticket, winningNumbers);
  }

  hasBonusMatch(ticket, bonusNumber) {
    return containsElement(ticket, bonusNumber);
  }

  calculateRank(ticket, winningNumbers, bonusNumber) {
    const matchCount = this.countMatches(ticket, winningNumbers);

    const rank = Object.keys(SETTINGS.rewards).find((key) => {
      const reward = SETTINGS.rewards[key];
      return (
        reward.matchCount === matchCount &&
        (reward.bonusMatch === undefined ||
          reward.bonusMatch === this.hasBonusMatch(ticket, bonusNumber))
      );
    });

    return rank || "none";
  }
}

export default LottoMatcher;
