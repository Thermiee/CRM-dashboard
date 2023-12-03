import React from "react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState<string>("")
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return currentPath
}

export default useCurrentPath
