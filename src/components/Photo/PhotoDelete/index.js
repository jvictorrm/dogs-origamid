import React from 'react'
import { PHOTO_DELETE } from '../../../config/api';
import useFetch from '../../../hooks/useFetch'
import { Button } from './styles'

const PhotoDelete = ({id}) => {
  const {loading, request} = useFetch();

  const handleClick = async() => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (!confirm) {
      return;
    }

    const {url, options} = PHOTO_DELETE(id);
    const {response} = await request(url, options);

    if(response.ok) window.location.reload();
  }

  return (
    <>
      {loading}
      <Button disabled={loading} onClick={handleClick}>Deletar</Button>
    </>
  )
}

export default PhotoDelete
