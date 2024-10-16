import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Input/Input';

const UserPhotoPost = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Legenda" type="text" name="legenda" />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
      </form>
    </section>
  );
};

export default UserPhotoPost;
