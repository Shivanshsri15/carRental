export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  state.totalPrice = Number(state.itemsPrice).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
