
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: [],
    items: {},
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
        },
        toggle : (state, action) => {
            const id = action.payload;
            state.items[id] = !state.items[id];
        }
    }
})

export const {add} = cartSlice.actions;
export const {remove} = cartSlice.actions;
export const {toggle} = cartSlice.actions;

export default cartSlice.reducer; 