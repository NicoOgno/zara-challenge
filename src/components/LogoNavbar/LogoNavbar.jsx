import React from "react";
import styles from "./LogoNavbar.module.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/mbst.png";

const LogoNavbar = () => {
  return (
    <div className={styles.navbarLogo}>
      <Link className="navbarLink" to="/">
        <img src={imgLogo} alt="MBST Logo" />
      </Link>
    </div>
  );
};

export default LogoNavbar;
