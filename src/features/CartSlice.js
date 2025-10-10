
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: []
}


const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        add : (state) => {
            state.push(item) 
        },
        remove : (state) => {
            state.pop()
        }
    }
})

export const {add} = cartSlice.actions;
export const {remove} = cartSlice.actions;

export default cartSlice.reducer; 