import CustomError from "../CustomError.js";
import { MESSAGES } from "../constants/index.js";

const restartValidator = (input) => {
  if (!["y", "n"].includes(input)) {
    throw new CustomError(MESSAGES.invalid.restartInput);
  }
};

export default restartValidator;
