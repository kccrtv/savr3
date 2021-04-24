import styled, { createGlobalStyle } from 'styled-components';
import splash from '../../../assets/splash.png';

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
	height: 100vh;
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
    display: block;
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

export const SplashBG = styled.div`
	background-image: url(${splash});
	opacity: ${(props) => props.opacity || '1'};
	text-align: center;
	height: 100vh;
	width: 70vw;
	position: absolute;
	left: 0;
`;

export const RightSide = styled.div`
	width: 30vw;
	position: absolute;
	right: 0;
	font-family: 'Open Sans', sans-serif;
	text-align: center;
	height: 100vh;
	margin: 0 auto;
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
	text-decoration: none;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const LogoImg = styled.img`
	padding: 14rem 3rem 3rem 3rem;
	margin: 0 auto;

	&.medium-logo {
		padding: 0;
		height: 20vh;
	}
`;

export const GoogleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	font-weight: 700;
	margin: 32px auto;

	& .g-logo {
		padding: 0 8px 0 0;
	}
`;

export const SignUpButton = styled.button`
	color: #fff;
	background-color: #ad7d00;
	width: 65%;
	margin: 0 auto 32px;
`;

export const LogInP = styled.p`
	display: inline-block;
`;

export const LogInSpan = styled.span`
	padding: 0 0 0 8px;
`;
