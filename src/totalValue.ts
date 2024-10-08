import convertToCurrency from "./convertToCurrency.js"

interface TotalValueI {
  transactionsTotal: number
  refundedTotal: number
  transactionsTotalBRL: string
  refundedTotalBRL: string
}

export default function totalValue(transactions: refinedTransaction[]): TotalValueI {
  let positiveTransactions: number[] = []
  let negativeTransactions: number[] = []

  transactions.forEach((transaction) => {
    const currentValue = transaction.valueNumber

    if (currentValue >= 0) {
      positiveTransactions.push(currentValue)
    } else if (currentValue < 0) {
      negativeTransactions.push(currentValue)
    }
  })

  const positiveTotal = positiveTransactions.reduce((acc, cur) => {
    return cur + acc
  }, 0)

  const negativeTotal = negativeTransactions.reduce((acc, cur) => {
    return cur + acc
  }, 0)

  const refundedTotal = Math.abs(negativeTotal)

  const transactionsTotal = positiveTotal - Math.abs(negativeTotal)

  const transactionsTotalBRL = convertToCurrency(transactionsTotal)

  const refundedTotalBRL = convertToCurrency(refundedTotal)

  return {
    transactionsTotal,
    refundedTotal,
    transactionsTotalBRL,
    refundedTotalBRL,
  }
}
