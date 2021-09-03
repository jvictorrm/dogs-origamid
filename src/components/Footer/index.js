import React from 'react';
import { Container } from './styles';
import {ReactComponent as LogoIcon} from '../../assets/dogs-footer.svg';

const Footer = () => {
  return (
    <Container>
      <LogoIcon />
      <p>Dogs. Alguns direitos reservados.</p>
    </Container>
  )
};

export default Footer;