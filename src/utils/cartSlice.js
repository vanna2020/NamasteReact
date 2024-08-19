import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: []
    },
    reducers: {
        addCart: (state,action)=>{
            state.items.push(action.payload);

        },
        removeItems: (state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length = 0; // length of 0 make your state empty
        }

    }

})

export const {addCart, removeItems, clearCart} = cartSlice.actions

export default cartSlice.reducer;