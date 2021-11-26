import {v4 as uuid} from "uuid";
import Modal        from "../UI/Modal";
import styles       from "./Cart.module.css";

const Cart = props => {
  const cartItems = [{
    id: uuid(),
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  }]
      .map(it => <li key={it.id}>{it.name}</li>);
  return <Modal>
    <div className={styles["cart-items"]}>
      <ul>{cartItems}</ul>
    </div>
    <div className={styles.total}>
      <span>Total Amount</span>
      <span>$35.99</span>
    </div>
    <div className={styles.actions}>
      <button className={styles['button--alt']}>Close</button>
      <button className={styles.button}>Order</button>
    </div>
  </Modal>;
};

export default Cart;
