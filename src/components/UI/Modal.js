import {createPortal} from "react-dom";
import styles         from "./Modal.module.css";

const Backdrop = props => <div className={styles.backdrop}/>;

const ModalOverlay = props =>
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>;

const portalElement = document.getElementById("overlays");

const Modal = props =>
    <>
      {createPortal(<Backdrop/>, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>;

export default Modal;
