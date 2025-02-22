import { readLineAsync } from "../utils/readLineAsync.js";

const input = {
  getInput(message) {
    return readLineAsync(message);
  },
};

export default input;
