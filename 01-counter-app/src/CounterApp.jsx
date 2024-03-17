import PropTypes from 'prop-types' 
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {

    const [count, setCount] = useState(value)

    
    const handleAdd = () => {
        setCount( count + 1 )
    }

    const handleSubtract = () => {
        if(count <= 0) return

        setCount( count - 1 )
    }

    const handleReset = () => {
        setCount(value)
    }

  return (
    <>
        <h1>Counter App</h1>
        <button onClick={handleAdd}>+1</button>
        <h2>{count}</h2>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>reset</button>
        
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
