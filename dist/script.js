import fetchData from "./fetchData.js";
import totalValue from "./totalValue.js";
var URL = "https://api.origamid.dev/json/transacoes.json";
var transactions = await fetchData(URL);
console.log(transactions);
console.log(totalValue(transactions));
//# sourceMappingURL=script.js.map