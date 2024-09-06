import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

import api from '../../api/api';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const username = useForm('username');
  const password = useForm('password');
  const { userLogin, loading, error } = useContext(UserContext);

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input
          label="Usuário"
          title="Nome de usuário"
          placeholder="Nome de usuário"
          type="text"
          {...username}
        />
        <Input
          label="Senha"
          title="Senha"
          placeholder="Senha"
          type="password"
          {...password}
        />
        {loading ? (
          <Button disabled label="Carregando..." />
        ) : (
          <Button label="Entrar" />
        )}

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">CADASTRO</Link>
    </section>
  );
};

export default LoginForm;
