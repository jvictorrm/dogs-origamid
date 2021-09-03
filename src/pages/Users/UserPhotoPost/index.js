import React, { useEffect, useState } from 'react';
import { Container, ImagePreview } from './styles';
import Input from '../../../components/Forms/Input';
import Button from '../../../components/Forms/Button';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { USER_PHOTO_POST } from '../../../config/api';
import ErrorContainer from '../../../components/ErrorContainer';
import { useNavigate } from 'react-router-dom';
import Head from '../../../components/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if(data) navigate('/users');
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      'img': img.props,
      'nome': nome.value,
      'peso': peso.value,
      'idade': idade.value
    };

    const token = localStorage.getItem('token');
    const { url, options } = USER_PHOTO_POST(formData, token);
    request(url, options);    
  }

  const handleImgChange = async ({ target }) => {
    const { name, type, size } = target.files[0];

    setImg({
      preview: URL.createObjectURL(target.files[0]),
      props: {
        name, 
        type, 
        size
      },
    })
  }

  return (
    <Container className="animeToLeft">
      <Head title="Poste sua Foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange}/>
        <Button disabled={loading}>{loading ? 'Carregando...' : 'Enviar'}</Button>
        <ErrorContainer error={error}/>
      </form>
      <ImagePreview preview={img?.preview}/>
    </Container>
  )
}

export default UserPhotoPost
