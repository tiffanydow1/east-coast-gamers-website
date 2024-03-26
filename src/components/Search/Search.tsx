import { FaSearch } from "react-icons/fa";
import styles from './search.module.css';

interface SearchProps {
  onClick: () => void;
}

const Search: React.FC<SearchProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <FaSearch className={styles.searchIcon} />
    </button>
  );
}

export default Search;
