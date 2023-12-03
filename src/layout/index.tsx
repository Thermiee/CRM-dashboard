import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[95vw] sm:w-[97vw]  lg:w-[95vw] h-screen mt-[70px] md:pl-48 md:w-[96vw] lg:pl-[21vw]">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
