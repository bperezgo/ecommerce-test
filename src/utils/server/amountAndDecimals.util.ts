export const amountAndDecimals = (price: string): number[] => {
  const [num = '0', decimal = '0'] = price.split('.');
  return [parseInt(num, 10), parseInt(decimal, 10)];
};
