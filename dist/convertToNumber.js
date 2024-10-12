export default function convertToNumber(value) {
    const cleanedValue = value.replaceAll(".", "").replace(",", ".");
    return parseFloat(cleanedValue);
}
//# sourceMappingURL=convertToNumber.js.map