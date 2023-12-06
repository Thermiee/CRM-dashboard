import React from 'react'
import { ProductIcons, ProductIcons1, ProductIcons2, ProductIcons3 } from '../assets'

const SideIcons = () => {
  return (
    <div className="flex flex-col w-[48px] p-1 justify-center gap-4 h-[192px] mt-36 items-center m-4 bg-white rounded-full shadow-md ">
    <img src={ProductIcons} alt="1" />
    <img src={ProductIcons1} alt="2" />
    <img src={ProductIcons2} alt="3" />
    <img src={ProductIcons3} alt="4" />
  </div>
  )
}

export default SideIcons