import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setProducts } from '../featuers/productSlice'
import { add } from '../featuers/cartSlice'



const Products = () => {
   
   const dispatch = useDispatch()
    const {data} = useSelector(state=>state.product)
    useEffect(()=>{
        dispatch(setProducts())
    },[])

    const handleAdd =(product)=>{
        dispatch(add(product))
    }

  return (
    <div>
      {data.map((product)=>(
        <div>
        {product.title}
        <button onClick={()=>handleAdd(product)}>Add</button>
        </div>
      ))}
    </div>
  )
}

export default Products
