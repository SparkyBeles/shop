
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: []
}


const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        add : (state, action) => {
            state.value.push(action.payload) 
        },
        remove : (state) => {
            state.value.pop()
        }
    }
})

export const {add} = cartSlice.actions;
export const {remove} = cartSlice.actions;

export default cartSlice.reducer; 