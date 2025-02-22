import restartValidator from "./restartValidator.js";
import { MESSAGES } from "../constants/messages.js";

describe("restartValidator", () => {
  test.each(["y", "n"])(
    "재시작 여부 입력값이 '%s'일 경우 true를 반환한다.",
    (input) => {
      expect(restartValidator(input)).toBe(true);
    }
  );

  test.each(["yes", "no", "1", "a", ""])(
    "재시작 여부 입력 값이 'y', 'n'이 아닐 경우 에러를 띄운다",
    (input) => {
      expect(() => restartValidator(input)).toThrow(
        MESSAGES.invalid.restartInput
      );
    }
  );
});
