import Link from 'next/link';
import Image from 'next/image';
import styles from './productCard.module.css';

import Button from '@/components/Button/Button';

interface ProductCardProps {
  title: string;
  price: number;
  url: string;
  images: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  url,
  images,
}) => {
  if (!title || !price || !url || !images) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.cardContainer}>
      <Link href={url}>
        <div className={styles.imageContainer}>
          <Image
            src={images[0]}
            alt="Product Image"
            className={styles.image}
            width={337}
            height={337}
          />
        </div>

        <div className={styles.details}>
          <div className={styles.headingContainer}>
            <h3>{title}</h3>
            <h3>${price}</h3>
          </div>

          <Button
            type="button"
            variant="solid"
            text="View Product"
          />
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
