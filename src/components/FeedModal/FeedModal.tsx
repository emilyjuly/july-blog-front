import PhotoContent from '../PhotoContent/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto, updateFeed }: any) => {
  function handleOutsideClick(event: any) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
      updateFeed();
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent photo={photo} />
    </div>
  );
};

export default FeedModal;
