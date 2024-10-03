export default function transactionTypes(transactions) {
    var creditCardTransactions = transactions.filter(function (value) {
        return value["Forma de Pagamento"] === "Cartão de Crédito";
    });
    var ticketTransactions = transactions.filter(function (value) {
        return value["Forma de Pagamento"] === "Boleto";
    });
    return {
        creditCardTransactions: creditCardTransactions.length,
        ticketTransactions: ticketTransactions.length,
    };
}
//# sourceMappingURL=transactionTypes.js.map