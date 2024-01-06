import React, { createContext, useContext } from 'react'
import { myContext } from './Counter.js'



function Home() {
    let {state, dispatch} = useContext(myContext)
  return (
    <>
    <div>Home</div>
    <h1>Counter : {state.counter}</h1>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
    <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
    </>
  )
}

export default Home