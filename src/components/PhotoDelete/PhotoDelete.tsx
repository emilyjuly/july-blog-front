import { useState } from 'react';
import styles from './PhotoDelete.module.css';
import api from '../../api/api';

const PhotoDelete = ({ id }: any) => {
  const [loading, setLoading] = useState<boolean | null>(null);

  async function handleClick(): Promise<void> {
    const confirm = window.confirm('Tem certeza que deseja deletar esta foto?');
    if (confirm) {
      const token = window.localStorage.getItem('access_token');
      if (token) {
        try {
          setLoading(true);
          await api.delete(`/photos/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          window.location.reload();
        } catch (error: any) {
          console.log(error);
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
