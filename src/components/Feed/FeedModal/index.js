import React, { useEffect } from 'react'
import { Container } from './styles';
import useFetch from '../../../hooks/useFetch';
import { PHOTO_GET } from '../../../config/api';
import ErrorContainer from '../../../components/ErrorContainer';
import Loading from '../../../components/Loading';
import PhotoDetail from '../../Photo/PhotoDetail';

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  },[photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <Container onClick={handleOutsideClick}>
      {error && <ErrorContainer error={error}/>}
      {loading && <Loading />}
      {data && <PhotoDetail data={data}/>}
    </Container>
  )
}

export default FeedModal
