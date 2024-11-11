import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import LoginCreate from '../LoginCreate/LoginCreate';

import styles from './Login.module.css';
import NotFound from '../../components/Helper/NotFound/NotFound';

const Login = () => {
  const { isLogged } = useContext<any>(UserContext);

  if (isLogged) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
