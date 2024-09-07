'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './featuredProduct.module.css';
import { getCollectionBySlug } from '@/lib/actions/actions';

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

const FeaturedProducts: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [collection, setCollection] = useState<CollectionType | null>(null);

  useEffect(() => {
    fetchCollection('featured', 8);
  }, []);

  const fetchCollection = async (slug: string, limit?: number): Promise<void> => {
    setLoading(true);
    try {
      const data = await getCollectionBySlug(slug, limit);
      setCollection(data);
    } catch (error) {
      console.error('Error fetching collection:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <h1>Featured Products</h1>
            <p>Browse our selection of high-quality apparel and accessories.</p>
          </div>
          <Button
            type="button"
            variant="outlined"
            text="See All"
            onClick={() => router.push('/featured')}
          />
        </div>

        {!loading && collection?.products?.length === 0 && (
          <p>No Featured Products available at this time.</p>
        )}

        {!loading && collection?.products?.length > 0 && (
          <div className={styles.gridContainer}>
            {Array.isArray(collection?.products) && collection?.products.length > 0 && collection?.products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                url={`product/${product.id}`}
                images={product.media}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FeaturedProducts;
