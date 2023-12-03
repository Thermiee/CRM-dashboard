import { useRoutes } from "react-router-dom"
import { DashboardRoutes } from "./AppRoutes"

const Routes = () => {
  return useRoutes([DashboardRoutes])
}

export default Routes
