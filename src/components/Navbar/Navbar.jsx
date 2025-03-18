import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/mbst.png";
import imgShoppingBag from "../../assets/shoppingBag.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={imgLogo} alt="MBST Logo" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={imgShoppingBag} alt="imgShoppingBag" />
            <span>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
