import React from 'react';
import styled from 'styled-components';
import TimerIcon from '@material-ui/icons/Timer';
import { Timer } from '@material-ui/icons';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const RecipeDiv = styled.div`
	max-height: 95vh;
	padding: 16px;
	width: 35vw;
`;

const RecipeFigure = styled.figure`
	height: 20vh;
	// position: relative;
	transform: scale(1.04) translateY(-1px);
	// transform-origin: top;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const RecipeTitle = styled.h1`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 20%) skewY(-6deg);
	color: #fff;
	font-weight: 700;
	font-size: 2.65rem;
	// width: 70%;
	line-height: 1.95;
	text-align: center;
`;

const RecipeSpan = styled.span`
	padding: 1.3rem 1rem;
	background-image: linear-gradient(to right bottom, #356859, #fffbe6);
`;

const RecipeP = styled.p`
	padding: 4px;
	font-size: 1.2rem;
`;

const RecipeImg = styled.img`
	border-radius: 16px;
	width: 80%;
`;

const ServingsButton = styled.button`
	border-radius: 50%;
	width: 2.2rem;
	font-weight: 700;
	padding: 8px;
	margin: 4px 2px;
`;

const DetailsDiv = styled.div`
	display: flex;
	align-items: center;
	// padding: 8rem 3rem 3rem 3rem;
	padding: 6rem 1rem 1rem 1rem;
`;

const InfoDiv = styled.div`
	font-size: 1.5rem;
	// text-transform: uppercase;
	display: flex;
	align-items: center;

	&:not(:last-child) {
		margin: 16px;
	}
`;

// const BodySpan = styled.span`
// 	font-family: 'Open Sans', sans-serif;
// `;

const HeartButton = styled.button`
	// font-size: 2rem;
	border: none;
	background-color: transparent;
	padding: 0;
	margin: 0;
	opacity: 0.8;
`;

const IngredientsDiv = styled.div`
	padding: 4rem 5rem;
	font-size: 1.5rem;
	line-height: 1.4;
	background-color: #f2efee;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 16px;
`;

const IngredientsUl = styled.ul`
	list-style: none;
	padding: 4px;

	& li {
		padding: 8px;
	}
`;

const DirectionsDiv = styled.div`
	padding: 4rem 5rem;
	// padding-bottom: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function RecipeOverview(props) {
	return (
		<RecipeDiv>
			<RecipeFigure>
				<RecipeTitle>
					<RecipeSpan>Recipe</RecipeSpan>
				</RecipeTitle>

				<RecipeImg
					src='http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg'
					alt='recipe'
				/>
				<HeartButton>
					<FavoriteBorderIcon />
				</HeartButton>
			</RecipeFigure>
			<DetailsDiv>
				<InfoDiv>
					<TimerIcon /> <RecipeP>60</RecipeP>
					<RecipeP>minutes</RecipeP>
				</InfoDiv>
				<InfoDiv>
					<GroupIcon />
					<RecipeP>4</RecipeP>
					<RecipeP>servings</RecipeP>
					<div>
						<ServingsButton>-</ServingsButton>
						<ServingsButton>+</ServingsButton>
					</div>
				</InfoDiv>
			</DetailsDiv>
			<IngredientsDiv>
				<h3>Ingredients</h3>
				<IngredientsUl>
					<li>thing</li>
					<li>thing</li>
					<li>thing</li>
					<li>thing</li>
				</IngredientsUl>
				<AddButton>
					<ShoppingCartIcon />
					Add to your list
				</AddButton>
			</IngredientsDiv>

			<DirectionsDiv>
				<h2>How to cook</h2>
				<RecipeP>Recipe link found here</RecipeP>
			</DirectionsDiv>
		</RecipeDiv>
	);
}

export default RecipeOverview;
