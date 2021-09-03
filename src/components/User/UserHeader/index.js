import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../../Title';
import UserHeaderNav from '../UserHeaderNav';
import { Header } from './styles';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    let titleTmp = '';
    switch (location.pathname) {
      case '/users/stats':
        titleTmp = 'Estatísticas'
        break;
      case '/users/photo-post':
          titleTmp = 'Poste sua Foto'
          break;
      case '/users':
        titleTmp = 'Minha Conta'
        break;
      default:
        break;
    }
    
    setTitle(titleTmp);
  }, [location])

  return (
    <Header>
      <Title>{title}</Title>
      <UserHeaderNav/>
    </Header>
  )
}

export default UserHeader
