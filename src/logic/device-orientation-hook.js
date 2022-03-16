import { useEffect, useState } from "react"

export const useDeviceOrientation = () => {
    const [orientation, setOrientation] = useState({ alpha: 0, beta: 90, gamma: 0 })

    useEffect(() => {
        addEventListener()
    }, [])

    const addEventListener = () => {
        window.addEventListener('deviceorientation', (e) => {
            const { alpha, beta, gamma } = e
            setOrientation({alpha, beta, gamma})
          })
    }

    return [orientation]
}