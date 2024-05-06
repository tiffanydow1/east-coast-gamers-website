'use client';

import { useRouter } from 'next/navigation';
import styles from './heroImage.module.css';
import Button from '@/components/Button/Button';

const HeroImage = () => {
  const router = useRouter();

  return (
    <section className={styles.heroImageContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Level up your style with game-themed apparel</h1>
        <p className={styles.description}>
          Discover a collection of vibrant, game-themed apparel and accessories that will make you stand out from the crowd. From RPGs to classic arcade games, we have something for every gaming enthusiast.
        </p>
        <Button
          type="button"
          variant="solid"
          text="Shop"
          onClick={() => router.push('/apparel')}
        />
      </div>
    </section>
  )
}

export default HeroImage;
