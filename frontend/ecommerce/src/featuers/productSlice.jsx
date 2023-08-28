import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES =  Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
})

const initialState = {
    data:[],
    status:STATUSES.IDLE    
}
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
     
    },
    extraReducers:(builder)=>{
        builder
        .addCase(setProducts.pending,(state)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(setProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status= STATUSES.IDLE
        })
        .addCase(setProducts.rejected,(state)=>{
            state.status = STATUSES.ERROR
        })
    }
})



export default productSlice.reducer;

export const setProducts = createAsyncThunk('get/product',async()=>{
     try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json();
        console.log(data);
        return data;
       
     } catch (error) {
         console.log(error);
     }
})