import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  top: 0px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  height: 4rem;
`;

export const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  margin: 0 2rem;
`;

export const LogoButton = styled(Link)`
  padding: 0.5rem;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: #333;
`;

export const UserButton = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: #333;
`;

