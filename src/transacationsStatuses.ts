interface teste {
  "Recusada pela operadora de cartão": number
  "Aguardando pagamento": number
  Paga: number
  Estornada: number
}

export default function transactionsStatuses(
  transactions: Transaction[]
): teste {
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
    "Recusada pela operadora de cartão":
      statusResults["Recusada pela operadora de cartão"],
    "Aguardando pagamento": statusResults["Aguardando pagamento"],
    Paga: statusResults["Paga"],
    Estornada: statusResults["Estornada"],
  }
}
