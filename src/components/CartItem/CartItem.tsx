'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaTimes } from "react-icons/fa";
import styles from './cartItem.module.css';

interface Product {
  item: Item
  size: string;
  color: string;
  quantity: number;
}

interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  media: string;
}


interface CartItemProps {
  product: Product;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  close: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  remove,
  increase,
  decrease,
  close
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
          <Image
            src={product.item.media}
            alt="product image"
            className={styles.image}
            width={200}
            height={100}
          />
        <div className={styles.quantity}>
          <button onClick={() => decrease(product.item.id)}>-</button>
          <div className={styles.quantityNum}>
            <span>{product.quantity}</span>
          </div>
          <button onClick={() => increase(product.item.id)}>+</button>
        </div>
      </div>
      <div className={styles.rightSection}>
        <Link
          href={`/product/${product.item.id}`}
          onClick={close}
        >
          <h5 style={{ color: 'black' }}>
            {product.item.title}
          </h5>
          <p style={{ color: 'black' }}>${product.item.price}</p>
          <p style={{ color: 'black' }}>Size: {product.size}</p>
          <p style={{ color: 'black' }}>Color: {product.color}</p>
        </Link>
      </div>
      <button type="button" onClick={() => remove(product.item.id)} className={styles.button}>
        <FaTimes />
      </button>
    </div>
  );
}

export default CartItem;
