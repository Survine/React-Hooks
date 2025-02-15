import { useReducer, useState } from "react";
import { countReducer, initialState } from "./countReducer";

const Counter = () => {

  const [state, dispatch] = useReducer(countReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrementByAmount = () => {
    dispatch({ type: 'incrementByAmount', payload: +(inputValue) });
    setInputValue(0);
  }

  const handleDecrementByAmount = () => {
    dispatch({ type: 'decrementByAmount', payload: +(inputValue) });
    setInputValue(0);
  }

  return (
    <div>
      <h1>Count: {state.count} </h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      <div>
        <input type="number" value={inputValue} placeholder="Enter a Number" onChange={(e) => setInputValue(e.target.value) } />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter