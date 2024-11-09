import { useState } from 'react';
import styles from './PhotoDelete.module.css';
import api from '../../api/api';

const PhotoDelete = ({ id }) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState('');

  async function handleClick(): Promise<void> {
    const confirm = window.confirm('Tem certeza que deseja deletar esta foto?');
    if (confirm) {
      const token: string = window.localStorage.getItem('access_token');
      if (token) {
        try {
          setLoading(true);
          const res = await api.delete(`/photos/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          window.location.reload();
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Carregando
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;