import styles from './cart.module.css';

const Cart = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
    >
      Cart
    </button>
  );
}

export default Cart;
