import React from 'react';

const Footer = () => {

    let date = new Date();

    return (
        <div id="footer">
            <span>Copyright {date.getFullYear()}. Frigian Information Technology Services</span>
        </div>
    )
}
export default Footer;