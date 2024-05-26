import { MouseEventHandler } from 'react';
import styles from './cart.module.css';

interface CartProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Cart: React.FC<CartProps> = ({ onClick }) => {
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
