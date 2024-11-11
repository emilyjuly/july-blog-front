import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }: any) => {
  const url: string = `http://localhost:3000/${photo.Photo.path}`;

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={url} alt={photo.caption || 'Photo'} />
    </li>
  );
};

export default FeedPhotosItem;
