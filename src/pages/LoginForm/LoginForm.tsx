import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Error from '../../components/Helper/Error/Error';
import useForm from '../../hooks/useForm';

import styles from './LoginForm.module.css';
import stylesBtn from '../../components/Button/Button.module.css';
import Head from '../../components/Helper/Head';

const LoginForm = () => {
  const username = useForm('username');
  const password = useForm('');
  const { userLogin, loading, error } = useContext<any>(UserContext);

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" description="Página de login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
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
        <Error error={error} />
      </form>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
