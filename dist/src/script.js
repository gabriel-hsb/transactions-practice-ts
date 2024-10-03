import fetchData from "./fetchData.js";
import convertToNumber from "../utils/convertToNumber.js";
var URL = "https://api.origamid.dev/json/transacoes.json";
var transactions = await fetchData(URL);
var positiveTransactions = [];
var negativeTransactions = [];
transactions.forEach(function (transaction) {
    var currentValue = convertToNumber(transaction["Valor (R$)"]);
    if (currentValue >= 0) {
        positiveTransactions.push(currentValue);
    }
    else if (currentValue < 0) {
        negativeTransactions.push(currentValue);
    }
});
var positiveTotal = positiveTransactions.reduce(function (acc, cur) {
    return cur + acc;
}, 0);
var negativeTotal = negativeTransactions.reduce(function (acc, cur) {
    return cur + acc;
}, 0);
console.log("POSITIVAS: " + positiveTotal);
console.log("NEGATIVAS: " + Math.abs(negativeTotal));
var refundedTotal = Math.abs(negativeTotal);
console.warn(positiveTotal - Math.abs(negativeTotal));
console.log(negativeTransactions);
var body = document.querySelector("body");
if (body) {
    body.innerHTML += "\n      <h1>Total:  ".concat(, "</h1> </br>\n    ");
}
console.log(transactions);
//# sourceMappingURL=script.js.map