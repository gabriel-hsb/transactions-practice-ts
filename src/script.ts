import fetchData from "./fetchData.js"

import totalValue from "./totalValue.js"

const URL = "https://api.origamid.dev/json/transacoes.json"

//@ts-ignoreignore-ts
const transactions: Transaction[] = await fetchData(URL)

console.log(transactions)

console.log(totalValue(transactions))
