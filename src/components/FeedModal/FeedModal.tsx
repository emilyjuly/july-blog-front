import PhotoContent from '../PhotoContent/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent photo={photo} />
    </div>
  );
};

export default FeedModal;
