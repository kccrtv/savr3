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
					<RecipeSpan>{props.title}</RecipeSpan>
				</RecipeTitle>

				<RecipeImg src={props.image} alt='recipe' />
				<HeartButton>
					<FavoriteBorderIcon />
				</HeartButton>
			</RecipeFigure>
			<DetailsDiv>
				<InfoDiv>
					<TimerIcon /> <RecipeP>{props.cookingTime}</RecipeP>
					<RecipeP>minutes</RecipeP>
				</InfoDiv>
				<InfoDiv>
					<GroupIcon />
					<RecipeP>{props.servings}</RecipeP>
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
					<p>{props.ingredients}</p>
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
				<RecipeP>
					Recipe link found here<span>{props.publisher}</span>
				</RecipeP>
				<a>{props.sourceUrl}</a>
			</DirectionsDiv>
		</RecipeDiv>
	);
}

export default RecipeOverview;
