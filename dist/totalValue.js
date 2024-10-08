import convertToCurrency from "./convertToCurrency.js";
import convertToNumber from "./convertToNumber.js";
export default function totalValue(transactions) {
    let positiveTransactions = [];
    let negativeTransactions = [];
    transactions.forEach((transaction) => {
        const currentValue = convertToNumber(transaction["Valor (R$)"]);
        if (currentValue >= 0) {
            positiveTransactions.push(currentValue);
        }
        else if (currentValue < 0) {
            negativeTransactions.push(currentValue);
        }
    });
    const positiveTotal = positiveTransactions.reduce((acc, cur) => {
        return cur + acc;
    }, 0);
    const negativeTotal = negativeTransactions.reduce((acc, cur) => {
        return cur + acc;
    }, 0);
    const refundedTotal = Math.abs(negativeTotal);
    const transactionsTotal = positiveTotal - Math.abs(negativeTotal);
    const transactionsTotalBRL = convertToCurrency(transactionsTotal);
    const refundedTotalBRL = convertToCurrency(refundedTotal);
    return {
        transactionsTotal,
        refundedTotal,
        transactionsTotalBRL,
        refundedTotalBRL,
    };
}
//# sourceMappingURL=totalValue.js.map