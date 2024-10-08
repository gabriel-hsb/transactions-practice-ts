export default function transactionsStatuses(transactions) {
    const transactionStatuses = [
        "Recusada pela operadora de cartão",
        "Aguardando pagamento",
        "Paga",
        "Estornada",
    ];
    const statusResults = {};
    for (const status of transactionStatuses) {
        const filteredTransactions = transactions.filter((value) => {
            return value.Status === status;
        });
        statusResults[status] = filteredTransactions.length;
    }
    return {
        denied: statusResults["Recusada pela operadora de cartão"],
        awaiting: statusResults["Aguardando pagamento"],
        paid: statusResults["Paga"],
        refunded: statusResults["Estornada"],
    };
}
//# sourceMappingURL=transacationsStatuses.js.map