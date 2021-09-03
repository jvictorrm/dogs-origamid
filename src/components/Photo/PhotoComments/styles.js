import styled from "styled-components";

export const Container = styled.div`

`;

export const CommentsList = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;
  height: 19rem;

  & > li {
    margin-bottom: .5rem;
    line-height: 1.2;
  }
`;