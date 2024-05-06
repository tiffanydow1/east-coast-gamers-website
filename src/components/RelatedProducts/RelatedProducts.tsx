import styles from './relatedProducts.module.css';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import Slider from '@/components/Slider/Slider';

import imgSrc from '../../../public/tshirt.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  url: string;
  image: typeof imgSrc;
  variant: string;
}

const relatedProducts: Product[] = [
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
];

const RelatedProducts = () => {
  return (
    <div className={styles.relatedSection}>
      <h1>Related Products</h1>
        <div className={styles.titleSection}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button type="button" variant="outlined" text="View All" />
        </div>

        <div className={styles.row}>
          {Array.isArray(relatedProducts) && relatedProducts.length > 0 && relatedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              url={`product/${product.id}`}
              image={product.image}
              variant={product.variant}
            />
          ))}
        </div>

        <div className={styles.mobileSlider}>
          <Slider products={relatedProducts} />
        </div>

    </div>
  )
}

export default RelatedProducts;
