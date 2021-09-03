import React, { useContext } from 'react';
import { 
  Container, 
  LoginButton, 
  LogoButton, 
  NavigationBar,
  UserButton } from './styles';
import {ReactComponent as Logo} from '../../assets/dogs.svg';
import {AiOutlineUser} from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const { data } = useContext(AuthContext);

  return (
    <Container>
      <NavigationBar>
        <LogoButton to="/" aria-label="Dogs - Home">
          <Logo />
        </LogoButton>

        {data ? 
          <div>
            <UserButton to="/users">
              {data.nome}
              <AiOutlineUser size={26} style={{ marginLeft: 5 }}/>            
            </UserButton>
          </div>
        : 
          <LoginButton to="/accounts/signin">
            Login / Criar
            <AiOutlineUser size={26} style={{ marginLeft: 5 }}/>
          </LoginButton>
        }        

      </NavigationBar>
    </Container>
  )
};

export default Header;