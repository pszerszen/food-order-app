import {useReducer, useState} from "react";
import CartContext            from "./cart-context";

const CartAction = Object.freeze({
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR"
});

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case CartAction.ADD:
      const increasedItems = state.items.concat(action.value);
      return {items: increasedItems, totalAmount: state.totalAmount + action.value.price * action.value.amount};
    case CartAction.REMOVE:
      return {};
    case CartAction.CLEAR:
      return {items: [], totalAmount: 0.0};
    default:
      return {items: state.items, totalAmount: state.totalAmount};
  }
};

const CartProvider = props => {
  const [cartVisible, setCartVisible] = useState(false);
  const showCartHandler = () => setCartVisible(true);
  const hideCartHandler = () => setCartVisible(true);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addToCart = (cartItem) => dispatchCartAction({type: CartAction.ADD, value: cartItem});
  const removeFromCart = (id) => dispatchCartAction({type: CartAction.REMOVE, value: id});

  const checkOut = () => {
    dispatchCartAction({type: CartAction.CLEAR});
    setCartVisible(false);
  };

  const cartContext = {
    cartVisible: cartVisible,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
    cartItems: cartState.items,
    totalPrice: cartState.totalAmount,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    checkOut: checkOut
  };
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};

export default CartProvider;
