import styles from "./CartSummary.module.css";

const CartSummary = ({ cart, navigate }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.total}>
        <p>Total:</p>
        <p>{totalPrice} EUR</p>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => navigate("/")}
          className={styles.continueShopping}
        >
          Continue Shopping
        </button>
        <button className={styles.payBtn}>Pay</button>
      </div>
    </div>
  );
};

export default CartSummary;
