interface Transaction {
  Status: TransactionStatus
  ID: number
  Data: string
  Nome: string
  "Forma de Pagamento": "Cartão de Crédito" | "Boleto"
  Email: string
  "Valor (R$)": string
  "Cliente novo": boolean
}

interface refinedTransaction {
  status: TransactionStatus
  id: number
  date: Date
  weekDay: number
  name: string
  paymentMethod: "Cartão de Crédito" | "Boleto"
  email: string
  valueBRL: string
  valueNumber: number
  newClient: boolean
}

type TransactionStatus =
  | "Aguardando pagamento"
  | "Estornada"
  | "Paga"
  | "Recusada pela operadora de cartão"
