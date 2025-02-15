import { useEffect, useRef, useState } from "react"

const Timer = () => {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [] )

  return (
    <div>
        <h1>Timer: {timer} seconds</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}
export default Timer