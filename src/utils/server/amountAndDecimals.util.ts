export const amountAndDecimals = (price: string): number[] => {
  const [num, decimal] = price.split('.');
  return [num as unknown as number, decimal as unknown as number];
};
