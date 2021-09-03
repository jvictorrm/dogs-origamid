import React from 'react'
import { PhotoItem, ViewCounter } from './styles';
import ImageLoad from '../../ImageLoad';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  const handleClick = () => {
    setModalPhoto(photo);
  }

  return (
    <PhotoItem onClick={handleClick}>
      <ImageLoad src={photo.src} alt={photo.title}/>
      <ViewCounter>{photo.acessos}</ViewCounter>
    </PhotoItem>
  )
}

export default FeedPhotosItem
