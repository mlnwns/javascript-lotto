import output from "../view/output.js";

export const retryUntilValid = async (getInputFn, parseFn, validator) => {
  while (true) {
    try {
      const userInput = await getInputFn();
      const result = parseFn(userInput);
      validator(result);
      return result;
    } catch (error) {
      output.print(error.message);
    }
  }
};
