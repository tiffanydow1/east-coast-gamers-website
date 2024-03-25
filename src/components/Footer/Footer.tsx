import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Logo from '@/components/Logo/Logo';
import styles from './footer.module.css';

import imgSrc from '../../../images/ecg-logo.webp';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        {/* <Logo width="150px" height="auto" /> */}
        <Image src={imgSrc} alt="East Coast Gamers Logo" />

        <div className={styles.links}>
          <Link href="/contact">Contact Us</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/faqs/#shipping">Shipping</Link>
          <Link href="/faqs/#returns">Returns</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div className={styles.socials}>
          <Link href="#">
            <MdOutlineEmail className={styles.email} />
          </Link>

          <Link href="/facebook">
            <FaFacebook className={styles.facebook} />
          </Link>

          <Link href="/instagram">
            <FaInstagram className={styles.instagram} />
          </Link>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomSection}>
        <p>2024 TiffanyDow</p>
        <p>All Rights Reserved</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  )
}

export default Footer;
