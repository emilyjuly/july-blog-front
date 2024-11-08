import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from '../PhotoComments/PhotoComments';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import Image from '../Helper/Image/Image';

const PhotoContent = ({ photo }) => {
  const { data } = useContext(UserContext);
  const url: string = `http://localhost:3000/${photo.Photo.path}`;

  return (
    <div className={styles.photoContentContainer}>
      <Image src={url} alt={photo.caption} className={styles.img} />
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <p className={styles.author}>
            {data && data.username === photo.username ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.userId}`}>@{photo.username}</Link>
            )}
            <span>{photo.caption}</span>
          </p>
          <h1 className="title">
            <p>{photo.username}</p>
          </h1>
        </div>
        <PhotoComments photo={photo} />
      </div>
    </div>
  );
};

export default PhotoContent;
