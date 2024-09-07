'use client'

import { useState, useEffect } from 'react';

import { getCollectionBySlug } from '@/lib/actions/actions';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import Loader from '@/components/Loader/Loader';

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

const Page = ({
  params
} : {
  params: { collectionSlug: string };
}) => {
  const [collection, setCollection] = useState<CollectionType | null>(null);
  const [productCount, setProductCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCollection(params.collectionSlug, 12)
  }, []);

  const fetchCollection = async (slug: string, limit?: number) => {
    setLoading(true);
    try {
      const data = await getCollectionBySlug(slug, limit);
      setCollection(data.collection);
      setProductCount(data.totalProductCount);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
    setLoading(false);
  }

  return (
    <div className={styles.body}>
      <h1>{collection?.title}</h1>
      <div className={styles.row}>
        {collection?.description && (
          <p>{collection.description}</p>
        )}
        {!collection?.description && (
          <p>Discover our {collection?.title} collection.</p>
        )}
        {typeof productCount === 'number' && productCount > 12  && collection.products.length < 13 && (
          <Button
          type="button"
          variant="outlined"
          text="See All"
          onClick={() => {fetchCollection(params.collectionSlug)}}
        />
        )}
      </div>

      {loading && (
        <Loader />
      )}

      {!loading && collection?.products?.length > 0 && (
        <>
          <div className={styles.gridContainer}>
            {Array.isArray(collection?.products) && collection?.products.length > 0 && collection?.products.map(product => (
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
              onClick={() => {fetchCollection(params.collectionSlug)}}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;

export const dynamic = 'force-dynamic';
