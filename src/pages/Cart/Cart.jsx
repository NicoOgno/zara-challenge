import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";
import CartEmpty from "./CartEmpty/CartEmpty";

const Cart = () => {
  const { cart, setInCartPage } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setInCartPage(true);
  }, []);

  return (
    <div className={styles.cartContainer}>
      <p>Cart ({cart.length})</p>
      {cart.length === 0 ? (
        <CartEmpty navigate={navigate} />
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} itemIndex={index} />
            ))}
          </div>
          <CartSummary cart={cart} navigate={navigate} />
        </div>
      )}
    </div>
  );
};

export default Cart;
