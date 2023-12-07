import React, { useState } from "react"
import {
  ProductIcons,
  ProductIcons1,
  ProductIcons2,
  ProductIcons3,
  AltIcons,
  AltIcons1,
  AltIcons2,
  AltIcons3,
} from "../assets"

const SideIcons = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  const handleHover = (
    event: React.MouseEvent<HTMLImageElement>,
    image: string,
  ) => {
    setHoveredImage(image)
  }

  const handleLeave = () => {
    setHoveredImage(null)
  }

  return (
    <div className="relative flex flex-col w-[48px] p-1 justify-center gap-3 h-[250px]
    mt-36 items-center m-4 bg-white rounded-full shadow-md ">
      {hoveredImage && (
        <div className="absolute top-0 left-full p-2 bg-gray-800 text-white rounded">
          {hoveredImage === "1" ? "AltIcons" : `ProductIcons ${hoveredImage}`}
        </div>
      )}
      <img
        src={hoveredImage === "1" ? AltIcons : ProductIcons}
        alt="Link to Bio"
        onMouseOver={(event) => handleHover(event, "1")}
        onMouseOut={handleLeave}
        className="mb-4"
      />
      <img
        src={hoveredImage === "2" ? AltIcons1 : ProductIcons1}
        alt="Store"
        onMouseOver={(event) => handleHover(event, "2")}
        onMouseOut={handleLeave}
        className="mb-4"
      />
      <img
        src={hoveredImage === "3" ? AltIcons2 : ProductIcons2}
        alt="Media Kit"
        onMouseOver={(event) => handleHover(event, "3")}
        onMouseOut={handleLeave}
        className="mb-4"
      />
      <img
        src={hoveredImage === "4" ? AltIcons3 : ProductIcons3}
        alt="Invoicing"
        onMouseOver={(event) => handleHover(event, "4")}
        onMouseOut={handleLeave}
      />
    </div>
  )
}

export default SideIcons
