import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;

  /* label */
  & > label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
  }

  /* input */
  & > input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background: #eee;
    transition: .2s;
  }

  & > input:focus,
  & > input:hover {
    outline: none;
    border-color: #fb1;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }  

  /* error message */
  & > p {
    color: #f31;
    font-size: .875rem;
    margin-top: .25rem;
  }
`;