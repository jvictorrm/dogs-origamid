import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  & > a,
  & > button {
    background-color: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;
  }

  & > a:hover,
  & > a:focus,
  & > button:hover,
  & > button:focus {
    background-color: #FFF;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  & > a.active > svg > * {
    fill: #fb1;
  }

  /* MOBILE */
  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: #FFF;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    border-radius: .2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  &.navMobile > a,
  &.navMobile > button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: .5rem 0;
    cursor: pointer;
    box-shadow: none;
  }

  &.navMobile > a:hover svg > *,
  &.navMobile > button:hover svg > * {
    fill: #fb1;    
  }

  &.navMobile > button {
    border-bottom: none;
  }

  &.navMobile > svg {
    margin-right: 0.5rem;
  }

  &.navMobileActived {
    transition: .3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }
`;

export const activedLink = {
  background: '#FFF',
  boxShadow: '0 0 0 3px #fea',
  borderColor: '#fb1'
}

export const MenuHamburguer = styled.button`
  background-color: #eee;
  border-radius: .2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: .1s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;
  }

  &:focus,
  &:hover,
  &.actived {
    outline: none;
    background: #FFF;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &.actived::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;