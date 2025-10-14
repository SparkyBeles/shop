
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

        remove : (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
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