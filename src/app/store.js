import { configureStore } from "@reduxjs/toolkit";
import  CartSlicer  from "../features/CartSlicer";

export const store = configureStore({
  reducer: {
    cart : CartSlicer ,
  },
});
