export default function convertToNumber(value: string): number {
    const cleanedValue = value.replace(/\./g, "").replace(",", ".")
    return parseFloat(cleanedValue)
  }