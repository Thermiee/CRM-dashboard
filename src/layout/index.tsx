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
      <div className="flex flex-col w-full h-screen pl-3">
        <Outlet />
      </div>
        
      </div>
    </div>
  )
}

export default DashboardLayout
