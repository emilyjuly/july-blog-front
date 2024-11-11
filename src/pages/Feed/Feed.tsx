import { useState } from 'react';
import FeedModal from '../../components/FeedModal/FeedModal';
import FeedPhotos from '../../components/FeedPhotos/FeedPhotos';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [reload, setReload] = useState(false);

  function updateFeed() {
    setReload((prev) => !prev);
  }

  return (
    <div>
      {modalPhoto && (
        <FeedModal
          photo={modalPhoto}
          setModalPhoto={setModalPhoto}
          updateFeed={updateFeed}
        />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} reload={reload} />
    </div>
  );
};

export default Feed;
