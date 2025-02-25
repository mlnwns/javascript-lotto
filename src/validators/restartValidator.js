import CustomError from "../CustomError.js";
import { MESSAGES, SETTINGS } from "../constants/index.js";

const restartValidator = (input) => {
  if (![SETTINGS.restartCommand, SETTINGS.exitCommand].includes(input)) {
    throw new CustomError(MESSAGES.invalid.restartInput);
  }
};

export default restartValidator;
