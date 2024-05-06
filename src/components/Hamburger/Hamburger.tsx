import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa";
import styles from './hamburger.module.css';

interface HamburgerProps {
  active: boolean,
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({
  active,
  onClick
}) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <GiHamburgerMenu className={`${styles.hamburger} ${active ? styles.hamburgerHidden : ''}`} />

      <FaTimes className={`${styles.times} ${active ? styles.timesActive : ''}`} />
    </button>
  )
}

export default Hamburger;
