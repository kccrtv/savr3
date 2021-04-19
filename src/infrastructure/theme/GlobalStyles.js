import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    // font-family: ${({ theme }) => theme.font};
    font-family: 'Open Sans', sans-serif;
    transition: all 0.50s linear;
     font-weight: ${(props) => props.weight || '400'};
    box-sizing: box-model;
    margin: 0;
    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(251,201,114,0.34217436974789917) 100%);
  }

   h1, h2, h3, h4, h5, h6 {
    font-family: 'Berkshire Swash', cursive;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;
