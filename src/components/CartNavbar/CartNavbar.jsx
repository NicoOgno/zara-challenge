import React from "react";
import styles from "./CartNavbar.module.css";
import { Link } from "react-router-dom";
import imgShoppingBag from "../../assets/shoppingBag.png";
import { useCart } from "../../context/CartContext";

const CartNavbar = () => {
  const { cart } = useCart();

  return (
    <div>
      <Link className="navbarLink" to="/cart">
        <img src={imgShoppingBag} alt="imgShoppingBag" />
        <span className={styles.cartCount}>{cart.length}</span>
      </Link>
    </div>
  );
};

export default CartNavbar;
