import { useContext, useState } from 'react';
import styles from './PhotoCommentsForm.module.css';
import send from '../../assets/send.svg';
import { UserContext } from '../../context/UserContext';
import api from '../../api/api';
import Error from '../Helper/Error/Error';

const PhotoCommentsForm = ({ id, setComments }: any) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { data } = useContext<any>(UserContext);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const token = window.localStorage.getItem('access_token');

    if (token) {
      try {
        if (!loading) setLoading(true);
        const res = await api.post(
          '/comments',
          {
            content: comment,
            postId: id,
            userId: data.id,
            username: data.username,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        );
        setComment('');
        setComments((comments: any) => [...comments, res.data]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <form className={styles.commentsContainer} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <img src={send} width={20} />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
