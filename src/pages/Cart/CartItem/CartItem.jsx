import styles from "./CartItem.module.css";
import { useCart } from "../../../context/CartContext";

const CartItem = ({ item, itemIndex }) => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveItem = (itemIndex) => {
    const updatedCart = cart.filter((_, i) => i !== itemIndex);
    removeFromCart(updatedCart);
  };
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div className={styles.details}>
        <p>{item.name}</p>
        <p>
          {item.storage} | {item.color}
        </p>
        <p className={styles.price}>{item.price} EUR</p>
        <button
          onClick={() => handleRemoveItem(itemIndex)}
          className={styles.removeBtn}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
