import styled from "styled-components";
import VisualizacaoIcon from '../../../assets/visualizacao.svg';

export const ViewCounter = styled.span`
  display: none;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .3);
  color: #FFF;
  grid-area: 1 / 1;

  &::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: .25rem;
    background: url(${VisualizacaoIcon}) no-repeat;
  }
`;

export const PhotoItem = styled.li`
  display: grid;
  border-radius: .2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  & > div {
    grid-area: 1 / 1;
  }

  &:hover > ${ViewCounter} {
    display: flex;
  }
`;
