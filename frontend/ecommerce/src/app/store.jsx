import {configureStore} from '@reduxjs/toolkit'
// import counterSlice from '../featuers/counterSlice'
import cartReducer from '../featuers/cartSlice'
import productReducer from '../featuers/productSlice'


export const store = configureStore({
    reducer:{
    //    counter:counterSlice,
    //    posts : postSlice
    cart: cartReducer,
    product:productReducer
    
    }
})

