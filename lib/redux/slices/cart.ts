import { Product, ProductSize } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends Product {
  quantity: number;
  selectedSize: ProductSize;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

interface AddItemPayload {
  product: Product;
  quantity: number;
  selectedSize: ProductSize;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddItemPayload>) => {
      const { product, quantity, selectedSize } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item._id === product._id && item.selectedSize._id === selectedSize._id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          ...product,
          quantity,
          selectedSize,
        });
      }

      state.totalQuantity += quantity;
      state.totalPrice += product.price * quantity;
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ _id: string; sizeId: string }>
    ) => {
      const { _id, sizeId } = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === _id && item.selectedSize._id === sizeId
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(
          (item) => !(item._id === _id && item.selectedSize._id === sizeId)
        );
      }
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ _id: string; sizeId: string; quantity: number }>
    ) => {
      const { _id, sizeId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === _id && item.selectedSize._id === sizeId
      );

      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += existingItem.price * quantityDifference;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeItemFromCart, updateItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
