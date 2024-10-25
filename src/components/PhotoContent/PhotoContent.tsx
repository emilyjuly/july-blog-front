import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from '../PhotoComments/PhotoComments';

const PhotoContent = ({ photo }) => {
  const url: string = `http://localhost:3000/${photo.Photo.path}`;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={url} alt={photo.caption} />
        <div className={styles.details}>
          <div>
            <p>
              <Link to={`/perfil/${photo.userId}`}>@{photo.username}</Link>
              <span>{photo.caption}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.caption}</Link>
            </h1>
          </div>
        </div>
      </div>
      <PhotoComments comments={photo.Comments} />
    </div>
  );
};

export default PhotoContent;
