import {useContext} from "react";
import CartContext  from "../../context/cart-context";
import CartIcon     from "../Cart/CartIcon";
import styles       from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.cartItems
      .reduce((curNumber, item) => curNumber + item.amount, 0);

  return <button className={styles.button} onClick={cartContext.showCart}>
    <span className={styles.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={styles.badge}>{numberOfCartItems}</span>
  </button>;
};

export default HeaderCartButton;
