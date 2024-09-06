import { Link } from 'react-router-dom';
import JulyBlog from '../../assets/july-blog.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import styles from './Header.module.css';

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="July Blog - Home">
          <img src={JulyBlog} alt="July Blog - Home" width={30} />
        </Link>
        {data ? (
          <span className={styles.loginContainer}>
            <Link className={styles.login} to="/conta">
              {data.username} <button onClick={userLogout}>Sair</button>
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
