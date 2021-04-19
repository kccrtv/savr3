import styled, { createGlobalStyle } from 'styled-components';
import splash from '../../assets/splash.png';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: box-model;
		margin: 0;
		padding: 0;
	}

	body {
    font-family: 'Open Sans', sans-serif;
    font-weight: ${(props) => props.weight || '400'};
    background-image: linear-gradient(50.62deg, #FBC972 2.44%, rgba(255, 255, 255, 0) 80.52%);
    }
	
	h1, h2, h3, h4, h5, h6 {
    font-family: 'Berkshire Swash', cursive;
  	}

	a {
    color: #AD7D00;
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
    background-color: #FFB800;
    color: #555556;
    
  }

  button.btn {
    background-color: #FFB800;
    color: #555556;
  }

`;

export const SplashBG = styled.main`
	background-image: url(${splash});
	opacity: ${(props) => props.opacity || '1'};
	margin: 0 auto;
	text-align: center;
	height: 100vh;
`;

export const LogoDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	height: ${(props) => props.height || '100vh'};
`;

export const LogoButton = styled.button`
	background-color: transparent;
	border: none;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const LogoImg = styled.img`
	max-height: 20vh;
`;
