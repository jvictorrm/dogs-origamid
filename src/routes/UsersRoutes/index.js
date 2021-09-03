import React, { useContext } from 'react';
import { Container, Content } from './styles';
import UserHeader from '../../components/User/UserHeader';
import Feed from '../../pages/Users/Feed';
import UserPhotoPost from '../../pages/Users/UserPhotoPost';
import UserProfile from '../../pages/Users/UserProfile';
import UserStats from '../../pages/Users/UserStats';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import NotFound from '../../pages/Error/404';
import Head from '../../components/Head';

const UserRoutes = () => {
  const {data} = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <Head title="Minha conta" />
        <UserHeader/>
        <Routes>        
          <Route path="/" element={<Feed userId={data.id}/>} />
          <Route path="photo-post" element={<UserPhotoPost/>} />
          <Route path="profile/:username" element={<UserProfile/>} />
          <Route path="stats" element={<UserStats/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Content>
    </Container>
  )
}

export default UserRoutes
