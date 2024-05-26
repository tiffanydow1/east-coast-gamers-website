import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import styles from './productCard.module.css';

import Button from '@/components/Button/Button';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  url: string;
  image: StaticImageData;
  variant: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  url,
  image,
  variant
}) => {
  return (
    <div className={styles.cardContainer}>
      <Link href={url}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt="Product Image"
            className={styles.image}
          />
        </div>

        <div className={styles.details}>
          <div className={styles.headingContainer}>
            <h3>{name}</h3>
            <h3>{price}</h3>
          </div>

          <p>{variant}</p>

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
