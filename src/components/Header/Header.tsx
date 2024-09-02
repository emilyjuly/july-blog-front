import { Link } from 'react-router-dom';
import JulyBlog from '../../assets/july-blog.svg';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="July Blog - Home">
          <img src={JulyBlog} alt="July Blog - Home" width={30} />
        </Link>
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
      </nav>
    </header>
  );
};

export default Header;
