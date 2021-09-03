import React, { useEffect } from 'react'
import { PHOTOS_INDEX } from '../../../config/api';
import FeedPhotosItem from '../FeedPhotosItem';
import useFetch from '../../../hooks/useFetch';
import ErrorContainer from '../../ErrorContainer';
import Loading from '../../Loading';
import { PhotosGrid } from './styles';

const FeedPhotos = ({page, userId, setModalPhoto, setInfinite}) => {
  const { data, error, request, loading } =  useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_INDEX({page , total, user: userId});
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();
  }, [request, userId, page, setInfinite])

  if (error) return <ErrorContainer error={error} />
  if (loading) return <Loading />

  if (data) {
    return (
      <PhotosGrid className="animeToLeft">
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/> )}        
      </PhotosGrid>
    )
  } else return null;
}

export default FeedPhotos
