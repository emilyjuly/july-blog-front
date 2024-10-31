import { useContext, useEffect, useState } from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments.Comments);
  const { isLogged } = useContext(UserContext);

  return (
    <>
      {comments.length > 0 && (
        <ul className={styles.comment}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <b>{comment.username}:</b>
              <span>{comment.content}</span>
            </li>
          ))}
        </ul>
      )}
      {isLogged && (
        <PhotoCommentsForm id={props.comments.id} setComments={setComments} />
      )}
    </>
  );
};

export default PhotoComments;
