import {useContext, useRef} from "react";
import CartContext          from "../../../context/cart-context";
import Input                from "../../UI/Input";
import styles               from "./MealItemForm.module.css";

const MealItemForm = props => {
  const ref = useRef(1);
  const cartContext = useContext(CartContext);

  const submitHandler = event => {
    event.preventDefault();
    const amount = +ref.current.value;

    cartContext.addToCart({...props.meal, amount: amount});
    ref.current.value = "1";
  };

  return (
      <form className={styles.form} onSubmit={submitHandler}>
        <Input input={{
          id: props.meal.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          required: true,
          defaultValue: 1,
          ref: ref
        }}>
          Amount
        </Input>
        <button type="submit">+ Add</button>
      </form>
  );
};

export default MealItemForm;
