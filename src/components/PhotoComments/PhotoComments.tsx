import { useContext, useEffect } from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = ({ comments }) => {
  const { isLogged } = useContext(UserContext);
  return <div>{isLogged && <PhotoCommentsForm id={comments.id} />}</div>;
};

export default PhotoComments;
