import styles from "./CartEmpty.module.css";

const CartEmpty = ({ navigate }) => {
  return (
    <button onClick={() => navigate("/")} className={styles.continueShopping}>
      Continue Shopping
    </button>
  );
};

export default CartEmpty;
