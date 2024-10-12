export default function convertToCurrency(value: number | string): string {
  let cleanedValue: string | number

  if (value === "-") {
    return "<i>---</i>"
  }

  if (typeof value === "string") {
    cleanedValue = value.replace(/\./g, "").replace(",", ".")
    cleanedValue = parseFloat(cleanedValue)
  } else {
    cleanedValue = value
  }

  if (cleanedValue < 0) return "<i>Estornada</i>"

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cleanedValue)
}
