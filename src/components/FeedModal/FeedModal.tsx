import PhotoContent from '../PhotoContent/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo }) => {
  return (
    <div className={styles.modal}>
      <PhotoContent photo={photo} />
    </div>
  );
};

export default FeedModal;
