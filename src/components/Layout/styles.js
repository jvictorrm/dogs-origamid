import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  min-width: 360px;

  /* grid container settings */
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
  'header'
  'main-content'
  ;
`;