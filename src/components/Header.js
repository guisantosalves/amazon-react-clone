import React from "react";
import "./css/Header.css";
import { Search } from "@mui/icons-material";

//using react router
import { Link } from "react-router-dom";

//when we use href the page will refresh
function Header() {
  return (
    <nav className="header">
      {/* logo -> img */}
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      {/* search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1 link */}
        <Link>

        </Link>

        {/* 2 link */}
        {/* 3 link */}
        {/* 4 link */}
      </div>

      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
