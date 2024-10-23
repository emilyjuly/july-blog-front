import { useEffect } from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo }) => {
  const url: string = `http://localhost:3000/${photo.Photo.path}`;
  useEffect(() => {
    console.log(photo);
  }, [photo]);
  return (
    <li>
      <img src={url} alt={photo.caption || 'Photo'} />
      {photo.caption && <p className={styles.caption}>{photo.caption}</p>}
    </li>
  );
};

export default FeedPhotosItem;
