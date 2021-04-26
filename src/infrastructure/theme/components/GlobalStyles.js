import styled, { createGlobalStyle } from 'styled-components';
import splash from '../../../assets/splash.png';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: box-model;
		margin: 0;
		padding: 0;
	}

  body {
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
	grid-template-rows: 56px 80vh;
    margin: 0 auto;
    
  }

  .title{
    background-color: transparent;
    color: ##356859;
  }

  .subtitle{
    color: ${({ theme }) => theme.colors.body};     
  }

  .list-item{
	color: ${({ theme }) => theme.colors.text};
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
	grid-column: 2;
	padding: 8rem 4rem 4rem 4rem;
`;

export const RecipeFigure = styled.figure`
	height: 20vh;
	transform: scale(1.04) translateY(18px);
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 4rem;
`;

export const RecipeTitle = styled.h1`
	position: absolute;
	top: -42%;
	left: 50%;
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
	width: 400px;
	height: 256px;
	object-fit: cover;
	overflow: hidden;
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
	justify-content: space-between;
	padding: 4rem 1rem 0rem 1rem;
`;

export const InfoDiv = styled.div`
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin: 16px;
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
	padding: 2rem;
	font-size: 1.2rem;
	line-height: 1.2;
	background-image: linear-gradient(to right bottom, #356859, #fffbe6);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
`;

export const IngredientsUl = styled.ul`
	list-style: none;
	padding: 4px;
`;

export const IngredientsLi = styled.li`
	padding: 8px;
	display: block;
`;

export const DirectionsDiv = styled.div`
	padding: 3.2rem 2.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: linear-gradient(to right bottom, #356859, #fffbe6);
`;

export const AddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ResultsString = styled.h2`
	grid-column: 1;
	grid-row: 1;
	text-align: center;
	padding-top: 16px;
`;

export const ResultsDiv = styled.div`
	grid-column: 1;
	grid-row: 2;
	overflow-x: hidden;
	overflow-y: scroll;
	max-height: 80vh;
	list-style: none;
	margin: 0 auto;
	padding: 1rem 0 0 0;
	width: 30vw;

	& img {
		height: 80px;
		border-radius: 16px;
	}

	& a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		padding: 16px 0 16px 16px;
		margin: 8px 0;
		border-bottom: 2px solid #356859;
	}

	& svg {
		font-size: 3rem;
	}
`;

export const EmptyHeader = styled.h2`
	padding: 8px 48px;
	text-align: center;
	grid-column: 3;
	grid-row: 1;
`;

export const ResultTitle = styled.h2`
	display: inline-flex;
`;

export const ResultsList = styled.ul`
    overflow-y: scroll
	max-height: 95vh;
	list-style: none;
	margin: 0 auto;
	padding: 1rem 0 0 0;
`;

export const CommunityDiv = styled.div`
	max-height: 78vh;
	padding: 16px;
	overflow: auto;
	grid-column: 3;
	grid-row: 2;
`;

export const MessageDiv = styled.div`
	display: flex;
	align-items: center;

	& p {
		max-width: 500px;
		margin-bottom: 12px;
		line-height: 24px;
		padding: 10px 20px;
		border-radius: 16px;
		position: relative;
		color: black;
		text-align: center;
		background-color: white;
	}
	&.sent {
		flex-direction: row-reverse;

		& p {
			color: white;
			background: #356859;
			align-self: flex-end;
		}
	}

	& .received {
		&p {
			background: #fffbe6;
			color: black;
		}
	}
`;

export const ChatForm = styled.form`
	display: inline-flex;
	align-items: center;
	width: 100%;
`;

export const AvatarImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin: 2px 5px;
`;

export const AvatarDiv = styled.div`
	margin: 2px 5px;
	display: inline;
`;
