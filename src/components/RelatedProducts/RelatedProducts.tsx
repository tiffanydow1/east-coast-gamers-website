'use client'

import { useState, useEffect } from 'react';
import styles from './relatedProducts.module.css';
import { getRelatedProducts } from '@/lib/actions/actions';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import Slider from '@/components/Slider/Slider';

type RelatedProductsProps = {
  id: string;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({ id }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchRelatedProducts(id);
  }, []);

  const fetchRelatedProducts = async (id: string) => {
    const data = await getRelatedProducts(id);
    setProducts(data);
  }

  if (!products) {
    return <p>Loading...</p>
  }

  if (!products) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.relatedSection}>
      <h1>Related Products</h1>
      <div className={styles.titleSection}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className={styles.row}>
        {Array.isArray(products) && products?.length > 0 && products?.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            url={`/product/${product.id}`}
            images={product.media}
          />
        ))}
      </div>

      <div className={styles.mobileSlider}>
        <Slider products={products} />
      </div>
    </div>
  )
}

export default RelatedProducts;
