import { MESSAGES, SETTINGS } from "../constants/index.js";
import bonusNumberValidator from "../validators/bonusNumberValidator.js";

describe("bonusNumberValidator 테스트", () => {
  test("올바른 보너스 번호면 에러가 발생하지 않는다.", () => {
    expect(() => bonusNumberValidator(7, [1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test("보너스 번호가 숫자가 아니면 에러를 띄운다.", () => {
    expect(() => bonusNumberValidator("a", [1, 2, 3, 4, 5, 6])).toThrow(
      MESSAGES.invalid.numberFormat
    );
  });

  test.each([[SETTINGS.numberRange.min - 1], [SETTINGS.numberRange.max + 1]])(
    `보너스 번호가 ${SETTINGS.numberRange.min}보다 작거나 ${SETTINGS.numberRange.max}보다 크면 에러를 띄운다.`,
    (bonusNumber) => {
      expect(() =>
        bonusNumberValidator(bonusNumber, [1, 2, 3, 4, 5, 6])
      ).toThrow(MESSAGES.invalid.bonusNumberRange);
    }
  );

  test("보너스 번호가 당첨 번호와 중복되면 에러를 띄운다.", () => {
    expect(() => bonusNumberValidator(3, [1, 2, 3, 4, 5, 6])).toThrow(
      MESSAGES.invalid.duplicateBonusNumber
    );
  });
});
