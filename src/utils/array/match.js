export const containsElement = (array, element) => array.includes(element);

export const countArrayMatches = (sourceArray, targetArray) =>
  sourceArray.filter((element) => targetArray.includes(element)).length;
