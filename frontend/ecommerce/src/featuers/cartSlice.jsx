import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],


    reducers:{

    add(state,action){
      state.push(action.payload)
    },
    subtract(state,action){
      state.pop = action.payload
    },
    remove(state,action){
      return state.filter((item)=>item.id!==action.payload)
    },
}
})


export const {add,remove,subtract} = cartSlice.actions;

export default cartSlice.reducer