export const calculateTicketCount = (amount, priceUnit) => {
  return Math.floor(amount / priceUnit);
};
