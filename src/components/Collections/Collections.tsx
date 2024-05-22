import Link from 'next/link';
import Image from 'next/image';
import styles from './collections.module.css';

import esportImgSrc from '../../../public/ecg-logo.webp';
import vintageImgSrc from '../../../public/vintage-logo.webp';

const featuredCollections = [
  {
    id: 1,
    name: 'Esport Emblem',
    image: esportImgSrc,
    url: '/collections/esport-emblem',
  },
  {
    id: 2,
    name: 'Classic Vintage',
    image: vintageImgSrc,
    url: '/collections/classic-vintage',
  },
  {
    id: 3,
    name: 'Mod Mockup',
    image: esportImgSrc,
    url: '/collections/mod-mockup',
  }
];

const Collections = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Collections</h1>
        <div className={styles.row}>
          {Array.isArray(featuredCollections) && featuredCollections.length > 0 && featuredCollections.map(collection => (
            <Link
              key={collection.id}
              href={collection.url}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <Image src={collection.image} alt="collection logo" width={200} height={200} />
              </div>

              <div className={styles.innerContainer}>
                <h2>{collection.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
