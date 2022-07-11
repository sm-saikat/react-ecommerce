import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemExist) {
        itemExist.count++;
      } else {
        state.cartItems.push(action.payload);
      }

      const total = state.cartItems.reduce(
        (prev, curr) => (prev + curr.price) * curr.count,
        0
      );
      state.totalAmount = total.toFixed(2);
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => {
        return !(item.id === action.payload);
      });

      const total = state.cartItems.reduce(
        (prev, curr) => (prev + curr.price) * curr.count,
        0
      );
      state.totalAmount = total.toFixed(2);
    },

    increaseItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload)
      item.count++
      const total = state.cartItems.reduce(
        (prev, curr) => (prev + curr.price) * curr.count,
        0
      );
      state.totalAmount = total.toFixed(2);
    },

    decreaseItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload)
      item.count--
      const total = state.cartItems.reduce(
        (prev, curr) => (prev + curr.price) * curr.count,
        0
      );
      state.totalAmount = total.toFixed(2);
    },
  
    updateTotal(state, action) {
      const total = state.cartItems.reduce(
        (prev, curr) => (prev + curr.price) * curr.count,
        0
      );
      state.totalAmount = total.toFixed(2);
    }
  }
});


export const { addItem, removeItem, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
