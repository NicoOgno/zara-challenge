// Cart.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div>
                <p>{item.name}</p>
                <p>
                  {item.storage} | {item.color}
                </p>
                <p>{item.price} EUR</p>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className={styles.removeBtn}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className={styles.totalContainer}>
            <p>Total: {totalPrice} EUR</p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => navigate("/")}
              className={styles.continueShopping}
            >
              CONTINUE SHOPPING
            </button>
            <button className={styles.payBtn}>PAY</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
