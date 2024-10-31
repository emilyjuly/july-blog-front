import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from '../PhotoComments/PhotoComments';

const PhotoContent = ({ photo }) => {
  const url: string = `http://localhost:3000/${photo.Photo.path}`;

  return (
    <div className={styles.photoContent}>
      <div className={styles.photoContentContainer}>
        <img src={url} alt={photo.caption} />
        <div className={styles.detailsContainer}>
          <div>
            <p className={styles.author}>
              <Link to={`/perfil/${photo.userId}`}>@{photo.username}</Link>
              <span>{photo.caption}</span>
            </p>
            <h1 className="title">
              <p>{photo.username}</p>
            </h1>
          </div>
        </div>
      </div>
      <PhotoComments comments={photo} />
    </div>
  );
};

export default PhotoContent;
