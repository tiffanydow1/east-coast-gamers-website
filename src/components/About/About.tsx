import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

import Button from '@/components/Button/Button';

import imgSrc from '../../../public/video-console.jpg';

const About  = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <h1>Uniquely Designed Apparel for Gamers</h1>
        <p>Experience the benefits of our high-quality materials and intricate designs. Our apparel is made to impress and stand out from the crowd.</p>

        <ul>
          <li>Premium Materials for Superior Comfort</li>
          <li>Unique Designs Inspired by Video Games</li>
          <li>Vibrant Colors to Express Your Gaming Style</li>
        </ul>

        <Button variant="outlined" text="Learn More" />
      </div>
      <div className={styles.rightCol}>
        <Image
          src={imgSrc}
          className={styles.image}
          width={500}
          height={300}
          alt="Retro video game console"
        />
      </div>
    </div>
  );
}

export default About;
