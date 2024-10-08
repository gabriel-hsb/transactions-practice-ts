interface paymentStatus {
  denied: number
  awaiting: number
  paid: number
  refunded: number
}

export default function transactionsStatuses(
  transactions: Transaction[]
): paymentStatus {
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
  return {
    denied: statusResults["Recusada pela operadora de cartão"],
    awaiting: statusResults["Aguardando pagamento"],
    paid: statusResults["Paga"],
    refunded: statusResults["Estornada"],
  }
}
