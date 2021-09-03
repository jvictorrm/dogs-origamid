import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const LoadingContainer = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  padding-left: 5px;
  background-color: rgba(#fff, #fff, #fff, .5);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;