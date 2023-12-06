import React from "react"
import { Logo, Notification, Chat } from "../../assets"
import { navLinks } from "./data"
import { IoReorderThreeOutline } from "react-icons/io5"
import useCurrentPath from "../../Hooks/useCurrentPath"
import { Link } from "react-router-dom"

const Navbar = () => {
  const currentPath = useCurrentPath()

  return (
    <div>
      <div className="h-[64px] m-4 bg-white rounded-full shadow-md">
        <div className="flex items-center justify-between h-full px-4">
          <img src={Logo} alt="mainstack-logo" />
          <div className="flex items-center ">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  className={`${
                    currentPath === link.url ? "bg-[#000] rounded-full " : ""
                  }flex items-center py-2 px-4  cursor-pointer`}
                  to={link.url}
                >
                  {typeof link.image === "string" ? (
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-5 h-5 mr-2"
                    />
                  ) : (
                    link.image
                  )}
                  <span
                    className={` text-base ${
                      currentPath === link.url ? "text-white" : "text-black"
                    }`}
                    style={{ fill: "blue" }}
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center m-3">
              <img src={Notification} alt="search" />
            </div>
            <div className="flex items-center justify-center m-3">
              <img src={Chat} alt="bell" />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm rounded-full pr-3 gap-2 w-20 bg-[#EFF1F6]">
                <span
                  className="text-white rounded-full"
                  style={{
                    background:
                      "linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)",
                    padding: "8px",
                    borderRadius: "100px",
                    display: "inline-block",
                  }}
                >
                  OJ
                </span>
                <IoReorderThreeOutline className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
