import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorContainer from '../../../components/ErrorContainer';
import Head from '../../../components/Head';
import Loading from '../../../components/Loading';
import PhotoDetail from '../../../components/Photo/PhotoDetail';
import { PHOTOS_GET } from '../../../config/api';
import useFetch from '../../../hooks/useFetch';
import { Container } from './styles'

const PhotosDetail = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url } = PHOTOS_GET(id);
    request(url)
  }, [id, request])

  if (error) return <ErrorContainer error={error} />
  if (loading) return <Loading />
  if (data) return 
    <Container className="container main-container">
      <Head title={data.photo.title} />
      <PhotoDetail data={data}/>
    </Container>
  return null;  
}

export default PhotosDetail
