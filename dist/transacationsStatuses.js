export default function transactionsStatuses(transactions) {
    var transactionStatuses = [
        "Recusada pela operadora de cartão",
        "Aguardando pagamento",
        "Paga",
        "Estornada",
    ];
    var statusResults = {};
    var _loop_1 = function (status_1) {
        var filteredTransactions = transactions.filter(function (value) {
            return value.Status === status_1;
        });
        statusResults[status_1] = filteredTransactions.length;
    };
    for (var _i = 0, transactionStatuses_1 = transactionStatuses; _i < transactionStatuses_1.length; _i++) {
        var status_1 = transactionStatuses_1[_i];
        _loop_1(status_1);
    }
    return statusResults;
}
//# sourceMappingURL=transacationsStatuses.js.map