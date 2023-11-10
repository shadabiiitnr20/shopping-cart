import { createSlice } from "@reduxjs/toolkit";
import { productData } from "./productData";

const initialState = {
  cartItems: [],
  items: productData,
  totalItemsCount: 0,
  totalItemsAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const indexOfAddedItem = state.cartItems.findIndex(
        (item) => item.id == id
      );
      if (indexOfAddedItem >= 0) {
        state.cartItems[indexOfAddedItem].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );
    },
    increaseItemQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id == action.payload) {
          // item.quantity += 1;
          return { ...item, quantity: (item.quantity += 1) };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id == action.payload) {
          return { ...item, quantity: (item.quantity -= 1) };
        }
        return item;
      });
    },
    getTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cartItems.reduce(
        (cartTotal, item) => {
          const { price, quantity } = item;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.totalItemsAmount = parseInt(totalPrice.toFixed(2));
      state.totalItemsCount = totalQuantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
