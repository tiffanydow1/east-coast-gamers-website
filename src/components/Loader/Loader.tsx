import { Loader2 } from 'lucide-react';

import styles from './loader.module.css';

const Loader = () => (
  <div className={styles.loaderContainer}>
    <Loader2 className='size-24 animate-spin' />
  </div>
);

export default Loader;
