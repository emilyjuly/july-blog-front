import { Link } from 'react-router-dom';
import { useState } from 'react';

import api from '../../api/api';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [accessToken, setAccessToken] = useState('');

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    setError('');
    event.preventDefault();

    if (username.validate() && password.validate()) {
      try {
        setLoading(true);
        const { data } = await api.post('auth/login', {});
        setAccessToken(data.access_token);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
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
        <Button disabled={loading} label="Entrar" />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">CADASTRO</Link>
    </section>
  );
};

export default LoginForm;
