import React from "react"
import { GoArrowDownLeft } from "react-icons/go"
import { MdArrowOutward } from "react-icons/md"
import { TransactionTableProps, Transaction } from "../../types"

const getTransactionIcon = (transaction: Transaction) => {
    return transaction.type === "deposit" ? <GoArrowDownLeft
    className="text-[#075132]"
    /> : <MdArrowOutward
    className="text-[#961100]"
    />;
  };

  
  
  const getBackgroundColor = (transaction: Transaction) => {
    return transaction.type === "deposit" ? "bg-[#E3FCF2]" : "bg-[#F9E3E0]";
  };

  const getTransactionDisplayName = (transaction: Transaction) => {
    return transaction.metadata?.product_name || transaction.type;
  };

  const getTransactionDisplayStatus = (transaction: Transaction) => {
    return transaction?.metadata?.name || transaction.status;
    }


const TransactionTable: React.FC<TransactionTableProps> = ({ payments }) => (
  <div className="flex flex-col mt-4">
    <table className="min-w-full">
      <tbody className="bg-white">
      {payments.map((transaction, index) => (
          <tr key={index}>
            <td className="px-6 whitespace-nowrap flex items-center justify-between">
              <div className="flex">
                <div
                  className={`rounded-full p-4 flex w-12 h-12 ${getBackgroundColor(transaction)}`}
                >
                  {getTransactionIcon(transaction)}
                </div>
                <div className="flex flex-col ml-5">
                  <span>{getTransactionDisplayName(transaction)}</span>
                  <span>
                    {getTransactionDisplayStatus(transaction)}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 flex-col flex text-end text-sm leading-5">
                <span className="font-bold ">
                    {
                        `USD ${transaction.amount}`
                    }
                </span>
                <span className="text-[#56616B]"
                >{transaction.date
                
                }</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default TransactionTable
