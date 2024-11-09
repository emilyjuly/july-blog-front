import React from 'react';
import styles from './Home.module.css';
import Feed from '../Feed/Feed';
import Loading from '../../components/Helper/Loading/Loading';

const Home = () => {
  return (
    <section className="container mainContainer">
      {/* <Feed /> */}
      <Loading />
    </section>
  );
};

export default Home;
