import {forwardRef} from "react";
import styles       from "./Input.module.css";

const Input = forwardRef((props, ref) =>
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.children}</label>
      <input ref={ref} {...props.input}/>
    </div>);

export default Input;
