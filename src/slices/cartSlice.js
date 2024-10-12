import { createSlice } from "@reduxjs/toolkit";
// import { updateCart } from "../utils/cartUtils";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "Paypal",
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existProduct = state.cartItem.find((x) => x._id === product._id);
      if (existProduct) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existProduct._id ? product : x
        );
      } else {
        state.cartItem = [...state.cartItems, product];
      }
      updateCart(state);
    },
    removeFromCart(state, action) {
      const product = action.payload;
      state.cartItems = state.cartItems.filter((x) => x._id !== product._id);
      updateCart(state);
    },
    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCartItems(state, action) {
      state.cartItems = [];
      updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
