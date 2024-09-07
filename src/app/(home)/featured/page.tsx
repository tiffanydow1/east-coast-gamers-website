'use client'

import { useState, useEffect } from 'react';
import { getCollectionBySlug } from '@/lib/actions/actions';

import Button from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';
import ProductCard from '@/components/ProductCard/ProductCard';

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

type CollectionType = {
  createdAt: string;
  description: string;
  image: string;
  slug: string;
  title: string;
  updatedAt: string;
  products: Product[];
}

const Featured = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [collection, setCollection] = useState<CollectionType | null>(null);

  useEffect(() => {
    fetchCollection('featured', 8);
  }, []);

  const fetchCollection = async (slug: string, limit?: number): Promise<void> => {
    setLoading(true);
    try {
      const data = await getCollectionBySlug(slug, limit);
      setCollection(data.collection);
    } catch (error) {
      console.error('Error fetching collection:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.body}>
      <h1>Featured Products</h1>
      <div className={styles.row}>
        <p>Discover our collection of featured products.</p>
        {collection?.products.length > 8 && collection?.products.length < 9 && (
          <Button
            type="button"
            variant="outlined"
            text="See All"
            onClick={() => {fetchCollection('featured')}}
          />
        )}
      </div>

      {loading && (
        <Loader />
      )}

      {!loading && collection?.products?.length === 0 && (
        <p>No Featured Products available at this time.</p>
      )}

      {!loading && collection?.products.length > 0 && (
        <>
          <div className={styles.gridContainer}>
            {Array.isArray(collection.products) && collection.products.map(product => (
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
            text="See All"
            onClick={() => {fetchCollection('featured')}}
          />
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
