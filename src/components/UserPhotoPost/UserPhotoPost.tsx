import React, { useContext, useEffect, useState } from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../hooks/useForm';
import api from '../../api/api';
import Error from '../Helper/Error/Error';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const UserPhotoPost = () => {
  const caption = useForm();
  const [img, setImg] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [photoData, setPhotoData] = useState(null);
  const navigate = useNavigate();
  const { data } = useContext(UserContext);

  useEffect(() => {
    if (photoData) navigate('/conta');
  }, [photoData, navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', img.raw);
    formData.append('userId', data.id);
    formData.append('caption', caption.value);

    const token: string = window.localStorage.getItem('access_token');

    if (token) {
      try {
        setLoading(true);
        const res = await api.post('/photos/upload', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        setPhotoData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  function handleImgChange({ target }): void {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Legenda" type="text" name="legenda" {...caption} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled label="Enviando..." />
        ) : (
          <Button label="Enviar" />
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
