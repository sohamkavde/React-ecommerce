import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'boolLogin',
    initialState:{
        value:false
    },
    reducers:{
        change:(state)=>{
            state.value = !state.value
        }
    }
})

export const {change} = slice.actions;

export default slice.reducer;