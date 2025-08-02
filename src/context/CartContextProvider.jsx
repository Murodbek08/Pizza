import PropTypes from "prop-types";
import { CartContext } from ".";
import { useState } from "react";
const CartContextProvider = ({ children }) => {
  const JsonParseCartsStorage = JSON.parse(localStorage.getItem("carts"));
  const [carts, setCarts] = useState(JsonParseCartsStorage || []);
  const state = { carts, setCarts };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};
CartContextProvider.propTypes = {
  children: PropTypes.node,
};
export default CartContextProvider;
