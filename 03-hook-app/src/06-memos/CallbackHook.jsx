import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

  

  const [counter, setCounter] = useState(100);

  const incrementFather = useCallback( () => {
    setCounter( ( value ) =>  value + 1 )
  }, [] )

  // const increment = () => {
  //   setCounter( counter + 1 )
  // }
  return (
    <div>
      <h1>UseCallback : { counter } </h1>
      <hr />


      <ShowIncrement 
        increment={ incrementFather }
      />
    </div>
  )
}
