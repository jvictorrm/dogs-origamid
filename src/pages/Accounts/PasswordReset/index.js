import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorContainer from '../../../components/ErrorContainer';
import Button from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import Head from '../../../components/Head';
import Title from '../../../components/Title';
import { PASSWORD_RESET_POST } from '../../../config/api';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

const PasswordReset = () => {
  const password = useForm();
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');    

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!password.validate()) {
      return;
    }
    
    const { url, options } = PASSWORD_RESET_POST({
      login,
      key,
      password: password.value
    });

    const { response } = await request(url, options);

    if (response.ok) navigate('/accounts/signin');
  }

  return (
    <section className="animeToLeft">
      <Head title="Resete a senha" />
      <Title>Resete a Senha</Title>

      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        <Button disabled={loading}>{loading ? 'Resetando...' : 'Resetar'}</Button>
      </form>    

      <ErrorContainer error={error} />
    </section>
  )
};

export default PasswordReset;
