
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
            delete state.items[action.payload];
        },
        toggle : (state, action) => {
            const id = action.payload;
            state.items[id] = !state.items[id];
        },
        increaseQuantity : (state, action) => {
            const item = state.value.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity : (state, action) => {
            const item = state.value.find(i => i.id === action.payload);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                state.value = state.value.filter(i => i.id !== item.id);
                state.items[item.id] = false;

            }
            }
        },

        clearCart: (state) => {
            state.value = [];
            state.items = {};
},

    }
})

export const {add} = cartSlice.actions;
export const {remove} = cartSlice.actions;
export const {toggle} = cartSlice.actions;
export const {increaseQuantity} = cartSlice.actions;
export const {decreaseQuantity} = cartSlice.actions;
export const {clearCart } = cartSlice.actions;


export default cartSlice.reducer; 