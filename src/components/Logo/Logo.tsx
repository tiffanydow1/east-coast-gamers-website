import Link from 'next/link';
import Image from 'next/image';
import styles from './logo.module.css';

import imgSrc from '../../../images/main-logo.png';

interface LogoProps {
  width: string;
  height: string;
}

const Logo: React.FC<LogoProps> = ({
  width,
  height
}) => (
  <Link href="/" className={styles.link}>
    <Image
      src={imgSrc}
      className={styles.image}
      width={parseInt(width)}
      height={parseInt(height)}
      alt="Logo for East Coast Gamers"
    />
  </Link>
)

export default Logo;
