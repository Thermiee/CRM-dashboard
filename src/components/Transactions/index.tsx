import React from "react"

import { IoChevronDown } from "react-icons/io5"
import { GoDownload } from "react-icons/go"
import TransactionTable from "../table"
import { TransactionTableProps } from "../../types"


const TransactionSection: React.FC<TransactionTableProps> = ({
    transactions,
    title,
}) => {
  return (
    <div className="mr-16">
      <div className="flex justify-between border-b pb-4">
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>Your transactions for the last 7 days</p>
        </div>
        <div className="flex gap-4">
          <button className="mr-4 bg-[#EFF1F6] flex border items-center border-[#E4E4E7] w-[167px] rounded-full px-7 py-4 text-sm font-medium text-[#000]">
            Filter
            <span className="ml-3">
              <IoChevronDown />
            </span>
          </button>
          <button className=" bg-[#EFF1F6] flex border items-center  border-[#E4E4E7] w-[167px] rounded-full px-7 py-4 text-sm font-medium text-[#000]">
            Export
            <span className="ml-3">
              <GoDownload />
            </span>
          </button>
        </div>
      </div>
      <TransactionTable transactions={transactions} title={title} />
    </div>
  )
}

export default TransactionSection
