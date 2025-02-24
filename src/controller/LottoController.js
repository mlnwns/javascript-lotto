import input from "../view/input.js";
import { MESSAGES } from "../constants/index.js";
import {
  purchaseAmountValidator,
  lottoNumberValidator,
  bonusNumberValidator,
  restartValidator,
} from "../validators/index.js";
import { retryUntilValid } from "../utils/validation/retryUntilValid.js";
import lottoGenerator from "../domain/lottoGenerator.js";
import output from "../view/output.js";
import ProfitCalculator from "../domain/ProfitCalculator.js";

class LottoController {
  constructor() {
    this.lottoTickets = [];
    this.winningNumber = [];
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
    const bonusNumber = await this.getBonusNumber();

    this.calculateAndDisplayResults(bonusNumber);
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
  }

  async getRestartChoice() {
    const restartInput = await retryUntilValid(
      () => input.getInput("\n" + MESSAGES.input.askRestart),
      (input) => input.trim().toLowerCase(),
      restartValidator
    );
    return restartInput === "y";
  }

  async getPurchaseAmount() {
    const purchaseAmount = await retryUntilValid(
      () => input.getInput(MESSAGES.input.purchaseAmount),
      (input) => Number(input),
      purchaseAmountValidator
    );
    return purchaseAmount;
  }

  async getWinningNumber() {
    const winningNumber = await retryUntilValid(
      () => input.getInput("\n" + MESSAGES.input.winningNumber),
      (input) => input.split(",").map(Number),
      lottoNumberValidator
    );
    return winningNumber;
  }

  async getBonusNumber() {
    const bonusNumber = await retryUntilValid(
      () => input.getInput("\n" + MESSAGES.input.bonusNumber),
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
}

export default LottoController;
