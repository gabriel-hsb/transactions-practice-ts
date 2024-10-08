export default function convertToNumber(value) {
    const cleanedValue = value.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleanedValue);
}
//# sourceMappingURL=convertToNumber.js.map