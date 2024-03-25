'use client'

import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './featuredProduct.module.css';

import imgSrc from '../../../public/tshirt.jpg';

const sampleProducts = [
  {
    id: 1,
    name: 'Sample Product 1',
    price: '$100',
    url: '/apparel',
    image: imgSrc,
    variant: 'blue'
  },
  {
    id: 2,
    name: 'Sample Product 2',
    price: '$150',
    url: '/apparel',
    image: imgSrc,
    variant: 'green'
  },
  {
    id: 3,
    name: 'Sample Product 3',
    price: '$200',
    url: '/apparel',
    image: imgSrc,
    variant: 'red'
  },
  {
    id: 4,
    name: 'Sample Product 4',
    price: '$50',
    url: '/apparel',
    image: imgSrc,
    variant: 'blue'
  },
  {
    id: 5,
    name: 'Sample Product 5',
    price: '$200',
    url: '/extras',
    image: imgSrc,
    variant: 'blue'
  },
  {
    id: 6,
    name: 'Sample Product 6',
    price: '$45',
    url: '/collections/classic-vintage',
    image: imgSrc,
    variant: 'plaid'
  },
  {
    id: 7,
    name: 'Sample Product 7',
    price: '$55',
    url: '/custom',
    image: imgSrc,
    variant: 'orange'
  },
  {
    id: 8,
    name: 'Sample Product 8',
    price: '$100',
    url: '/extras/bags',
    image: imgSrc,
    variant: 'black'
  },
];

const FeaturedProducts = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <h1>Featured Products</h1>
          <p>Browse our selection of high-quality apparel and accessories.</p>
        </div>
        <Button
          variant="outlined"
          text="See All"
          onClick={() => router.push('/apparel')}
        />
      </div>

      <div className={styles.gridContainer}>
        {Array.isArray(sampleProducts) && sampleProducts.length > 0 && sampleProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            url={product.url}
            image={product.image}
            variant={product.variant}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts;
