import styled, { createGlobalStyle } from 'styled-components';

import splash from '../../assets/splash.png';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: ${(props) => props.weight || '400'};
    box-sizing: box-model;
    margin: 0;
    background-image: linear-gradient(50.62deg, #FBC972 2.44%, rgba(255, 255, 255, 0) 80.52%);
    
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Berkshire Swash', cursive;
  }
`;

export const LightTheme = {
	fg: '#555556',
	// bg: 'linear-gradient(50.62deg, #FBC972 2.44%, rgba(255, 255, 255, 0) 80.52%)',
};

export const DarkTheme = {
	fg: '#FBC972',
	bg:
		'linear-gradient(50.62deg, #555556  2.44%, rgba(255, 255, 255, 0) 80.52%)',
};

export const SplashBG = styled.main`
	background-image: url(${splash});
	margin: 0 auto;
	text-align: center;
`;

export const H1 = styled.h1`
	color: ${(props) => props.theme.fg};
	background: ${(props) => props.theme.bg};
`;

export const LogoDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	height: 100vh;
`;

export const LogoButton = styled.button`
	background-color: transparent;
	border: none;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
