import React from 'react';
import { Container, Content } from './styles';
import UserHeader from '../../components/User/UserHeader';
import PhotosDetail from '../../pages/Photos/PhotosDetail';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/Error/404';

const PhotoRoutes = () => {
  return (
    <Container>
      <Content>
        <UserHeader/>
        <Routes>        
          <Route path="/:id" element={<PhotosDetail/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Content>
    </Container>
  )
}

export default PhotoRoutes
