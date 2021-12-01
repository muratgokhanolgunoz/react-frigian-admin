import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    let date = new Date();

    return (
        <div className={style.footer}>
            <span>
                Copyright {date.getFullYear()}. Frigian Information Technology
                Services
            </span>
        </div>
    );
};
export default Footer;
