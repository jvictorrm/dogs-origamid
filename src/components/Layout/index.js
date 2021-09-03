import React from 'react'
import { Container } from './styles';
import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';

const Layout = ({ children }) =>
  (
    <Container>
      <Header/>
      <MainContent>
        {children}
        <Footer/>
      </MainContent>
    </Container>
  );

export default Layout;