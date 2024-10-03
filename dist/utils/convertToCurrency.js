export default function convertToCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}
//# sourceMappingURL=convertToCurrency.js.map