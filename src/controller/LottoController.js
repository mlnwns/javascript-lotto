import { MESSAGES, SETTINGS } from "../constants/index.js";
import {
  purchaseAmountValidator,
  lottoNumberValidator,
  bonusNumberValidator,
  restartValidator,
} from "../validators/index.js";
import { readLineAsync } from "../utils/input/readLineAsync.js";
import { retryUntilValid } from "../utils/validation/retryUntilValid.js";
import lottoGenerator from "../domain/lottoGenerator.js";
import output from "../view/output.js";
import ProfitCalculator from "../domain/ProfitCalculator.js";
import LottoMatcher from "../domain/LottoMatcher.js";

class LottoController {
  constructor() {
    this.lottoTickets = [];
    this.winningNumber = [];
    this.bonusNumber = [];
  }

  async play() {
    await this.runGame();
    await this.handleRestart();
  }

  async runGame() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.lottoTickets = lottoGenerator.generate(purchaseAmount);

    output.printLottoTickets(this.lottoTickets);

    this.winningNumber = await this.getWinningNumber();
    this.bonusNumber = await this.getBonusNumber();

    const matchResults = this.calculateMatchResults();

    this.displayResults(matchResults, purchaseAmount);
  }

  async handleRestart() {
    const shouldRestart = await this.getRestartChoice();
    if (shouldRestart) {
      this.resetGame();
      await this.play();
    }
  }

  resetGame() {
    this.lottoTickets = [];
    this.winningNumber = [];
    this.bonusNumber = [];
  }

  async getRestartChoice() {
    const restartInput = await retryUntilValid(
      () => readLineAsync("\n" + MESSAGES.input.askRestart),
      (input) => input.trim().toLowerCase(),
      restartValidator
    );
    return restartInput === SETTINGS.restartCommand;
  }

  async getPurchaseAmount() {
    const purchaseAmount = await retryUntilValid(
      () => readLineAsync(MESSAGES.input.purchaseAmount),
      (input) => Number(input),
      purchaseAmountValidator
    );
    return purchaseAmount;
  }

  async getWinningNumber() {
    const winningNumber = await retryUntilValid(
      () => readLineAsync("\n" + MESSAGES.input.winningNumber),
      (input) => input.split(",").map(Number),
      lottoNumberValidator
    );
    return winningNumber;
  }

  async getBonusNumber() {
    const bonusNumber = await retryUntilValid(
      () => readLineAsync("\n" + MESSAGES.input.bonusNumber),
      (input) => Number(input),
      (bonusNumber) => bonusNumberValidator(bonusNumber, this.winningNumber)
    );
    return bonusNumber;
  }

  calculateAndDisplayResults(bonusNumber) {
    const calculator = new ProfitCalculator();

    const results = calculator.getResults(
      this.winningNumber,
      bonusNumber,
      this.lottoTickets
    );
    output.printMatchResults(results);
  }

  calculateMatchResults() {
    const rankCounts = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      none: 0,
    };

    const ticketResults = this.lottoTickets.map((ticket) => {
      const rank = new LottoMatcher().calculateRank(
        ticket,
        this.winningNumber,
        this.bonusNumber
      );
      rankCounts[rank]++;
      return { ticket, rank };
    });

    return { ticketResults, rankCounts };
  }

  displayResults(matchResults, purchaseAmount) {
    const { rankCounts } = matchResults;

    const profitStats = new ProfitCalculator().getProfitStats(
      rankCounts,
      purchaseAmount
    );

    const results = {
      rankCounts,
      totalPrize: profitStats.totalPrize,
      profitRate: profitStats.profitRate,
    };

    output.printMatchResults(results);
  }
}

export default LottoController;
