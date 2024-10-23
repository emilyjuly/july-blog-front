import FeedModal from '../../components/FeedModal/FeedModal';
import FeedPhotos from '../../components/FeedPhotos/FeedPhotos';
import styles from './Feed.module.css';

const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
