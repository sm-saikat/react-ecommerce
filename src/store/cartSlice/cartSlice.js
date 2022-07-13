import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0
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
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => {
        return !(item.id === action.payload);
      });
    },

    increaseItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload)
      item.count++
    },

    decreaseItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload)

      if(item.count === 1){
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
      }else{
        item.count--
      }
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


export const { addItem, removeItem, increaseItem, decreaseItem, updateTotal } = cartSlice.actions;
export default cartSlice.reducer;
