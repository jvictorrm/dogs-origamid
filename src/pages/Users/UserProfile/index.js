import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../../../components/Head';
import Title from '../../../components/Title';
import Feed from '../Feed';
import { Container } from './styles';

const UserProfile = () => {
  const { username } = useParams();

  return (
    <Container className="container">
      <Head title={username} />
      <Title>{username}</Title>
      <Feed user={username}/>
    </Container>
  )
}

export default UserProfile
