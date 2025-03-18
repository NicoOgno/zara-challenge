import React from "react";
import CartNavbar from "../CartNavbar/CartNavbar";
import LogoNavbar from "../LogoNavbar/LogoNavbar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <LogoNavbar />
      <CartNavbar />
    </nav>
  );
};

export default Navbar;
