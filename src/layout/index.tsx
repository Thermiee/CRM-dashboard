import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import SideIcons from "./sideIcons"

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />

      
      <div className="w-[95vw] sm:w-[97vw] flex lg:w-[95vw] h-screen">
      <div className="flex">
      <SideIcons />
      </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
