import React from "react"

import { CgInfo } from "react-icons/cg"

interface InfoCardProps {
  title: string
  amount?: string | number
}
const InfoCard: React.FC<InfoCardProps> = ({ title, amount }) => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-sm flex items-center justify-between">
        {title}
        <span>
          <CgInfo />
        </span>
      </h3>
      <h1 className="font-bold text-2xl">{amount}</h1>
    </div>
  )
}

export default InfoCard
