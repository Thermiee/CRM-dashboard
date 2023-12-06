export interface Transaction {
  icon: React.ReactElement
  bgColor: string
  title: string
  author: string
  amount: string
  date: string
}

export interface TransactionTableProps {
  transactions: Transaction[], 
    title: string 
}
