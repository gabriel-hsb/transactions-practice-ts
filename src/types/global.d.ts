interface Transaction {
  Status: TransactionStatus
  ID: number
  Data: string
  Nome: string
  "Forma de Pagamento": "Cartão de Crédito" | "Boleto"
  Email: string
  "Valor (R$)": string
  "Cliente novo": 1 | 0
}

type TransactionStatus =
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Paga"
