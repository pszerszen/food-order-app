import styles from "./Input.module.css";

const Input = (props) =>
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.children}</label>
      <input {...props.input}/>
    </div>;

export default Input;
