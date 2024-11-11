import { useParams } from 'react-router-dom';
import FeedPhotos from '../FeedPhotos/FeedPhotos';
import Head from '../Helper/Head';
import { useState } from 'react';
import FeedModal from '../FeedModal/FeedModal';

const UserProfile = () => {
  const { user, id } = useParams();
  const [modalPhoto, setModalPhoto] = useState(null);
  const [reload, setReload] = useState(false);

  function updateFeed() {
    setReload((prev: any) => !prev);
  }

  return (
    <section className="container mainSection">
      <Head title={user} description={`Perfil do usuário ${user}`} />
      <h1 className="title">{user}</h1>
      {modalPhoto && (
        <FeedModal
          photo={modalPhoto}
          setModalPhoto={setModalPhoto}
          updateFeed={updateFeed}
        />
      )}
      <FeedPhotos
        isFromUserProfile
        userId={id}
        setModalPhoto={setModalPhoto}
        reload={reload}
      />
    </section>
  );
};

export default UserProfile;
