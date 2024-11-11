import { useState } from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }: any) => {
  const [skeleton, setSkeleton] = useState(true);
  function handleLoad({ target }: any): void {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}{' '}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
