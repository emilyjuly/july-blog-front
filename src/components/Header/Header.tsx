import { Link, useLocation } from 'react-router-dom';
import JulyBlog from '../../assets/july-blog.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import styles from './Header.module.css';

const Header = () => {
  const { data } = useContext(UserContext);
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${location.pathname === '/' && 'container'}`}
        style={{
          padding: location.pathname !== '/' ? '20px' : '0',
        }}
      >
        <Link className={styles.logo} to="/" aria-label="July Blog - Home">
          <img src={JulyBlog} alt="July Blog - Home" width={30} />
        </Link>
        {data ? (
          <span className={styles.loginContainer}>
            <Link className={styles.login} to="/conta">
              {data.username}
            </Link>
          </span>
        ) : (
          <span className={styles.loginContainer}>
            <Link className={styles.login} to="/login">
              Login{' '}
            </Link>
            /
            <Link className={styles.loginCreate} to="/login/criar">
              {' '}
              Criar conta
            </Link>
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
