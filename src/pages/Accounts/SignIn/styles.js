import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const PasswordForgotLink = styled(Link)`
  display: inline-block;
  color: #667;
  padding: .5rem 0;
  line-height: 1;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;    
  }
`;

export const RegisterContainer = styled.div`
  margin-top: 4rem;

  & > p {
    margin: 2rem 0;
  }

  & > h2 {
    font-family: 'Spectral', georgia;
    line-height: 1;
    font-size: 2rem;
  }

  & > h2::after {
    content: '';
    display: block;
    background-color: #ddd;
    height: .5rem;
    width: 3rem;
    border-radius: .2rem;
  }  
`;

export const RegisterLink = styled(Link)`
  font-size: 1rem;
  border: none;
  border-radius: .4rem;
  background-color: #fb1;
  color: #764701;
  padding: .8rem 1.2rem;
  box-sizing: border-box;
  transition: .1s;
  min-width: 8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }  
`;