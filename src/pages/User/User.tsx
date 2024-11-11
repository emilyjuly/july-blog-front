import { Route, Routes } from 'react-router-dom';
import UserHeader from '../../components/UserHeader/UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from '../../components/UserPhotoPost/UserPhotoPost';
import NotFound from '../../components/Helper/NotFound/NotFound';
import Head from '../../components/Helper/Head';

const User = () => {
  return (
    <section className="container">
      <Head title="Minha conta" description="Conta do usuário" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
