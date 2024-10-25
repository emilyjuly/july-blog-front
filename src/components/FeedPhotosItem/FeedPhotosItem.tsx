import { useEffect } from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const url: string = `http://localhost:3000/${photo.Photo.path}`;

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img className={styles.imagem} src={url} alt={photo.caption || 'Photo'} />
    </li>
  );
};

export default FeedPhotosItem;
