import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  overflow-x: hidden;

  /* grid container settings */
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
  'content'
  'footer'
  ;
`;