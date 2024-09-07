'use client'

import { useState, useEffect } from 'react';
import { getProducts } from '@/lib/actions/actions';

import Button from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton/ProductCardSkeleton';

import styles from './page.module.css';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  url: string;
  media: string[];
  colors: string[];
  sizes: string[];
}

const Extras = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productCount, setProductCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts(undefined, 'extras', 8);
  }, []);

  const fetchProducts = async (category?: string, tag?: string, limit?: number): Promise<void> => {
    setLoading(true);
    try {
      const data = await getProducts(category, tag, limit);
      setProducts(data.products);
      setProductCount(data.totalCount);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  }

  return (
    <div className={styles.body}>
      <h1>Extras</h1>
      <div className={styles.row}>
        <p>Discover our collection of high-quality extras ranging from dice trays to dice bags.</p>
        {typeof productCount === 'number' && productCount > 8 && products.length < 9 && (
          <Button
            type="button"
            variant="outlined"
            text="See All"
            onClick={() => {fetchProducts(undefined, 'extras')}}
          />
        )}
      </div>

      {loading && (
        <Loader />
      )}

      {!loading && productCount === 0 && (
        <p>No Products available at this time.</p>
      )}

      {!loading && typeof productCount === 'number' && productCount > 0 && (
        <>
          <div className={styles.gridContainer}>
            {Array.isArray(products) && products.length > 0 && products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                url={`/product/${product.id}`}
                images={product.media}
              />
            ))}
          </div>

          <div className={styles.btnContainer}>
            <Button
              type="button"
              variant="outlined"
              text="Load More"
              onClick={() => fetchProducts(undefined, 'extras')}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Extras;
