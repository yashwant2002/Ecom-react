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
            return state.filter(items = items.id !== action.payload.id);
        },
        addItem: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
              item.quantity += 1;
            } else {
              state.items.push({ ...action.payload, quantity: 1 });
            }
          },
          removeItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
              if (state.items[index].quantity > 1) {
                state.items[index].quantity -= 1;
              } else {
                state.items.splice(index, 1);
              }
            }
          },
    },
    
});

export const {addCart, removeCart, addItem, removeItem} = CartSlicer.actions;
export default CartSlicer.reducer;