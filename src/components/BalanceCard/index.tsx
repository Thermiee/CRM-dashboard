import React from "react"

interface BalanceCardProps {
  title: string
  amount: string
  buttonText: string
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  buttonText,
}) => {
  return (
    <div className="flex w-2/3">
      <div className="flex flex-col ">
        <h3 className="text-sm flex items-center justify-between">{title}</h3>
        <h1 className="font-bold text-3xl">{amount}</h1>
      </div>

      <button className="ml-auto bg-[#000] border border-[#E4E4E7] w-[167px] rounded-full px-7 py-4 text-sm font-medium text-[#fff]">
        {buttonText}
      </button>
    </div>
  )
}

export default BalanceCard
