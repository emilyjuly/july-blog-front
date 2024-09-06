import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import LoginCreate from '../LoginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';

import styles from './Login.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
