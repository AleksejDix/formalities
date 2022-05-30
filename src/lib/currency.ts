const numberFormatter = new Intl.NumberFormat('de-CH', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
export function formatNumber(number: number, fallbackValue = '0'): string {
  if (!number) return fallbackValue;
  return numberFormatter.format(number);
}
