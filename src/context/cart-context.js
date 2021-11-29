import {createContext} from "react";

const CartContext = createContext({
  cartVisible: false,
  showCart: () => {
  },
  hideCart: () => {
  },
  cartItems: [],
  totalPrice: 0.0,
  addToCart: (item) => {
  },
  removeFromCart: (id) => {
  },
  checkOut: () => {
  }
});

export default CartContext;
