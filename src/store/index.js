import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice";
import cartSlice from "./slices/cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice },
});

export default store;