import React from 'react';
import styled from 'styled-components';

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
`;

const RecipeTitle = styled.h1`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 20%) skewY(-6deg);
	color: #fff;
	font-weight: 700;
	font-size: 2.75rem;
	// text-transform: uppercase;
	width: 70%;
	line-height: 1.95;
	text-align: center;
`;

const RecipeSpan = styled.span`
	padding: 1.3rem 2rem;
	background-image: linear-gradient(to right bottom, #4a927d, #fffbe6);
`;

const RecipeImg = styled.img`
	border-radius: 16px;
	width: 70%;
	// width: 100%;
`;

const DetailsDiv = styled.div`
	display: flex;
	align-items: center;
	// padding: 8rem 3rem 3rem 3rem;
	padding: 3rem 1rem;
`;

const InfoDiv = styled.div`
	font-size: 1.5rem;
	// text-transform: uppercase;
	display: flex;
	align-items: center;

	&:not(:last-child) {
		margin-right: 4rem;
	}
`;

const IngredientsDiv = styled.div`
	// padding: 4rem 5rem;
	font-size: 1.5rem;
	line-height: 1.4;
	background-color: #f2efee;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DirectionsDiv = styled.div`
	// padding: 4rem;
	// padding-bottom: 5rem;
	display: flex;
	flex-direction: column;
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
			</RecipeFigure>
			<DetailsDiv>
				<InfoDiv>
					<svg>svg</svg>
					<span>60</span>
					<span>minutes</span>
				</InfoDiv>
				<InfoDiv>
					<svg>icon</svg>
					<span>4</span>
					<span>servings</span>
					<div>
						<button>-</button>
						<button>+</button>
					</div>
				</InfoDiv>
			</DetailsDiv>
			<IngredientsDiv>
				<ul>list</ul>
				<button>add</button>
			</IngredientsDiv>

			<DirectionsDiv>
				<h2>How to cook</h2>
				<p>Recipe link found here</p>
			</DirectionsDiv>
		</RecipeDiv>
	);
}

export default RecipeOverview;
