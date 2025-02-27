export const createElement = (tag, props = {}) => {
  const element = document.createElement(tag);

  Object.entries(props).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
};
