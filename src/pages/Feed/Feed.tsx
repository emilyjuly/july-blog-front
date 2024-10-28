import { useState } from 'react';
import FeedModal from '../../components/FeedModal/FeedModal';
import FeedPhotos from '../../components/FeedPhotos/FeedPhotos';
import styles from './Feed.module.css';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
