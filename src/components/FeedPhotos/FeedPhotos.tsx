import { useContext, useEffect, useState } from 'react';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { UserContext } from '../../context/UserContext';
import api from '../../api/api';
import Error from '../Helper/Error/Error';
import Loading from '../Helper/Loading/Loading';

const FeedPhotos = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState(null);
  const { data } = useContext(UserContext);

  useEffect(() => {
    async function fetchPhotos() {
      const token: string = window.localStorage.getItem('access_token');
      if (token) {
        try {
          setLoading(true);
          const res = await api.get(`/posts/${data.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(res);
          setPhotos(res.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchPhotos();
  }, [data]);

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;
  if (photos)
    return (
      <ul>
        {photos.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
