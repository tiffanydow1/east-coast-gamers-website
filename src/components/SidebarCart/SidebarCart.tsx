'use client'

import { useCart } from '../../context/CartContext';
;import styles from './sidebarCart.module.css';
import { IoCloseSharp } from "react-icons/io5";
import CartItem from '@/components/CartItem/CartItem';

const cartProducts = [
  {
    id: 1,
    title: 'Product 1',
    category: 'Category1',
    size: 'Small',
    quantity: 1,
    price: 54
  },
  {
    id: 2,
    title: 'Product 2',
    category: 'Category2',
    size: 'Medium',
    quantity: 1,
    price: 37
  },
  {
    id: 3,
    title: 'Product 3',
    category: 'Category3',
    size: 'Large',
    quantity: 2,
    price: 43
  }
];

const SidebarCart = () => {
  const { isSidecartOpen, toggleSidecart } = useCart();

  return (
    <div className={`${styles.sidebar} ${isSidecartOpen ? styles.visible : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.topbar}>
          <div className={styles.closeButton}>
            <button onClick={() => toggleSidecart()}>
              <IoCloseSharp className={styles.icon} />
            </button>
          </div>
          <div className={styles.topbarSection}>
            <h3>Your Cart</h3>
            <p>cart quantity</p>
          </div>
        </div>

        <div className={styles.body}>
          {cartProducts.length > 0 && cartProducts.map(product => (
            <div key={product.id} className={styles.cartItemSection}>
              <CartItem
                product={product}
                quantity={0}
                remove={() => console.log('remove function')}
                update={() => console.log('update function')}
                close={() => console.log('cart close function')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarCart;
