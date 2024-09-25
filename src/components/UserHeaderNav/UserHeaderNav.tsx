import { NavLink, useNavigate } from 'react-router-dom';
import styles from './UserHeaderNav.module.css';
import { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { UserContext } from '../../context/UserContext';
import MinhasFotos from '../../assets/minhas-fotos.svg';
import Estatisticas from '../../assets/estatisticas.svg';
import AdicionarFoto from '../../assets/adicionar-foto.svg';
import Sair from '../../assets/sair.svg';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
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
  );
};

export default UserHeaderNav;
