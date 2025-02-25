import CustomError from "../CustomError.js";
import { MESSAGES, SETTINGS } from "../constants/index.js";
import { isWithinRange } from "../utils/numbers/isWithinRange.js";

const lottoNumberValidator = (inputValue) => {
  validateNumberOnly(inputValue);
  validateLength(inputValue);
  validateDuplicate(inputValue);
  validateRange(inputValue);
};

const validateNumberOnly = (numbers) => {
  if (!numbers.every((num) => !Number.isNaN(Number(num)))) {
    throw new CustomError(MESSAGES.invalid.numberFormat);
  }
  if (!numbers.every((num) => Number.isInteger(Number(num)))) {
    throw new CustomError(MESSAGES.invalid.decimalNumber);
  }
};

const validateLength = (numbers) => {
  if (numbers.length !== SETTINGS.numberCount) {
    throw new CustomError(MESSAGES.invalid.lottoNumberCount);
  }
};

const validateDuplicate = (numbers) => {
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new CustomError(MESSAGES.invalid.duplicateLottoNumber);
  }
};

const validateRange = (numbers) => {
  if (
    !numbers.every((num) => {
      return isWithinRange(
        num,
        SETTINGS.numberRange.min,
        SETTINGS.numberRange.max
      );
    })
  ) {
    throw new CustomError(MESSAGES.invalid.lottoNumberRange);
  }
};

export default lottoNumberValidator;
