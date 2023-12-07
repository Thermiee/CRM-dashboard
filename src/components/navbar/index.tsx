import React, { Fragment, useEffect, useState } from "react"
import { Logo, Notification, Chat } from "../../assets"
import { navLinks } from "./data"
import { IoReorderThreeOutline } from "react-icons/io5"
import useCurrentPath from "../../Hooks/useCurrentPath"
import { Link } from "react-router-dom"
import { Popover, Transition } from "@headlessui/react"
import { UserData } from "../../api"
import { User } from "../../types"

const Navbar = () => {
  const currentPath = useCurrentPath()
  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState<User | null>(null)
  const initials = `${userName?.first_name?.charAt(0) || ''}${userName?.last_name?.charAt(0) || ''}`;


  const getUserData = async () => {
    try {
      const userData = await UserData()
      setUserName(userData)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])

  const solutions = [
    {
      name: "Settings",

      href: "##",
      icon: IoReorderThreeOutline,
    },
    {
      name: "Purchase History",

      href: "##",
      icon: IoReorderThreeOutline,
    },
    {
      name: "Refer and Earn",

      href: "##",
      icon: IoReorderThreeOutline,
    },
    {
      name: "Integrations",
      href: "##",
      icon: IoReorderThreeOutline,
    },
    {
      name: "Report Bug",

      href: "##",
      icon: IoReorderThreeOutline,
    },
    {
      name: "Switch Accounts",

      href: "##",
      icon: IoReorderThreeOutline,
    },
    {
      name: "Sign out",

      href: "##",
      icon: IoReorderThreeOutline,
    },
  ]

  return (
    <div>
      <div className="h-[64px] m-4 w-full bg-white rounded-full shadow-md">
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
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
        ${open ? "text-white" : "text-white/90"}
        inline-flex items-center rounded-md px-3 py-2 text-base font-medium
      `}
                    >
                      <span className="text-white bg-gray-500 rounded-full p-2 text-xs font-bold leading-none inline-block align-middle">
                        {initials}
                      </span>
                      <IoReorderThreeOutline
                        className={`${
                          open ? "text-gray-500" : "text-gray-500"
                        } ml-2 h-5 w-5 transition duration-150 ease-in-out`}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      show={open}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute z-5 mt-3 w-[320px] -translate-x-1/2 transform px-4 sm:px-0"
                      >
                        <div className="overflow-hidden mt-2 rounded-lg shadow-lg ring-1 ring-black/5">
                          <div className="relative flex flex-col gap-4 bg-white p-2">
                            <div className="flex items-center place-items-center">
                              <div className="text-white bg-gray-500 rounded-full p-4 text-xs font-bold leading-none inline-block align-middle">
                              {initials}
                              </div>
                              <div className="flex flex-col">
                                <span className="ml-2 text-lg font-medium text-black">
                                  {userName?.first_name} {userName?.last_name}
                                </span>
                                <span className="ml-2 text-xs font-medium text-gray-400">
                                  {userName?.email}
                                </span>
                              </div>
                            </div>

                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="m-1 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                              >
                                <div className="flex h-10 w-10 items-center justify-center text-gray">
                                  <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
