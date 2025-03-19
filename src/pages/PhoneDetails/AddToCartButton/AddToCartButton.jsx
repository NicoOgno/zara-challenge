import React from "react";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ disabled }) => {
  return (
    <button
      className={`${styles.addToCart} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
    >
      AÑADIR
    </button>
  );
};

export default AddToCartButton;
