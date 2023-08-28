import React, { useContext,useState } from 'react'
// import { ShopContext } from '../../context/CartContext'
import '../NewPro/Cart.css'
const Cart = () => {
 
  // const GlobalState = useContext(ShopContext)
  // const state = GlobalState.state
  // const dispatch = GlobalState.dispatch

  // const total = state.reduce((total,item)=>{
  //   return total + item.price*item.quantity
  // },0)

  
  return (
    <div className='cart'>
      {
      state.length===0?<h1 style={{display:"grid", color:"white", placeItems:"center"}}>No Items are added in the cart</h1> : state.map((item,index)=>{
        
          return(
            <span className='item'>
                 <img src={item.image}/>
                 <span>$..{item.price}</span>
                  <h6>{item.title}</h6>
                  <button onClick={()=>{
                    if(item.quantity>1){
                      dispatch({type:'DECREASE', payload:item})
                      } else{
                        dispatch({type:'REMOVE', payload:item})
                      }
                    }
                  }>-</button><br/>
                  <span>{item.quantity}</span><br/>
                <span>{item.quantity *item.price}</span><br/>
                  <button onClick={()=>dispatch({type:'INCREASE', payload:item})}>+</button><br/><br/>
                  <button onClick={()=>dispatch({type:'REMOVE', payload:item})}>x</button>
            </span>
          )
      })
      }
      {
        state.length>0 && 
        <div className='total'style={{textAlign:"right",borderTop:"1px solid grey"}}><h1>${total}</h1></div>
      }
    </div>
  )
}

export default Cart

