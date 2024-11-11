import { useContext, useEffect, useRef, useState } from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props: any) => {
  const [comments, setComments] = useState(() => props.photo.Comments);
  const { isLogged } = useContext<any>(UserContext);
  const commentsSection = useRef<any | null>(null);

  useEffect(() => {
    if (comments.length > 0) {
      if (commentsSection && commentsSection.current)
        commentsSection.current.scrollTop =
          commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      {comments.length > 0 && (
        <ul ref={commentsSection} className={styles.comments}>
          {comments.map((comment: any) => (
            <li key={comment.id}>
              <b>{comment.username}:</b>
              <span>{comment.content}</span>
            </li>
          ))}
        </ul>
      )}
      {isLogged && (
        <PhotoCommentsForm id={props.photo.id} setComments={setComments} />
      )}
    </>
  );
};

export default PhotoComments;
