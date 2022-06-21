import React from "react";
import './css/Header.css';

//using react router
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">

            {/* logo -> img */}
            <Link to="/login">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>

            {/* search bar */}
            <input type="text" className="header__searchInput"/>

            {/* 3 links */}
            {/* basket icon with number */}
        </nav>
    )
}

export default Header;