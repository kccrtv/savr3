import React from 'react';
import styled from 'styled-components';
import TimerIcon from '@material-ui/icons/Timer';
import GroupIcon from '@material-ui/icons/Group';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {
	RecipeDiv,
	RecipeFigure,
	RecipeTitle,
	RecipeSpan,
	RecipeP,
	RecipeImg,
	ServingsButton,
	DetailsDiv,
	InfoDiv,
	HeartButton,
	IngredientsDiv,
	IngredientsUl,
	DirectionsDiv,
	AddButton,
} from '../../../infrastructure/theme/components/GlobalStyles';

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
				{/* <AddButton>
					<ShoppingCartIcon />
					Add to your list
				</AddButton> */}
			</IngredientsDiv>

			<DirectionsDiv>
				<h2>How to cook</h2>
				<RecipeP>Recipe link found here</RecipeP>
			</DirectionsDiv>
		</RecipeDiv>
	);
}

export default RecipeOverview;
