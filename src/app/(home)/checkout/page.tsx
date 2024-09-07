'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { MinusCircle, PlusCircle, Trash } from 'lucide-react';
import useCart from '../../../lib/hooks/useCart';
import styles from './page.module.css';

const Checkout = () => {
  const cart = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleQuantityChange = (item: number) => {
    setQuantity(item);
    setShowMenu(!showMenu);
  }

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity, 0
  );

  const totalRounded = parseFloat(total.toFixed(2));

  // const customer = {
  //   clerkId: user?.id,
  //   email: user?.emailAddresses[0].emailAddress,
  //   name: user?.fullName,
  // };

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe`, {
        method: "POST",
        body: JSON.stringify({ cartItems: cart.cartItems }),
      });
      const data = await res.json();
      window.location.href = data.url;
      console.log(data, 'data');
    } catch (err) {
      console.log("[checkout_POST", err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>My Cart ({cart.cartItems.length} item)</h1>
        <hr />
        {cart.cartItems.length === 0 ? (
          <p className={styles.noItems}>No items in cart</p>
        ) : (
          <>
            {cart.cartItems.map(cartItem => (
              <div key={cartItem.item.id} className={styles.cartDetails}>
                <div className={styles.insideLeft}>
                  <Image
                    src={cartItem.item.media}
                    alt='product image'
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                  <div className={styles.detail}>
                    <h3>{cartItem.item.title}</h3>
                    {cartItem.color && (
                      <p>Color: {cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p>Size: {cartItem.size}</p>
                    )}
                    <p>Price: ${cartItem.item.price}</p>
                  </div>
                </div>

                <div className={styles.insideRight}>
                    <div className={styles.item}>
                      <p>Quantity</p>
                      <div className={styles.inputWrapper}>
                        <MinusCircle className={styles.quantityIcon} onClick={() => cart.decreaseQuantity(cartItem.item.id)} />
                        <span className={styles.quantityText}>{cartItem.quantity}</span>
                        <PlusCircle className={styles.quantityIcon} onClick={() => cart.increaseQuantity(cartItem.item.id)} />
                      </div>
                    </div>
                </div>

                <Trash
                  className={styles.trashIcon}
                  onClick={() => cart.removeItem(cartItem.item.id)}
                />
              </div>
            ))}
          </>
        )}
      </div>

      <div className={styles.rightSection}>
        <h1>Order Summary</h1>
        <div className={styles.totalSummary}>
          <span>Total Amount</span>
          <span>$ {totalRounded}</span>
        </div>
        <button
          className={styles.checkoutButton}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
