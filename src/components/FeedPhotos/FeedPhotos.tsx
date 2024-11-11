import { useContext, useEffect, useState } from 'react';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { UserContext } from '../../context/UserContext';
import api from '../../api/api';
import Error from '../Helper/Error/Error';
import Loading from '../Helper/Loading/Loading';
import { useLocation } from 'react-router-dom';

const FeedPhotos = ({
  setModalPhoto,
  reload,
  isFromUserProfile,
  userId,
}: any) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState<any | null>(null);
  const { data } = useContext<any>(UserContext);
  const location = useLocation();

  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);

      if (location.pathname.includes('/conta') || isFromUserProfile) {
        const token = window.localStorage.getItem('access_token');
        if (token) {
          try {
            const res = await api.get(`/posts/${userId ? userId : data.id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setPhotos(res.data);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
      } else {
        try {
          const res = await api.get(`/posts`);
          setPhotos(res.data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchPhotos();
  }, [data, reload, isFromUserProfile]);

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;
  if (photos)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo: any) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
