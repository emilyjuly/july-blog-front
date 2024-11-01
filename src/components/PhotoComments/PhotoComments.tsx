import { useContext, useEffect, useRef, useState } from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments.Comments);
  const { isLogged } = useContext(UserContext);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      {comments.length > 0 && (
        <ul ref={commentsSection} className={styles.comments}>
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
