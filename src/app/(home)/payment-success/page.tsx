'use client'

import useCart from '@/lib/hooks/useCart';
import Link from 'next/link';
import { useEffect } from 'react';

import styles from './page.module.css';

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.header}>Successful Payment</p>
      <p>Thank you for your purchase</p>
      <Link href="/" className={styles.link}>
      CONTINUE SHOPPING</Link>
    </div>
  );
};

export default SuccessfulPayment;
