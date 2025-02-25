import restartValidator from "./restartValidator.js";
import { MESSAGES, SETTINGS } from "../constants/index.js";

describe("restartValidator", () => {
  test.each([SETTINGS.restartCommand, SETTINGS.exitCommand])(
    "재시작 여부 입력값이 '%s'일 경우 정상적으로 실행된다",
    (input) => {
      expect(() => restartValidator(input)).not.toThrow();
    }
  );

  test.each(["yes", "no", "1", "a", ""])(
    `재시작 여부 입력 값이 '${SETTINGS.restartCommand}', '${SETTINGS.exitCommand}'이 아닐 경우 에러를 띄운다`,
    (input) => {
      expect(() => restartValidator(input)).toThrow(
        MESSAGES.invalid.restartInput
      );
    }
  );
});
