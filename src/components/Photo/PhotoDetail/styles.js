import styled from "styled-components";
import VisualizacaoBlackIcon from '../../../assets/visualizacao-black.svg';

export const ImgContainer = styled.div`
  grid-row: 1/4;

  @media(max-width: 64rem) {
    grid-row: 1;
  }
`;

export const DetailsContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const Container = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: .2rem;
  background-color: #FFF;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(.8);
  animation: scaleUp .3s forwards;

  @media(max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;

export const AuthorLink = styled.p`
  opacity: .5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a:hover {
    text-decoration: underline;
  }

  & > span::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: .5rem;
    background: url(${VisualizacaoBlackIcon});
  }
`

export const DogAtrributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  & > li {
    margin-right: 2rem;
  }

  & > li::before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: .5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;