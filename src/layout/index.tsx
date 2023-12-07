import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import SideIcons from "./sideIcons"

const DashboardLayout = () => {
  return (
    <div className="w-[97vw] md:w-[95vw]">
      <Navbar />

      
      <div className="flex h-screen">
      <div className="flex">
      <SideIcons />
      </div>
      <div className="flex flex-col w-[92vw] h-screen pl-3">
        <Outlet />
      </div>
        
      </div>
    </div>
  )
}

export default DashboardLayout
