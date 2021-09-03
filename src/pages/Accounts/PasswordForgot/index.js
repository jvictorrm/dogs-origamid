import React from 'react';
import Input from '../../../components/Forms/Input';
import Button from '../../../components/Forms/Button';
import Title from '../../../components/Title';
import ErrorContainer from '../../../components/ErrorContainer';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_FORGOT_POST } from '../../../config/api';
import Head from '../../../components/Head';

const PasswordForgot = () => {
  const login = useForm();
  const { data, loading, request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!login.validate()) {
      return;
    }

    const { url, options } = PASSWORD_FORGOT_POST(
      { login: login.value,
        url: `${window.location.origin}/accounts/password-reset`
      });
    
    await request(url, options);
  }

  return (
    <section className="animeToLeft">
      <Head title="Perdeu a senha?" />
      <Title>Perdeu a senha?</Title>
     
      {data ? <p style={{ color: '#4c1' }}>{data}</p>       
      : (
          <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login} />
            <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar Email'}</Button>
          </form>
        )
      }

      <ErrorContainer error={error} />
    </section>
  )
};

export default PasswordForgot;
