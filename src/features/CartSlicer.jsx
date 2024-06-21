/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState= [];

export const CartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addCart : (state,action)=>{
            state.push(action.payload);
        },
        removeCart : (state,action)=>{
            state = state.filter(items = items.id !== action.payload.id);
        }
    },
    
});

export const {addCart, removeCart} = CartSlicer.actions;
export default CartSlicer.reducer;