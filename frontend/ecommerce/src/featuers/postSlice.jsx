import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     count:0
// };

const initialState= [
    {id:1, title:"Redux ",description:"I am Learning Redux and very happy about it."},
    {id:2, title:"React ",description:"I am Learning React  and gives me chills it."}
]

export const postSlice = createSlice({
  

       name:"posts",
       initialState,

       reducers:{
       increment: (state,action)=>{
          state.count +=1;
        },
       decrement: (state,action)=>{
          state.count -=1;
        },
       reset: (state,action)=>{
          state.count = 0;
        },
        incrementByAmount:(state,action)=>{
            state.count = action.payload
        },
        incrementByState:(state,action)=>{
            state.count( action.payload)
        }
    }
})


// export const {increment,decrement,reset,incrementByAmount} = postSlice.actions;
export const {increment,decrement,reset,incrementByAmount,incrementByState} = postSlice.actions;

export default postSlice.reducer