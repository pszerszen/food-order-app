import {useContext, useEffect, useState} from "react";
import CartContext                       from "../../context/cart-context";
import CartIcon                          from "../Cart/CartIcon";
import styles                            from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.cartItems
      .reduce((curNumber, item) => curNumber + item.amount, 0);

  const btnClasses = `${styles.button} ${buttonHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.cartItems.length > 0) {
      setButtonHighlighted(true);
    }
    const timer = setTimeout(() => setButtonHighlighted(false), 300);

    return () => clearTimeout(timer);
  }, [cartContext.cartItems]);

  return <button className={btnClasses} onClick={cartContext.showCart}>
    <span className={styles.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={styles.badge}>{numberOfCartItems}</span>
  </button>;
};

export default HeaderCartButton;
