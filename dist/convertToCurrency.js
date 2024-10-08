export default function convertToCurrency(value) {
    let cleanedValue;
    if (typeof value === "string") {
        cleanedValue = value.replace(/\./g, "").replace(",", ".");
        cleanedValue = parseFloat(cleanedValue);
    }
    else {
        cleanedValue = value;
    }
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(cleanedValue);
}
//# sourceMappingURL=convertToCurrency.js.map