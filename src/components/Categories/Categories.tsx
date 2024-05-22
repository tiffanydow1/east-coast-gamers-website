import Link from 'next/link';
import styles from './categories.module.css';

const Categories = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Categories</h1>
        <div className={styles.row}>
          <div className={styles.leftSide}>
            <Link href='/apparel'>
              <h2>Apparel</h2>
            </Link>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.top}>
              <Link href='/extras'>
                <h2>Accessories</h2>
              </Link>
            </div>
            <div className={styles.bottom}>
              <Link href='/custom/3d-prints'>
                <h2>3D Printing</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
