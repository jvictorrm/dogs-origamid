import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  & > form > #img {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;

export const ImagePreview = styled.div`
  display: ${props => props.preview ? 'block' : 'none'};
  background-image: ${props => `url(${props.preview})` || 'none'};
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;