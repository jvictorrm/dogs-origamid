import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import ImageLoad from '../../ImageLoad';
import PhotoComments from '../PhotoComments';
import PhotoDelete from '../PhotoDelete';
import { 
  AuthorLink, 
  Container, 
  DetailsContainer, 
  DogAtrributes, 
  ImgContainer } 
from './styles'

const PhotoDetail = ({data}) => {
  const user = useContext(AuthContext);
  const { photo, comments } = data;

  return (
    <Container>
      <ImgContainer>
        <ImageLoad src={photo.src} alt={photo.title}/>
      </ImgContainer>
      <DetailsContainer>
        <div>
          <AuthorLink>
            {user.data && user.data.username === photo.author ? 
              <PhotoDelete id={photo.id} /> 
            :
              <Link to={`/users/profile/${photo.author}`}>@{photo.author}</Link>
            }
            <span>{photo.acessos}</span>
          </AuthorLink>
          
          <h1>
            <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
          </h1>

          <DogAtrributes>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade > 1 ? 'anos' : 'ano'}</li>
          </DogAtrributes>
        </div>
      </DetailsContainer>
      
      <PhotoComments id={photo.id} comments={comments}/>
    </Container>
  )
}

export default PhotoDetail
