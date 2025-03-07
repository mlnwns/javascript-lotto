import { SETTINGS } from "./settings.js";

export const MESSAGES = Object.freeze({
  input: {
    purchaseAmount: "> 구입금액을 입력해 주세요. ",
    winningNumber: "> 당첨 번호를 입력해 주세요. ",
    bonusNumber: "> 보너스 번호를 입력해 주세요. ",
    askRestart: "> 다시 시작하시겠습니까? (y/n) ",
  },
  output: {
    result: "당첨 통계",
    divider: "--------------------",
  },
  invalid: {
    numberFormat: "숫자만 입력 가능합니다.",
    decimalNumber: "소수는 입력할 수 없습니다.",
    lottoNumberCount: `당첨 번호는 ${SETTINGS.numberCount}개여야 합니다.`,
    duplicateLottoNumber: "당첨 번호는 중복될 수 없습니다.",
    lottoNumberRange: `당첨 번호는 ${SETTINGS.numberRange.min}에서 ${SETTINGS.numberRange.max} 사이의 숫자여야 합니다.`,
    duplicateBonusNumber: "보너스 번호는 당첨 번호와 중복될 수 없습니다.",
    bonusNumberCount: `보너스 번호는 ${SETTINGS.numberCount}개여야 합니다.`,
    bonusNumberRange: `보너스 번호는 ${SETTINGS.numberRange.min}에서 ${SETTINGS.numberRange.max} 사이의 숫자여야 합니다.`,
    minimumPurchase: `최소 구입 금액은 ${SETTINGS.priceUnit.toLocaleString()}원입니다.`,
    purchaseAmount: `구입 금액은 ${SETTINGS.priceUnit.toLocaleString()}원 단위여야 합니다.`,
    maxmumPurchase: `한 번에 최대 ${SETTINGS.maxPurchaseCount}장까지 구입할 수 있습니다.`,
    restartInput: "잘못된 입력입니다. 다시 입력해 주세요.",
  },
});
