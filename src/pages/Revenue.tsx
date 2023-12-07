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
import { GoArrowDownLeft, GoDownload } from "react-icons/go"
import { Transaction, Balance } from "../types"
import { MdArrowOutward } from "react-icons/md"
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
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

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
                <div className="h-[300px] w-3/4 bg-[#fff] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={300} data={data}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
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
