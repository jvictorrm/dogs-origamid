import React from 'react';
import { Container, Content } from './styles';
import Feed from '../Users/Feed';
import Head from '../../components/Head';

const Home = () => {
  return (
    <Container>
      <Content className="main-container">
        <Head title="Fotos" description="Home do site dogs, com o feed de fotos."/>
        <Feed/>
      </Content>
    </Container>
  )
};

export default Home;
