import Feed from '../Feed/Feed';
import Head from '../../components/Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do blog" />
      <Feed />
    </section>
  );
};

export default Home;
