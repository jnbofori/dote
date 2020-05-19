import React from "react";

function Footer() {
    return (
        <div id="footer">
            <div className="footer-box">
                <h2>Postal Address</h2>
                <ul className="footer-links" id="first-footer">
                    <li>Dote Limited</li>
                    <li>P.O. Box DS 664</li>
                    <li>Dansoman Accra</li>
                    <li>Ghana - West Africa</li>
                </ul>
            </div>
            <div className="footer-box">
                <h2>Contact Us</h2>
                <ul className="footer-links">
                    <li>Location: BG 445 5th Banana Lane</li>
                    <li>Phone: (+233)206-443-507</li>
                    <li>Email: jnbofori@gmail.com</li>
                </ul>
            </div>
            <div className="footer-box">
                <h2>Follow Us</h2>
                <p>Images</p>
                <p>Opening Days and hours:</p>
                <p>Sunday through Saturday: 24 hours a day</p>
            </div>
        </div>
    );

}

export default Footer;