export default function transactionTypes(transactions) {
    const creditCardTransactions = transactions.filter((value) => {
        return value["Forma de Pagamento"] === "Cartão de Crédito";
    });
    const ticketTransactions = transactions.filter((value) => {
        return value["Forma de Pagamento"] === "Boleto";
    });
    return {
        creditCardTransactions: creditCardTransactions.length,
        ticketTransactions: ticketTransactions.length,
    };
}
//# sourceMappingURL=transactionTypes.js.map