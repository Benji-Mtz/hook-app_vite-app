import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  // desestructuracion en {} o [] depende lo que se retorne
  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
        <h1>Counter with hook: { counter }</h1>
        <hr />

        <button 
          className="btn btn-primary"
          onClick={() => increment(2)} /* (event)=>incremente(event) rompemos la ref con () => increment(value)*/
        >+1</button>
        <button 
          className="btn btn-primary"
          onClick={reset}
        >Reset</button>
        <button 
          className="btn btn-primary"
          onClick={() => decrement(2)}
        >-1</button>
    </>
  )
}
