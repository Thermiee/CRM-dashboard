import React from "react"
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
import { Transaction } from "../types"
import { MdArrowOutward } from "react-icons/md"
import BalanceCard from "../components/BalanceCard"
import InfoCard from "../components/InfoCard"
import TransactionSection from "../components/Transactions"



const Revenue: React.FC = () => {
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

  const transactions: Transaction[] = [
    {
      icon: <GoArrowDownLeft />,
      bgColor: "bg-[#E3FCF2]",
      title: "Psychology of Money",
      author: "Roy Cash",
      amount: "USD 600",
      date: "Apr 03, 2022",
    },
    {
      icon: <MdArrowOutward />,
      bgColor: "bg-[#F9E3E0]",
      title: "Psychology of Money",
      author: "Roy Cash",
      amount: "USD 600",
      date: "Apr 03, 2022",
    },
  ]

  return (
    <div>
      <div className="flex justify-between m-6">
        <div className="flex flex-col w-[70vw]">
          <BalanceCard
            title="Available Balance"
            amount="USD 120,500.00"
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
          <InfoCard title="Ledger Balance" amount="USD 120,500.00" />
          <InfoCard title="Total Payout" amount="USD 120,500.00" />
          <InfoCard title="Total Revenue" amount="USD 120,500.00" />
          <InfoCard title="Pending Payout" amount="USD 120,500.00" />
        </div>
      </div>
      <TransactionSection title="24 Transactions" transactions={transactions} />
    </div>
  )
}

export default Revenue
