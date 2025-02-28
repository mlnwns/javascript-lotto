import { createElement } from "../../../utils/dom/createElement.js";

export const CloseButton = () => {
  const closeButton = createElement("button", {
    className: "modal-close-button",
  });

  const closeImage = createElement("img", {
    src: "/public/close.png",
    alt: "모달 닫기 버튼",
  });

  closeButton.append(closeImage);

  return closeButton;
};
