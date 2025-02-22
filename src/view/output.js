import CustomError from "../CustomError.js";
import { MESSAGES, SETTINGS } from "../constants/index.js";

const output = {
  print(message) {
    console.log(message);
  },

  error(errorMessage) {
    throw new CustomError(errorMessage);
  },

  lottoResult() {
    this.print(MESSAGES.output.result);
    this.print(MESSAGES.output.divider);
  },

  printLottoTickets(lottoTickets) {
    this.print(`${lottoTickets.length}개를 구매했습니다.`);
    lottoTickets.forEach((ticket) => {
      this.print(`[${ticket.join(", ")}]`);
    });
  },

  printRankResult(count, description) {
    this.print(`${description} - ${count}개`);
  },

  printMatchResults(results) {
    this.lottoResult();

    this.printRankResult(
      results.rankCounts.fifth,
      `${
        SETTINGS.rewards.fifth.matchCount
      }개 일치 (${SETTINGS.rewards.fifth.amount.toLocaleString()}원)`
    );
    this.printRankResult(
      results.rankCounts.fourth,
      `${
        SETTINGS.rewards.fourth.matchCount
      }개 일치 (${SETTINGS.rewards.fourth.amount.toLocaleString()}원)`
    );
    this.printRankResult(
      results.rankCounts.third,
      `${
        SETTINGS.rewards.third.matchCount
      }개 일치 (${SETTINGS.rewards.third.amount.toLocaleString()}원)`
    );
    this.printRankResult(
      results.rankCounts.second,
      `${
        SETTINGS.rewards.second.matchCount
      }개 일치, 보너스 볼 일치 (${SETTINGS.rewards.second.amount.toLocaleString()}원)`
    );
    this.printRankResult(
      results.rankCounts.first,
      `${
        SETTINGS.rewards.first.matchCount
      }개 일치 (${SETTINGS.rewards.first.amount.toLocaleString()}원)`
    );

    this.print(`총 수익률은 ${results.profitRate}%입니다.`);
  },
};

export default output;
