import convertToCurrency from "./convertToCurrency.js";
import convertToNumber from "./convertToNumber.js";
export default function totalValue(transactions) {
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
    var refundedTotal = Math.abs(negativeTotal);
    var transactionsTotal = positiveTotal - Math.abs(negativeTotal);
    var transactionsTotalBRL = convertToCurrency(transactionsTotal);
    var refundedTotalBRL = convertToCurrency(refundedTotal);
    return {
        transactionsTotal: transactionsTotal,
        refundedTotal: refundedTotal,
        transactionsTotalBRL: transactionsTotalBRL,
        refundedTotalBRL: refundedTotalBRL,
    };
}
//# sourceMappingURL=totalValue.js.map