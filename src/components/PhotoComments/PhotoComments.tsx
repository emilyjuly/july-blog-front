import { useContext } from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = () => {
  const { isLogged } = useContext(UserContext)
  return <div>
    {isLogged && <PhotoCommentsForm />}
  </div>;
};

export default PhotoComments;
