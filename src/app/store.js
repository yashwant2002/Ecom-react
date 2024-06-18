import { configureStore } from "@reduxjs/toolkit";
import CartSlicer  from "../features/cartSlicer";

export const store = configureStore({
  reducer: {
    cart : CartSlicer ,
  },
});
