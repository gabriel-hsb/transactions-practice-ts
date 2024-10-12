export default function convertToNumber(value: string): number {
  const cleanedValue = value.replaceAll(".", "").replace(",", ".")
  return parseFloat(cleanedValue)
}
