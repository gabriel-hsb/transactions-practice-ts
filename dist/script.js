import fetchData from "./fetchData.js";
var URL = "https://api.origamid.dev/json/transacoes.json";
var transactions = await fetchData(URL);
console.log(transactions);
//# sourceMappingURL=script.js.map