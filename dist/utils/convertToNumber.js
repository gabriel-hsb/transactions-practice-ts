export default function convertToNumber(value) {
    var cleanedValue = value.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleanedValue);
}
//# sourceMappingURL=convertToNumber.js.map