export default function transactionsStatuses(
  transactions: Transaction[]
): Object {
  const transactionStatuses: TransactionStatus[] = [
    "Recusada pela operadora de cartão",
    "Aguardando pagamento",
    "Paga",
    "Estornada",
  ]

  const statusResults: {
    [key: string]: number
  } = {}

  for (const status of transactionStatuses) {
    const filteredTransactions = transactions.filter((value) => {
      return value.Status === status
    })

    statusResults[status] = filteredTransactions.length
  }
  return statusResults
}
