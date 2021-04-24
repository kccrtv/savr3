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
	IngredientsLi,
	DirectionsDiv,
	AddButton,
} from '../../../infrastructure/theme/components/GlobalStyles';

function RecipeOverview(props) {
	let ingredientsArray = props.ingredients;
	// console.log('ia0', ingredientsArray[0]);

	return (
		<RecipeDiv>
			<RecipeFigure>
				<RecipeTitle>
					<RecipeSpan>{props.title}</RecipeSpan>
				</RecipeTitle>

				{/* <RecipeImg image={props.image}> */}
				<RecipeImg src={props.image} alt='recipe' />
				{/* </RecipeImg> */}

				{/* <HeartButton>
					<FavoriteBorderIcon />
				</HeartButton> */}
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
					<>
						<ServingsButton>-</ServingsButton>
						<ServingsButton>+</ServingsButton>
					</>
				</InfoDiv>
			</DetailsDiv>
			<IngredientsDiv>
				<h3>Ingredients</h3>
				<IngredientsUl>
					{ingredientsArray &&
						ingredientsArray[0].forEach((ing) => {
							return <IngredientsLi>{ing}</IngredientsLi>;
						})}
				</IngredientsUl>
			</IngredientsDiv>

			<DirectionsDiv>
				<h2>Steps</h2>
				<RecipeP>
					Find the recipe details at:{' '}
					<a href={props.sourceUrl}>{props.publisher}</a>
				</RecipeP>
			</DirectionsDiv>
		</RecipeDiv>
	);
}

export default RecipeOverview;
