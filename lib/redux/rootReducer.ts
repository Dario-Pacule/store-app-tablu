import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";

const rootReducer = combineReducers({
  cart: cartSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
