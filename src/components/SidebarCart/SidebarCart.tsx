'use client'
import Link from 'next/link';
import useCart from '../../lib/hooks/useCart';
import styles from './sidebarCart.module.css';
import { IoCloseSharp } from "react-icons/io5";
import CartItem from '@/components/CartItem/CartItem';

const SidebarCart = () => {
  const cart = useCart();

  const subtotal = cart.cartItems.reduce((total, item) => total + item.item.price, 0);
  console.log(cart.cartItems, 'cart items')
  return (
    <div className={`${styles.sidebar} ${cart.isSideCartOpen ? styles.visible : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.topbar}>
          <div className={styles.closeButton}>
            <button onClick={() => cart.closeSideCart()}>
              <IoCloseSharp className={styles.icon} />
            </button>
          </div>
          <div className={styles.topbarSection}>
            <h3>Cart</h3>
            <p>{cart.cartItems.length} items</p>
          </div>
        </div>

        <div className={styles.body}>
          {cart.cartItems.length > 0 && cart.cartItems.map(product => (
            <div key={product.item.id} className={styles.cartItemSection}>
              <CartItem
                product={product}
                remove={() => cart.removeItem(product.item.id)}
                increase={cart.increaseQuantity}
                decrease={cart.decreaseQuantity}
                close={cart.closeSideCart}
              />
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.row}>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <Link
            href={'/checkout'}
            onClick={cart.toggleSideCart}
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SidebarCart;
