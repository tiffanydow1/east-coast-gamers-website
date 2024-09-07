'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './collections.module.css';

import { getCollections } from '@/lib/actions/actions';

interface Collection {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  image: string;
  products: string[];
  slug: string;
  updatedAt: string;
}

type CollectionsType = {
  collection: Collection[];
}

const Collections = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [collections, setCollections] = useState<CollectionsType>(null);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async (): Promise<void> => {
    setLoading(true);
    try {
      const collectionsResponse = await getCollections();
      const filteredCollection = collectionsResponse.filter(collection => collection.slug !== 'featured');
      setCollections(filteredCollection);
    } catch (error) {
      console.error('Error fetching collections:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    <p>Loading...</p>
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Collections</h1>
        <div className={styles.row}>
          {Array.isArray(collections) && collections.length > 0 && collections.map(collection => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <Image src={collection.image} alt="collection logo" width={200} height={200} />
              </div>

              <div className={styles.innerContainer}>
                <h2>{collection.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
