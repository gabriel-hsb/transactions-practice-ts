import totalValue from "./totalValue.js"
import transactionTypes from "./transactionTypes.js"
import transactionsStatuses from "./transacationsStatuses.js"
import stringToDate from "./stringToDate.js"
import convertToCurrency from "./convertToCurrency.js"
import convertToNumber from "./convertToNumber.js"

//@ts-ignoreignore-ts
async function fetchData() {
  const URL = "https://api.origamid.dev/json/transacoes.json"
  try {
    const res = await fetch(URL)
    const json = await res.json()
    return json
  } catch {
    window.alert("Erro. Tente novamente mais tarde")
  }
}

const transactions: Transaction[] = await fetchData()

const refinedTransactions: refinedTransaction[] = transactions.map(
  (transaction) => {
    return {
      status: transaction.Status,
      id: transaction.ID,
      date: stringToDate(transaction.Data),
      name: transaction.Nome,
      paymentMethod: transaction["Forma de Pagamento"],
      email: transaction.Email,
      valueBRL: convertToCurrency(transaction["Valor (R$)"]),
      valueNumber: convertToNumber(transaction["Valor (R$)"]),
      newClient: transaction["Cliente novo"],
    }
  }
)

showTransactionData()
showTransactionTable()



function showTransactionData(): void {
  const transactionDiv = document.querySelector("#transactionData")

  if (!transactionDiv) return
  if (refinedTransactions === undefined) return

  if (transactionDiv) {
    const foo = transactionsStatuses(transactions)

    transactionDiv.innerHTML += `
      <b>Total faturado:</b> ${totalValue(refinedTransactions).transactionsTotalBRL} <br>
      <b>Total estornado:</b> ${totalValue(refinedTransactions).refundedTotalBRL}
      <hr>
      <b>Pagas:</b> ${foo.Paga} </br>
      <b>Aguardando pagamento:</b> ${foo["Aguardando pagamento"]} </br>
      <b>Estornada:</b> ${foo["Estornada"]} </br>
      <b>Recusada:</b> ${foo["Recusada pela operadora de cartão"]} </br>
      <hr>
      <b>Dia com mais vendas:</b> ??? </br>
      <hr>
      <b>Cartão de Crédito:</b> ${
        transactionTypes(transactions).creditCardTransactions
      }
      <br>
      <b>Boleto:</b> ${transactionTypes(transactions).ticketTransactions}
      <hr>

    `
  }
}

async function showTransactionTable(): Promise<void> {
  const tbody = document.querySelector("#tbody")

  if (!tbody) return
  if (refinedTransactions === undefined) return

  refinedTransactions.forEach((transaction) => {
    tbody.innerHTML += `
      <tr>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>${transaction.valueBRL /*TODO: fix NaN */}</td>
        <td>${transaction.paymentMethod}</td>
        <td>${transaction.status}</td>
      </tr>  
    `
  })
}
