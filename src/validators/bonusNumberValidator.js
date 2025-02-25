import CustomError from "../CustomError.js";
import { MESSAGES, SETTINGS } from "../constants/index.js";
import { isWithinRange } from "../utils/numbers/isWithinRange.js";

const bonusNumberValidator = (bonusNumber, winningNumbers) => {
  validateSingleNumber(bonusNumber);
  validateRange(bonusNumber);
  validateNoDuplicate(bonusNumber, winningNumbers);
};

const validateSingleNumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new CustomError(MESSAGES.invalid.numberFormat);
  }

  if (!Number.isInteger(bonusNumber)) {
    throw new CustomError(MESSAGES.invalid.decimalNumber);
  }
};

const validateRange = (bonusNumber) => {
  if (
    !isWithinRange(
      bonusNumber,
      SETTINGS.numberRange.min,
      SETTINGS.numberRange.max
    )
  ) {
    throw new CustomError(MESSAGES.invalid.bonusNumberRange);
  }
};

const validateNoDuplicate = (bonusNumber, winningNumbers) => {
  if (winningNumbers.includes(bonusNumber)) {
    throw new CustomError(MESSAGES.invalid.duplicateBonusNumber);
  }
};

export default bonusNumberValidator;
