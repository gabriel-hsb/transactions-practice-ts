interface transactionTypesI {
  creditCardTransactions: number
  ticketTransactions: number
}

export default function transactionTypes(
  transactions: Transaction[]
): transactionTypesI {
  const creditCardTransactions = transactions.filter((value) => {
    return value["Forma de Pagamento"] === "Cartão de Crédito"
  })

  const ticketTransactions = transactions.filter((value) => {
    return value["Forma de Pagamento"] === "Boleto"
  })

  return {
    creditCardTransactions: creditCardTransactions.length,
    ticketTransactions: ticketTransactions.length,
  }
}
