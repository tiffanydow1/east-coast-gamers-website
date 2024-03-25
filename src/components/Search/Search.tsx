import { FaSearch } from "react-icons/fa";
import styles from './search.module.css';

const Search = ({ onClick }: () => void) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <FaSearch className={styles.searchIcon} />
    </button>
  );
}

export default Search;
