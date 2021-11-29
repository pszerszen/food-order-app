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
      const existingItemIndex = state.items.findIndex(it => it.id === action.item.id);
      const existingItem = state.items[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount};
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {items: updatedItems, totalAmount: state.totalAmount + action.item.price * action.item.amount};
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
  const hideCartHandler = () => setCartVisible(false);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addToCart = (cartItem) => dispatchCartAction({type: CartAction.ADD, item: cartItem});
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
