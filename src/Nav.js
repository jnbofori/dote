import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Dote Pet and Baby Sitting</h3>
            <ul className="nav-links">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/Contact'><li>Contact</li></Link>
            </ul>
        </nav>
    );

}

export default Nav;