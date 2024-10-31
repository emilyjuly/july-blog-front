import { useContext, useState } from 'react';
import styles from './PhotoCommentsForm.module.css';
import send from '../../assets/send.svg';
import { UserContext } from '../../context/UserContext';
import api from '../../api/api';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { data } = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token: string = window.localStorage.getItem('access_token');

    if (token) {
      try {
        setLoading(true);
        const res = await api.post(
          '/comments',
          {
            content: comment,
            postId: id,
            userId: data.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        );
        console.log(await res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <form className={styles.commentsContainer} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <img src={send} width={20} />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
