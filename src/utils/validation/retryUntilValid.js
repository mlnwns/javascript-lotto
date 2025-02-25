export const retryUntilValid = async (func, onError) => {
  while (true) {
    try {
      return func();
    } catch (error) {
      onError(error.message);
    }
  }
};
