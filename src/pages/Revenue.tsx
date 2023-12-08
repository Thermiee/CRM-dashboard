import React, { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Transaction, Balance } from "../types"
import BalanceCard from "../components/BalanceCard"
import InfoCard from "../components/InfoCard"
import TransactionSection from "../components/Transactions"
import { BounceLoader } from "react-spinners"
import { UserData, TransactionData, WalletData } from "../api"

const Revenue: React.FC = () => {
  const [userData, setUserData] = useState(null)
  const [walletData, setWalletData] = useState<Balance | null>(null)
  const [transactionData, setTransactionData] = useState<Transaction[]>(
    [],
  )
  const [loading, setLoading] = useState(false)

  const getTransactions = async () => {
    try {
      setLoading(true)
      const userData = await UserData()
      console.log(userData)
      setUserData(userData)

      const walletData = await WalletData()
      console.log(walletData)
      setWalletData(walletData)

      const transactionData = await TransactionData()
      console.log(transactionData)
      setTransactionData(transactionData)

      setLoading(false)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <BounceLoader color="#000" />
          </div>
        ) : (
          <div>
            <div className="flex justify-between m-6">
              <div className="flex flex-col w-[70vw]">
                <BalanceCard
                  title="Available Balance"
                  amount={`USD ${walletData?.balance}`}
                  buttonText="Withdraw"
                />
                <div className="h-[300px] w-4/5 bg-[#fff] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={300} data={
                        transactionData.map((transaction) => ({
                            name: transaction.date,
                            pv: transaction.amount,
                            }))
                    }>
                    <XAxis dataKey="name" />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#FF5403"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex flex-col w-[25vw] gap-8 mr-16">
                <InfoCard
                  title="Ledger Balance"
                  amount={`USD ${walletData?.ledger_balance}`}
                />
                <InfoCard
                  title="Total Payout"
                  amount={`USD ${walletData?.total_payout}`}
                />
                <InfoCard
                  title="Total Revenue"
                  amount={`USD ${walletData?.total_revenue}`}
                />
                <InfoCard
                  title="Pending Payout"
                  amount={`USD ${walletData?.pending_payout}`}
                />
              </div>
            </div>
            <TransactionSection
              title={`${transactionData.length} Transactions`}
              payments={transactionData}
            />
          </div>
        )}
      </div>
    </div>
  )
}
export default Revenue
