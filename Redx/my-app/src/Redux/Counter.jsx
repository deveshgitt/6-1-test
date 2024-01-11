import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment , Decrement , changeName} from './action'

function Counter() {

  const count = useSelector((state)=> state.counter.count )
  const name = useSelector((state)=> state.name.name )
  const dispatch = useDispatch();
  return (

    <>
    <div>Counter : {count}</div>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(Decrement())}>-</button>
    <div>Name : {name}</div>
    <button onClick={()=>dispatch(changeName())}>ChangeName</button>
    </>
  )
}

export default Counter