import { useContext } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { UserContext } from '../../context/UserContext';
import useForm from '../../hooks/useForm';
import Error from '../../components/Helper/Error/Error';
import Head from '../../components/Helper/Head';

const LoginCreate = () => {
  const username = useForm(' ');
  const email = useForm('email');
  const password = useForm('password');
  const { createUser, error, loading } = useContext<any>(UserContext);

  async function handleCreateUser(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      createUser(username.value, email.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Criar conta" description="Página para criar conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleCreateUser}>
        <Input
          name="username"
          label="Usuário"
          title="Nome de usuário"
          placeholder="Nome de usuário"
          type="text"
          {...username}
        />
        <Input
          name="email"
          label="E-mail"
          title="E-mail"
          placeholder="E-mail"
          type="email"
          {...email}
        />
        <Input
          name="password"
          label="Senha"
          title="Senha"
          placeholder="Senha"
          type="password"
          {...password}
        />
        {loading ? (
          <Button label="Cadastrando..." disabled />
        ) : (
          <Button label="Cadastrar" />
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
