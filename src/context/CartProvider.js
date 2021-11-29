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

const calculateTotalPrice = items => items.map(it => it.price * it.amount).reduce((a, b) => a + b, 0);

const cartReducer = (state, action) => {
  switch (action.type) {
    case CartAction.ADD: {
      const existingItemIndex = state.items.findIndex(it => it.id === action.item.id);
      const existingItem = state.items[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {...existingItem, amount: existingItem.amount + action.item.amount};
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {items: updatedItems, totalAmount: calculateTotalPrice(updatedItems)};
    }
    case CartAction.REMOVE: {
      const existingItemIndex = state.items.findIndex(it => it.id === action.id);
      const existingItem = state.items[existingItemIndex];
      let updatedItems = [...state.items];

      updatedItems[existingItemIndex] = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = updatedItems.filter(it => it.amount > 0);

      return {items: updatedItems, totalAmount: calculateTotalPrice(updatedItems)};
    }
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
  const removeFromCart = (id) => dispatchCartAction({type: CartAction.REMOVE, id: id});

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
