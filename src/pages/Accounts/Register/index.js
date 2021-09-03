import React, { useContext } from 'react';
import ErrorContainer from '../../../components/ErrorContainer';
import Button from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import Head from '../../../components/Head';
import Title from '../../../components/Title';
import { USER_POST } from '../../../config/api';
import { AuthContext } from '../../../contexts/AuthContext';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

const Register = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { signIn } = useContext(AuthContext);

  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });

    const { response } = await request(url, options);

    if (response.ok) signIn(username.value, password.value);
  }

  return (
    <section className="animeToLeft">
      <Head title="Crie sua conta" />
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</Button>
        <ErrorContainer>{error}</ErrorContainer>
      </form>
    </section>
  )
};

export default Register;
