export const formatCurrency = (amount: number) => {
  const numberFormat = new Intl.NumberFormat("pt-MZ", {
    style: "currency",
    currency: "MZN",
  });

  return numberFormat.format(amount).replace("MTn", "");
};
