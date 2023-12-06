import React from "react"
import { GoArrowDownLeft } from "react-icons/go"
import { MdArrowOutward } from "react-icons/md"
import { TransactionTableProps } from "../../types"

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => (
  <div className="flex flex-col mt-4">
    <table className="min-w-full">
      <tbody className="bg-white">
        {transactions.map((t, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap flex items-center justify-between">
              <div className="flex">
                <div className={`rounded-full p-4 flex w-12 h-12 ${t.bgColor}`}>
                  {t.icon}
                </div>
                <div className="flex flex-col ml-5">
                  <span>{t.title}</span>
                  <span>{t.author}</span>
                </div>
              </div>
              <div className="px-6 py-4 flex-col flex text-end text-sm leading-5">
                <span>{t.amount}</span>
                <span>{t.date}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default TransactionTable
