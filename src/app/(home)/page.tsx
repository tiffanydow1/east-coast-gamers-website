import styles from "./page.module.css";

import HeroImage from '@/components/HeroImage/HeroImage';
import About from '@/components/About/About';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Collections from '@/components/Collections/Collections';
import Categories from '@/components/Categories/Categories';
import Faqs from '@/components/Faqs/Faqs';

export default async function Home() {
  return (
    <>
      <HeroImage />
      <main className={styles.main}>
        <FeaturedProducts />
        <Collections />
        <About />
        <Categories />
        <Faqs />
      </main>
    </>
  );
}
