import { useEffect, useState } from "react"

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleWindowResizing = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResizing)

        return () => window.removeEventListener("resize", handleWindowResizing)
    }, [])

    return {
        windowDimensions
    }
}