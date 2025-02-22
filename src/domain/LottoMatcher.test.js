import LottoMatcher from "./LottoMatcher.js";

describe("LottoMatcher 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test("구입한 로또 번호와 당첨 번호를 비교해 일치 개수를 계산한다", () => {
    const matchResult = new LottoMatcher(
      [1, 2, 3, 10, 20, 30],
      winningNumbers,
      bonusNumber
    );
    expect(matchResult.countMatches()).toBe(3);
  });

  test("입력한 보너스 번호와 지정된 보너스 번호가 일치하는지 확인한다.", () => {
    const matchResultWithBonus = new LottoMatcher(
      [1, 2, 3, 4, 5, 7],
      winningNumbers,
      bonusNumber
    );
    expect(matchResultWithBonus.hasBonusMatch()).toBe(true);

    const matchResultWithoutBonus = new LottoMatcher(
      [1, 2, 3, 4, 5, 8],
      winningNumbers,
      bonusNumber
    );
    expect(matchResultWithoutBonus.hasBonusMatch()).toBe(false);
  });

  test("구입 로또와 당첨 로또가 5개 일치하고 보너스 번호도 일치 시 2등이어야 한다", () => {
    const matchResult = new LottoMatcher(
      [1, 2, 3, 4, 5, 7],
      winningNumbers,
      bonusNumber
    );
    expect(matchResult.calculateRank()).toBe("second");
  });

  test("구입 로또와 당첨 로또가 2개 이하로 일치하면 당첨되지 않는다.", () => {
    const matchResult = new LottoMatcher(
      [1, 2, 10, 11, 12, 13],
      winningNumbers,
      bonusNumber
    );
    expect(matchResult.calculateRank()).toBe("none");
  });
});
