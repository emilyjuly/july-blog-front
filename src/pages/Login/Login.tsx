import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import LoginCreate from '../LoginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';

import styles from './Login.module.css';

const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
