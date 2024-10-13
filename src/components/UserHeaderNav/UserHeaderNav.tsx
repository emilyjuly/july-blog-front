import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './UserHeaderNav.module.css';
import { useContext, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { UserContext } from '../../context/UserContext';
import MinhasFotos from '../../assets/minhas-fotos.svg';
import Estatisticas from '../../assets/estatisticas.svg';
import AdicionarFoto from '../../assets/adicionar-foto.svg';
import Sair from '../../assets/sair.svg';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
      >
        <NavLink to="/conta" end>
          <ReactSVG src={MinhasFotos} className={styles.svgIcon} width={30} />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <ReactSVG src={Estatisticas} className={styles.svgIcon} width={30} />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <ReactSVG src={AdicionarFoto} className={styles.svgIcon} width={30} />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <ReactSVG src={Sair} className={styles.svgIcon} width={30} />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
