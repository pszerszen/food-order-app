import {useRef} from "react";
import Input    from "../../UI/Input";
import styles   from "./MealItemForm.module.css";

const MealItemForm = props => {
  const ref = useRef(1);

  const submitHandler = event => {
    event.preventDefault();
    const amount = ref.current.value;
    if (amount && +amount > 0) {
      //add to cart
      ref.current.value = 1;
    }
  };

  return (
      <form className={styles.form} onSubmit={submitHandler}>
        <Input input={{
          id: props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
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
