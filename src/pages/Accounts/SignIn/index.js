import React, { useContext, useEffect } from 'react';
import Button from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import useForm from '../../../hooks/useForm';
import { USER_GET } from '../../../config/api';
import { AuthContext } from '../../../contexts/AuthContext';
import Title from '../../../components/Title';
import ErrorContainer from '../../../components/ErrorContainer';
import { Form, PasswordForgotLink, RegisterContainer, RegisterLink } from './styles';
import Head from '../../../components/Head';

const SignIn = () => {
  const usernameField = useForm();
  const passwordField = useForm();

  const { signIn, error, loading } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('dogs@token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options );
    await response.json();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!(usernameField.validate() && passwordField.validate())) {
      return;
    }

    await signIn(usernameField.value, passwordField.value);
  }

  return (
    <section className="animeToLeft">
      <Head title="Login" />
      <Title>Login</Title>
      <Form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...usernameField}/>
        <Input label="Senha" type="password" name="password" {...passwordField} />
        <Button disabled={loading}>{ loading ? 'Carregando...' : 'Entrar' }</Button>
        <ErrorContainer error={error && 'Dados incorretos'}/>
      </Form>

      <PasswordForgotLink to="/accounts/password-forgot">Perdeu a senha?</PasswordForgotLink>

      <RegisterContainer>
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <RegisterLink to="/accounts/register">Cadastro</RegisterLink>
      </RegisterContainer>

    </section>
  )
};

export default SignIn;
