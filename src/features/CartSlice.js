
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
            const item = action.payload;
            const addedItem = state.value.find(i => i.id === item.id);
            if (addedItem) {
                addedItem.quantity += 1;
            } else 
            state.value.push({...item, quantity: 1 })
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