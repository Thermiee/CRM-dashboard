export interface Transaction {
  icon: React.ReactElement
  bgColor: string
  amount: string
  date: string
  metadata: {
    country: string
    email: string
    name: string
    product_name: string 
    quantity: number
    type: string
  }
  payment_reference: string
  status: string
  type: string
}

export interface TransactionTableProps {
    payments: Transaction[], 
    title: string 
}

export interface User {
  email: string
  first_name: string
  last_name: string
}

export interface Balance {
  balance: number
  ledger_balance: number
  pending_payout: number
  total_payout: number
  total_revenue: number
}

export interface Payment {

}

export interface PaymentTableProps {
  payments: Payment[]
  title: string
}

