import styles from '../page.module.css';

import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';

import imgSrc from '../../../../images/tshirt.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  url: string;
  image: typeof imgSrc;
  variant: string;
}

const sampleProducts: Product[] = [
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

const DiceBagsAndTrays = () => (
  <div className={styles.body}>
    <h1>Dice Bags & Trays</h1>
    <div className={styles.row}>
      <p>Discover our collection of dice bags and trays.</p>
      <Button
        type="button"
        variant="outlined"
        text="See All"
        // onClick={() => {}}
      />
    </div>

    <div className={styles.gridContainer}>
        {Array.isArray(sampleProducts) && sampleProducts.length > 0 && sampleProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            url={`/product/${product.id}`}
            image={product.image}
            variant={product.variant}
          />
        ))}
      </div>
      <div className={styles.btnContainer}>
        <Button
          type="button"
          variant="outlined"
          text="See All"
        />
      </div>
  </div>
);

export default DiceBagsAndTrays;
