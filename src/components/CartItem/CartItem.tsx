'use client'

import Link from 'next/link';
import styles from './cartItem.module.css';

interface Product {
  id: number;
  title: string;
  category: string;
  size: string;
  quantity: number;
  price: number;
}

interface CartItemProps {
  product: Product;
  // variant: string;
  quantity: number;
  remove: () => void;
  update: (variant: string, newQuantity: number) => void;
  close: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  // variant,
  quantity,
  remove,
  update,
  close
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.section}>
          <Link
            href={`/product/${product.id}`}
            onClick={close}
          >
            <div className={styles.imageContainer}>
              <div className={styles.background} />
            </div>
          </Link>

          <div className={styles.quantityContainer}>
            <button
              className={styles.quantityButton}
              onClick={(event) => {
                // update(variant.id, { quantity: quantity - 1 });
                event.preventDefault();
              }}
            >
              -
            </button>

            <div className={styles.quantityText}>
              <p>{quantity}</p>
            </div>

            <button
              className={styles.quantityButton}
              onClick={(event) => {
                // update(variant.id, { quantity: quantity + 1 });
                event.preventDefault();
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <Link
            href={`/product/${product.id}`}
            onClick={close}
          >
            <div className={styles.title}>
              <p>{product.title}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
