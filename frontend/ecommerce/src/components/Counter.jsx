import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../featuers/postSlice';

const Counter = () => {
    const [amount,setAmount] = useState(0)
    const count = useSelector(state=>state.counter.count);
    const addvalue = Number(amount)
    const dispatch = useDispatch()
  return (
    <div style={{textAlign:'center'}}>
      <h2 style={{color:'white'}}>{count}</h2>

      <input type='text' onChange={(e)=>setAmount(e.target.value)}/><br/> <br/><br/>
      <button onClick={()=>dispatch(incrementByAmount(addvalue))}>Add Amount</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
