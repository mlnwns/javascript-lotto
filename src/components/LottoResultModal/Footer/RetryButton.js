import { createElement } from "../../../utils/dom/createElement.js";

export const RetryButton = () => {
  const retryButton = createElement("button", {
    className: "modal-retry-button",
    innerText: "다시 시작하기",
  });

  return retryButton;
};
