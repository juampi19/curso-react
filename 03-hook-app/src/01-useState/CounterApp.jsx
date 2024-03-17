import { useState } from "react"


export const CounterApp = () => {

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  return (
    <>
      <h1>Counter: {counter.counter1}</h1>
      <h1>Counter: {counter.counter2}</h1>
      <h1>Counter: {counter.counter3}</h1>

      <hr />


      <button 
        className="btn btn-primary" 
        onClick={ () => setCounter( prevState => ({
          ...prevState,
          counter1: prevState.counter1 + 1
        }) ) }
      >
          counter1: +1
      </button>


      <button 
        className="btn btn-primary" 
        onClick={ () => setCounter( prevState => ({
          ...prevState,
          counter2: prevState.counter2 + 1
        }) ) }
      >
          counter2: +1
      </button>



      

    </>
  )
}
