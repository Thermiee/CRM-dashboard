import React from "react"
import { Navigate } from "react-router-dom"
import DashboardLayout from "../layout"
import Analytics from "../pages/Analytics"
import Apps from "../pages/Apps"
import Revenue from "../pages/Revenue"
import Crm from "../pages/Crm"
import Home from "../pages"

export const DashboardRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    { path: "/", element: <Navigate to="/revenue" /> },
    { path: "home", element: <Home /> },
    { path: "analytics", element: <Analytics /> },
    { path: "apps", element: <Apps /> },
    { path: "revenue", element: <Revenue /> },
    { path: "crm", element: <Crm /> },
  ],
}
