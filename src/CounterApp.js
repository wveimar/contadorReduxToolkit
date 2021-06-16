import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from "./Slice/counterSlice"

export const CounterApp = () => {
    const {valor} = useSelector(state => state.counter);
    const [toIncrement, setToIncrement] = useState(0)
    const dispatch = useDispatch();
    const handleChange= (a) =>{
          setToIncrement(parseInt(a.target.value))
    }

    const add = () =>{
        dispatch(increment()) 
    }

    const minus = () =>{
        dispatch(decrement()) 
    }

    const addBy = () =>{
        dispatch(incrementBy(toIncrement))
    }
    return (
        <>
            <h1>Valor: {valor}</h1>
            <input 
            type ="number" 
            name ="number" 
            value = {toIncrement} 
            onChange={handleChange}/>
            <hr/>
            <button className="btn btn-primary" onClick={add}>+1</button>
            <button className="btn btn-secondary" onClick={minus}>-1</button>
            <button className="btn btn-warning" onClick={addBy}>+{toIncrement}</button>
        </>
    )
}

