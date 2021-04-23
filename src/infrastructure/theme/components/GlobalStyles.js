import styled, { createGlobalStyle } from 'styled-components';
import splash from '../../../assets/splash.png';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: box-model;
		margin: 0;
		padding: 0;
	}

  body {
    // overflow: hidden;
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Open Sans', sans-serif;
    transition: all 0.50s linear;
    font-weight: ${(props) => props.weight || '400'};
    margin: 0;
    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(251,201,114,0.34217436974789917) 100%);
  }

  span {
    
    font-family: 'Berkshire Swash', cursive;
    // color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.body};
  }

   h1, h2, h3, h4, h5, h6 {
    font-family: 'Berkshire Swash', cursive;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  a.menu{
    text-decoration: none;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }

  #home {
    display: grid;
    grid-template-columns: fit-content(30%) 1.2fr  0.8fr;
    margin: 0 auto;
    
  }

  #title{
    background-color: transparent;
    //  color: ${({ theme }) => theme.colors.text};
    color: ##356859;
  }

  #subtitle{
    color: ${({ theme }) => theme.colors.body};     
  }

  .results {
   
    display: grid;
   grid-template-columns: 200px 16px 200px auto;
   grid-template-rows: repeat(4, 24px 16px 320px);
   grid-column: 1/2;
  }
  
  .pagination {
    
    
    display: grid;
    grid-row: 1 / 2;
    grid-column: 1 / 5;
    margin: 8px auto;
  }

  .pagination button {
    font-family: 'Open Sans', sans-serif;
color: ${({ theme }) => theme.colors.text};
  }

  .column-1 {
    grid-row-start: 3;
    grid-column-start: 1;
  }

  .column-2 {
    grid-row-start: 3;
    grid-column-start: 2;
  }

  .heart {
    color: ${({ theme }) => theme.colors.button.text};
    border: none;
	  background-color: transparent;
	  float: right;
    padding: 0;
    margin: 0;
    opacity: 0.8;
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

export const RecipeDiv = styled.div`
	max-height: 95vh;
	padding: 16px;
	width: 35vw;
`;

export const RecipeFigure = styled.figure`
	height: 20vh;
	// position: relative;
	transform: scale(1.04) translateY(-1px);
	// transform-origin: top;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const RecipeTitle = styled.h1`
	position: absolute;
	bottom: 0;
	left: 48%;
	transform: translate(-50%, 20%) skewY(-6deg);
	color: #fff;
	font-weight: 700;
	font-size: 1.65rem;
	width: 90%;
	line-height: 1.95;
	text-align: center;
`;
export const RecipeSpan = styled.span`
	padding: 1.3rem 1rem;
	background-image: linear-gradient(to right bottom, #356859, #fffbe6);
`;
export const RecipeP = styled.p`
	padding: 4px;
	font-size: 1.2rem;
`;
export const RecipeImg = styled.img`
	border-radius: 16px;
	width: 94%;
`;
export const ServingsButton = styled.button`
	border-radius: 50%;
	width: 2.2rem;
	font-weight: 700;
	padding: 8px;
	margin: 4px 2px;
`;
export const DetailsDiv = styled.div`
	display: flex;
	align-items: center;
	// padding: 8rem 3rem 3rem 3rem;
	padding: 6rem 1rem 1rem 1rem;
`;
export const InfoDiv = styled.div`
	font-size: 1.5rem;
	// text-transform: uppercase;
	display: flex;
	align-items: center;

	&:not(:last-child) {
		margin: 16px;
	}
`;
export const HeartButton = styled.button`
	font-size: 2rem;
	border: none;
	background-color: transparent;
	padding: 0;
	margin: 2px;
	opacity: 0.8;
`;
export const IngredientsDiv = styled.div`
	padding: 4rem 5rem;
	font-size: 1.5rem;
	line-height: 1.4;
	// background-color: #f2efee;
	background-image: linear-gradient(to right bottom, #356859, #fffbe6);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	// transform: translate(-50%, 20%) skewY(-6deg);
`;
export const IngredientsUl = styled.ul`
	list-style: none;
	padding: 4px;

	& li {
		padding: 8px;
	}
`;
export const DirectionsDiv = styled.div`
	padding: 4rem 5rem;
	// padding-bottom: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const AddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
`;
