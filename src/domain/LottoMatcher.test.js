import LottoMatcher from "./LottoMatcher.js";
import { getIntersectionCount } from "../utils/array/match.js";

describe("LottoMatcher 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test("구입한 로또 번호와 당첨 번호를 비교해 일치 개수를 계산한다", () => {
    expect(getIntersectionCount([1, 2, 3, 10, 20, 30], winningNumbers)).toBe(3);
  });

  test("입력한 보너스 번호와 지정된 보너스 번호가 일치하는지 확인한다.", () => {
    const matchResultWithBonus = new LottoMatcher();
    expect(
      matchResultWithBonus.hasBonusMatch([1, 2, 3, 4, 5, 7], bonusNumber)
    ).toBe(true);

    const matchResultWithoutBonus = new LottoMatcher();
    expect(
      matchResultWithoutBonus.hasBonusMatch([1, 2, 3, 4, 5, 8], bonusNumber)
    ).toBe(false);
  });

  test("구입 로또와 당첨 로또가 5개 일치하고 보너스 번호도 일치 시 2등이어야 한다", () => {
    const matchResult = new LottoMatcher();
    expect(
      matchResult.calculateRank([1, 2, 3, 4, 5, 7], winningNumbers, bonusNumber)
    ).toBe("second");
  });

  test("구입 로또와 당첨 로또가 2개 이하로 일치하면 당첨되지 않는다.", () => {
    const matchResult = new LottoMatcher();
    expect(
      matchResult.calculateRank(
        [1, 2, 10, 11, 12, 13],
        winningNumbers,
        bonusNumber
      )
    ).toBe("none");
  });
});
