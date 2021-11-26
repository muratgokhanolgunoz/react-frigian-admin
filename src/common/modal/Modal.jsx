import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";
import style from "./Modal.module.scss";

const Modal = ({ header, children, collapse }) => {
    return ReactDOM.createPortal(
        <div className={style.customModalOverlay}>
            <div className={style.customModal}>
                <div className={style.header}>
                    <div className={style.right}>
                        <span>
                            <FaTimesCircle onClick={() => collapse(false)} />
                        </span>
                    </div>
                    <div className={style.left}>{header}</div>
                </div>
                <div className={style.body}>{children}</div>
            </div>
        </div>,
        document.getElementById("_modal")
    );
};

Modal.propTypes = {
    header: PropTypes.element.isRequired,
    collapse: PropTypes.func.isRequired,
};

export default Modal;
