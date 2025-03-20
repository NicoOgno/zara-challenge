import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import { useEffect } from "react";

const Cart = () => {
  const { cart, removeFromCart, setInCartPage } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setInCartPage(true);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    removeFromCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
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
