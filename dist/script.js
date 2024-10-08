import totalValue from "./totalValue.js";
import transactionTypes from "./transactionTypes.js";
import transactionsStatuses from "./transacationsStatuses.js";
import stringToDate from "./stringToDate.js";
import convertToCurrency from "./convertToCurrency.js";
import convertToNumber from "./convertToNumber.js";
import mostFrequentDay from "./mostFrequentDay.js";
async function fetchData() {
    const URL = "https://api.origamid.dev/json/transacoes.json";
    try {
        const res = await fetch(URL);
        const json = await res.json();
        return json;
    }
    catch {
        window.alert("Erro. Tente novamente mais tarde");
    }
}
const transactions = await fetchData();
const daysOfTheWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];
const refinedTransactions = transactions.map((transaction) => {
    return {
        status: transaction.Status,
        id: transaction.ID,
        date: stringToDate(transaction.Data),
        weekDay: stringToDate(transaction.Data).getDay(),
        name: transaction.Nome,
        paymentMethod: transaction["Forma de Pagamento"],
        email: transaction.Email,
        valueBRL: convertToCurrency(transaction["Valor (R$)"]),
        valueNumber: convertToNumber(transaction["Valor (R$)"]),
        newClient: transaction["Cliente novo"],
    };
});
showTransactionData();
showTransactionTable();
function showTransactionData() {
    const transactionDiv = document.querySelector("#transactionData");
    const bestDay = mostFrequentDay(refinedTransactions);
    if (!transactionDiv)
        return;
    if (refinedTransactions === undefined)
        return;
    const foo = transactionsStatuses(transactions);
    transactionDiv.innerHTML += `
    <b>Total faturado:</b> ${totalValue(refinedTransactions).transactionsTotalBRL} <br>
    <b>Total estornado:</b> ${totalValue(refinedTransactions).refundedTotalBRL}
    <hr>
    <b>Pagas:</b> ${foo.paid} </br>
    <b>Aguardando pagamento:</b> ${foo.awaiting} </br>
    <b>Estornada:</b> ${foo.refunded} </br>
    <b>Recusada:</b> ${foo.denied} </br>
    <hr>
    <b>Dia com mais vendas:</b> ${bestDay[0]} </br>
    <hr>
    <b>Cartão de Crédito:</b> ${transactionTypes(transactions).creditCardTransactions}
    <br>
    <b>Boleto:</b> ${transactionTypes(transactions).ticketTransactions}
    <hr>
  `;
}
function showTransactionTable() {
    const tbody = document.querySelector("#tbody");
    if (!tbody)
        return;
    if (refinedTransactions === undefined)
        return;
    refinedTransactions.forEach((transaction) => {
        tbody.innerHTML += `
      <tr>
        <td>${daysOfTheWeek[transaction.weekDay]}</td>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>${transaction.valueBRL}</td>
        <td>${transaction.paymentMethod}</td>
        <td>${transaction.status}</td>
      </tr>  
    `;
    });
}
//# sourceMappingURL=script.js.map