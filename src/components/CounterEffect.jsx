import { useEffect, useState } from "react"


const CounterEffect = () => {

    const[count, setCount] = useState(0); 

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]) // This will only run when count changes

  return (
    <div>

        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1) } >Increment</button>
    </div>
  )
}
export default CounterEffect