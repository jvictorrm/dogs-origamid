import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: Helvetica, Arial, sans-serif;    
  }

  button {
    cursor: pointer;
  }
 
  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .animeToLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeToLeft .3s forwards;
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .main-container {
    margin-top: 2rem;
  }

  @keyframes animeToLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;