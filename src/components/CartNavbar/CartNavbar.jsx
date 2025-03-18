import React from "react";
import styles from "./CartNavbar.module.css";
import { Link } from "react-router-dom";
import imgShoppingBag from "../../assets/shoppingBag.png";

const CartNavbar = () => {
  return (
    <div>
      <Link className="navbarLink" to="/cart">
        <img src={imgShoppingBag} alt="imgShoppingBag" />
        <span className={styles.cartCount}>0</span>
      </Link>
    </div>
  );
};

export default CartNavbar;
