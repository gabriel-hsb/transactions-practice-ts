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
        "Recusada pela operadora de cartão": statusResults["Recusada pela operadora de cartão"],
        "Aguardando pagamento": statusResults["Aguardando pagamento"],
        Paga: statusResults["Paga"],
        Estornada: statusResults["Estornada"],
    };
}
//# sourceMappingURL=transacationsStatuses.js.map