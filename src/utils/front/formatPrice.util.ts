export const formatPrice = (price: number, currency: string): string => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
  });
  return formatter.format(price);
};
