import { useRef } from "react"

const FocusInput = () => {

    const agent = useRef(null)

    return (
        <div>
            <input type="text" ref={agent} />
            <button onClick={() => agent.current.focus()} >Click</button>
        </div>
    )
}
export default FocusInput