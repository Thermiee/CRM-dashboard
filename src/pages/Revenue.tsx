import React from "react"

const Revenue = () => {
  return (
    <div className="flex justify-between m-6">
      <div className="flex flex-col w-[75vw]">
        <div className="flex w-2/3">
          <div className="flex flex-col ">
            <h3 className="text-sm">Available Balance</h3>
            <h1 className="font-bold text-3xl">USD 120,500.00</h1>
          </div>

          <button
          className="ml-auto bg-[#000] border border-[#E4E4E7] w-[167px] rounded-full px-7 py-4 text-sm font-medium text-[#fff]"
          >Withdraw</button>
        </div>
        <div>graph</div>
      </div>
      <div className="flex flex-col w-[20vw]">
        <h2> Recent Transactions</h2>
        <p>
            Lorem ipsum
        </p>
        <h2> Recent Transactions</h2>
        <p>
            Lorem ipsum
        </p>
        <h2> Recent Transactions</h2>
        <p>
            Lorem ipsum
        </p>
        <h2> Recent Transactions</h2>
        <p>
            Lorem ipsum
        </p>
        
      </div>
    </div>
  )
}

export default Revenue
