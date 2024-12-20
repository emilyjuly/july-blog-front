import React, { useContext, useEffect, useState } from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../hooks/useForm';
import api from '../../api/api';
import Error from '../Helper/Error/Error';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const caption = useForm();
  const [img, setImg] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [photoData, setPhotoData] = useState(null);
  const navigate = useNavigate();
  const { data } = useContext<any>(UserContext);

  useEffect(() => {
    if (photoData) navigate('/conta');
  }, [photoData, navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', img.raw);
    formData.append('userId', data.id);
    formData.append('username', data.username);
    formData.append('caption', caption.value);

    const token = window.localStorage.getItem('access_token');

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
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  function handleImgChange({ target }: any): void {
    const file = target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img: any = new Image();
        img.src = e.target ? e.target.result : null;
        img.onload = function () {
          const canvas = document.createElement('canvas');
          const size = Math.min(img.width, img.height);
          if (canvas) {
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');

            const startX = (img.width - size) / 2;
            const startY = (img.height - size) / 2;
            ctx
              ? ctx.drawImage(img, startX, startY, size, size, 0, 0, size, size)
              : '';

            canvas.toBlob((blob) => {
              if (blob) {
                setImg({
                  preview: URL.createObjectURL(blob),
                  raw: new File([blob], file.name, { type: file.type }),
                });
              }
            }, file.type);
          }
        };
      };
      reader.readAsDataURL(file);
    }

    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" description="Página para postar uma foto" />
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
