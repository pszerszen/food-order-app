import {useContext} from "react";
import CartContext  from "../../context/cart-context";
import Modal        from "../UI/Modal";
import styles       from "./Cart.module.css";
import CartItem     from "./CartItem";

const Cart = props => {
  const cartContext = useContext(CartContext);

  return <Modal onClose={cartContext.hideCart}>
    <div className={styles["cart-items"]}>
      <ul>
        {cartContext.cartItems.map(item => <CartItem key={item.id}
                                                     name={item.name}
                                                     price={item.price}
                                                     amount={item.amount}
                                                     onAdd={cartContext.addToCart.bind(null, item)}
                                                     onRemove={cartContext.removeFromCart.bind(null, item.id)}/>)}
      </ul>
    </div>
    <div className={styles.total}>
      <span>Total Amount</span>
      <span>${cartContext.totalPrice.toFixed(2)}</span>
    </div>
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={cartContext.hideCart}>Close</button>
      <button className={styles.button} onClick={cartContext.checkOut}>Order</button>
    </div>
  </Modal>;
};

export default Cart;
