import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ReactComponent as MinhasFotosIcon } from '../../../assets/feed.svg';
import { ReactComponent as EstatisticasIcon } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddFotoIcon } from '../../../assets/adicionar.svg';
import { ReactComponent as SairIcon } from '../../../assets/sair.svg';
import { Nav, activedLink, MenuHamburguer } from './styles';
import useMedia from '../../../hooks/useMedia';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const { signIn } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && 
        <MenuHamburguer 
          aria-label="Menu" 
          className={mobileMenu && "actived"} 
          onClick={() => setMobileMenu(!mobileMenu)}/>
      }

      <Nav className={`${mobile && "navMobile"} ${mobileMenu && "navMobileActived"}`}>
        <NavLink to="/users" end activeStyle={activedLink}>
          <MinhasFotosIcon/>
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/users/stats" activeStyle={activedLink}>
          <EstatisticasIcon/>
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/users/photo-post" activeStyle={activedLink}>
          <AddFotoIcon/>
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={signIn}>
          <SairIcon/>
          {mobile && 'Sair'}
        </button>
      </Nav>
    </>
  )
}

export default UserHeaderNav
