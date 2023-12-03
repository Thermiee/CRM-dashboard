import React from "react"
import { Home, Payments, Analytics, Apps, Crm } from "../../assets"

export interface navLinksProps {
  id: number
  title: string
  url: string
  image: string | React.ReactElement | undefined
}

export const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/home",
    image: Home,
  },

  {
    id: 2,
    title: "Analytics",
    url: "/analytics",
    image: Apps,
  },
  {
    id: 3,
    title: "Revenue",
    url: "/revenue",
    image: Payments,
  },
  {
    id: 4,
    title: "CRM",
    url: "/crm",
    image: Analytics,
  },
  {
    id: 5,
    title: "Apps",
    url: "/apps",
    image: Crm,
  },
]
