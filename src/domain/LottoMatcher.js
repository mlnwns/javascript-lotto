import { SETTINGS } from "../constants/index.js";
import { containsElement, getIntersectionCount } from "../utils/array/match.js";

class LottoMatcher {
  hasBonusMatch(ticket, bonusNumber) {
    return containsElement(ticket, bonusNumber);
  }

  calculateRank(ticket, winningNumbers, bonusNumber) {
    const matchCount = getIntersectionCount(ticket, winningNumbers);

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
