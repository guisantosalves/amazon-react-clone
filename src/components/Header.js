import React from "react";
import "./css/Header.css";
import { Search } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";

//using react router
import { Link } from "react-router-dom";


//using the dataLayer
import { useStateValue } from "./StateProvide";


//when we use href the page will refresh
function Header() {

  const [{basket}, dispatch] = useStateValue();

  console.log(basket.length)
  return (
    <nav className="header">
      {/* logo -> img */}
      <Link to="/">
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

      {/* 4 links */}
      <div className="header__nav">
        {/* 1 link */}
        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Hello gui</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
        </Link>

        {/* 2 link */}
        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>

        {/* 3 link */}
        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </Link>

        {/* 4 link */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/* shopping basket and the number of item */}
                <ShoppingBasket />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>

      </div>

      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
